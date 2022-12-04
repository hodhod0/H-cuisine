import React from "react";
import AddCategory from "../../component/categoryCrud/AddCategory";
import DeleteCategory from "../../component/categoryCrud/DeleteCategory";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import UpdateCategory from "../../component/categoryCrud/UpdateCategory";
import SideBarAdmin from "../../component/sideBarAdimn/SideBarAdmin";
import { Link } from "react-router-dom";
import Model from "../../component/model/Model";
import AddItem from "../../component/categoryCrud/AddItem";
import Button from "react-bootstrap/Button";
import DeleteItem from "../../component/categoryCrud/DeleteItem";
import UpdateItem from "../../component/categoryCrud/UpdateItem";

export const Item = () => {
  const [data, setData] = useState([]);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false); //update

  const handleOpenAddModal = () => setAddModalVisible(true);

  const refreshData = (id) => {
    const newdata = data.filter((x) => {
      return x._id !== id;
    });
    setData(newdata);
  };

  const arr = window.location.href.split("/");
  const id = arr[arr.length - 1];
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/item/itemsByBategory/${id}`)
      .then((res) => {
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
      <AddItem
        openModal={addModalVisible}
        appendNew={appendNew}
        id={id}
        onClose={(event) => setAddModalVisible(event)}
      />
      <DeleteItem
          visible={deleteModalVisible}
          setVisible={setDeleteModalVisible}
          refreshData={refreshData}
          id={itemIdToDelete}
      />
      <UpdateItem
         openModal={updateModalVisible}
         // setVisible={setUpdateModalVisible}
         onClose={(event) => setUpdateModalVisible(event)}
 
            refreshData={refreshData}
            id={itemIdToDelete}
      />
      <SideBarAdmin />
      <div className="d-flex justify-content-between w-75 pt-5 pb-3 px-1 mx-auto samir">
        <h2>Item</h2>
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
              <th scope="col">Discription</th>
              <th scope="col">Price</th>
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
                    <td className="align-middle description-width">{item.description}</td>
                    <td className="align-middle">{item.price}</td>

                    <td className="align-middle">
                    <span className="me-3">
                        <Button
                          variant="btn btn-primary"
                          onClick={() => handleConfirmUpdate(item._id)}
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
