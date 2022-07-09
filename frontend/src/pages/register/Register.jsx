import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import img from "../../assets/images/sa7en.png";

const Register = () => {
  toast.configure();

  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });
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
            className='input-register'


          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder='password'
            required
            onChange={handleChange}
            value={users.password}
            className='input-register'

          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder='Phone'
            required
            onChange={handleChange}
            value={users.phone}
            className='input-register'

          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder='Address'
            required
            onChange={handleChange}
            value={users.address}
            className='input-register'


          />
          <button type='submit' className='button-register'>Register</button>
        </form>

        <span className="line">
          {/*put router link here*/}
          <button onClick={() => nav("/login")} className="login-register" > Log in</button>
        </span>

      </section>
      <div >
        <img src={img} alt="sa7en" width={600} height={600} />
      </div>

    </div>
  )
}

export default Register