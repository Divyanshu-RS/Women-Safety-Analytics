import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./MainPage.css";

export default function Login() {
  const [message, setMessage] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const emailInput = document.getElementById('inp1');
    const passwordInput = document.getElementById('inp2');
    const loginButton = document.getElementById('inp3');

    function checkInputs() {
      if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    }

    function handleLoginClick(event) {
      if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        event.preventDefault();
        setMessage('Please enter both email and password');
      } else {
        setMessage('');
      }
    }

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
    loginButton.addEventListener('click', handleLoginClick);

    // Initial check in case inputs are pre-filled
    checkInputs();

    // Cleanup event listeners on component unmount
    return () => {
      emailInput.removeEventListener('input', checkInputs);
      passwordInput.removeEventListener('input', checkInputs);
      loginButton.removeEventListener('click', handleLoginClick);
    };
  }, []);

  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    background: 'linear-gradient(145deg, #333333, #000000)',
    color: '#fff',
    padding: '2rem',
    transition: 'all 0.3s ease-in-out',
    transform: 'scale(1)',
    width: '100%',
    maxWidth: '500px',
    margin: '1rem auto',
    textAlign: 'center', // Align text to justify
  };

  const hoveredCardStyle = {
    ...cardStyle,
    boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
    transform: 'scale(1.05)',
  };

  const getReflectionStyle = () => ({
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '15px',
    zIndex: '-1',
    transform: 'scaleY(-1)',
    filter: 'blur(3px)',
    transition: 'opacity 0.3s ease-in-out',
  });

  const handleTouchStart = (card) => setHoveredCard(card);

  return (
    <>
      <Navigation />
      <div className='container'>
        <Row className='my-4 justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <Card style={hoveredCard === 1 ? hoveredCardStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(1)}
              onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 style={{ textAlign: 'center' }}><b>Member Login</b></h5>
                <br></br>
                <div style={{ marginBottom: '1rem', 'margin-left': '25px', }}>
                  <label htmlFor="email" className='ha'>Mail ID:</label>
                  <input className='h' type="email" id='inp1' placeholder="  email@mail.com" name="email" required style={{ width: '70%' }} />
                </div>
                <div style={{ marginBottom: '1rem', 'margin-left': '25px', }}>
                  <label htmlFor="password" className='ha'>Password:</label>
                  <input className='hi' type='password' id='inp2' placeholder="******" required style={{ width: '70%' }} />
                </div>
                <a href="/Home">
                  <input type="button" id="inp3" value="LOGIN" disabled style={{
                    width: '50%',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    backgroundColor: '#007bff',  // Set to your desired blue color
                    color: '#fff',               // Ensure the text color is readable
                    border: 'none'               // Remove default border
                  }} />
                </a>

                {message && <p className='error-message' style={{ color: 'red', textAlign: 'center' }}>message</p>}
               <p id='text' style={{ textAlign: 'center' }}><br />Forgot <span><a href="/Registration" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Username / password?</a></span></p>
              <a href="/Registration" target="_blank" rel="noopener noreferrer" id='a' style={{ display: 'block', textAlign: 'center'}}>Create your account->.</a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </Col>
        </Row>
        <Row className='my-4 justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <Card style={hoveredCard === 2 ? hoveredCardStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(2)}
              onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body className='text-center'>
                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>Get Involved</Card.Title>
                <Card.Text>Together, we can make a difference. Join us in our mission to end poverty. Here's how you can get involved:</Card.Text>
                <a href="https://pmnrf.gov.in/en/online-donation" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem', margin: '0.5rem' }}>Donate Now</Button>
                </a>
                <a href="/About" target="_blank" rel="noopener noreferrer">
                  <Button variant="info" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem', margin: '0.5rem' }}>Follow Us on Social Media</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
