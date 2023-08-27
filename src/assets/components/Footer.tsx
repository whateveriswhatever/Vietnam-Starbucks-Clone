// import React from "react";
import FooterTop from "./stuffs/FooterTop";
import FooterMain from "./stuffs/FooterMain";
import FooterBottom from "./stuffs/FooterBottom";
const Footer = () => {
  return (
    <footer className="footer" id="footer" tabIndex={0}>
      <FooterTop />
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
