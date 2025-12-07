import React from "react";
import footerImg from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <hr className="footer-hr" />

      <div className="footer-social">
        <a
          href="https://wa.me/918767062808"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <i className="ri-whatsapp-fill"></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kaledatta2008@gmail.com&su=Enquiry%20from%20website&body=Hello%20SK%20GLOBAL%20EXIM"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon email"
        >
          <i className="ri-mail-fill"></i>
        </a>

        <a
          href="https://instagram.com/skglobalexim"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <i className="ri-instagram-fill"></i>
        </a>
        <a
          href="tel:+918767062808"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon tel"
        >
          <i class="fas fa-phone-alt"></i>
        </a>
      </div>

      <div className="footer-links">
        <small>
          Copyright &copy; 2026 SK GLOBAL EXIM. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
