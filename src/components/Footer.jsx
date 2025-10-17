import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 relative">
      <div className="container mx-auto px-6 flex md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4">
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
