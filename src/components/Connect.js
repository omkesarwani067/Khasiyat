import React from "react";
import "./Connect.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Connect = () => {
  return (
    <section className="connect">
      <div className="container-fluid g-0">
        <div className="connect-row">

          {/* LEFT IMAGE */}
          <div className="connect-left">
            <img src={require("../assets/connect2.png")} alt="Stay connected with Khaasiyat restaurant in Pahalgam" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="connect-right">

            <div className="connect-heading">
              <h5 className="heading-tag">Connect With Us</h5>
              <h2 className="page-heading">Stay Connected With Khaasiyat</h2>
              <p className="page-description">
             Be the first to know about our special menus, exciting offers & memorable moments.
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="connect-social">
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

            {/* CALL */}
            <div className="connect-call">
         Reservations & Enquiries: <strong>+91 91033 58985</strong>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Connect;