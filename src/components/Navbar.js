import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
   {/* NAVBAR */}
<div className={`navbar ${showNav ? "show" : ""}`}>
  <Container fluid className="navbar-inner">

    {/* LOGO */}
    <div className="navbar-logo">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
      >
        <img src={require("../assets/khasiyat-logo.png")} alt="Khaasiyat Restaurant home" />
      </a>
    </div>

    {/* RIGHT SIDE (LINKS + SOCIAL) */}
    <div className="navbar-right">

      <div className="navbar-links">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("menu");
          }}
        >
          Menu
        </a>
        <a
          href="#reviews"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("reviews");
          }}
        >
          Reviews
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Stay Connected
        </a>
      </div>

      <div className="navbar-social">
        <a
          href="https://www.instagram.com/khaasiyatpahalgam/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575212754670"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/919103358985"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

    </div>

    {/* MENU ICON */}
    <div className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? "✕" : "☰"}
    </div>

  </Container>
</div>

      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("menu");
          }}
        >
          Menu
        </a>
        <a
          href="#reviews"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("reviews");
          }}
        >
          Reviews
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Stay Connected
        </a>

        <div className="sidebar-social">
          <a
            href="https://www.instagram.com/khaasiyatpahalgam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575212754670"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/919103358985"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;