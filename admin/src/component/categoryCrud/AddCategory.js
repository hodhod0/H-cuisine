import React  from "react";
import axios from "axios";
import { useState } from "react";
import "./categoryCurd.css";
 import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = (props) => {
  const [name, setName] = useState();

  const [file, setFile] = useState();
  let { appendNew, openModal, onClose } = props;

  const onChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toast.configure();

    const data = new FormData();
    data.append("name", name);
    data.append("images", file);

    axios
      .post("http://localhost:2000/api/category/upload", data)
      .then((res) => {
        onClose(false);
        appendNew(res);
        toast.success("Added Successfully");
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
      
        <Modal.Body>
          <div className="row add-category">
            <form onSubmit={onSubmit}>
              <div className="p-4">
                <h3>AddCategory</h3>
                <div>
                  <input
                    id="name"
                    type="text"
                    className="form-control my-3"
                    placeholder="name"
                    aria-label="Username"
                    multiple
                    onChange={onChange}
                  />
                </div>
                <div>
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

export default AddCategory;

 