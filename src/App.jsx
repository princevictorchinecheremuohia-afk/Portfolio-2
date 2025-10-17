import { useState, useEffect } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeSwitcher from "./components/ThemeSwitcher";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // ✅ Apply the theme class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const projectData = [
    {
      title: "Skycast Weather App",
      description:
        "A responsive Weather App built with HTML, CSS, and JavaScript.",
      image: "https://source.unsplash.com/400x300/?web,design",
      link: "https://skycast-61pz.vercel.app/",
    },
    {
      title: "Todo App",
      description: "A simple task manager built with HTML, CSS and Javascript.",
      image: "https://source.unsplash.com/400x300/?code,app",
      link: "https://to-do-list-drab-nine.vercel.app/",
    },
    {
      title: "E-commerce UI",
      description:
        "A clean and modern product page design using Tailwind CSS. COMING SOON!!!",
      image: "https://source.unsplash.com/400x300/?ecommerce,store",
      link: "#",
    },
  ];

  const aboutMe = [
    {
      title: "About Me",
      description:
        "Hi, I’m Prince Victor, a passionate Front-End Developer who enjoys transforming creative ideas into functional, beautiful, and user-friendly websites. I specialize in React, Tailwind CSS, and JavaScript, crafting responsive designs that look great on any device. I’m driven by curiosity and the desire to build digital experiences that truly connect with people. When I’m not coding, I love exploring new technologies and refining my skills through personal projects.",
      image: "/me.jpeg",
    },
  ];

  return (
    <div className="transition-all duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Header name="My Portfolio" links={navLinks} />
      <main id="home" className="pt-24 p-10 text-center">
        <h2 className="text-4xl font-semibold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg opacity-90">
          I'm a passionate developer who loves building modern web experiences.
        </p>
        <ThemeSwitcher onThemeChange={handleThemeChange} currentTheme={theme} />
      </main>
      <About about={aboutMe} />
      <Projects projects={projectData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
