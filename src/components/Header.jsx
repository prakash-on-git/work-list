import { useState, useEffect } from "react";
import Logo from "../assets/images.jpg";

export const Header = () => {
  // adding values(theme) in local storage
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");

  document.documentElement.classList.add(theme);

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  // end

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>Worklist</span>
        </div>
        <div className="themeSelector">
          <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
          <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
          <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
          <span onClick={() => setTheme("gradientOne")} className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"}></span>
          <span onClick={() => setTheme("gradientTwo")} className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"}></span>
        </div>
      </header>
    </>
  );
}
