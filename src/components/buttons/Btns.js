import React from "react";
import "./Btn.css";

const Btns = ({ thumb, cloud }) => {
  return (
    <div className="Btn-container">
      <div className="Buttons">
        <button className="btn1">{thumb}</button>
        <button className="btn2">{cloud}</button>
      </div>
    </div>
  );
};

export default Btns;
