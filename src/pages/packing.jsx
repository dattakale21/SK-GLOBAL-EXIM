import React, { useRef, useState } from "react";

// IMAGES
import packingvideo from "../assets/images/packingvideo.mp4";
import dashLine from "../assets/images/dash_line.png";

import img1 from "../assets/images/packing/1.png";
import img2 from "../assets/images/packing/2.png";
import img3 from "../assets/images/packing/3.png";
import img4 from "../assets/images/packing/4.png";
import img5 from "../assets/images/packing/5.png";
import img6 from "../assets/images/packing/6.png";
import img7 from "../assets/images/packing/7.png";
import img8 from "../assets/images/packing/8.png";
import img9 from "../assets/images/packing/9.png";
import img10 from "../assets/images/packing/10.png";
import img11 from "../assets/images/packing/11.png";
import img12 from "../assets/images/packing/12.png";
import img13 from "../assets/images/packing/13.png";
import img14 from "../assets/images/packing/14.png";
import img15 from "../assets/images/packing/15.png";
import img16 from "../assets/images/packing/16.png";
import img17 from "../assets/images/packing/17.png";
import img18 from "../assets/images/packing/18.png";
import img19 from "../assets/images/packing/19.png";
import img20 from "../assets/images/packing/20.png";
import img21 from "../assets/images/packing/21.png";
import img22 from "../assets/images/packing/22.png";
import img23 from "../assets/images/packing/23.png";
import img24 from "../assets/images/packing/24.png";
import img25 from "../assets/images/packing/25.png";
import img26 from "../assets/images/packing/26.png";
import img27 from "../assets/images/packing/27.png";
import img28 from "../assets/images/packing/28.png";
import img29 from "../assets/images/packing/29.png";
import img30 from "../assets/images/packing/30.png";
import img31 from "../assets/images/packing/31.png";
import img32 from "../assets/images/packing/32.png";
import img33 from "../assets/images/packing/33.png";
import img34 from "../assets/images/packing/34.png";
import img35 from "../assets/images/packing/35.png";
import img36 from "../assets/images/packing/36.png";
import img37 from "../assets/images/packing/37.jpg";
import img38 from "../assets/images/packing/38.jpg";
import img39 from "../assets/images/packing/39.jpg";
import img40 from "../assets/images/packing/40.jpg";
import img41 from "../assets/images/packing/41.jpg";
import img42 from "../assets/images/packing/42.jpg";
import img43 from "../assets/images/packing/43.png";
import img44 from "../assets/images/packing/44.png";
import img45 from "../assets/images/packing/45.png";
import img46 from "../assets/images/packing/46.png";
import img47 from "../assets/images/packing/47.png";
import img48 from "../assets/images/packing/48.png";
import img49 from "../assets/images/packing/49.png";
import img50 from "../assets/images/packing/50.png";
import img51 from "../assets/images/packing/51.png";
import img52 from "../assets/images/packing/52.png";
import img53 from "../assets/images/packing/53.png";
import img54 from "../assets/images/packing/54.png";
import img55 from "../assets/images/packing/55.png";
import img56 from "../assets/images/packing/56.jpg";
import img57 from "../assets/images/packing/57.jpg";
import img58 from "../assets/images/packing/58.jpg";
import img59 from "../assets/images/packing/59.jpg";
import img60 from "../assets/images/packing/60.jpg";
import img61 from "../assets/images/packing/61.jpg";

export default function Packing() {
  const videoRef = useRef(null);
  const [videoKey, setVideoKey] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,

    img10,
    img11,
    img12,
    img13,
    img14,
    img15,

    img6,
    img7,
    img8,
    img9,

    img16,
    img17,
    img18,
    img19,
    img20,

    img21,
    img22,
    img23,
    img24,
    img25,

    img26,
    img27,
    img28,
    img29,
    img30,

    img31,
    img32,
    img33,
    img34,
    img35,

    img36,
    img37,
    img38,
    img39,
    img40,

    img41,
    img42,
    img43,
    img44,
    img45,

    img46,
    img47,
    img48,
    img49,
    img50,

    img51,
    img52,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
  ];

  return (
    <div className="packing-page">
      {/* HERO */}
      <section className="grains-hero-video1">
        <video
          className="hero1-video"
          src={packingvideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay pack1">
          <h1>Packing Solutions</h1>
          <p>
            High-quality export packaging designed for safety and durability.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="grains-section">
        <h2 className="section-title">Our Packing Range</h2>
        <img src={dashLine} className="dash-line" />

        <div className="packing-grid">
          <div className="packing-card" onClick={() => setSelectedImage(img1)}>
            <img src={img1} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img2)}>
            <img src={img2} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img3)}>
            <img src={img3} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img4)}>
            <img src={img4} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img5)}>
            <img src={img5} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img10)}>
            <img src={img10} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img11)}>
            <img src={img11} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img12)}>
            <img src={img12} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img13)}>
            <img src={img13} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img14)}>
            <img src={img14} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img15)}>
            <img src={img15} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img16)}>
            <img src={img16} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img17)}>
            <img src={img17} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img18)}>
            <img src={img18} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img19)}>
            <img src={img19} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img20)}>
            <img src={img20} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img7)}>
            <img src={img7} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img22)}>
            <img src={img22} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img23)}>
            <img src={img23} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img24)}>
            <img src={img24} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img9)}>
            <img src={img9} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img25)}>
            <img src={img25} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img26)}>
            <img src={img26} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img27)}>
            <img src={img27} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img8)}>
            <img src={img8} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img21)}>
            <img src={img21} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img6)}>
            <img src={img6} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img28)}>
            <img src={img28} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img29)}>
            <img src={img29} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img30)}>
            <img src={img30} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img31)}>
            <img src={img31} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img32)}>
            <img src={img32} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img33)}>
            <img src={img33} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img34)}>
            <img src={img34} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img35)}>
            <img src={img35} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img36)}>
            <img src={img36} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img37)}>
            <img src={img37} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img38)}>
            <img src={img38} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img39)}>
            <img src={img39} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img40)}>
            <img src={img40} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img41)}>
            <img src={img41} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img42)}>
            <img src={img42} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img43)}>
            <img src={img43} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img44)}>
            <img src={img44} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img45)}>
            <img src={img45} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img46)}>
            <img src={img46} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img47)}>
            <img src={img47} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img48)}>
            <img src={img48} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img49)}>
            <img src={img49} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img50)}>
            <img src={img50} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img51)}>
            <img src={img51} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img52)}>
            <img src={img52} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img54)}>
            <img src={img54} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img55)}>
            <img src={img55} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img56)}>
            <img src={img56} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img57)}>
            <img src={img57} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img58)}>
            <img src={img58} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img59)}>
            <img src={img59} />
          </div>

          <div className="packing-card" onClick={() => setSelectedImage(img60)}>
            <img src={img60} />
          </div>
          <div className="packing-card" onClick={() => setSelectedImage(img61)}>
            <img src={img61} />
          </div>
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
