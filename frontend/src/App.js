import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import AboutUs from "./pages/aboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Category from "./pages/category/Category";
import Item from "./pages/item/Item";
import Model from "./components/model/Model";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>

    <div className="blur"></div>
      <div className="bg">
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute token={token} />}>
              <Route index path="/aboutus" element={<AboutUs />} />
              <Route index path="/category" element={<Category />} />
              <Route index path="/category/:id" element={<Item />} />
            </Route>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
