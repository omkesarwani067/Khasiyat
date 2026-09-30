import React from "react";
import { motion } from "framer-motion";

import HomeBanner from "../components/HomeBanner";
import Menu from "../components/HomeMenu";
import "./Home.css";


import Testimonial from "../components/Testimonial";
import Connect from "../components/Connect";
import HomeAbout from "../components/HomeAbout";
import Gallery from "../components/Gallery";
import Provide  from "../components/Provide";
import Special from "../components/Special";
import Staff from "../components/Staff";
// import BookingForm from "../components/BookingForm";
// import WhyUS from "../components/WhyUS";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <>
      {/* ✅ HOME */}
      <motion.section
        id="home"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeBanner />
      </motion.section>

      {/* ✅ ABOUT */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeAbout />
      </motion.section>

                <motion.section
       
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <Provide/>
      </motion.section>
{/*  */}
       <motion.section
        id="quality"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Special />
      </motion.section>
{/*  */}
 {/* <motion.section
        id="quality"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhyUS />
           </motion.section> */}

      {/* ✅ MENU */}
  
      <motion.section
        id="menu"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Menu />
      </motion.section>

  <motion.section
        id="our-story"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Staff/>
      </motion.section>

      {/* ✅ REVIEWS */}
      <motion.section
        id="reviews"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span id="review" style={{ display: "none" }}></span>
        <Testimonial />
      </motion.section>

      {/* ✅ CONTACT */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span id="connect" style={{ display: "none" }}></span>
        <Connect />
      </motion.section>

      {/* ✅ GALLERY */}
      <motion.section
        id="gallery"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Gallery />
      </motion.section>
    </>
  );
};

export default Home;