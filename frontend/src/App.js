import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {localStorage.getItem("token") !== null ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
