import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  toast.configure();

  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };
  const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminData = {
      username: admin.username,
      email: admin.email,
      password: admin.password,

    }
    console.log(adminData)
    axios.post(`http://localhost:2000/api/admin/register`, adminData)
      .then(res => {
        if (res.status === 200) {
          console.log("Registered Successfully");
          setAdmin({
            username: "",
            email: "",
            password: ""
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
    <div className='container-register'>

    <section className='form-register'>
    <p className='welcome-register'>Join our family :)</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", maxWidth: 200, flexDirection: "column" }}>
        <input
          className='input-register'
          type="text"
          id="username"
          name="username"
          required
          placeholder='User name'
          onChange={handleChange}
          value={admin.username}


        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          required
          onChange={handleChange}
          value={admin.email}
          className='input-register'


        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          required
          onChange={handleChange}
          value={admin.password}
          className='input-register'

        />


        <button type='submit' className='button-register'>Register</button>
      </form>

      <span className="line">
        {/*put router link here*/}
        <button onClick={() => nav("/login")} className="login-register" > Log in</button>
      </span>

    </section>
  

  </div>
  )
}

export default Register