import React from "react";
import footerImg from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <hr className="footer-hr" />

      <div className="footer-social">
        <a
          href="https://wa.me/918591948621"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <i className="ri-whatsapp-fill"></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@skglobalexim.com&su=Enquiry%20from%20website&body=Hello%20SK%20GLOBAL%20EXIM"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon email"
        >
          <i className="ri-mail-fill"></i>
        </a>

        <a
          href="https://www.instagram.com/skglobal_exim/?igsh=MXkyZTdoZ2NmZXVwcw%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <i className="ri-instagram-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sk-global-exim-4b600135b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <i className="ri-linkedin-fill"></i>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1GYUVQua8R/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <i className="ri-facebook-fill"></i>
        </a>
        <a
          href="tel:+91/8591948621"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon tel"
        >
        <i className="ri-phone-fill"></i>

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
