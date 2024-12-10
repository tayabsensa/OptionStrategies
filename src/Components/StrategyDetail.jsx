import React from "react";
import "./../global.css";

const StrategyDetail = ({ item }) => {
  return (
    <div className="long-call-container">
      <div className="long-call-media">
        {item.image && (
          <img
            className="long-call-image"
            src={item.image}
            alt={item.name}
          />
        )}
      </div>
      <div>
        <h1 className="long-call-title">{item.name}</h1>
        <p className="long-call-description">{item.description}</p>
      </div>
    </div>
  );
};

export default StrategyDetail;
