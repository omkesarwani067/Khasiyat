import React, { useEffect, useState } from "react";
import "./Provide.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const signatureImages = [
  { src: require("../assets/provide1.png"), alt: "Premium pure veg dining experience at Khaasiyat, Pahalgam" },
  { src: require("../assets/provide2.png"), alt: "Banquet and private event setup at Khaasiyat restaurant" },
  { src: require("../assets/provide3.png"), alt: "Khaasiyat team delivering food to hotel rooms in Pahalgam" },
];

const Provide = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === signatureImages.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? signatureImages.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="signature">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="signature-content">

              {/* TAG */}
              <span className="signature-tag">
                WHAT WE PROVIDE
              </span>

              {/* HEADING */}
              <h2 className="signature-heading">
                Enjoy Premium Dining Experience
              </h2>

              {/* BOXES */}
              <div className="provide-boxes">

                <div className="provide-box">
                  <span>1</span>
                  <h4>Premium Pure Veg and Jain Food</h4>
                </div>

                <div className="provide-box">
                  <span>2</span>
                  <h4>Banquet and Private Parties</h4>
                </div>

                <div className="provide-box">
                  <span>3</span>
                  <h4>Delivery to your Hotel Rooms</h4>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-1 order-lg-2">
            <div className="signature-image-wrapper">

              {/* SLIDER TRACK */}
              <div
                className="signature-slider"
                style={{
                  transform: `translateX(-${currentImage * 100}%)`,
                }}
              >
                {signatureImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="signature-image"
                  />
                ))}
              </div>

              {/* LEFT ARROW */}
              <button
                className="signature-arrow signature-arrow-left"
                onClick={prevSlide}
              >
                <FaChevronLeft />
              </button>

              {/* RIGHT ARROW */}
              <button
                className="signature-arrow signature-arrow-right"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>

              {/* DOTS */}
              <div className="signature-dots">
                {signatureImages.map((_, index) => (
                  <span
                    key={index}
                    className={`signature-dot ${
                      index === currentImage ? "active-dot" : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Provide;