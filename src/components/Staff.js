import React from "react";
import "./Staff.css";

const Staff = () => {
  return (
    <section id="staff" className="staff-section">
      <div className="staff-container">

        {/* LEFT COLOR BLOCK */}
        <div className="staff-left">
          <div className="staff-color-box ">
           <span className="staff-tag page-heading  ">
           Our Story & Vision

          </span>

          {/* <h2 className="staff-title page-heading">
      The Story Behind Khaasiyat

          </h2> */}

          <p className="staff-description page-description">
          Founded by Harish Kale, Khaasiyat was born from a vision to create a welcoming pure vegetarian dining destination for travellers and families visiting Pahalgam.
          </p>
<div>

   <p className="page-description" style={{color: "#f4c542"}}> Crafted By Skilled Chefs</p>
   <p className="page-description">Every dish is thoughtfully prepared by experienced chefs using quality ingredients, authentic recipes, and a passion for exceptional flavour.</p>
</div>
  
  <div>

   <p className="page-description" style={{color: "#f4c542"}}>Pure Veg & Jain Friendly</p>
   <p className="page-description">Enjoy a diverse multi-cuisine menu featuring North Indian, South Indian, Chinese, Tandoor specialties, and specially prepared Jain food options.
</p>
</div>
  

  <div>

   <p className="page-description" style={{color: "#f4c542"}}>Warm Hospitality & Scenic Dining</p>
   <p className="page-description"> From attentive service to beautiful surroundings, every experience at Khaasiyat is designed to make guests feel comfortable, valued, and at home.</p>
</div>
  
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="staff-right">
          <img src={require("../assets/Team/team1.jpeg")} alt="Khaasiyat restaurant team and founder, Pahalgam"/>
        </div>

      </div>
    </section>
  );
};

export default Staff;