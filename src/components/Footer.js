import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 - LOGO + DESC */}
        <div className="footer-col">
          <img
            src={require("../assets/khasiyat-logo.png")}
            className="footer-logo"
            alt="Khaasiyat Restaurant logo"
          />

          <p className="footer-desc">
            A perfect blend of taste and ambience. We serve delicious food
            with a warm and premium dining experience.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/khaasiyatpahalgam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61575212754670"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/919103358985"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div className="footer-col margin-col">
          <h4 className="footer-title">Quick Links</h4>

        <ul className="footer-links">
  <li>
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("home")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#menu"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("menu")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Menu
    </a>
  </li>

  <li>
    <a
      href="#reviews"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("reviews")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Reviews
    </a>
  </li>

  <li>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Contact
    </a>
  </li>
</ul>
        </div>

        {/* COLUMN 3 - ADDRESS */}
        <div className="footer-col margin-col">
          <h4 className="footer-title">Address</h4>

          <p className="footer-address">
          Main market, KP Rd,   <br />
           Opp. Petrol Pump, Pahalgam,<br />
           Jammu and Kashmir 192126 <br />
            +91 91033 58985
          </p>
        </div>

        {/* COLUMN 4 - MAP */}
        <div className="footer-col margin-col">
          <h4 className="footer-title">Location</h4>

          <div className="footer-map">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.2542565347712!2d75.31639087555864!3d34.01168397317227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f0053bdcf3f%3A0xe1733c1f8183a154!2sKhaasiyat!5e0!3m2!1sen!2sin!4v1778494209264!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Khaasiyat Location Map"
/>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 Khaasiyat. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;