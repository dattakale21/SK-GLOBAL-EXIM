import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "remixicon/fonts/remixicon.css";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [logoOpen, setLogoOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
   // 🔥 Auto-close menu when device rotates (mobile landscape fix)
  useEffect(() => {
    const closeOnRotate = () => {
      setIsMenuOpen(false);
      document.querySelector(".nav__menu")?.classList.remove("show-menu");
    };

    window.addEventListener("orientationchange", closeOnRotate);

    return () => window.removeEventListener("orientationchange", closeOnRotate);
  }, []);

  return (
    <header className="header">
      <nav className="nav">

        {/* LEFT: LOGO */}
        <div className="nav__logo" onClick={() => setLogoOpen(true)}>
          <img src={logo} alt="logo" />
        </div>

        {/* RIGHT: HAMBURGER */}
        <div 
          className="nav__toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <i className="ri-menu-line"></i>
          ) : (
            <i className="ri-close-line"></i>
          )}
        </div>

        {/* DROPDOWN MENU */}
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list">

            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/about-us"
                className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/products"
                className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}
                onClick={closeMenu}
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/documentation"
                className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}
                onClick={closeMenu}
              >
                Documentation
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>

      </nav>

      {/* FULL LOGO VIEW */}
      <Lightbox 
        open={logoOpen} 
        close={() => setLogoOpen(false)} 
        slides={[{ src: logo }]} 
      />
    </header>
  );
}
