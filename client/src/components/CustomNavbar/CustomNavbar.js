import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { useNavigate} from 'react-router-dom';
import './CustomNavbar.css';



function CustomNavbar({ onSelect, ...props }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    window.location = '/';
  }

  return (
    <Navbar className="custom-navbar" >
      <div className="navbar-left">
        <Navbar.Brand >BLOGSPOT</Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />} onClick={()=>navigate('/')}  >Home</Nav.Item>
          <Nav.Item onClick={()=>navigate('/myblogs')} >My Blogs</Nav.Item>
          <Nav.Item onClick={()=>navigate('/allblogs')}  >All blogs</Nav.Item>
        </Nav>
      </div>
      <Nav pullRight className="navbar-right">
        <Nav.Item onClick={handleLogout} >Logout</Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;