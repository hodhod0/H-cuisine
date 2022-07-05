import './App.css';
import React from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
        <Route index  element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
