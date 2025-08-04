import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false); // Close on nav click
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);

    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo" onClick={handleNavClick}>
        ThemeVerse
      </NavLink>


      <div className={`nav-toggle ${menuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleNavClick} className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/product" onClick={handleNavClick} className={({ isActive }) => (isActive ? "active" : "")}>
          Product
        </NavLink>
        <NavLink to="/contact" onClick={handleNavClick} className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="theme-switcher mobile-theme-switcher"
        >
          <option value="theme1">Minimalist</option>
          <option value="theme2">Professional</option>
          <option value="theme3">Playful</option>
        </select>
      </nav>

      <select
        value={theme}
        onChange={handleThemeChange}
        className="theme-switcher desktop-theme-switcher"
      >
        <option value="theme1">Minimalist</option>
        <option value="theme2">Professional</option>
        <option value="theme3">Playful</option>
      </select>
    </header>
  );
};

export default Header;
