import React, { useState } from "react";

import coaIcon from "../assets/images/coa.png";
import phytoIcon from "../assets/images/phyto.png";
import fumigationIcon from "../assets/images/fumigation.png";
import cooIcon from "../assets/images/coo.png";
import invoiceIcon from "../assets/images/invoice.png";
import packingIcon from "../assets/images/packing.png";
import blIcon from "../assets/images/bl.png";
import photo from "../assets/images/photo.png";
import heroImg from "../assets/images/documentimage.png";

import gstIcon from "../assets/images/gst.png";
import apedaIcon from "../assets/images/apeda.png";
import iecIcon from "../assets/images/iec.png";
import shopActIcon from "../assets/images/gum.png";

import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/d4.png";
import d5 from "../assets/images/d5.png";
import d6 from "../assets/images/d6.png";
import d7 from "../assets/images/d7.png";
import d8 from "../assets/images/d8.png";
import d9 from "../assets/images/d9.png";
import d10 from "../assets/images/d10.png";
import d11 from "../assets/images/d11.png";
import d12 from "../assets/images/d12.png";

import dashLine from "../assets/images/dash_line.png";

export default function Documentation() {
  const [selectedImage, setSelectedImage] = useState(null);

  const wehave = [
    {
      title: "GST Registration Certificate",
      icon: gstIcon,
    },
    {
      title: "APEDA Registration Certificate",
      icon: apedaIcon,
    },
    {
      title: "IEC – Import Export Code Certificate",
      icon: iecIcon,
    },
    {
      title: "Business Registration Certificate (Shop Act / Ghumasta)",
      icon: shopActIcon,
    },
  ];

  const exportDocs = [
    { title: "COA (Certificate of Analysis)", icon: coaIcon },
    { title: "Phytosanitary Certificate", icon: phytoIcon },
    { title: "Fumigation Certificate", icon: fumigationIcon },
    { title: "COO (Certificate of Origin)", icon: cooIcon },
    { title: "Commercial Invoice", icon: invoiceIcon },
    { title: "Packing List", icon: packingIcon },
    { title: "Bill of Lading (B/L)", icon: blIcon },
    { title: "Shipment Photos", icon: photo },
  ];

  return (
    <section id="documentation-section" className="bg-[#f8f4ed]">
      <div className="about-top-image">
        <img src={heroImg} alt="Documentation Banner" />
        <div className="about-overlay"></div>

        <div className="about-top-text">
          <h1 className="doc-title">
            Business & Export <span className="blue">Documentation</span>
          </h1>

          <p className="doc-desc">
            SK GLOBAL EXIM provides end-to-end export documentation support,
            ensuring compliance with international trade standards and seamless
            global shipments.
          </p>
        </div>
      </div>

      <h2 className="ddoc-title">VERIFIED BUSINESS REGISTRATION</h2>
      <p className="export-sub">
        Legally verified documents demonstrating our credibility and compliance
        for international trade.
      </p>

      <div id="doc-wrapper">
        {wehave.map((d, i) => (
          <div key={i} className="export-box">
            <img src={d.icon} alt={d.title} className="export-icon" />
            <p>{d.title}</p>
          </div>
        ))}
      </div>

      <img src={dashLine} className="doc-divider" alt="divider" />

      {/* EXPORT DOCUMENT LIST */}
      <h2 className="export-title">Export Documents Provided</h2>
      <p className="export-sub">
        Issued for every shipment for international compliance
      </p>

      <div className="export-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
        {exportDocs.map((doc, i) => (
          <div key={i} className="export-box">
            <img src={doc.icon} alt={doc.title} className="export-icon" />
            <p>{doc.title}</p>
          </div>
        ))}
      </div>

      {/* IMAGE GALLERY */}
      {/* IMAGE GALLERY */}
      <div className="doc-gallery-section">
        <img src={dashLine} className="doc-divider" alt="divider" />

        <div className="doc-gallery-grid">
          {[d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12].map(
            (img, index) => (
              <div
                key={index}
                className="doc-gallery-item"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            )
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
    </section>
  );
}
