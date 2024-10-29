import React, { useState } from 'react'
import axios from '../../Api/axios'
import { useAuth } from '../../Provider/AuthProvider'
import Loader from '../../Components/Loader/Loader'
import { useNavigate } from 'react-router-dom';
export default function ForgotPassword() {
  const [forgotData, setForgotData] = useState({})
  const [errors, setErrors] = useState([])
  const [loader, setLoader] = useState(false)
  const [isOtp, setIsOtp] = useState(false)
  const [otpData, setOtpData] = useState({})
  const [isNewPassowrd, setIsNewPassword] = useState(false)
  const [newPasswordData, setNewPasswordData] = useState({})
  const navigate = useNavigate()

  const handleForgotChange = (e) => {
    const { name, value } = e.target

    setForgotData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleOtpChange = (e) => {
    const { name, value } = e.target

    setOtpData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleNewPasswordChange = (e) => {
    const { name, value } = e.target

    setNewPasswordData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const forgotApi = (e) => {
    e.preventDefault()

    setLoader(true)
    var data = forgotData
    data['role'] = "customer"
    axios.post("/auth/forgot-password/", data)
      .then(response => {
        console.log(response)
        setIsOtp(true)
        setErrors([])
        alert('Password reset email sent successfully')

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

  const verifyOtpApi = (e) => {
    e.preventDefault()

    setLoader(true)
    var data = otpData
    data['email'] = forgotData.email
    data['role'] = "customer"



    axios.post("/auth/verify-code/", data)
      .then(response => {
        console.log(response)
        setIsNewPassword(true)
        setErrors([])
        setIsOtp(false)
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

  const newPasswordApi = (e) => {
    e.preventDefault()

    setLoader(true)
    var data = newPasswordData
    data['email'] = forgotData.email

    data['role'] = "customer"
    console.log(data)

    axios.post("/auth/reset-password/", data)
      .then(response => {
        console.log(response)
        setIsNewPassword(false)
        setErrors([])
        // alert('Password reset successfully')
        navigate('/')
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

  
  return (
    <div
      className="

    d-flex
    justify-content-center
    align-items-center
    min-vh-100
  "
    >

      {loader && <Loader />}

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


            {!isOtp && !isNewPassowrd && <form id="loginForm" onSubmit={forgotApi}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  required
                  value={forgotData['email']}
                  onChange={handleForgotChange}
                />
              </div>

              <div>

                {errors.length > 0 && errors.split(',').map((data, index) => {
                  return <p className='m-0' style={{ fontSize: '10px', color: 'red' }}>{data}</p>
                })}
              </div>

              <div>

               
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg w-100 fs-6 text-white" style={{ background: "#9d0208ff" }}>
                  Forgot
                </button>
              </div>
            </form>}

            {isOtp && !isNewPassowrd && <form id="loginForm" onSubmit={verifyOtpApi}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="code"
                  name="code"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Enter OTP"
                  required
                  value={otpData['code']}
                  onChange={handleOtpChange}
                />
              </div>

              {errors.length > 0 && errors.split(',').map((data, index) => {
                  return <p className='m-0' style={{ fontSize: '10px', color: 'red' }}>{data}</p>
                })}
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg w-100 fs-6 text-white" style={{ background: "#9d0208ff" }}>
                  Next
                </button>
              </div>
            </form>}

            {isNewPassowrd && <form id="loginForm" onSubmit={newPasswordApi}>
              <div className="input-group mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Enter New Password"
                  required
                  value={newPasswordData['password']}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div>

                {errors.length > 0 && errors.split(',').map((data, index) => {
                  return <p className='m-0' style={{ fontSize: '10px', color: 'red' }}>{data}</p>
                })}
              </div>

              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg w-100 fs-6 text-white" style={{ background: "#9d0208ff" }}>
                  Save
                </button>
              </div>
            </form>}





            <div className="row">
              <small>Have an account? <a href="/">Sign In</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
