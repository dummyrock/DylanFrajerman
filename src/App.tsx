import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Homepage from "./homepage/homepage";
import Footer from "./footer/footer";
import AboutMe from "./about-me/about-me";
import ContactMe from "./contact-me/contact-me";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
