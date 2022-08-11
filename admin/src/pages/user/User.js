import React from 'react'
import SideBarAdmin from '../../component/sideBarAdimn/SideBarAdmin'
import AddCategory from "../../component/categoryCrud/AddCategory";
import DeleteCategory from "../../component/categoryCrud/DeleteCategory";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import "./Category.css";
import UpdateCategory from "../../component/categoryCrud/UpdateCategory";
import { Link } from "react-router-dom";
import Model from "../../component/model/Model";
import Button from "react-bootstrap/Button";
import DeleteUser from '../../component/categoryCrud/DeleteUser';

const User = () => {
    const [data, setData] = useState([]);
    const handleOpenAddModal = () => setAddModalVisible(true);
    const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false); //update


    const refreshData = (id) => {
      const newdata = data.filter((x) => {
        return x._id !== id;
      });
      setData(newdata);
    };
console.log(data)
    useEffect(() => {
        axios
          .get("http://localhost:2000/api/users")
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
    <div>
        <SideBarAdmin/>
        <DeleteUser
            visible={deleteModalVisible}
            setVisible={setDeleteModalVisible}
            refreshData={refreshData}
            id={itemIdToDelete}
        />
        
      <div className="d-flex justify-content-between w-75 pt-5 pb-3 px-1 mx-auto samir">
        <h2>Users</h2>
        {/* <Button variant="btn btn-primary" onClick={handleOpenAddModal}>
          Add
        </Button> */}
      </div>
      <div className="tableContainer mx-auto samir">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
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
                    <td className="align-middle">{item.username}</td>

                    </td>
                    <td className="align-middle">{item.email}</td>
                    <td className="align-middle">
                    <td className="align-middle">{item.phone}</td>

                    </td>
                    <td className="align-middle">
                      {/* <span className="me-3">
                        <Button
                          variant="btn btn-primary"
                          onClick={() => handleConfirmUpdate(item._id)}
                        >
                          Update
                        </Button>
                      </span> */}

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
    </div>
  )
}

export default User