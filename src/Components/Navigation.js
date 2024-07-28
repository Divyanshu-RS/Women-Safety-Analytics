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
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
        borderRadius: '8px', 
        backdropFilter: 'blur(8px)', 
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
              paddingTop: '2.5rem'
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
                  transition: 'text-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
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
                  transition: 'text-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
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
                  transition: 'text-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
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
                  zIndex: 1 
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
                  <a href="https://pmnrf.gov.in/en/online-donation" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>Money</a>
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
                  <a href="https://www.feedingindia.org/donate/feedingindia#donate-section" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>Food</a>
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
                  <a href="https://clothesboxfoundation.org/donate-now/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>Clothes</a>
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
                  <a href="/Login" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>Others</a>
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
                  transition: 'text-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Contact
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
                  transition: 'text-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
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
