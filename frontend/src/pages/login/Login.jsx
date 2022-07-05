import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const nav = useNavigate(); 

  const hundleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password)
    setUser('')
    setPassword('')
    setSuccess(true)

  }
  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, password])




  return (
    <>
      {success ? (
        <section>
          <h1> You are logged in !</h1>
          <br />
          <p>
            <a href='#'> Go to home</a>
          </p>
        </section>
      ) : (
        <section>
          <h1>Sign in </h1>
          <form onSubmit={hundleSubmit}>
            <input type="text"
              name=""
              id=""
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              placeholder='User name'
            />
            <input
              type="password"
              name=""
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder='Password'
            />
            <button type='submit' >Sign In </button>
          </form>
          <p>
            Need an Account?<br />
            <span className="line">
              {/*put router link here*/}
              {/* <a href="http://localhost:3000/register">Sign Up</a> */}
              <button onClick={()=>nav("/register")} > Sign Up</button>
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default Login