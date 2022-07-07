import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard.jsx/Dashboard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      {
        localStorage.getItem("token") !== null ?
        <Route path='/dashboard'  element={<Dashboard />} />:
        
        <Route path="/login" element={<Login />}/>
      }
      <Route path='/home' element={<Home/>}/>
      <Route path="/login" element={<Login />}/>

        <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
