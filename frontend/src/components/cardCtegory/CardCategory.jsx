import React from "react";
import img from "../../assets/images/test.jpg";
import "./CardCategory.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../../assets/images/next-arrow.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-next slick-arrow"
      style={{ display: "block" }}
      onClick={onClick}
    >
      <img src={nextArrow} className="arrow" alt="next arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-prev slick-arrow"
      style={{ display: "block" }}
      onClick={onClick}
    >
      <img
        src={nextArrow}
        alt="next arrow"
        width={30}
        className="previous arrow"
      />
    </div>
  );
}

const CardCategory = () => {
  const [data, setData] = useState([]);

  const settings = {
    className: " center  slider-wrapper",
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const url = "http://localhost:2000/api/category";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.response);
        setData(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Slider {...settings}>
        {data &&
          data.map((item, index) => {
            return (
              <div className="item" key={"item-" + index}>
                <div key={index} className="container-card-category">
                  <Link to={"/category/" + item._id}>
                    <img
                      src={item.image}
                      alt="image"
                      className="card-category-img"
                    />

                    <div>
                      <h3 className="card-category-title">{item.name}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default CardCategory;
