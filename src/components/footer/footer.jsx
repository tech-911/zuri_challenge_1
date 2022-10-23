import React from "react";
import "./footer.scss";
import Img1 from "../../assets/images/zuri_footer_img.png";
import Img2 from "../../assets/images/I4G.png";
const footer = ({ children }) => {
  return (
    <div className="footer">
      <div className="body">{children}</div>

      <div className="footer-content">
        <img src={Img1} alt="zuri-internship" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Img2} alt=" ingressive for good" />
      </div>
    </div>
  );
};

export default footer;
