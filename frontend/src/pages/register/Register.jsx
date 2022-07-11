import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import img from "../../assets/images/sahen.png";

const Register = () => {
  toast.configure();

  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });
  const [screenWidth, setScreenWidth] = useState(null);


  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: users.username,
      email: users.email,
      password: users.password,
      phone: users.phone,
      address: users.address,

    }
    console.log(userData)
    axios.post(`http://localhost:2000/api/users/register`, userData)
      .then(res => {
        if (res.status === 200) {
          console.log("Registered Successfully");
          setUsers({
            username: "",
            email: "",
            password: "",
            phone: "",
            address: ""
          });
          toast.success("Registered Successfully");
        }
      })
      .catch(err => {
        console.log(err);
        toast.error("Something went wrong while registering");
      });
  }

  return (
    <div className='container-register d-flex justify-content-around align-items-center'>

      <section className='form-register'>
        <p className="fs-4 mt-3 text-center fw-bold">Join our family :)</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column form-register-input" >
          <input
            className='my-2 px-2 fs-5'
            type="text"
            id="username"
            name="username"
            required
            placeholder='User name'
            onChange={handleChange}
            value={users.username}


          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            required
            onChange={handleChange}
            value={users.email}
            className='my-2 px-2 fs-5'


          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder='password'
            required
            onChange={handleChange}
            value={users.password}
            className='my-2 px-2 fs-5'

          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder='Phone'
            required
            onChange={handleChange}
            value={users.phone}
            className='my-2 px-2 fs-5'

          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder='Address'
            required
            onChange={handleChange}
            value={users.address}
            className='my-2 px-2 fs-5'
          />
          <button type='submit' className="fs-5 my-2">Register</button>
        </form>

        <p className="mt-3 mb-0 register-return" onClick={() => nav("/login")}>Log in</p>


      </section>
      <div className="col-12 col-md-7 text-center">
        {screenWidth < 400 ? (
          <img src={img} alt="sa7en" className="register-sahen" />
        ) : (
          <img src={img} alt="sa7en" className="register-sahen" />
        )}
      </div>

    </div>
  )
}

export default Register