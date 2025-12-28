import React, { useRef, useState, useEffect } from "react";
// import "./Grains.css";

// VIDEO
import heroVideo from "../assets/images/grains/grains-hero.mp4";
import lineImg from "../assets/images/line.png";
import dashLine from "../assets/images/dash_line.png";
// IMAGES
import toor from "../assets/images/grains/chanadal.png";
import chana from "../assets/images/grains/chana.webp";
import moong from "../assets/images/grains/moongdal.jpg";
import urad from "../assets/images/grains/whiteuditdal.png";
import chickpea from "../assets/images/grains/chunni.png";
import cottoncake from "../assets/images/grains/cottoncake.jpeg";
import futana from "../assets/images/grains/futanadal.png";
import greenvatana from "../assets/images/grains/greenvatana.jpg";
import roastedfutana from "../assets/images/grains/roastedfutana.jpg";

export default function Grains() {
  const videoRef = useRef(null);
const [videoKey, setVideoKey] = useState(0);
const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (e) {
        console.log("Autoplay blocked, retrying...");
      }
    };

    playVideo();
  }, [videoKey]);

  return (
    <div className="grains-page">

      {/* HERO VIDEO */}
      <section className="grains-hero-video">
      <video
  ref={videoRef}
  className="hero-video"
  src={heroVideo}
  muted
  playsInline
  autoPlay
  onEnded={(e) => {
    e.target.currentTime = 0;
    e.target.play();
  }}
/>

        <div className="hero-overlay">
          <h1>Grains, Pulses & Feed Products</h1>
          <p>
        Supplying quality-assured pulses, grains, and feed products sourced from trusted Indian mills, processed to meet buyer specifications, and delivered with consistency, reliability, and transparent trade practices.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="grains-section">
        <h2 className="section-title">Our Product Range</h2>
        <img src={dashLine} className="dash-line" />

       <div className="grains-grid">
  {[
    { img: toor, title: "Toor Dal", desc: "Premium quality pigeon peas with rich taste." },
    { img: chana, title: "Chana", desc: "High-protein split chickpeas ideal for daily cooking." },
    { img: moong, title: "Moong Dal", desc: "Light, nutritious and easy to digest green gram." },
    { img: urad, title: "Urad Dal", desc: "Rich flavor and perfect texture for traditional dishes." },
    { img: chickpea, title: "High Protein Chuni", desc: "High-protein feed ingredient supporting animal growth and nutrition." },
    { img: cottoncake, title: "Cotton Seed Cake", desc: "High-protein cattle feed for nutrition." },
    { img: futana, title: "Futana Dal", desc: "Roasted gram with crisp texture and rich taste." },
    { img: greenvatana, title: "Green Vatana", desc: "Fresh green peas suitable for food processing." },
    { img: roastedfutana, title: "Roasted Futana", desc: "Crunchy roasted gram, perfect for snacks." },
  ].map((item, index) => (
    <div
      className="grain-card"
      key={index}
      onClick={() => setSelectedImage(item.img)}
      style={{ cursor: "pointer" }}
    >
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ))}
</div>
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

      </section>
    </div>
  );
}
