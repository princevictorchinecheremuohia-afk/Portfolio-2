import React from "react";

function About({ about }) {
  return (
    <section id="about" className="py-16 px-3 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <div className="max-w-6xl mx-auto md:flex md:justify-between md:gap-15">
        <p className="">{about[0].description}</p>
        <img
          src={about[0].image}
          alt={about[0].title}
          className="mt-4 w-200 h-140 md:w-600 md:h-150 rounded-md mx-auto mb-6 shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
export default About;
