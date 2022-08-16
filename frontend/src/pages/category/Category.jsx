import React from "react";
import CardCategory from "../../components/cardCtegory/CardCategory";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Model from "../../components/model/Model";
import Footer from "../../components/footer/Footer";

const Category = () => {
  const [dataC, setDataC] = useState([]);

  // useEffect(()=>{
  //   const getData = async()=>{
  //     const {data: res} = await axios.get("http://localhost:2000/api/category");
  //     setDataC(res);
  //   };
  //   getData()
  // },[])
  // console.log(getData)

  return (
    <>
      <NavBar />
      <div
        style={{
          minHeight: '70vh',
          textAlign: '-webkit-center',
          padding: 10,
          margin: 10,
        }}
      >
        <CardCategory />
        {/* <CardItem /> */}
      </div>
      <Footer/>
    </>
  );
};

export default Category;
