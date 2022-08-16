import React from "react";
import AddCategory from "../../component/categoryCrud/AddCategory";
import DeleteCategory from "../../component/categoryCrud/DeleteCategory";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Category.css";
import UpdateCategory from "../../component/categoryCrud/UpdateCategory";
import SideBarAdmin from "../../component/sideBarAdimn/SideBarAdmin";
import { Link } from "react-router-dom";
import Model from "../../component/model/Model";
import Button from "react-bootstrap/Button";

// import AOS from "aos";
// import "aos/dist/aos.css";


const Category = () => {
  const [data, setData] = useState([]);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false); //update
  // const { type, title } = props;

  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, [])

  const handleOpenAddModal = () => setAddModalVisible(true);
  const handleOpenUpdateModal = () => setUpdateModalVisible(true);


  const refreshData = (id) => {
    const newdata = data.filter((x) => {
      return x._id !== id;
    });
    setData(newdata);
  };

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/category")
      .then((res) => {
        console.log(res.data);
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const appendNew = (item) => {
    const temp = data;
    const obj = { ...item.data, id: item.data._id };
    temp.push(obj);
    setData(temp);
    console.log(data);
  };

  const handleConfirmDelete = (id) => {
    setItemIdToDelete(id);
    setDeleteModalVisible(true);
  };
  const handleConfirmUpdate = (id) => {
    setItemIdToDelete(id);
    setUpdateModalVisible(true);
  };


  return (
    <>
          <SideBarAdmin />

    {/* <div data-aos="zoom-out-down"><h3>ewfwewdwe</h3></div>   */}
      <AddCategory
        openModal={addModalVisible}
        appendNew={appendNew}
        onClose={(event) => setAddModalVisible(event)}
      />
      <DeleteCategory
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        refreshData={refreshData}
        id={itemIdToDelete}
      />
      <UpdateCategory
        openModal={updateModalVisible}
        // setVisible={setUpdateModalVisible}
        onClose={(event) => setUpdateModalVisible(event)}

           refreshData={refreshData}
           id={itemIdToDelete}
       />

      <div className="d-flex justify-content-between w-75 pt-5 pb-3 px-1 mx-auto samir">
        <h2>Category</h2>
        <Button variant="btn btn-primary" onClick={handleOpenAddModal}>
          Add
        </Button>
      </div>
      <div className="tableContainer mx-auto samir">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Category Items</th>
              <th scope="col">ِActions</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" className="align-middle">
                      {index + 1}
                    </th>
                    <td className="align-middle">
                      <img
                        className=""
                        width={50}
                        height={50}
                        src={item.image}
                        alt="image"
                      />
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle">
                      {" "}
                      <Link
                        className="text-decoration-none"
                        to={"/dashboard/category/" + item._id}
                      >
                        <span className="text-black">Open List</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#000"
                          className="bi bi-reply-fill reply-icon ms-2 "
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                        </svg>
                      </Link>
                    </td>
                    <td className="align-middle">
                      <span className="me-3">
                        <Button
                          variant="btn btn-primary"
                          onClick={() => handleConfirmUpdate(item._id,item.name)}
                        >
                          Update
                        </Button>
                      </span>

                      <span className="me-3">
                        <Button
                          variant="danger"
                          onClick={() => handleConfirmDelete(item._id)}
                        >
                          Delete
                        </Button>
                      </span>
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

export default Category;
