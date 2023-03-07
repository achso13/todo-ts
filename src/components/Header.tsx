import { useContext } from "react";
import IconSun from "../assets/icons/icon-sun.svg";
import IconMoon from "../assets/icons/icon-moon.svg";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="my-8 flex flex-row justify-between align-middle">
      <p className="text-5xl font-bold tracking-[20px] text-white">TODO</p>
      <button className="text-right" onClick={toggleDarkMode}>
        {darkMode ? (
          <img src={IconSun} alt="light-mode" className="w-8" />
        ) : (
          <img src={IconMoon} alt="dark-mode" className="w-8" />
        )}
      </button>
    </div>
  );
}
