import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="px-2 py-2 transition-all duration-100 text-white dark:text-gray-800 rounded-lg"
    >
      Toggle Mode
    </button>
  );
};

export default ThemeButton;
