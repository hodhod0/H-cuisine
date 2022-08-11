import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Model.css";
import img from "../../assets/images/123.png";
import shop from "../../assets/images/add-to-cart-svgrepo-com.png";
import { CartList } from "../../context/cartList";
const Model = () => {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState(CartList);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const incDec = (item, value) => {
    const temp = cartList;
    const index = temp.findIndex((itm) => itm._id === item._id);
    if (index > -1) {
      item.quatity += value;
      temp[index] = item;
    }
    if (temp[index].quatity === 0) {
      temp.splice(index, 1);
    }
    setCartList(temp);
    calculateTotal();
  };
  const calculateTotal = () => {
    let tot = 0;
    cartList &&
      cartList.forEach((item) => {
        tot = item.price * item.quatity + tot;
      });
    setTotal(tot);
  };
  const removeItem = (item) => {
    const temp = cartList;
    const index = temp.findIndex((itm) => itm._id == item._id);
    if (index > -1) {
      temp.splice(index, 1);
      setCartList(temp);
    }
  };
  useEffect(() => {}, [total]);
  useEffect(() => {
    calculateTotal();
  }, [cartList]);
  return (
    <>
      <img
        onClick={handleShow}
        src={shop}
        alt="shop"
        style={{ cursor: "pointer", marginLeft: "50px", height: "36px" }}
      />
      <Modal show={show} onHide={handleClose} className="container-popup ">
        {/* <Modal.Header closeButton> */}
        {/* <Modal.Title>Modal heading</Modal.Title> */}
        {/* </Modal.Header> */}
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <div className="container-popup">
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
                  cartList.map((item) => {
                    return (
                      <tr>
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
                                class="bi bi-dash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                              </svg>
                            </span>
                            <span className="check px-2 ">{item.quatity}</span>
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
                                  fill-rule="evenodd"
                                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                              </svg>
                            </span>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <span className="price">
                            {item.price * item.quatity}$
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="footer-modal">
            <div className="add-btn">Add</div>
            <div className="total">Total: {total}$</div>
          </div>
          <div className="purchase">Purchase</div>
        </div>
      </Modal>
    </>
  );
};

export default Model;
