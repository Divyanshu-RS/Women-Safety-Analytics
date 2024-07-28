import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { Card, Row, Col } from 'react-bootstrap';
import watermark from './HWNP1.png';

// Add black mirror effect style
const blackMirrorEffect = {
  position: 'relative',
  overflow: 'hidden',
};

const mirrorEffectStyle = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))',
  transform: 'scaleY(-1)',
  opacity: 0.6,
  zIndex: '-1',
};

export default function Registration() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    const { password, confirmPassword, fullname, email } = formData;
    if (fullname && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setIsButtonDisabled(false);
        setPasswordMatch(true);
      } else {
        setIsButtonDisabled(true);
        setPasswordMatch(false);
      }
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    background: 'linear-gradient(145deg, #333333, #000000)',
    color: '#fff',
    padding: '2rem',
    transition: 'all 0.3s ease-in-out',
    transform: 'scale(1)',
    width: '100%',
    maxWidth: '600px',
    margin: '1rem auto',
    textAlign: 'center',
    position: 'relative',
    ...blackMirrorEffect // Apply black mirror effect style
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

  const watermarkStyle = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: 'auto',
    opacity: 0.3,
    pointerEvents: 'none',
    zIndex: '-1.5'
  };

  const inputFieldStyle = {
    backgroundColor: 'transparent',
    border: '1.5px solid rgba(255, 255, 255, 0.3)',
    color: '#fff',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '10px',
    width: '100%',
    position: 'relative',
  };

  const mirroredPlaceholderStyle = (hasValue) => ({
    content: 'attr(placeholder)',
    color: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    opacity: hasValue ? 0 : 0.7,
    pointerEvents: 'none',
    zIndex: '-1',
    whiteSpace: 'nowrap',
    fontSize: '1rem',
  });

  const handleTouchStart = (card) => setHoveredCard(card);

  return (
    <>
      <Navigation />
      <div className='container'>
        <Row className='my-4 justify-content-center'>
          <Col xs={12}>
            <Card 
              style={hoveredCard === 1 ? hoveredCardStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(1)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Body>
                <img src={watermark} alt="Watermark" style={watermarkStyle} />
                
                <h2 className="text-center">Register</h2>
                <br></br>
                <form>
                  <div className="form-group">
                    <label htmlFor="fullname">Name <span className="text-danger">*</span></label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="fullname" 
                        name="fullname" 
                        value={formData.fullname}
                        onChange={handleChange}
                        required 
                        placeholder="Enter your name" 
                        style={inputFieldStyle}
                      />
                      <span style={mirroredPlaceholderStyle(formData.fullname)}>Enter your full name </span>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="Enter your email" 
                        style={inputFieldStyle}
                      />
                      <span style={mirroredPlaceholderStyle(formData.email)}>Enter your email</span>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password <span className="text-danger">*</span></label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                        placeholder="Enter your password" 
                        style={inputFieldStyle}
                      />
                      <span style={mirroredPlaceholderStyle(formData.password)}>Enter your password</span>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="confirmPassword">Confirm Password <span className="text-danger">*</span></label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required 
                        placeholder="Confirm your password" 
                        style={inputFieldStyle}
                      />
                      <span style={mirroredPlaceholderStyle(formData.confirmPassword)}>Confirm your password</span>
                    </div>
                    {!passwordMatch && <p className="text-danger mt-2">Passwords do not match.</p>}
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-outline-light mt-3" 
                    style={{ borderRadius: '20px', padding: '0.5rem 1.5rem' }}
                    disabled={isButtonDisabled}
                  >
                   <a href='/Login' className='text-decoration-none text-light'> Register</a>
                  </button>
                </form>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
<p id='text' style={{ textAlign: 'center' }}><br />Aready Registered, <span><a href="/Login" style={{ color: 'inherit', textDecoration: 'none' }}>Login here..</a></span></p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
