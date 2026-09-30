import React, { useState, useEffect } from "react";
import { menuData, foodImages } from "./menuData";
import BuffetMenu from "./BuffetMenu";
import "./HomeMenu.css";

// import MenuPDF from "../assets/pdf/Khasiyat-Menu.pdf";
// import { FaDownload } from "react-icons/fa";

/* 🔥 11 IMAGES */




const HomeMenu = () => {

const [active, setActive] = useState("Breakfast");
const [currentImg, setCurrentImg] = useState(0);
const [fade, setFade] = useState(true);

const current = menuData[active];
const activeImages = foodImages[active] || [];

useEffect(() => {

  if (activeImages.length === 0) return;

  setCurrentImg(0);

  const interval = setInterval(() => {

    setFade(false);

    setTimeout(() => {
      setCurrentImg((prev) => (prev + 1) % activeImages.length);
      setFade(true);
    }, 600);

  }, 3500);

  return () => clearInterval(interval);

}, [active, activeImages.length]);




  const categories = Object.keys(menuData);

  return (
    <>
    <section className="HomeMenu">
   {/* <div className="HomeMenu-bg"></div> */}
      {/* HEADER */}
      <div className="HomeMenu-header">
        <span className="heading-tag">OUR MENU</span>
        <h2 className="page-heading">Delicious Food</h2>

        <div className="HomeMenu-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION */}
      <div className={`HomeMenu-section ${current.reverse ? "reverse" : ""}`}>

        {/* 🔥 IMAGE (SMOOTH) */}
<div className="HomeMenu-image-wrapper">

  {/* IMAGE */}
  <div className="HomeMenu-image">
    <img
      key={currentImg}
      src={activeImages[currentImg] || activeImages[0]}
      className={`menu-img ${fade ? "show" : ""}`}
      alt={`${active} at Khaasiyat pure veg restaurant, Pahalgam`}
    />
  </div>

  {/* DOWNLOAD MENU BUTTON */}
  {/* <a
    href={MenuPDF}
    target="_blank"
    rel="noopener noreferrer"
    className="download-menu-btn"
  >
    <FaDownload />
    Download  Menu
  </a> */}

</div>

        {/* CONTENT */}
<div className="HomeMenu-list">
  <h3 className="HomeMenu-title">{active}</h3>

<div className="HomeMenu-scroll">

  {current.items.map((item, i) => (

    item.heading ? (

      /* 🔥 CENTER HEADING */
      <div key={i} className="HomeMenu-middle-heading">
        <span></span>
        <h4>{item.heading}</h4>
        <span></span>
      </div>

    ) : (

      <div key={i} className="HomeMenu-item">

        <div className="HomeMenu-top">
          <h4>{item.name}</h4>

          <div className="HomeMenu-dots"></div>

          <span className="HomeMenu-price">
            {item.price}
          </span>
        </div>

        <p className="menu-descp">{item.desc}</p>

      </div>

    )

  ))}

</div>
</div>

      </div>
    </section>

    <BuffetMenu/>
    </>
  );
};

export default HomeMenu;