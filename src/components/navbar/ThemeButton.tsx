import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkTheme = theme === "dark";
  return (
    <>
      <div
        className="cursor-pointer hover:scale-110 ease-in duration-300 text-xl hover:border-b"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        {isDarkTheme ? <BsSun /> : <FaMoon />}
      </div>
    </>
  );
};

export default ThemeButton;
