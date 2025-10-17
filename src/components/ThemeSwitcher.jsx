import { Sun, Moon } from "lucide-react";

function ThemeSwitcher({ onThemeChange, currentTheme }) {
  return (
    <button
      onClick={onThemeChange}
      className="mt-6 mx-auto px-4 py-2 rounded-md flex items-center gap-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
    >
      {currentTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeSwitcher;
