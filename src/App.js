import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import preloadDish from "./assets/pre-loader.png";

import "./App.css";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">

          {/* DISH IMAGE */}
          <div className="dish-image-wrapper">

            {/* STEAM */}
            <span className="steam steam1"></span>
            <span className="steam steam2"></span>
            <span className="steam steam3"></span>

            {/* IMAGE */}
            <motion.img
              src={preloadDish}
              alt="Khaasiyat dish illustration"
              className="preloader-dish-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* BRAND NAME */}
          <motion.h1
            className="brand-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            KHAASIYAT
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            className="brand-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
          Where Every Bite & Sip Feels Special
          </motion.p>
        </div>
      ) : (
        <div className="App">
          <Navbar />
   <FloatingButtons />
          {/* HOME PAGE */}
          <Home />

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;