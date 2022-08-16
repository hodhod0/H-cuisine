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
import Footer from "../../components/footer/Footer";
const Item = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState(CartList);
  const addItemToCart = (item) => {
    const temp = cart;
    const id = item._id;
    const index = temp.findIndex((itm) => itm._id === id);
    if (index > -1) {
      temp[index].quantity = temp[index].quantity + 1;
    } else {
      item.quantity = 1;
      item.id = item._id;
      temp.push(item);
    }
    setCart(temp);
  };
  useEffect(() => {
    const plate = document.getElementById("plate");
    const itemDesc = document.getElementById("item-desc");
    if (plate) {
      plate.classList.add("animate-l-r");
      // itemDesc.classList.add("animate-r-l");
      setTimeout(() => {
        plate.classList.remove("animate-l-r");
        // itemDesc.classList.remove("animate-r-l");
      }, 1000);
    }
  }, [selectedItem]);
  return (
    <div>
      <NavBar />
      <CardItem selectedItem={(item) => setSelectedItem(item)} />
      {selectedItem && (
        <div className="row m0 mt-5">
          <div className="col-6">
            {" "}
            <div className="plate">
              {
                <img
                  src={selectedItem.image}
                  alt=""
                  id="plate"
                  className="item-img"
                />
              }
            </div>
          </div>
          <div className="col-6">
            <div className="position-relative">
              <div className="item-details" id="item-desc">
                <div className="item-name">{selectedItem.name}</div>
                <div className="item-description">
                  {selectedItem.description}
                </div>
                <div
                  className="add-to-cart d-flex"
                  onClick={() => addItemToCart(selectedItem)}
                >
                  <img src={shop} />
                  <div className="add-to-card-price">
                    {selectedItem.price} $
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <AddCrad trigger={false}></AddCrad>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Item;
