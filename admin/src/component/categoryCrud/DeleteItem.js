import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DeleteItem = (props) => {
  const { id, refreshData, visible, setVisible } = props;
  const handleClose = () => setVisible(false);
  const handleShow = () => setVisible(true);

  const handleDelete = async (e) => {
    e.preventDefault();
    toast.configure();

    try {
      await axios
        .delete(`http://localhost:2000/api/item/${id}`)
        .then((response) => {
          setVisible(false);
          refreshData(id);
          toast.success("Delete Successfully");

        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {" "}
      <Modal
        show={visible}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
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

export default DeleteItem;
