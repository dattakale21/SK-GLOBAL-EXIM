import groupImage from "../assets/images/groupimage.png";
import companyPDF from "../assets/images/company.pdf";
import productPDF from "../assets/images/products.pdf";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        {/* FLEX CONTAINER */}
        <div className="bg-hero-image hero-inner">
          {/* LEFT: CONTENT */}
          <div className="welcome-para">
            <div className="bg-map">
              <h1>
                Bringing India&rsquo;s Premium <br />
                Dehydrated Powders To Your Doorstep.
              </h1>
            </div>

            <p id="about-para" className="about-text">
              
              <span className="company-name tt">
                {" "}
               Welcome to SK GLOBAL EXIM <br></br>
              </span>
              a trusted Indian exporter specializing in{" "}
              <span className="bold-text">
                premium dehydrated vegetable and herbal powders.
              </span>{" "}With a strong focus on
              <span className="bold-text">
                {" "}
                quality, reliability, and global standards,
              </span> we supply high-grade Onion Powder, Garlic Powder, Ginger
              Powder, Moringa Powder, and Curry Leaf Powder to industries
              worldwide. At
              <span className="company-name"> SK GLOBAL EXIM</span>, our mission
              is to deliver consistent quality and long-term value to our global
              partners.
            </p>

            <div className="download-buttons">
              <a
                href={companyPDF}
                download="SK_GLOBAL_EXIM_Company_Profile.pdf"
                className="btn btn-download"
              >
                <i className="ri-download-line"></i>
                Company Profile
              </a>

              <a
                href={productPDF}
                download="SK_GLOBAL_EXIM_Products_Catalogue.pdf"
                className="btn btn-download outline"
              >
                <i className="ri-download-line"></i>
                Products Catalogue
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="img-box">
            <img src={groupImage} alt="SK GLOBAL EXIM products" />
          </div>
        </div>
      </section>
    </>
  );
}
