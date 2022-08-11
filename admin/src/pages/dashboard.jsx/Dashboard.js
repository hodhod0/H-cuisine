import React from "react";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == null) nav("/login");
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-body">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
