import React, { useRef, useState } from "react";


// Images
import dashLine from "../assets/images/dash_line.png";
import heroVideo from "../assets/images/powdervideo.mp4";

import byadagi from "../assets/images/powders/byagadi.png";
import coriander from "../assets/images/powders/coriander.png";
import curry from "../assets/images/powders/curry.png";
import garlic from "../assets/images/powders/garlic.png";
import ginger from "../assets/images/powders/ginger.jpg";
import kashmiri from "../assets/images/powders/kashmiri.png";
import moringa from "../assets/images/powders/moringa.png";
import onionflakes from "../assets/images/powders/onionflakes.jpg";
import pinkonion from "../assets/images/powders/pinkonion.png";
import salem from "../assets/images/powders/salem.png";
import whiteonion from "../assets/images/powders/whiteonion.png";
import guntur from "../assets/images/powders/guntur.png";

export default function Powders() {
     const videoRef = useRef(null);
    const [videoKey, setVideoKey] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="grains-page">
      {/* HERO SECTION */}
      <section className="grains-hero-video">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>Dehydrated Vegetable & Spice Powders</h1>
          <p>
            Premium quality dehydrated powders processed under controlled
            conditions to retain natural flavor, aroma, and nutrition.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
         <section className="grains-section powdersection">
        <h2 className="section-title">Our Dehydrated Range</h2>
        <img src={dashLine} className="dash-line" />

        <div className="grains-grid">
          {[
            { img: guntur, title: "Guntur Chilli Powder", desc: "High pungency chilli powder for bold spice flavor." },
            { img: coriander, title: "Coriander Powder", desc: "Aromatic coriander powder with natural freshness." },
            { img: curry, title: "Curry Leaf Powder", desc: "Rich in aroma and nutrients, perfect for seasoning." },
            { img: byadagi, title: "Byadagi Chilli Powder", desc: "Mild heat with rich red color." },
            { img: garlic, title: "Garlic Powder", desc: "Strong flavor and long shelf life." },
            { img: ginger, title: "Ginger Powder", desc: "Warm and spicy aroma." },
            { img: moringa, title: "Moringa Powder", desc: "Nutrient-rich superfood powder." },
            { img: kashmiri, title: "Kashmiri Chilli Powder", desc: "Bright color, low pungency." },
            { img: onionflakes, title: "Onion Flakes", desc: "Dehydrated flakes with long shelf life." },
            { img: pinkonion, title: "Pink Onion Powder", desc: "Sweet onion aroma." },
            { img: whiteonion, title: "White Onion Powder", desc: "Clean, mild flavor." },
            { img: salem, title: "Salem Turmeric Powder", desc: "High curcumin content." },
          ].map((item, index) => (
            <div
              key={index}
              className="grain-card"
              onClick={() => setSelectedImage(item.img)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

        {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
