import React from "react";
import Logo from "../../assets/images/logo.png";
import "./footer.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BiCopyright } from "react-icons/bi";
const footer = ({ children }) => {
  return (
    <div className="footer">
      <div className="body">{children}</div>
      <div className="footer-content-container">
        <div className="footer-content">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <div className="footer-socials">
              <FaFacebookF />
              <FaInstagram />
              <IoLogoTwitter />
            </div>
          </div>
          <div className="community">
            <ul className="list">
              <li className="head-list">Community</li>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="places">
            <ul className="list">
              <li className="head-list">Places</li>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div className="about">
            <ul className="list">
              <li className="head-list">About us</li>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="copy-write">
          <BiCopyright className="copy"/>
          <p>2022 Metabnb</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
