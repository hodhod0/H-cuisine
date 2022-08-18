import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBarAdmin from "../../component/sideBarAdimn/SideBarAdmin";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Orders = () => {
  let counter = 0;
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const getOrder = () => {
    console.log("get orders");
  };

  useEffect(() => {
    axios.get("http://localhost:2000/api/order", {}, {}).then((res) => {
      setOrders(res.data.result);
    });
  }, []);
  return (
    <>
      <Modal
        show={selectedOrder}
        onHide={() => setSelectedOrder(null)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <table className="tbl order-model">
            <thead>
              <tr>
                <th>image</th>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder &&
                selectedOrder.item.map((item, index) => {
                  return (
                    <tr key={"row" + index}>
                      <td>
                        <img src={item.image[0]} width={50} />
                      </td>
                      <td>
                        {" "}
                        <h5 className="m-0">{item.name} </h5>
                      </td>
                    
                      <td>
                        {" "}
                        <div className="mx-2">
                          <span className="check px-2 ">{item.quantity}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedOrder(null)}>
            Close
          </Button>
          <Button variant="danger" onClick={() => setSelectedOrder(null)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <SideBarAdmin />
      <div className="d-flex justify-content-between w-75 pt-5 pb-3 px-1 mx-auto samir">
        <h2>Orders</h2>
      </div>
      <div className="tableContainer mx-auto samir">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th>Price</th>
              <th scope="col">ِActions</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                return (
                  <tr key={order.id}>
                    <td>{order.user.username}</td>
                    <td>{order.user.phone}</td>
                    <td>{order.user.address}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>{order.totalPrice}$</td>
                    <td>
                      <button
                      className="btn btn-secondary"
                        onClick={() => {
                          setSelectedOrder(order);
                        }}
                      >
                        open order details
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
