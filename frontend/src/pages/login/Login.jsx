import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/api';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import img from "../../images/sa7en1.png"

const Login = () => {
  toast.configure();

  const [login, setLogin] = useState({
    email: "",
    password: ""

  });

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSumint] = useState(false)
  const nav = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(login))
    setIsSumint(true)
    const userData = {
      email: login.email,
      password: login.password,
    }
    axios.post("http://localhost:2000/api/users/login", userData).then(res => {
      if (res.status === 200) {
        toast.success("Login Successfully");
        setLogin({
          email: "",
          password: ""
        })
        nav("/home")
        localStorage.setItem("token",res.data.token)
      }
    })
      .catch(err => {
        console.log(err)
        toast.error("Something went wrong while registering");
      });
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(login)
    }

  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
    if (!values.email) {
      errors.email = "Email is required! ";
    }
    if (!values.password) {
      errors.password = "Password is required! ";
    }
    return errors;
  }

  const handleChange = (e) => {
    setLogin({
      ...login, [e.target.name]: e.target.value
    })
  }


  return (
    
      <div className='container-login'>
          <img src={img} alt="sa7en" width={600} height={600} />

        <section className='form-login'>
          <p className='welcome-login'>Welcome to my kitchen
            the place where
            it taste special! </p>
          <p className='welcome-login'>Have Fun :)</p>
          <form onSubmit={hundleSubmit} className="form-login-input">
            <input
              className='input-login'
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              onChange={handleChange}
              value={login.email}
              placeholder='Email'
            />
            <span>{formErrors.email}</span>
            <input
              className='input-login'
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={login.password}
              placeholder='Password'
            />
            <span>{formErrors.password}</span>
            <button type='submit' className='button-login'>Log in </button>
          </form>
        
            <span className="line">
              {/*put router link here*/}
              {/* <a href="http://localhost:3000/register">Sign Up</a> */}
              <button className='register-login' onClick={() => nav("/register")} > Register</button>
            </span>
        </section>
      </div>
    
  )
}

export default Login