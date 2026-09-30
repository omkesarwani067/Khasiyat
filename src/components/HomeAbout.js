import React, { useState, useEffect } from "react";
import "./HomeAbout.css";

const images = [
  { src: require("../assets/cafe/khasiyat front1.jpeg"), alt: "Exterior of Khaasiyat pure veg restaurant in Pahalgam" },
  { src: require("../assets/cafe/khasiyat front2.jpeg"), alt: "Khaasiyat restaurant entrance with scenic Pahalgam backdrop" },
  { src: require("../assets/cafe/khasiyat front3.jpeg"), alt: "Khaasiyat dining area and outdoor seating in Pahalgam" },
  { src: require("../assets/cafe/khasiyat front4.jpeg"), alt: "Khaasiyat restaurant front view in Pahalgam valley" },
  { src: require("../assets/cafe/khasiyat front5.jpeg"), alt: "Khaasiyat restaurant ambience and decor, Pahalgam" },
  { src: require("../assets/cafe/khasiyat front6.jpeg"), alt: "Welcoming ambience at Khaasiyat, pure veg restaurant Pahalgam" },
  { src: require("../assets/cafe/khasiyat front7.jpeg"), alt: "Khaasiyat restaurant interior seating and dining space" },
];

const HomeAbout = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // ⬅️ match with animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="homeabout">
      <div className="homeabout-container">

        {/* LEFT IMAGE */}
        <div className="homeabout-left">
          <div className="image-wrapper">
            <img
              key={current} /* 🔥 important for re-animation */
              src={images[current].src}
              alt={images[current].alt}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
       <div className="homeabout-right">
  <span className="tag heading-tag">
    PURE VEG RESTAURANT IN PAHALGAM
  </span>

  <h2 className="title page-heading">
Where Great Food Meets Scenic Views


  </h2>

  <p className=" page-description">
 One of Pahalgam's leading multi-cuisine pure vegetarian restaurants, Khaasiyat offers a memorable dining experience for families, travellers, and food lovers seeking authentic flavours and warm hospitality.

 </p>

<p className=" page-description">
From rich North Indian delicacies and authentic South Indian favourites to flavourful Chinese dishes, tandoor specialties, Jain food options, and signature creations, every dish is thoughtfully prepared using quality ingredients and time-honoured recipes.
</p>
<p className=" page-description"> Recognised as a preferred Pure Veg Restaurant in Pahalgam, we bring together exceptional food, scenic surroundings, and attentive service to create moments worth remembering.</p>
  {/* <p className="contact">
    Reserve Your Table <strong>+91 91033 58985 | +91 91033 58905
</strong>
  </p> */}

{/* <a href="tel:++919103358985">
  <button className="menu-btn book-btn">
    Call Now
  </button>
</a> */}
<p className=" page-description">Fresh ingredients. Soulful flavours. Warm hospitality.
</p>
</div>

      </div>
    </section>
  );
};

export default HomeAbout;