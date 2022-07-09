import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import img from "../../assets/images/sahen.png";

const Login = () => {
  toast.configure();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(login));
    setIsSubmited(true);

    const userData = {
      email: login.email,
      password: login.password,
    };
    axios
      .post("http://localhost:2000/api/users/login", userData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Login Successfully");
          setLogin({
            email: "",
            password: "",
          });
          nav("/home");
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong while registering");
      });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmited) {
      console.log(login);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$";
    // const reg = new RegExp(^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$)
    // reg.test(email)
    if (!values.email) {
      errors.email = "Email is required! ";
    }
    if (!values.password) {
      errors.password = "Password is required! ";
    }
    return errors;
  };

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-login d-flex justify-content-around align-items-center">
      <div className="col-12 col-md-7 text-center">
        {screenWidth < 400 ? (
          <img src={img} className="login-sahen" />
        ) : (
          <img src={img} className="login-sahen" />
        )}
      </div>
      <div className="col-12 col-md-5 position-relative">
        <div className="text-center d-flex flex-column form-container">
          <p className="fs-4 mt-5">
            Welcome to my kitchen the place where it taste special!
          </p>

          <form
            onSubmit={() => handleSubmit()}
            className="form-login-input d-flex flex-column"
          >
            <input
              className="my-2 px-2 fs-5"
              type="email"
              // id="email"
              // autoComplete="off"
              onChange={handleChange}
              value={login.email}
              placeholder="Email"
            />
            <input
              className="my-2 px-2 fs-5"
              type="password"
              // id="password"
              onChange={handleChange}
              value={login.password}
              placeholder="Password"
            />
            <button type="submit" className="fs-5 my-2">
              Log in
            </button>
          </form>
          <p className="mt-3 mb-0">Register</p>
        </div>
        <p className="position-absolute fs-2 have-fun text-center text-white">
          Have Fun :)
        </p>
      </div>
    </div>
  );
};

export default Login;

/*
 <div className="container-login">
<img src={img} alt="sa7en" width={600} height={600} />

<section className="form-login">
  <p className="welcome-login">
    Welcome to my kitchen the place where it taste special!{" "}
  </p>
  <p className="welcome-login">Have Fun :)</p>
  <form onSubmit={hundleSubmit} className="form-login-input">
    <input
      className="input-login"
      type="email"
      name="email"
      id="email"
      autoComplete="off"
      onChange={handleChange}
      value={login.email}
      placeholder="Email"
    />
    <span>{formErrors.email}</span>
    <input
      className="input-login"
      type="password"
      name="password"
      id="password"
      onChange={handleChange}
      value={login.password}
      placeholder="Password"
    />
    <span>{formErrors.password}</span>
    <button type="submit" className="button-login">
      Log in{" "}
    </button>
  </form>

  <span className="line">
    
    <button className="register-login" onClick={() => nav("/register")}>
      {" "}
      Register
    </button>
  </span>
</section>
</div> 
*/
