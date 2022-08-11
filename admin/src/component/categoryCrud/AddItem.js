import React from "react";
import axios from "axios";
import { useState } from "react";
import "./categoryCurd.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddItem = (props) => {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  let { type, title, id, appendNew, openModal, onClose } = props;
  const onChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", document.getElementById("name").value);
    data.append("images", file);
    data.append("description", document.getElementById("description").value);
    data.append("price", document.getElementById("price").value);
    data.append("category", id);

    axios
      .post(`http://localhost:2000/api/item/upload/`, data, {})
      .then((res) => {
        onClose(false);
        appendNew(res);
        console.log(res);
      });
  };
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
                <h3>Add Item</h3>
                <div>
                  <input
                    id="name"
                    type="text"
                    className="form-control my-3"
                    placeholder="name"
                    aria-label="Username"
                    multiple
                  />
                </div>
                <div>
                  <input
                    className="form-control my-3"
                    type="number"
                    id="price"
                    placeholder="price"
                    aria-label="Price"
                    rows="3"
                    multiple
                    onChange={onChange}
                  />
                </div>
                <div>
                  <textarea
                    className="form-control my-3"
                    id="description"
                    rows="3"
                    placeholder="Description"
                    aria-label="Description"
                    multiple
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control"
                    type="file"
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

export default AddItem;
