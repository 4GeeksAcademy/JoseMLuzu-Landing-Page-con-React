import React from "react";

const Card = ({ title, description, image, buttonURL }) => {
  return (
    <div className="card mt-3">
      <img src={image} className="card-img-top" alt="Card" style={{ objectFit: "cover", height: "200px" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={buttonURL} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
