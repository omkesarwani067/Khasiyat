import React from 'react'
import PageBanner from '../components/PageBanner'
import Connect from '../components/Connect'
import Service from '../components/Service'
import "./About.css"


const About = () => {
  return (
   <div className='about-page-bg'>
  <PageBanner title="About Us"  />

{/* about cafe */}
      <section className="about-page">
      <div className="about-page-container">

        {/* LEFT IMAGE */}
        <div className="about-page-left">
          <img src={require("../assets/cafe/khasiyat front1.jpeg")} alt="Khaasiyat pure veg restaurant exterior in Pahalgam" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-page-right">
          <h5 className="about-page-subtitle">20 YEARS OF EXPERIENCE</h5>

          <h2 className="about-page-title">
            Multi Cuisine with the Traditional Cuisine
          </h2>

          <p className="about-page-text">
            Rosoi is one of the most popular Restaurants with unique & special
            menu made by our passionate chefs with love and quality which can
            impress you.
          </p>

          <p className="about-page-call">
            Call for Reservation <strong>+01234 567 891</strong>
          </p>
        </div>

      </div>
    </section>

      {/* about cards  */}
    <section className="aboutcardssection">
      <div className="aboutcardssection-container">

        <div className="aboutcardssection-row">

          <div className="aboutcardssection-card">
            <img src={require("../assets/foodcard1.jpg")} alt="Vegetarian food served at Khaasiyat restaurant" />
          </div>

          <div className="aboutcardssection-card">
            <img src={require("../assets/foodcard2.jpg")} alt="Fresh ingredients used in Khaasiyat's pure veg dishes" />
          </div>

          <div className="aboutcardssection-card">
            <img src={require("../assets/foodcard3.jpg")} alt="Kashmiri cuisine specialties at Khaasiyat, Pahalgam" />
          </div>

          <div className="aboutcardssection-card">
            <img src={require("../assets/foodcard4.jpg")} alt="Desserts and sweets at Khaasiyat restaurant" />
          </div>

        </div>

      </div>
    </section>

   <Service/>

    <Connect/>
   </div>
  )
}

export default About