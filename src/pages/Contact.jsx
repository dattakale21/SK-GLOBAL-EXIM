import React, { useState } from "react";

// IMPORT ALL IMAGES
import dashLine from "../assets/images/dash_line.png";
import lineImg from "../assets/images/line.png";

// Contact gallery images
import c1 from "../assets/images/contactimages/1.webp";
import c2 from "../assets/images/contactimages/2.jpg";
import c3 from "../assets/images/contactimages/3.jpg";
import c4 from "../assets/images/contactimages/4.png";
import c5 from "../assets/images/contactimages/5.png";
import c6 from "../assets/images/contactimages/6.png";
import c7 from "../assets/images/contactimages/7.png";
import c8 from "../assets/images/contactimages/8.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    "Mobile number": "",
    "Email subject": "",
    Message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const endpoint = "https://formspree.io/f/xeoylgyr";
    const body = new URLSearchParams();

    for (const key in formData) body.append(key, formData[key]);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (res.ok) {
        window.Swal
          ? window.Swal.fire({
              title: "Success",
              text: "Message Sent Successfully!",
              icon: "success",
            })
          : alert("Message Sent Successfully!");

        setFormData({
          Name: "",
          Email: "",
          "Mobile number": "",
          "Email subject": "",
          Message: "",
        });
      } else {
        window.Swal
          ? window.Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "There was an issue sending the email.",
            })
          : alert("Error sending message.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="contact-section bg-[#f8f4ed] py-16 text-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-center tracking-tight contacttitle">
          CONTACT{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            US
          </span>
        </h1>

        <img
          src={dashLine}
          className="mx-auto mt-10 mb-6 w-[80%] max-w-[29rem]"
        />

        {/* INTRO TEXT */}
        <div className="max-w-3xl mx-auto text-center space-y-8 leading-relaxed text-gray-800 contactintro ">
          <p className="font-sans text-lg md:text-xl">
            <span className="italic">We love delivering quality,</span>and we’re honored to be considered as your trusted export partner.
          </p>
<p>This website reflects our work — every product, every batch, and every process represents who we are.</p>

          <p className="font-serif text-lg italic">
           If you wish to source from us, share every detail you need —{" "}
            <span className="font-semibold">specifications, quantities, packaging, and expectations.</span>{" "}
          
          </p>

          <p className="font-sans text-lg md:text-xl">
            When your products reach shelves, kitchens, industries, and consumers across the world, these choices become the foundation of your brand’s success.
          </p>

          <p className="font-serif italic text-lg">
           We would be proud to supply the ingredients that help you create it.
          </p>

       
        </div>

        {/* NAME BLOCK */}
        <div className="flex flex-col items-center my-16">
          <img src={dashLine} className="mx-auto w-[80%] max-w-[29rem] mb-8" />

          <p className="lead text-xl font-serif font-bold text-gray-900 haha">
           Led by Shivanand, Supported by Datta, Powered by Parmeshwar & Aniket Kale
          </p>
          <p className="text-gray-500 font-sans italic mt-1">
           Together Building SK GLOBAL EXIM
          </p>

          <img src={dashLine} className="mx-auto w-[80%] max-w-[29rem] mt-8" />
        </div>
        <p className="text-sm mandit text-black font-semibold mt-4">Mandatory Details</p>

        {/* FORM */}
        {/* FORM */}
<form onSubmit={handleSubmit} className="contact-form">

  {/* 2×2 rows */}
  <div className="form-two-row">
    <input type="text" name="Name" placeholder="Full Name" required className="input-field" value={formData.Name} onChange={handleChange} />
    <input type="email" name="Email" placeholder="Email Address" required className="input-field" value={formData.Email} onChange={handleChange} />
    <input type="tel" name="Mobile number" placeholder="Mobile Number" required className="input-field" value={formData["Mobile number"]} onChange={handleChange} />
    <input type="text" name="Email subject" placeholder="Email Subject" required className="input-field" value={formData["Email subject"]} onChange={handleChange} />
  </div>

  {/* 1 wide row */}
  <textarea name="Message" placeholder="Your Message" rows="9" required className="input-field message"></textarea>

  <button type="submit" className="submit-btn">
    {submitting ? "Sending..." : "Send Message"}
  </button>

</form>


        {/* GALLERY */}
        <div className="mt-16 text-center">
          <img src={lineImg} className="mx-auto mb-8 w-[80%] max-w-[29rem]" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-9 max-w-5xl mx-auto">
            {[c1, c2, c3, c4, c5, c6, c7, c8].map((img, i) => (
              <img key={i} src={img} className="rounded-lg shadow-md" />
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}
