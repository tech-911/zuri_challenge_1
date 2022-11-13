import React from "react";
import "./widget.scss";

const Widget = ({ value }) => {
  return (
    <div className="widget-wrapper">
      <div className="widget-content">
        <img className="widget-img" src={value.image} alt="" />
        <div className="item1">
          <p className="text1">{value.label1}</p>
          <p className="text2">{value.label2}</p>
        </div>
        <div className="item2">
          <p className="text3">{value.label3}</p>
          <p className="text4">{value.label4}</p>
        </div>
        <div className="item3">
          <img src={value.icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
