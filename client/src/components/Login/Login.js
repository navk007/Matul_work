import React, { useState } from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import './Login.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const[data,setData]=useState({email:"",password:""});
  function changeHandler(e){
    setData((prev)=>({...prev,[e.target.name]:e.target.value}));
    // console.log(data);
  }

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const url = 'http://localhost:3001/api/v1/login';
      const res = await axios.post(url, data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      if (res.data.success) {
        window.location = '/';
      } else {
        // Alert the user that the credentials are incorrect
        alert('Incorrect email or password.');
      }
    } catch (error) {
      // Handle the error from the server
      console.error('Error logging in:', error);
      // Display an error message to the user
      alert('An error occurred while logging in. Please try again later.');
    }
  }

//   console.log('login page')

  return (
    
    <div className='loginCon'>
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlL' type='email' size="lg" name='email' onChange={(e)=>changeHandler(e)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' name='password' onChange={(e)=>changeHandler(e)} size="lg"/>


          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <MDBBtn className="mb-4 w-100 mt-4" size="lg" onClick={handleLogin}>Log in</MDBBtn>

          <div className='divider d-flex align-items-center justify-content-center my-4'>
              <p className='text-center fw-bold mx-3 mb-0'>OR</p>
            </div>

          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn> */}
          
          <MDBBtn className="mb-4 w-100 mt-4" size="lg" style={{backgroundColor: '#55acee'}} onClick={()=>navigate('/register')} >
            {/* <MDBIcon fab icon="twitter" className="mx-2"/> */}
            Create account
          </MDBBtn>
          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Login