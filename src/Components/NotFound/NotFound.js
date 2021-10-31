import React from "react";
import "./NotFound.css";
import image from "../../images/404.png";
const NotFound = () => {
  return (
    <div className="text-center not-found">
      <img src={image} alt="" />
      <h1 className="pt-2">Sorry We Can't Find That Page!</h1>
      <br />
      <p className="ps-2 text-muted">
        The page you are looking for was moved, removed, renamed or never
        existed.
      </p>
    </div>
  );
};

export default NotFound;
