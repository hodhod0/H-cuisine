import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./categoryCurd.css";

const UpdateCategory = (props) => {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  let { type, title, id, appendNew, openModal, onClose } = props;
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("images", file);

    axios
      .put(`http://localhost:2000/api/category/upload/${id}`, data, {})
      .then((res) => {
        onClose(false);
        appendNew(res);
        console.log(res);
      });
  };
  // const handleClose = () => {
  //   openModal = false;
  // };
  return (
    <>
      <Modal
        show={openModal}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="row add-category">
            <form onSubmit={onSubmit}>
              <div className="p-4">
                <h3>Update Category</h3>
                <div>
                  <input
                    type="text"
                    id="name"
                    multiple
                    className="form-control my-3"
                    placeholder="name"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control form-control"

                    id="file"
                    multiple
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setFile(file);
                    }}
                  />
                </div>
              </div>
              {/* <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div> */}
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    onClose(false);
                  }}
                >
                  Close
                </Button>
                <Button variant="success" onClick={onSubmit}>
                  Confirm
                </Button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateCategory;
