import React, { useState } from 'react';
import Navigation from './Navigation';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from 'react-bootstrap/Card';

export default function ContactPage() {
  const [hovered, setHovered] = useState(false);

  const getCardStyle = (isHovered) => ({
    width: '100%',
    margin: '1rem auto',
    borderRadius: '15px',
    boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.4)' : '0 6px 12px rgba(0,0,0,0.2)',
    background: 'linear-gradient(145deg, #333333, #000000)',
    color: '#fff',
    padding: '2rem',
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  });

  return (
    <>
      <Navigation />
      <div
        className='container'
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, #434343 100%)', 
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)',
          color: '#fff',
          minHeight: '100vh',
          marginTop: '1rem'
        }}
      >
        <div
          style={{
            position: 'relative',
            padding: '2rem',
            marginBottom: '2rem',
            borderRadius: '20px',
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)',
            background: 'linear-gradient(to bottom, #000000 0%, #434343 100%)', 
          }}
        >
          <div className='row my-5'>
            <div className='col-lg-12 text-center'>
              <h3>Contact Hope Wave No Poverty</h3>
              <p style={{ marginBottom: '2rem' }}>
                Hope Wave No Poverty is headquartered in Delhi, with regional offices and project sites across the country. We encourage you to reach out to us for more information, collaboration inquiries, or to share your ideas on how we can work together to make a lasting impact.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <h5>Reach Out:</h5>
              <p style={{ marginBottom: '2rem' }}>
                For general inquiries, partnerships, or any other information, please feel free to reach out to us through the following channels:
              </p>
              <ul style={{ marginBottom: '2rem' }}>
                <li>Email: <span className='text-primary'>info@hopewavenopoverty.org</span></li>
                <li>Phone: +91 1800 -10987</li>
              </ul>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="m-2 p-2">
                  <a href="/About" className="p-2">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="/About" className="p-2">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="/About" className="p-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="/About" className="p-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row my-5'>
            <div className='col-lg-12'>
              <h5>Get Involved:</h5>
              <p style={{ marginBottom: '2rem' }}>
                Interested in joining our mission to eradicate poverty? Explore our "Get Involved" section to learn about volunteering opportunities, donations, and partnership programs.
                <a href='/Login'>Get Involved</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className='row my-5'>
          <div className='col-lg-12'>
            <Card
              style={getCardStyle(hovered)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onTouchStart={() => setHovered(true)}
              onTouchEnd={() => setHovered(false)}
            >
              <Card.Body>
                <h2 className="text-center">Contact Us</h2>
                <form 
                  action="https://api.web3forms.com/submit" 
                  method="POST"
                >
                  <input 
                    type="hidden" 
                    name="access_key" 
                    value="d15e087d-35da-4d13-b0cb-d48ca7c0b23a" 
                  />
                  <div className="form-group">
                    <label htmlFor="fullname">Name <span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="fullname" 
                      name="fullname" 
                      required 
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      required 
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="message">Message <span className="text-danger">*</span></label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message" 
                      rows="3" 
                      required 
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-outline-light mt-3" 
                    style={{ borderRadius: '20px', padding: '0.5rem 1.5rem' }}
                  >
                    Send Message
                  </button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
