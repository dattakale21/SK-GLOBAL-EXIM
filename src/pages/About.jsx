import React from "react";

import dashLine from "../assets/images/dash_line.png";
import heroImg from "../assets/images/aboutimage.png";

import founder1 from "../assets/images/founder1.png";
import founder2 from "../assets/images/founder2.png";
import founder3 from "../assets/images/founder3.png";
import founder4 from "../assets/images/founder4.png";
import lineImg from "../assets/images/line.png";
import img1 from "../assets/images/img1.png";
import img4 from "../assets/images/img4.png";

export default function About() {
  return (
    <section id="about" className="about-section about-page">
      <div className="about-top-image">
        <img src={heroImg} alt="About Banner" />
        <div className="about-overlay"></div>

        <div className="about-top-text">
          <h1>
            ABOUT <span className="blue">US</span>
          </h1>
          <p>
            Premium quality agricultural and food products designed for global
            markets with trust, purity, and consistency.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="intro-text">
          <h2 className="intro-heading text-black text-4xl font-bold mb-6 mt-30">
            SK Global Exim
          </h2>

          <p className="para">
            At <span className="highlight">SK GLOBAL EXIM</span>, we believe
            that every product carries a story — a story of quality, purity, and
            trust.
          </p>

          <p className="para fpara1">
            Built on a strong foundation and driven by a committed team, we
            bring the richness of India’s natural ingredients to the world. From
            humble farms to global markets, our purpose is simple:
            <span className="black-bold">
              {" "}
              deliver purity with consistency, and quality with integrity.
            </span>
          </p>

          <p className="italic-para">
            Whether it’s Onion Powder, Garlic Powder, Ginger, Moringa, Curry
            Leaf Powder, Chilli Powder, or Dried Onion Flakes, we ensure every
            batch reflects our commitment to excellence. Our offerings are
            structured across two core product categories: Dehydrated Vegetable
            & Herbal Powders, including onion, garlic, ginger, moringa, curry
            leaf, chilli, and dried onion flakes—processed to retain natural
            aroma, color, and flavor. Grains, Pulses & Feed Products, including
            Toor Dal, Chana Dal, Roasted Futana, Futana Dal (Roasted Gram Dal),
            High-Protein Chuni Cattle Feed (Toor & Chana), Chana, Moong Dal,
            Cotton Seed Oil Cake, Green Vatana, and White Udid Dal—sourced and
            supplied to meet consistent quality and bulk requirements. We don’t
            just supply products —
            <span className="black-bold">
              we deliver ingredients that shape cuisines, support industries,
              and power food and feed supply chains across the globe.
            </span>
          </p>

          <p className="final-para">
            With careful sourcing, precise processing, and
            international-standard documentation, we transform agricultural
            products into export-ready ingredients trusted by food
            manufacturers, distributors, and brands worldwide.
          </p>
          <p className="para">
            We work as a distributor and wholesaler, dealing in agricultural
            products, food ingredients, grains, pulses, and dehydrated powders,
            supplying quality products to buyers across India and global
            markets.
          </p>

          <p className="para">
            At <span className="highlight">SK GLOBAL EXIM</span>, we don’t just
            trade products —{" "}
            <span className="black-bold ">
              we connect markets, create value, and build lasting partnerships.
            </span>
          </p>
        </div>
        <img src={lineImg} className="decor-line" />

        <img src={img1} className="img1" />

        <img src={dashLine} className="aboutdash dash-line mt-large" />

        <div className="story-section">
          <p className="quote">
            Every ingredient carries a story — delivering pure, natural quality
            inspires us every day.
          </p>

          <p className="story-para">
            We grew up sharing more than just a family name — we shared the same
            vision:{" "}
            <span className="black-bold">
              to bring India’s finest dehydrated powders & Grains, Pulses & Feed
              Products to the world with honesty, care, and consistency.
            </span>
          </p>

          <p className="story-italic">
            Our work is rooted in dedication. From sourcing fresh raw materials
            to watching each batch transform into premium export-grade Powder
            and Grains, we feel the same pride every single time.
          </p>

          <p className="story-para">
            The journey of <span className="highlight">SK GLOBAL EXIM</span> is
            built on commitment — commitment to quality, transparency, and
            long-term partnerships.
          </p>

          <p className="story-para">
            We don’t simply export products —{" "}
            <span className="black-bold">
              we export trust, flavor, and value to global markets.{" "}
            </span>
          </p>
        </div>

        <img src={lineImg} className="decor-line" />

        <div className="connect-section">
          <p className="connect-title">Let's Connect</p>

          <div className="connect-box">
            <p className="connect-label">Email</p>
            <a href="mailto:contact@skglobalexim.com" className="contact-link">
              contact@skglobalexim.com
            </a>
          </div>

          <div className="connect-box">
            <p className="connect-label">Phone</p>
            <a href="tel:+918591948621" className="contact-link">
              +91 85919 48621
            </a>
          </div>
        </div>
        <div className="img4-wrapper">
          <img src={img4} className="img4" />
        </div>
      </div>
    </section>
  );
}
