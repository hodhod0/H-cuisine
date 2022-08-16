import "./SideBarAdmin.css";
import React, { useState, useEffect } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TocIcon from '@mui/icons-material/Toc';
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
// import { makeStyles } from '@material-ui/core/styles';
// import SvgIcon from '@material-ui/core/SvgIcon';
import CategoryIcon from "@material-ui/icons/Category";
import HomeIcon from "@material-ui/icons/Home";
import img from "../../images/log2o.png";

// import { NavLink } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <>
      <div className="nav">
        <div data-aos-duration="1500" data-aos="fade-down">
          <img id="img" src={img} alt="" style={{ margin: 0 }} />
          <h3 id="h3" style={{ textAlign: "center" }}>
            H-cuisine
          </h3>
        </div>
        <ul>
          <a
            style={{
              backgroundColor: "var(--buttonhover1)",
              color: "var(--textcolor1)",
            }}
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "var(--buttonhover1)",
            //         color: "var(--textcolor1)",
            //       }
            //     : { backgroundColor: "transparent" }
            // }
            href="/dashboard/home"
          >
            <li
              //  className={classes.root}
              style={{ backgroundColor: "inherit" }}
              data-aos-duration="1500"
              data-aos="fade-right"
            >
              <HomeIcon className="icon" />
              <span className="ms-3 list-title">Home</span>
            </li>
          </a>

          <a
            style={{
              backgroundColor: "var(--buttonhover1)",
              color: "var(--textcolor1)",
            }}
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "var(--buttonhover1)",
            //         color: "var(--textcolor1)",
            //       }
            //     : { backgroundColor: "transparent" }
            // }
            href="/dashboard/users"
          >
            <li
              data-aos-duration="1500"
              data-aos="fade-right"
              style={{ backgroundColor: "inherit" }}
            >
              <PostAddIcon className="icon" />
              <span className="ms-3 list-title">Users</span>
            </li>
          </a>

          <a
            style={{
              backgroundColor: "var(--buttonhover1)",
              color: "var(--textcolor1)",
            }}
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "var(--buttonhover1)",
            //         color: "var(--textcolor1)",
            //       }
            //     : { backgroundColor: "transparent" }
            // }
            href="/dashboard/category"
          >
            <li
              data-aos-duration="1500"
              data-aos="fade-right"
              style={{ backgroundColor: "inherit" }}
            >
              <CategoryIcon className="icon" />
              <span className="ms-3 list-title">Category</span>
            </li>
          </a>
          <a
            style={{
              backgroundColor: "var(--buttonhover1)",
              color: "var(--textcolor1)",
            }}
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "var(--buttonhover1)",
            //         color: "var(--textcolor1)",
            //       }
            //     : { backgroundColor: "transparent" }
            // }
            href="/dashboard/orders"
          >
            <li
              data-aos-duration="1500"
              data-aos="fade-right"
              style={{ backgroundColor: "inherit" }}
            >
              <TocIcon className="icon" />
              <span className="ms-3 list-title">Orders</span>
            </li>
          </a>

          <a
            style={{
              backgroundColor: "var(--buttonhover1)",
              color: "var(--textcolor1)",
            }}
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "var(--buttonhover1)",
            //         color: "var(--textcolor1)",
            //       }
            //     : { backgroundColor: "transparent" }
            // }
            href="/dashboard/logout"
          >
            <li
              data-aos-duration="1500"
              data-aos="fade-right"
              style={{ backgroundColor: "inherit" }}
            >
              <ExitToAppIcon className="icon" />
              <span className="ms-3 list-title">Logout</span>
            </li>
          </a>
         
        </ul>

        {/* <NavLink to='/'  >
        <li
          className='logout'
          onClick={props.logOut}
        >
          <LogoutIcon data-aos-duration="1500" data-aos="fade-up"
            sx={{ fontSize: 40 }}
            className="LogOut" />
        </li> </NavLink> */}
      </div>
    </>
  );
};

export default SideBarAdmin;
