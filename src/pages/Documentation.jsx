import React from "react";

import iecPDF from "../assets/images/iec.pdf";
import gstPDF from "../assets/images/registration.pdf";
import shopPDF from "../assets/images/gh.pdf";
import companyPDF from "../assets/images/registration.pdf";

import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";
import bg4 from "../assets/images/bg4.png";

import coaIcon from "../assets/images/coa.png";
import phytoIcon from "../assets/images/phyto.png";
import fumigationIcon from "../assets/images/fumigation.png";
import cooIcon from "../assets/images/coo.png";
import invoiceIcon from "../assets/images/invoice.png";
import packingIcon from "../assets/images/packing.png";
import blIcon from "../assets/images/bl.png";
import photo from "../assets/images/photo.png";

import dashLine from "../assets/images/dash_line.png";

export default function Documentation() {
  const docs = [
    { title: "IEC Certificate", desc: "Import–Export Code issued by DGFT", pdf: iecPDF, bg: bg1 },
    { title: "GST Registration Certificate", desc: "Registered under GST Act", pdf: gstPDF, bg: bg2 },
    { title: "Shop & Establishment License", desc: "Registered Business Location", pdf: shopPDF, bg: bg3 },
    { title: "Company Registration", desc: "Legal Entity Proof", pdf: companyPDF, bg: bg4 }
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
      <h1 className="doc-title">Business & Export <span className="blue">Documentation</span></h1>

      <p className="doc-desc">
        SK GLOBAL EXIM is fully compliant with domestic and international
        export documentation standards.
      </p>

      <img src={dashLine} className="doc-divider" alt="divider" />

      <h2 className="ddoc-title">VERIFIED BUSINESS REGISTRATION</h2>
 <p className="export-sub">Legally verified documents demonstrating our credibility and compliance for international trade.</p>

      {/* DOCUMENT GRID */}
      <div id="doc-wrapper">
        {docs.map((d, i) => (
          <div key={i} className="doc-box">
            <div
              className="doc-image"
              style={{ backgroundImage: `url(${d.bg})` }}
            ></div>

            <h3 className="docname">{d.title}</h3>
            <p className="docdes">{d.desc}</p>

            <a href={d.pdf} download className="doc-download">Download PDF</a>
          </div>
        ))}
      </div>

      <img src={dashLine} className="doc-divider" alt="divider" />

      {/* EXPORT DOCUMENT LIST */}
      <h2 className="export-title">Export Documents Provided</h2>
      <p className="export-sub">Issued for every shipment for international compliance</p>

     <div className="export-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">

        {exportDocs.map((doc, i) => (
          <div key={i} className="export-box">
            <img src={doc.icon} alt={doc.title} className="export-icon" />
            <p>{doc.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
