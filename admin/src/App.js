import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard.jsx/Dashboard";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SideBar from "./component/sideBar/SideBar";
import Category from "./pages/category/Category";
import SideBarAdmin from "./component/sideBarAdimn/SideBarAdmin";
import { Item } from "./pages/item/Item";
import User from "./pages/user/User";
import Orders from "./pages/orders/Orders";

function App() {
  const token = localStorage.getItem("token", "isAdmin");

  return (
    <div className="App">
      {/* <SideBar /> */}
      {/* <SideBarAdmin /> */}

      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute token={token} />}>
            {/* <Route index path="/aboutus" element={<AboutUs />} />
          <Route index path="/category" element={<Category />}/> */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="category" element={<Category />} />
              <Route path="category/:id" element={<Item />} />
              <Route path="users" element={<User />} />
              <Route path="" element={<User/>}/>
              <Route path="orders" element={<Orders />} />

              <Route path="home" element={<Home />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
