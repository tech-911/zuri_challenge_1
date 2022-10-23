import React from "react";
import "./error.scss";
import Footer from "../../components/footer/footer";
import { BsArrowLeftShort } from "react-icons/bs";
const Error = () => {
  return (
    <Footer>
      <div className="error">
        <p className="title">404 error</p>
        <h1 className="content">We can’t find that page</h1>
        <p className="end">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <div className="nav-button">
          <button className="btn1">
            <BsArrowLeftShort className="arrow-left"/>
            Go back
          </button>
          <button className="btn2">Take me home</button>
        </div>
      </div>
    </Footer>
  );
};

export default Error;
