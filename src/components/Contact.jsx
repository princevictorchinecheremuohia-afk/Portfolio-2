import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mnnglgkn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-xl mx-auto px-3">
        <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">
          Contact Me
        </h2>

        <form
          action=""
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 outline-0 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 outline-0 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              name="phone"
              className="w-full border border-gray-300 outline-0 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              className="w-full border border-gray-300 outline-0 rounded-md p-2 h-24 focus:ring-2 focus:ring-indigo-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 p-3 rounded-md font-medium transition duration-200 ${
              loading
                ? "bg-indigo-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
            }`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {error && (
            <p
              className={`text-red-500 text-center font-medium mt-3 transition-opacity duration-700 ${
                error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {error}
            </p>
          )}

          {status && (
            <p
              className={`text-green-600 text-center font-medium mt-3 transition-opacity duration-700 ${
                status ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
