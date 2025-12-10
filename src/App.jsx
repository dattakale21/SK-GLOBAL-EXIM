import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import ScrollToTop from "./ScrollToTop";   // ✅ ADD THIS IMPORT


export default function App() {
  return (
    <Router basename="/SK-GLOBAL-EXIM/">
       <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Products" element={<Products />} />
      </Routes>

      <Footer />
    </Router>
  );
}
