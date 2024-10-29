import React, { useEffect, useState } from 'react'
import axios from '../../Api/axios'
import { useAuth } from '../../Provider/AuthProvider'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
export default function Register() {
  const {setToken,setUserDetail} = useAuth()
  const [registerData, setRegisterData] = useState({})
  const [errors, setErrors] = useState([])
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()

 

  const handleRegisterChange = (e) => {
    const { name, value } = e.target

    setRegisterData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const registerApi = (e) => {
    e.preventDefault()
    setLoader(true)
    axios.post('/auth/signUp', registerData)
      .then(response => {
        console.log(response)
       

          setToken(response.data.data.tokens.access);
            setUserDetail(JSON.stringify(response.data.data.user));
            setErrors([])
            navigate('/')
          setLoader(false)
      
        
      }).catch(error => {
        console.log("error",error)
        if ( error.response.status === 400 || error.response.status === 401 || error.response.status === 403 || error.response.status === 404 || error.response.status === 406) {
         
          setErrors(error.response.data.errorMessage)
          
        }
        setLoader(false)
      })
  }

  const responseMessage = (response) => {
    // console.log(response,'============');
    setLoader(true)
    const idToken = response.credential;
    axios.post("/auth/googleSignUp", {
      token:idToken
    })
      .then((response) => {
        console.log(response.data)

          setToken(response.data.data.tokens.access);
          setUserDetail(JSON.stringify(response.data.data.user));
          navigate('/')
          setLoader(false)
       
      })
      .catch((error) => {
        if ( error.response.status === 400 || error.response.status === 401 || error.response.status === 403 || error.response.status === 404 || error.response.status === 406) {
         
          setErrors(error.response.data.errorMessage)
          
        }
        setLoader(false)
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (

    <div
      class="
        container
        d-flex
        justify-content-center
        align-items-center
        min-vh-100
      "
    >
      {loader && <Loader/>}

      <div class="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          class="
            col-md-6
            rounded-4
            d-flex
            justify-content-center
            align-items-center
            flex-column
            left-box
          "

          style={{ background: '#9d0208ff' }}
        >
          <div class="featured-image mb-3">
            <img src="" class="img-fluid"
              // style="width: 250px"
              style={{ width: '250px' }}
            />
          </div>
          <p
            class="text-white fs-2"
            // style="
            //   font-family: 'Courier New', Courier, monospace;
            //   font-weight: 600;
            // "
            style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}
          >
            Welcome!
          </p>
          <small
            class="text-white text-wrap text-center"
            // style="width: 17rem; font-family: 'Courier New', Courier, monospace"
            style={{ width: "17rem", fontFamily: "'Courier New', Courier, monospace" }}
          >Log in to send and receive money with ease. Your financial world,
            just a click away</small>
        </div>

        <div class="col-md-6 right-box">
          <div class="row align-items-center">
            <div class="header-text mb-4">
              <h2>Payora</h2>
              <p>We are happy to have you back.</p>
            </div>



            <form onSubmit={registerApi}>

              <div class="input-group mb-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={registerData["firstName"]}
                  onChange={handleRegisterChange}
                  class={"form-control form-control-lg bg-light fs-6 "}
                  required

                />
               
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={registerData["lastName"]}
                  onChange={handleRegisterChange}
                  class={"form-control form-control-lg bg-light fs-6 "}
                  required

                />
              
              </div>

              <div class="input-group mb-3">
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  value={registerData["email"]}
                  onChange={handleRegisterChange}
                  class={"form-control form-control-lg bg-light fs-6 "}
                  required
                />
                
              </div>
              <div class="input-group mb-1">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerData["password"]}
                  onChange={handleRegisterChange}
                  class={"form-control form-control-lg bg-light fs-6 "}
                  required
                />
               
              </div>
              {/* <div class="input-group mb-5 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="formCheck"
                  />
                  <label for="formCheck" class="form-check-label text-secondary"
                  ><small>Remember Me</small></label>
                </div>
              </div> */}

              <div>
                
                {errors.length >0 && errors.split(',').map((data,index)=>{
                  return <p className='m-0' style={{fontSize:'10px',color:'red'}}>{data}</p>
                })}
              </div>
              <div class="input-group mt-3 mb-3">
                <button class="btn btn-lg text-white w-100 fs-6" style={{ background: "#9d0208ff" }}>Sign Up</button>
              </div>



              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </form>


            <div class="row mt-3">
              <small>already have an account? <a href="/login">Sign In</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
