import React from "react";
import "./PlaceToStay.scss";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import Mix from "../../assets/images/mix.png";
import Widget from "../../components/widget/widget";
import Widget1 from "../../assets/images/widget1.png";
import Widget2 from "../../assets/images/widget2.png";
import Widget3 from "../../assets/images/widget3.png";
import Widget4 from "../../assets/images/widget4.png";
import Widget5 from "../../assets/images/widget5.png";
import Widget6 from "../../assets/images/widget6.png";
import Widget7 from "../../assets/images/widget7.png";
import Widget8 from "../../assets/images/widget8.png";
import Widget9 from "../../assets/images/widget9.png";
import Widget10 from "../../assets/images/widget10.png";
import Widget11 from "../../assets/images/widget11.png";
import Widget12 from "../../assets/images/widget12.png";
import Widget13 from "../../assets/images/widget13.png";
import Widget14 from "../../assets/images/widget14.png";
import Widget15 from "../../assets/images/widget15.png";
import Widget16 from "../../assets/images/widget16.png";
import stars from "../../assets/images/stars.png";
import { SlOptions } from "react-icons/sl";
import { useState } from "react";
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
  {
    id: 8,
    image: Widget9,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 9,
    image: Widget10,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 10,
    image: Widget11,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 11,
    image: Widget12,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 12,
    image: Widget13,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 13,
    image: Widget14,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 14,
    image: Widget15,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 15,
    image: Widget16,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
];
const PlaceToStay = () => {
  const [modal, setModal] = useState(0);
  return (
    <Footer>
      <Nav />
      <div className="placetostay">
        <div className="subnav">
          <div className="item1">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
          </div>
          <div className="item2">
            <p>Location</p>
            <img src={Mix} alt="filter" />
          </div>
          <SlOptions
            onClick={() => {
              setModal(!modal);
            }}
            className="option-icon"
          />
        </div>
        {modal ? (
          <div className="optionModal">
            <div className="item1">
              <p>Resturant</p>
              <p>Cottage</p>
              <p>Castle</p>
              <p>fantast city</p>
              <p>beach</p>
              <p>carbins</p>
              <p>Off-grid</p>
              <p>Farm</p>
            </div>
            <div className="item2">
              <p>Location</p>
              <img src={Mix} alt="filter" />
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          onClick={() => {
            setModal(!modal);
          }}
          className="section1"
        >
          <div className="widget">
            {data.map((value) => {
              return <Widget value={value} />;
            })}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default PlaceToStay;
