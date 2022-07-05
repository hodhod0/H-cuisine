import React, {  useState} from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from 'react-router-dom';




const Register = () => {
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
    <div>
      <section>
        <form onSubmit={handleSubmit} style={{ display: "flex", maxWidth: 200 }}>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            required
            placeholder='User name'
            onChange={handleChange}


          />
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder='Email'
            required
            onChange={handleChange}

          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder='password'
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder='Phone'
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder='Address'
            required
            onChange={handleChange}

          />
          <button type='submit'>Register</button>
        </form>
        <p>
          Already registered?<br />
          <span className="line">
            {/*put router link here*/}
            <button onClick={()=>nav("/login")} > Sign In</button>
          </span>
        </p>
      </section>

    </div>
  )
}

export default Register