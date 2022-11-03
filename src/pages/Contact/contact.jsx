import React, { useState } from "react";
import "./contact.scss";
import Footer from "../../components/footer/footer";

const Contact = () => {
  const [name, setName] = useState("Babatunde Olatunji");
  return (
    <Footer>
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="head1">Contact Me</h1>
          <p className="item1">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form action="" className="form">
          <div className="form-item1">
            <div className="firstname">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="lastname">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="yourname@email.com"
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span className="span">
              {`You agree to providing your data to ${name} who may contact you.`}
            </span>
          </div>
          <button id="btn__submit" className="send">
            Send message
          </button>
        </form>
      </div>
    </Footer>
  );
};

export default Contact;
