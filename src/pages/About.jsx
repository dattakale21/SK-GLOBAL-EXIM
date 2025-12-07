import React from "react";

import dashLine from "../assets/images/dash_line.png";
import founder1 from "../assets/images/founder1.png";
import founder2 from "../assets/images/founder2.png";
import founder3 from "../assets/images/founder3.png";
import founder4 from "../assets/images/founder4.png";
import lineImg from "../assets/images/line.png";

export default function About() {
  return (
    <section id="about" className="about-section about-page">
      <div className="about-container">
        <h1 className="about-title">
          ABOUT <span className="title-highlight">US</span>
        </h1>

        <img src={dashLine} className="dash-line" />

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
            Founded by{" "}
            <span className="black-bold">Shivanand Venkatesh Kale</span> and
            strengthened by a dedicated core team, we bring the richness of
            India’s natural ingredients to the world. From humble farms to
            global markets, our purpose is simple:
            <span className="black-bold">
              {" "}
              deliver purity with consistency, and quality with integrity.
            </span>
          </p>

          <p className="italic-para">
            Whether it’s Onion Powder, Garlic Powder, Ginger, Moringa, or Curry
            Leaf Powder — we ensure every batch reflects our commitment to
            excellence. We don’t just supply dehydrated powders —{" "}
            <span className="black-bold">
              we deliver ingredients that shape cuisines, enhance flavors, and
              power food creations across the globe.
            </span>
          </p>

          <p className="final-para">
            With careful sourcing, precise processing, and
            international-standard documentation, we transform agricultural
            products into export-ready ingredients trusted by food
            manufacturers, distributors, and brands worldwide.
          </p>

          <p className="para">
            At <span className="highlight">SK GLOBAL EXIM</span>, we don’t just
            trade products —{" "}
            <span className="black-bold ">
              we connect markets, create value, and build lasting partnerships.
            </span>
          </p>
        </div>

        <img src={dashLine} className="dash-line mt-large" />

        <h3 className="team-title">MEET THE TEAM</h3>

        <div className="founders-grid">
          <div className="founder-card">
            <img src={founder1} className="founder-img" />
            <h4 className="founder-name">Shivanand Kale</h4>
            <p className="founder-role">Founder</p>
            <p className="founder-desc italic">
              Shivanand Kale is the visionary Founder of SK GLOBAL EXIM,
              responsible for establishing the company’s strategic direction and
              ensuring operational excellence across sourcing, production, and
              trade processes. With a deep understanding of the agricultural and
              dehydrated foods sector, he oversees supplier relationships,
              quality validation, and end-to-end production supervision. His
              leadership ensures that every shipment reflects the company’s
              commitment to quality, consistency, and reliability.
            </p>
          </div>

          <div className="founder-card">
            <img src={founder2} className="founder-img" />
            <h4 className="founder-name">Datta Kale</h4>
            <p className="founder-role">
              Export Manager & Head of Digital Operations
            </p>
            <p className="founder-desc italic">
              Datta Kale leads the export operations and global client
              communication at SK GLOBAL EXIM. He oversees documentation, buyer
              handling, quotations, platform listings, and all technical +
              digital functions of the business. Datta ensures seamless
              coordination between production, logistics, and international
              buyers, enabling smooth and timely shipments. He also manages the
              brand’s digital presence, marketing assets, and technology
              workflows.
            </p>
          </div>

          <div className="founder-card">
            <img src={founder3} className="founder-img" />
            <h4 className="founder-name">Parmeshwar Kale</h4>
            <p className="founder-role">
              Production Manager & Manufacturing Lead
            </p>
            <p className="founder-desc italic">
              Parmeshwar Kale oversees the entire production cycle — from raw
              material procurement to dehydration, milling, and packaging. With
              strong operational skills and knowledge of processing standards,
              he ensures that each batch meets moisture, aroma, mesh, and purity
              specifications. His hands-on approach guarantees consistent
              quality and timely manufacturing for export orders.
            </p>
          </div>

          <div className="founder-card">
            <img src={founder4} className="founder-img" />
            <h4 className="founder-name">Aniket Kale</h4>
            <p className="founder-role">Assistant Production Manage</p>
            <p className="founder-desc italic">
              Aniket Kale supports the production team by coordinating material
              handling, processing operations, batch segregation, and final
              packing activities. He plays a crucial role in maintaining
              workflow efficiency and ensuring proper documentation of batch
              processes. His dedication contributes to timely and smooth
              production cycles.
            </p>
          </div>
        </div>

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
              to bring India’s finest dehydrated powders to the world with
              honesty, care, and consistency.
            </span>
          </p>

          <p className="story-italic">
            Our work is rooted in dedication. From sourcing fresh raw materials
            to watching each batch transform into premium export-grade powder,
            we feel the same pride every single time.
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
            <p className="connect-info">kaledatta2008@gmail.com</p>
          </div>

          <div className="connect-box">
            <p className="connect-label">Phone</p>
            <p className="connect-info">+91 8767062808</p>
          </div>
        </div>
      </div>
    </section>
  );
}
