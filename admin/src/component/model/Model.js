import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Model.css";

const Model = (props) => {
  const { type, title, id, refreshData } = props;
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios
        .delete(`http://localhost:2000/api/category/${id}`)
        .then((response) => {
          setShow(false);
          refreshData(id);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button
        variant={type === "update" ? "primary" : "danger"}
        onClick={handleShow}
      >
        {title}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="d-flex">
            <h2>Are you sure you want delete</h2>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;
