import React from "react";
import "./Home.scss";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/nav";
import HeaderImage from "../../assets/images/headerImage.png";
import divide1 from "../../assets/images/divide1.png";
import divide2 from "../../assets/images/divide2.png";
import divide3 from "../../assets/images/divide3.png";
import Nfts from "../../assets/images/Nfts.png";
import Widget from "../../components/widget/widget";
import Widget1 from "../../assets/images/widget1.png";
import Widget2 from "../../assets/images/widget2.png";
import Widget3 from "../../assets/images/widget3.png";
import Widget4 from "../../assets/images/widget4.png";
import Widget5 from "../../assets/images/widget5.png";
import Widget6 from "../../assets/images/widget6.png";
import Widget7 from "../../assets/images/widget7.png";
import Widget8 from "../../assets/images/widget8.png";
import stars from "../../assets/images/stars.png";

const data = [
  {
    id: 0,
    image: Widget1,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 1,
    image: Widget2,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 2,
    image: Widget3,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 3,
    image: Widget4,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 4,
    image: Widget5,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 5,
    image: Widget6,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 6,
    image: Widget7,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 7,
    image: Widget8,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
];
const Home = () => {
  return (
    <Footer>
      <Nav />
      <div className="sections-wrapper">
        <div className="section1">
          <div className="section1-item1">
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </h1>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="section1-item2">
              <input type="text" placeholder="Search for location" />
              <button>Search</button>
            </div>
          </div>
          <img src={HeaderImage} alt="header-image" />
        </div>
        <div className="divider">
          <img src={divide1} alt="divide1" />
          <img src={divide2} alt="divide2" />
          <img src={divide3} alt="divide3" />
        </div>
        <div className="section2">
          <h2>Inspiration for your next adventure</h2>
          <div className="widget">
            {data.map((value) => {
              return <Widget value={value} />;
            })}
          </div>
        </div>
        <div className="section3">
          <div className="section3-item1">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button>Learn more</button>
          </div>
          <img src={Nfts} alt="NFTs" />
        </div>
      </div>
    </Footer>
  );
};

export default Home;
