import React from 'react';
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
import './NewReg.css';

function NewReg() {
  return (
    <div className='regCon'>
    <MDBContainer fluid className='p-4 h-100 background-radial-gradient '>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Join Our Blogging Community Today!<br />
            {/* <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span> */}
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

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              
              <MDBBtn className='w-100 mb-4 mt-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or </p>

            <MDBBtn className='w-100 mb-4 mt-4' size='md'>Login</MDBBtn>

                

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default NewReg;
