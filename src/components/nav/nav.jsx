import React from "react";
import "./nav.scss";
import Metabnb from "../../assets/images/metabnb.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Wallet1 from "../../assets/images/wallet1.png";
import Wallet2 from "../../assets/images/wallet2.png";
const Nav = () => {
  const [modal, setModal] = useState(0);
  const [popup, setPopup] = useState(0);
  return (
    <div className="nav-container">
      <Link to="/home">
        <img src={Metabnb} alt="Metabnb" className="home-logo" />
      </Link>
      <div className="nav-option-center">
        <Link to="/home">Home</Link>
        <Link to="/placetostay">Place to stay</Link>
        <Link to="">NFTs</Link>
        <Link to="">Community</Link>
      </div>
      <div className="menu">
        <Link
          onClick={() => {
            setPopup(!popup);
          }}
          to=""
          className="connect"
        >
          Connect wallet
        </Link>
        <GiHamburgerMenu
          onClick={() => {
            setModal(!modal);
          }}
          className="hamburger"
        />
      </div>
      {modal ? (
        <div className="modal">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/placetostay">Place to stay</Link>
            </li>
            <li>
              <Link to="">NFTs</Link>
            </li>
            <li>
              <Link to="">Community</Link>
            </li>
            <li
              onClick={() => {
                setPopup(!popup);
              }}
              className="community"
            >
              <Link to="">Connect Wallet</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {popup ? (
        <div className="popup">
          <div className="collect-wallet-modal">
            <div className="item1">
              <p>Connect Wallet</p>
              <GrClose className="close" onClick={() => setPopup(!popup)} />
            </div>
            <div className="wallet-body">
              <p>Choose your preferred wallet:</p>
              <div className="wallet1">
                <div className="wallet1-item1">
                  <img src={Wallet1} alt="wallet1" />
                  <p>Metamask</p>
                </div>
                <IoIosArrowForward className="wallt1-arrow" />
              </div>
              <div className="wallet1">
                <div className="wallet1-item1">
                  <img src={Wallet2} alt="wallet1" />
                  <p>Metamask</p>
                </div>
                <IoIosArrowForward className="wallt1-arrow" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
