import React, { useState } from "react";
import dashLine from "../assets/images/dash_line.png";

import alibaba from "../assets/images/alibaba.png";
import indiamart from "../assets/images/indiamart.png";
import exportersindia from "../assets/images/exports.png";
import tradeindia from "../assets/images/trade.png";

// LIGHTBOX IMPORTS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Load images from folders
const onionImages = import.meta.glob(
  "../assets/images/onion/*.{png,jpg,jpeg}",
  { eager: true }
);
const garlicImages = import.meta.glob(
  "../assets/images/garlic/*.{png,jpg,jpeg}",
  { eager: true }
);
const gingerImages = import.meta.glob(
  "../assets/images/ginger/*.{png,jpg,jpeg}",
  { eager: true }
);
const moringaImages = import.meta.glob(
  "../assets/images/moringa/*.{png,jpg,jpeg}",
  { eager: true }
);
const curryImages = import.meta.glob(
  "../assets/images/curry/*.{png,jpg,jpeg}",
  { eager: true }
);

// Convert to array
function toArray(obj) {
  return Object.values(obj).map((img) => img.default);
}

export default function Products() {
  return (
    <div className="w-full  px-6 py-10 product-section">
      {/* TOP SECTION */}
      <div className="text-center mb-14">
        <h1 className="protitle producttitle text-3xl md:text-4xl font-serif font-extrabold tracking-wide">
          Products & <span className="text-cyan-500 pack">&nbsp;Packing</span>
        </h1>

        <img src={dashLine} className="decor-line mx-auto my-5 productline" />

        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-gray-800 tracking-tight">
          Our Product Range
        </h2>
        <p className="text-gray-600 italic mt-2 max-w-xl mx-auto italic track">
          Premium Dehydrated Vegetable & Herbal Powders for Global Industries
        </p>
      </div>

      {/* PRODUCT GRIDS */}
      <ProductGrid title="Onion Powder" items={toArray(onionImages)} />
      <ProductGrid title="Garlic Powder" items={toArray(garlicImages)} />
      <ProductGrid title="Ginger Powder" items={toArray(gingerImages)} />
      <ProductGrid title="Moringa Powder" items={toArray(moringaImages)} />
      <ProductGrid title="Curry Leaf Powder" items={toArray(curryImages)} />
      <hr className="w-[90%] max-w-[900px] mx-auto border-0 h-[1px] bg-gradient-to-r from-cyan-500 to-black rounded-full" />
      <PackingSection />
      <hr className="w-[90%] max-w-[900px] mx-auto border-0 h-[1px] bg-gradient-to-r from-cyan-500 to-black rounded-full" />
      <MarketplaceSection />
    </div>
  );
}

function ProductGrid({ title, items }) {
  const shuffled = [...items].sort(() => Math.random() - 0.5);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="mb-20">
      {/* LINE */}
       <hr className="w-[90%] max-w-[900px] mx-auto border-0 h-[1px] bg-gradient-to-r from-cyan-500 to-black rounded-full" />

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-6 text-center prot producttitle">
        {title}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center w-full productgrid">
        {shuffled.slice(0, 9).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={title}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* LIGHTBOX VIEW */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        plugins={[Thumbnails]}
        slides={shuffled.slice(0, 9).map((img) => ({ src: img }))}
      />
    </div>
  );
}

function PackingSection() {
  // Load all images from packing folder
  const packingImages = import.meta.glob(
    "../assets/images/packing/*.{png,jpg,jpeg}",
    { eager: true }
  );

  const images = Object.values(packingImages).map((img) => img.default);

  // Random order
  const shuffled = [...images].sort(() => Math.random() - 0.5);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-24 mb-20">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          Packing Options
        </h2>
        <p className="text-gray-600 italic mt-2 max-w-xl mx-auto italic track">
          Export-grade packing designed for maximum freshness and international
          shipping.
        </p>
      </div>

      {/* 3×3 GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-w-5xl mx-auto packinggrid">
        {shuffled.slice(0, 9).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Packing"
            className="
  w-full 
  h-full sm:h-64 md:h-72 lg:h-80 
  object-cover 
  rounded-xl 
  shadow-lg 
  hover:scale-105 
  transition-transform 
  duration-300 
  cursor-pointer
"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* LIGHTBOX VIEWER */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        plugins={[Thumbnails]}
        slides={shuffled.slice(0, 9).map((img) => ({ src: img }))}
      />
    </div>
  );
}

function MarketplaceSection() {
  return (
    <div className="marketplace-section">
      <h2>Connect With Us On Global Trade Sites</h2>

      <div className="marketplace-grid">
        <a
          href="https://www.alibaba.com"
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-card"
        >
          <img src={alibaba} alt="Alibaba" />
          <p>Visit Our Alibaba Store</p>
        </a>

        <a
          href="https://www.indiamart.com"
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-card"
        >
          <img src={indiamart} alt="IndiaMART" />
          <p>View Our IndiaMART Profile</p>
        </a>

        <a
          href="https://www.exportersindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-card"
        >
          <img src={exportersindia} alt="Exporters India" />
          <p>Our ExportersIndia Listing</p>
        </a>

        <a
          href="https://www.tradeindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-card"
        >
          <img src={tradeindia} alt="Trade India" />
          <p>Explore on TradeIndia</p>
        </a>
      </div>
    </div>
  );
}
