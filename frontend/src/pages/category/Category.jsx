import React from "react";
import CardCategory from "../../components/cardCtegory/CardCategory";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";

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
          display: "flex",
          padding: 10,
          margin: 10,
          justifyContent: "space-evenly",
        }}
      >
        <CardCategory />
        {/* <CardItem /> */}
      </div>
    </>
  );
};

export default Category;
