import React from "react";
import "./Home.scss";
import Footer from "../../components/footer/footer";
import Profile from "../../assets/images/profile__image.svg";
import Slack from "../../assets/images/slack.png";
import Git from "../../assets/images/Social icon.png";
import Back from "../../assets/images/back.svg";
import Back2 from "../../assets/images/back2.svg";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Twitter Link",
    link: "https://twitter.com/ericOlatun",
    id: "twitter",
  },
  {
    name: "Zuri Team",
    link: "https://training.zuri.team/",
    id: "btn__zuri",
  },
  {
    name: "Zuri Books",
    link: "http://books.zuri.team/",
    id: "books",
  },
  {
    name: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=<Babatunde Olatunji>",
    id: "book__python",
  },
  {
    name: "Background Check for Coders",
    link: "https://background.zuri.team/",
    id: "pitch",
  },
  {
    name: "Design Books",
    link: "https://books.zuri.team/design-rules",
    id: "book__design",
  },
];
const Home = () => {
  return (
    <Footer>
      <div className="set">
        <div className="back">
          <img className="back1" src={Back} alt="back" />
          <img className="back2" src={Back2} alt="back" />
        </div>
        <div className="sub-items">
          <img id="profile__img" src={Profile} alt="logo" />
          <p id="twitter">Babatunde Eric Olatunji</p>
          <p id="slack">Babatunde Eric Olatunji</p>
        </div>

        <div className="buttons">
          {data.map((value, id) => {
            return (
              <a key={id} id={value.id} href={value.link} className="button">
                {value.name}
              </a>
            );
          })}
          <Link to="/contact" id="contact" className="button">
            Contact Me
          </Link>
        </div>
        <div className="contact">
          <img src={Slack} alt="slack" />
          <img src={Git} alt="git" />
        </div>
      </div>
    </Footer>
  );
};

export default Home;
