import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { CartList } from "../../context/cartList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Orders.css";

const Order = () => {
  toast.configure();

  let counter = 0;
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState(CartList);
  const incDec = (item, value) => {
    const temp = cartList;
    const index = temp.findIndex((itm) => itm._id === item._id);
    if (index > -1) {
      item.quantity += value;
      temp[index] = item;
    }
    if (temp[index].quantity === 0) {
      temp.splice(index, 1);
    }
    setCartList(temp);
    calculateTotal();
  };
  const calculateTotal = () => {
    let tot = 0;
    cartList &&
      cartList.forEach((item) => {
        tot = item.price * item.quantity + tot;
      });
    setTotal(tot);
  };
  const removeItem = (item) => {
    const temp = cartList;
    const index = temp.findIndex((itm) => itm._id == item._id);
    if (index > -1) {
      temp.splice(index, 1);
      setCartList(temp);
      calculateTotal();
    }
  };
  useEffect(() => {
    const cart = document.getElementById("cart");
    if (cart) {
      cart.classList.add("scale");
      setTimeout(() => {
        cart.classList.remove("scale");
      }, 1000);
    }
  }, [total]);
  useEffect(() => {
    calculateTotal();
  }, [cartList]);
  useEffect(() => {
    console.log(CartList);
  }, []);

  const orderNow = () => {
    const address = document.getElementById("address").value;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const date = document.getElementById("date").value;
    const user = { address, name, phoneNumber, date };
    let u = localStorage.getItem("user");
    if (u) {
      u = JSON.parse(u);
    }
    axios
      .post(
        "http://localhost:2000/api/order",
        {
          user: u._id,
          item: cartList,
          totalPrice: total,
        },
        {}
        )
        
        .then((res) => {
        toast.success("Successfully");
        getOrder();
      });
  };
  const getOrder = () => {
    axios.get("http://localhost:2000/api/order", {}, {}).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <NavBar />
      <div className=" d-flex container-order">
        <div className="container-popup-order">
          <div className="scrollable-container">
            <table className="tbl">
              <thead>
                <tr>
                  <th>plates</th>
                  <th>Name</th>
                  <th>size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartList &&
                  cartList.map((item, index) => {
                    return (
                      <tr key={"row" + index}>
                        <td>
                          {" "}
                          <svg
                            onClick={() => removeItem(item)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-lg icon-x "
                            //   viewBox="0 0 16 16"
                          >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                          </svg>{" "}
                          <img
                            src={item.image}
                            alt="Photo"
                            width={40}
                            className="img-price"
                          />
                        </td>
                        <td>
                          {" "}
                          <h5 className="m-0">{item.name} </h5>
                        </td>
                        <td>
                          <div className="mx-2">
                            <span className="check px-2 mx-1">S</span>
                            <span className="check px-2 mx-1">M</span>
                            <span className="check px-2 mx-1  $pink">L</span>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div className="mx-2">
                            <span
                              className="check px-2 "
                              onClick={() => incDec(item, -1)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-dash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                              </svg>
                            </span>
                            <span className="check px-2 ">{item.quantity}</span>
                            <span
                              className="check px-2 "
                              onClick={() => incDec(item, 1)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus-lg "
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                              </svg>
                            </span>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <span className="price">
                            {item.price * item.quantity}$
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="footer-modal">
            <div className="total">Total: {total} $</div>
          </div>
        </div>
        <form className="form-order">
          <div className="">
            <div className="col">
              <div className="group-control">
                <label>Name</label>
                <input
                  title="Name"
                  type="text"
                  id="name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="group-control">
                <label>Phone Number</label>
                <input
                  title="Phone Number"
                  type="Number"
                  className="form-control"
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className="col">
              <div className="group-control">
                <label>Date</label>
                <input
                  title="date"
                  type="date"
                  id="date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="group-control">
                <label>Address</label>
                <textarea
                  title="Address"
                  type="text"
                  id="address"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="group-control">
                <button
                  type="button"
                  onClick={orderNow}
                  className="btn button-order my-3"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
