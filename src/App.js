import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import preloadDish from "./assets/pre-loader.png";

import "./App.css";
import FloatingButtons from "./components/FloatingButtons";

const PRELOADER_MS = 1800;

// Skip the preloader for the prerender bot (puppeteer sets navigator.webdriver)
// and for repeat views within the same browser session.
function shouldShowPreloader() {
  if (typeof navigator !== "undefined" && navigator.webdriver) return false;
  try {
    if (sessionStorage.getItem("khaasiyat_preloaded")) return false;
  } catch (e) {
    /* storage blocked: just show it */
  }
  return true;
}

function App() {
  const [loading, setLoading] = useState(shouldShowPreloader);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("khaasiyat_preloaded", "1");
      } catch (e) {
        /* ignore */
      }
    }, PRELOADER_MS);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {/* PAGE CONTENT: always in the DOM so crawlers and the prerender see it */}
      <div className="App">
        <Navbar />
        <FloatingButtons />
        <Home />
        <Footer />
      </div>

      {/* PRELOADER: visual overlay only */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="preloader"
            style={{ position: "fixed", inset: 0, zIndex: 99999 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            {/* DISH IMAGE */}
            <div className="dish-image-wrapper">
              {/* STEAM */}
              <span className="steam steam1"></span>
              <span className="steam steam2"></span>
              <span className="steam steam3"></span>

              {/* IMAGE */}
              <motion.img
                src={preloadDish}
                alt=""
                className="preloader-dish-img"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* BRAND NAME (div, not h1: the real H1 lives in HomeBanner) */}
            <motion.div
              className="brand-name"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              KHAASIYAT
            </motion.div>

            {/* TAGLINE */}
            <motion.p
              className="brand-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Where Every Bite &amp; Sip Feels Special
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;