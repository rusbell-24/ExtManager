import Logo from "/assets/images/logo.svg";
import LogoDark from "/assets/images/logo-dark.svg";
import iconMoon from "/assets/images/icon-moon.svg";
import iconSun from "/assets/images/icon-sun.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("dark") || "false");
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark", String(isDarkMode));
  }, [isDarkMode]);

  const handleClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header
      className="flex items-center justify-between 
      bg-Neutral-0 h-[66px] px-3 py-2 rounded-2xl mb-6 dark:bg-Neutral-800 "
    >
      <img src={!isDarkMode ? Logo : LogoDark} alt="Logo" />
      <button
        className="bg-Neutral-100 size-[50px] rounded-2xl grid place-content-center
        cursor-pointer hover:bg-Neutral-200 dark:bg-Neutral-600 dark:hover:bg-Neutral-700"
        onClick={handleClick}
        aria-label="Toggle dark mode"
      >
        <img src={isDarkMode ? iconSun : iconMoon} alt="Icon Moon" />
      </button>
    </header>
  );
};

export default Header;
