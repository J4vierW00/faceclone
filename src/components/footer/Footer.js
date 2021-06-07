import React from "react";
import "./Footer.css";

const Footer = ({ emoji, texto }) => {
  return (
    <div className="prueba-Cont">
      <div className="container">
        <div>{emoji}</div> {texto}
      </div>
    </div>
  );
};

export default Footer;
