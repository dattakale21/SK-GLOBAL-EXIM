import React from "react";
// import "./assets/css/style.css";

import { useNavigate } from "react-router-dom";
// IMAGES
import heroImg from "../assets/images/productimage.png";
import grainsImg from "../assets/images/grains-bg.jpeg";
import dehydratedImg from "../assets/images/dehydrated-bg.png";
import packagingImg from "../assets/images/packing-bg.png";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div className="products-page"  >
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>
            Products & <span className="blue">Packaging</span>
          </h1>
          <p>
            Premium quality agricultural and food products designed for global
            markets with trust, purity, and consistency.
          </p>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="product-cards">
        <div className="product-card" onClick={() => navigate("/grains")}>
          <img src={grainsImg} alt="Grains and Pulses" />
          <div className="card-content">
            <h2>Grains & Pulses</h2>
            <p>
              High-quality pulses including Toor Dal, Chana Dal, Moong Dal and
              other grains sourced directly from trusted farms.
            </p>
          </div>
        </div>

        <div className="product-card" onClick={() => navigate("/powder")}>
          <img src={dehydratedImg} alt="Dehydrated Products" />
          <div className="card-content">
            <h2>Dehydrated Vegetables & Fruits</h2>
            <p>
              Hygienically processed onion, garlic, ginger, moringa and more,
              retaining natural flavor and nutrition.
            </p>
          </div>
        </div>

        <div className="product-card" onClick={() => navigate("/packaging")}>
          <img src={packagingImg} alt="Packaging Solutions" />
          <div className="card-content">
            <h2>Packaging Solutions</h2>
            <p>
              Export-grade packaging ensuring freshness, safety, and long shelf
              life for global supply chains.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
