import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      className="
        flex h-9 w-9 items-center justify-center
        rounded-lg
        border border-slate-200
        bg-white
        text-slate-600
        transition
        hover:bg-slate-100
        dark:border-[#27312d]
        dark:bg-[#101614]
        dark:text-slate-300
        dark:hover:bg-[#17201c]
      "
    >
      {theme === "dark" ? (
        <Sun size={17} strokeWidth={1.8} />
      ) : (
        <Moon size={17} strokeWidth={1.8} />
      )}
    </button>
  );
}