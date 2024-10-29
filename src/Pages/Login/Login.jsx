import React, { useState } from 'react'
import './Login.css'
import axios from '../../Api/axios'
import { useAuth } from '../../Provider/AuthProvider'
import Loader from '../../Components/Loader/Loader'
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  
  const { setToken, token,setUserDetail } = useAuth()
  const [loginData, setLoginData] = useState({})
  const [errors, setErrors] = useState([])
  const [loader, setLoader] = useState(false)

  const handleLoginChange = (e) => {

    const { name, value } = e.target

    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const LoginApi = (e) => {
    e.preventDefault()
    var data = loginData
    data['role'] = "customer"
    setLoader(true)
    axios.post("auth/login", data).then(response => {
      // console.log(response)
      
      setErrors([])
      setToken(response.data.data.tokens.access);
      setUserDetail(JSON.stringify(response.data.data.user));
      setLoginData({})
      setLoader(false)
    }).catch(error => {
      console.log(error)
      if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403 || error.response.status === 404 || error.response.status === 406) {
        setErrors(error.response.data.errorMessage)
      }
      else {
        setErrors([])
      }
      setLoader(false)
    })
  }

  
  const responseMessage = (response) => {
    // console.log(response,'============');
    setLoader(true)
    const idToken = response.credential;
    axios.post("/auth/googleSignIn", {
      token:idToken
    })
      .then((response) => {
        console.log(response.data)

          setToken(response.data.data.tokens.access);
          setUserDetail(JSON.stringify(response.data.data.user));
          // navigate('/')
          setLoader(false)
       
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoader(false)
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (

    <div
      className="
  
      d-flex
      justify-content-center
      align-items-center
      min-vh-100
    "
    >

      {loader && <Loader/>}


      <div className="row border rounded-5 p-3 bg-white shadow box-area">


        <div
          className="
          col-md-6
          rounded-4
          d-flex
          justify-content-center
          align-items-center
          flex-column
          left-box
        "

          style={{ background: "#9d0208ff" }}
        >
          <div className="featured-image mb-3">
            <img src="" className="img-fluid"

              style={{ width: '250px' }} />
          </div>
          <p
            className="text-white fs-2"

            style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}>
            Welcome!
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}>
            Log in to send and receive money with ease. Your financial world,
            just a click away
          </small>
        </div>



        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Payora</h2>
              <p>We are happy to have you.</p>
            </div>

            <div id="messageContainer" className="mb-3">
              <div id="errorMessage" className="alert alert-danger d-none"></div>
              <div id="successMessage" className="alert alert-success d-none"></div>
            </div>


            <form id="loginForm" onSubmit={LoginApi}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  required
                  value={loginData['email']}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  required
                  value={loginData['password']}
                  onChange={handleLoginChange}
                />
              </div>
              <div>
                
                {errors.length >0 && errors.split(',').map((data,index)=>{
                  return <p className='m-0' style={{fontSize:'10px',color:'red'}}>{data}</p>
                })}

              </div>
              <div className="input-group mb-3 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="remember"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label for="formCheck" className="form-check-label text-secondary"
                  ><small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small><a href="/forgot-password">Forgot Password?</a></small>
                </div>
              </div>

              
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg w-100 fs-6 text-white" style={{background:"#9d0208ff"}}>
                  Login
                </button>
              </div>
            </form>


            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />


            <div className="row mt-1">
              <small>Don't have an account? <a href="/register">Sign Up</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
