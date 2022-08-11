import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import CardItem from "../../components/cardItem/CardItem";
import AddCrad from "../../components/addCard/AddCrad";
import "./Item.css";
import pinkDonuts from "../../assets/images/pink-donuts.png";
import shop from "../../assets/images/add-to-cart-svgrepo-com.png";
import { CartList } from "../../context/cartList";
const Item = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState(CartList);
  const addItemToCart = (item) => {
    const temp = cart;
    const id = item._id;
    const index = temp.findIndex((itm) => itm._id === id);
    if (index > -1) {
      temp[index].quatity = temp[index].quatity + 1;
    } else {
      item.quatity = 1;
      temp.push(item);
    }
    setCart(temp);
  };
  return (
    <div>
      <NavBar />
      <CardItem selectedItem={(item) => setSelectedItem(item)} />
      {selectedItem && (
        <div className="item-container">
          <div className="plate">
            {<img src={selectedItem.image} alt="" className="item-img" />}
          </div>
          <div className="item-details">
            <div className="item-name">{selectedItem.name}</div>
            <div className="item-description">{selectedItem.description}</div>
            <div
              className="add-to-cart"
              onClick={() => addItemToCart(selectedItem)}
            >
              <img src={shop} />
              {selectedItem.price} $
            </div>
          </div>
        </div>
      )}

      <div>
        <AddCrad trigger={false}></AddCrad>
      </div>
    </div>
  );
};

export default Item;
