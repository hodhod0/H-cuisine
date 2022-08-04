import React,{useEffect,useState} from "react";
import "./CardItem.css";
import img from "../../assets/images/test.jpg";
import Slider from "react-slick";
import axios from "axios";
import { useParams } from 'react-router-dom'


const CardItem = () => {
  const {id } = useParams()
  const [data,setData] = useState([])
  console.log(data)

  useEffect(()=>{
    const url = `http://localhost:2000/api/item/bycategory/${id}`;
    axios.get(url).
    then(response =>{
        console.log(response.data.response)
        setData(response.data.response)
    }).catch(err =>{
        console.log(err)
    })
},[])
  


  var settings = {
    className: "w-75 m-auto",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
   
      <Slider {...settings}>
        { data && data.map((item, index)=>{
          return(

        <div key={index} className="container-card-item">
          <img src={item.image} alt="" className="card-item-img" />

          <div className="text-center card-item-price-title">
            <h3 className="card-item-title">{item.name} </h3>
            <span className="card-item-price">{item.price} $</span>
          </div>
        </div>
          )
        })

        }
      </Slider>
    </>
  );
};

export default CardItem;
