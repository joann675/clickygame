import React from "react";
import "./style.css";

function FlowerCard(props) {
  
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.flowerClick(props.id)}
          alt="FlowerPic"
          src={props.image}
        />
      </div>
      
    </div>
  );
}

export default FlowerCard;
