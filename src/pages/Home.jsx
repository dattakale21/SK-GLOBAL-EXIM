import React, { useState } from "react";
import groupImage from "../assets/images/groupimage.png";

// Company profile PDFs
import grainsProfilePDF from "../assets/images/grains-profile.pdf";
import dehydratedProfilePDF from "../assets/images/dehydrated-profile.pdf";

// Product catalogue PDFs
import grainsCataloguePDF from "../assets/images/grains-catalogue.pdf";
import dehydratedCataloguePDF from "../assets/images/dehydrated-catalogue.pdf";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <section className="hero-section">
        <div className="bg-hero-image hero-inner">
          {/* LEFT CONTENT */}
          <div className="welcome-para">
            <div className="bg-map">
              <h1>
                Bringing India&rsquo;s Premium <br />
                Dehydrated Ingredients & Agro Commodities to Global Markets.
              </h1>
            </div>

            <p id="about-para" className="about-text">
              <span className="company-name tt">
                Welcome to SK GLOBAL EXIM <br />
              </span>
              a trusted Indian exporter specializing in{" "}
              <span className="bold-text">
                premium dehydrated vegetable and herbal products, along with
                selected grains, pulses, and agro commodities
              </span>{" "}
              With a strong focus on{" "}
              <span className="bold-text">
                quality, reliability, and global standards,
              </span>{" "}
              we supply high-grade Dehydrated Vegetables & Fruits Powders, as
              well as carefully sourced Grains, Pulses & Feed Products, to
              industries worldwide.
            </p>

            {/* DOWNLOAD BUTTONS ROW */}
            <div className="download-buttons-row">
              {/* COMPANY PROFILE */}
              <div className="dropdown">
                <button
                  className="btn btn-download"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "company" ? null : "company"
                    )
                  }
                >
                  <i className="ri-download-line"></i>
                  Company Profile
                </button>

                {openDropdown === "company" && (
                  <div className="dropdown-menu">
                    <a
                      href={grainsProfilePDF}
                      download
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Grains Profile
                    </a>
                    <a
                      href={dehydratedProfilePDF}
                      download
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Dehydrated Vegetables Profile
                    </a>
                  </div>
                )}
              </div>

              {/* PRODUCT CATALOGUE */}
              <div className="dropdown">
                <button
                  className="btn btn-download "
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "catalogue" ? null : "catalogue"
                    )
                  }
                >
                  <i className="ri-download-line"></i>
                  Products Catalogue
                </button>

                {openDropdown === "catalogue" && (
                  <div className="dropdown-menu">
                    <a
                      href={grainsCataloguePDF}
                      download
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Grains Catalogue
                    </a>
                    <a
                      href={dehydratedCataloguePDF}
                      download
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Dehydrated Vegetables Catalogue
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="img-box">
            <img src={groupImage} alt="SK GLOBAL EXIM products" />
          </div>
        </div>
      </section>
    </>
  );
}
