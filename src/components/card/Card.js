import React from "react";
import "./Card.css";
import Avatar from "@material-ui/core/Avatar";

const Card = ({ title, imageAvatar, body, subtitle }) => {
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="header-container">
          <Avatar alt="Gallo img" src={imageAvatar} />
          {title}
        </div>
        <div className="sub">{subtitle}</div>
        <div className="prueba">
          <div className="body"> {body}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
