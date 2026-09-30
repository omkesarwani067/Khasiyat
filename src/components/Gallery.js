import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";

const galleryImages = [
  { src: require("../assets/cafe/khasiyat front1.jpeg"), alt: "Khaasiyat restaurant exterior with mountain view, Pahalgam" },
  { src: require("../assets/cafe/khasiyat front2.jpeg"), alt: "Khaasiyat restaurant front, popular pure veg dining in Pahalgam" },
  { src: require("../assets/food/food1.jpeg"), alt: "Freshly prepared vegetarian dish served at Khaasiyat, Pahalgam" },
  { src: require("../assets/food/food2.jpeg"), alt: "Authentic Indian vegetarian platter at Khaasiyat restaurant" },
  { src: require("../assets/cafe/khasiyat front4.jpeg"), alt: "Dining area and ambience at Khaasiyat, Pahalgam" },
  { src: require("../assets/food/food3.jpeg"), alt: "Signature dish from Khaasiyat pure veg restaurant, Pahalgam" },
];

/**
 * Returns the position class for a slide given its offset from current.
 */
function getPositionClass(offset) {
  switch (offset) {
    case 0:
      return "center";
    case -1:
      return "left";
    case 1:
      return "right";
    case -2:
      return "far-left";
    case 2:
      return "far-right";
    default:
      return null;
  }
}

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  // popup state
  const [selectedIndex, setSelectedIndex] = useState(null);

  const total = galleryImages.length;

  const getOffset = useCallback(
    (idx) => {
      let raw = idx - current;

      if (raw > total / 2) raw -= total;
      if (raw < -total / 2) raw += total;

      return raw;
    },
    [current, total]
  );

  /* auto slider */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3000);

    return () => clearInterval(id);
  }, [total]);

  const prevSlide = () => {
    setCurrent((c) => (c - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((c) => (c + 1) % total);
  };

  /* popup navigation */
  const prevPopupImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? total - 1 : prev - 1
    );
  };

  const nextPopupImage = () => {
    setSelectedIndex((prev) =>
      prev === total - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h5 className="heading-tag">Food & Ambience</h5>
      <h2 className="page-heading">
          Discover the perfect blend of authentic flavours.
        </h2>
      </div>

      <div className="slider-container">
        {galleryImages.map((src, idx) => {
          const offset = getOffset(idx);
          const posClass = getPositionClass(offset);

          if (posClass === null) return null;

          return (
            <div
              key={idx}
              className={`slide ${posClass}`}
              onClick={() => {
                if (posClass === "center") {
                  setSelectedIndex(idx);
                } else if (
                  posClass === "left" ||
                  posClass === "far-left"
                ) {
                  prevSlide();
                } else {
                  nextSlide();
                }
              }}
            >
              <img src={src.src} alt={src.alt} />
            </div>
          );
        })}
      </div>

      {/* Popup */}
      {selectedIndex !== null && (
        <div
          className="gallery-popup"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="gallery-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="popup-close"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Left Arrow */}
            <button
              className="popup-arrow left-arrow"
              onClick={prevPopupImage}
            >
              ❮
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
            />

            {/* Right Arrow */}
            <button
              className="popup-arrow right-arrow"
              onClick={nextPopupImage}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;