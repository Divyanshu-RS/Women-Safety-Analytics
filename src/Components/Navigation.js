import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../hwnp.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))', // Transparent dark black shine
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
        borderRadius: '8px', // Rounded corners
        backdropFilter: 'blur(8px)', // Slight blur for a frosted glass effect
        minHeight: '20px',
      }}
    >
      <div className="container-fluid">
       <Navbar.Brand href="/Home" style={{ display: 'flex', alignItems: 'left' }}>
  <img
    id="logo"
    src={logo}
    alt="Loading"
    width="230"
    height="150"
    style={{
      borderRadius: '50%',
      marginRight: '-3rem',
      paddingTop: '2.5rem' // Add this line to move the logo down
    }}
  />  
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto" id="list">
            <Nav.Item>
              <Link
                to="/Home"
                className="nav-link"
                aria-current="page"
                style={{
                  color: '#f8f9fa',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/About"
                className="nav-link"
                style={{
                  color: '#f8f9fa',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}
              >
                About us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/Welfare"
                className="nav-link"
                style={{
                  color: '#f8f9fa',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}
              >
                Welfare for the Needy
              </Link>
            </Nav.Item>

          <NavDropdown
    title="Donate"
    id="collapsible-nav-dropdown"
    className="text-light"
  >
    <div
      style={{
        position: 'absolute',
        top: '1%',
        left: '50%',
        transform: 'translateX(-65%)',
        display: 'flex',
        gap: '0.5rem',
        padding: '0.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        whiteSpace: 'nowrap',
        zIndex: 1 // Ensure dropdown appears above other content
      }}
    >
      <NavDropdown.Item
        href="#action/3.1"
        style={{
          color: '#000',
          backgroundColor: '#ffffff',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e9ecef';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <a href="https://pmnrf.gov.in/en/online-donation" target="_blank" rel="noopener noreferrer">Money</a>
      </NavDropdown.Item>
      <NavDropdown.Item
        href="#action/3.2"
        style={{
          color: '#000',
          backgroundColor: '#ffffff',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e9ecef';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <a href="https://www.feedingindia.org/donate/feedingindia#donate-section" target="_blank" rel="noopener noreferrer">Food</a>
      </NavDropdown.Item>
      <NavDropdown.Item
        href="#action/3.3"
        style={{
          color: '#000',
          backgroundColor: '#ffffff',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e9ecef';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <a href="https://clothesboxfoundation.org/donate-now/" target="_blank" rel="noopener noreferrer">Clothes</a>
      </NavDropdown.Item>
      <NavDropdown.Item
        href="#action/3.4"
        style={{
          color: '#000',
          backgroundColor: '#ffffff',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e9ecef';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          e.target.style.transform = 'scale(1)';
        }}
      >
       <a href="/Home" target="_blank" rel="noopener noreferrer">Others</a> 
      </NavDropdown.Item>
    </div>
  </NavDropdown>

            <Nav.Item>
              <Link
                to="/Contact"
                className="nav-link"
                style={{
                  color: '#f8f9fa',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}
              >
                Contact us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/Login"
                className="nav-link"
                style={{
                  color: '#f8f9fa',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}
              >
                Login
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Navigation;