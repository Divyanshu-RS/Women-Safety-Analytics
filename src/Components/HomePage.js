import React, { useState } from 'react';
import Navigation from './Navigation';
import { Row, Col, Button, Card } from 'react-bootstrap';

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCardStyle = (isHovered) => ({
    width: '100%',
    margin: '1rem auto',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    transform: isHovered ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.4)' : '0 6px 12px rgba(0,0,0,0.2)',
    perspective: '1000px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
    background: 'linear-gradient(145deg, #333333, #000000)',
    color: '#fff'
  });

  const getReflectionStyle = () => ({
    content: '""',
    position: 'absolute',
    bottom: '-100%',
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
    transform: 'scaleY(-1)',
    zIndex: -1,
  });

  const getImageStyle = (isHovered, position = { top: '0', left: '0' }) => ({
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.5)' : '0 5px 10px rgba(0,0,0,0.2)',
    borderRadius: '15px',
    objectFit: 'cover',
    position: 'relative',
    // Adjust these values as needed in `rem` units to position the image
    top: position.top, // Change this value to adjust the vertical position
    left: position.left, // Change this value to adjust the horizontal position
    margin: 'auto', // Center the image if needed
  });

  const handleTouchStart = (index) => {
    setHoveredCard(index);
  };

  return (
    <>
      <Navigation />
      <div
        className='container mt-3'
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, #434343 100%)',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Row className='text-center my-5'>
          <Col>
            <Card style={getCardStyle(hoveredCard === 0)} onMouseEnter={() => setHoveredCard(0)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(0)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <Card.Title style={{ color: '#e0e0e0', fontSize: '2rem', fontWeight: 'bold' }}>Welcome to Hope Wave No Poverty</Card.Title>
                <Card.Text>Eliminating Poverty and Working Together to Build a Better Future</Card.Text>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col>
            <Card style={getCardStyle(hoveredCard === 1)} onMouseEnter={() => setHoveredCard(1)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(1)} onTouchEnd={() => setHoveredCard(null)}>
              <Row noGutters>
                <Col lg={6}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Health:</Card.Title>
                    <Card.Text>
                      Approximately 18 million people annually or one-third of all deaths world widie from poverty-related causes. The bulk of these deaths, which happen at a pace of 50,000 each day, disproportionately impact those living in underdeveloped countries. The harsh effects of persistent poverty are particularly felt by women and children, who are disproportionately overrepresented among the world's destitute.
                    </Card.Text>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>What we do?</Card.Title>
                    <Card.Text>by arranging <b>Health Education Programs;</b></Card.Text>
                    <ul>
                      <li>Develop health education initiatives to increase public knowledge of the value of obtaining medical attention, proper diet, hygiene, and preventative healthcare behaviors.</li>
                      <li>Organize talks and seminars on issues including illness prevention, maternity and child health, and family planning.</li>
                    </ul>
                  </Card.Body>
                </Col>
                <Col lg={6}>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-photo/children-wearing-face-mask-extreme-pollution_23-2150879836.jpg"
                    height='370px'
                    width='10px'
                    style={getImageStyle(hoveredCard === 1, { top: '2rem', left: '-0.9rem' })} // Adjust position for the first image here
                  />
                </Col>
              </Row>
              <div style={getReflectionStyle()}></div>
            </Card>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col>
            <Card style={getCardStyle(hoveredCard === 2)} onMouseEnter={() => setHoveredCard(2)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(2)} onTouchEnd={() => setHoveredCard(null)}>
              <Row noGutters>
                <Col lg={6}>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/premium-photo/illustration-10-little-hindu-girls-sitting-floor-row-eati_945369-19444.jpg"
                    height='350px'
                    width='1px'         
                    style={getImageStyle(hoveredCard === 2, { top: '2.25rem', left: '0.7rem' })} // Adjust position for the second image here
                  />
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}><br></br>Hunger:</Card.Title>
                    <Card.Text>
                      The Global Hunger Index estimates that 1.02 billion people go hungry every night, and that Sub-Saharan Africa had the worst rate of child malnutrition in the world between 2001 and 2006. Less fortunate people spend a higher percentage of their budgets on food than do wealthy people, which makes them more vulnerable to changes in food costs. Remarkably, in late 2007, increases in grain prices caused food-related riots in certain countries.
                    </Card.Text>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>What we do?</Card.Title>
                    <Card.Text>by arranging <b>Food Distribution Programs;</b></Card.Text>
                    <ul>
                      <li>Establish ongoing food distribution initiatives to give the underprivileged access to wholesome meals.</li>
                      <li>Work together with farmers, companies, and food banks in your community to ensure a consistent supply of food.</li>
                    </ul>
                  </Card.Body>
                </Col>
              </Row>
              <div style={getReflectionStyle()}></div>
            </Card>
          </Col>
        </Row>

        <Row className='my-4'>
          <Col>
            <Card style={getCardStyle(hoveredCard === 3)} onMouseEnter={() => setHoveredCard(3)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(3)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body className='text-center'>
                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>Get Involved</Card.Title>
                <Card.Text>Together, we can make a difference. Join us in our mission to end poverty. Here's how you can get involved:</Card.Text>
                <a href="https://pmnrf.gov.in/en/online-donation" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem', margin: '0.5rem' }}>Donate Now</Button>
                </a>
                <a href="/Login" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem', margin: '0.5rem' }}>Volunteer</Button>
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
