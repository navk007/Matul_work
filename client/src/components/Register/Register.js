import React,{useState} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import './Reg.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'

function Register() {
  const navigate = useNavigate();
    const[data,setData]=useState({name:"",email:"",password:"",confirmPassword:"",});
    
  function changeHandler(e){
    setData((prev)=>({...prev,[e.target.name]:e.target.value}));
    // console.log(data);
  }

  async function handleRegister (){
    try{
      const url='http://localhost:3001/api/v1/register';
      const res= await axios.post(url,data);
      
      console.log(res);
    }
    catch(er){
      console.log(er);
    }
  }

  
  return (
    <div className='regCon'>
    <MDBContainer fluid className='p-4 h-100  background-radial-gradient '>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Unlock Your Voice <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>Join Our Blogging Community Today! </span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Welcome to our blog community! Dive into a world of knowledge, 
          inspiration, and creativity. Share your unique voice,
           explore captivating articles, and connect with fellow enthusiasts. 
           Register now to embark on a journey of discovery and contribute your 
           own insights to our engaging platform."
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              {/* <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow> */}
              <MDBInput wrapperClass='mb-4' label='Name' id='form2' type='text' name='name' onChange={(e)=>changeHandler(e)}/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' name='email' onChange={(e)=>changeHandler(e)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' name='password' onChange={(e)=>changeHandler(e)}/>
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form5' type='password' name='confirmPassword' onChange={(e)=>changeHandler(e)}/>

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='w-100 mb-4 mt-4' size='md' onClick={handleRegister}>
                Register
                </MDBBtn>

              <div className="text-center">

                <p>or </p>

              <MDBBtn className='w-100 mb-4 mt-2' size='md' onClick={()=>navigate('/login')}>
                Login
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Register