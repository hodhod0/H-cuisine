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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-next slick-arrow"
      style={{ display: "block" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-caret-right"
        viewBox="0 0 16 16"
      >
        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
      </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-caret-left"
        viewBox="0 0 16 16"
      >
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
      </svg>
    </div>
  );
}

const CardCategory = () => {
  const [data, setData] = useState([]);

  const settings = {
    className: "center  py-3 slider-wrapper",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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
                      alt=""
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
