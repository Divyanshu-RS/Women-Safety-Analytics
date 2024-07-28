import React, { useState } from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AboutUs() {
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
        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 0)} onMouseEnter={() => setHoveredCard(0)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(0)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h3 className='text-center'><strong>About Us</strong></h3><br />
                <p>
                  The mission of <b>Hope Wave No Poverty</b> is to end poverty and provide possibilities for people who are in need. We feel that everyone should have access to the needs of life and have the opportunity to create a better future. Our purpose is based on compassion and empowerment. as an enthusiastic group dedicated to building an environment in which poverty is a thing of the past. Our goal is to provide opportunities for a future free from the bonds of poverty because we firmly believe that every person should have access to the needs of life.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

<div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 2)} onMouseEnter={() => setHoveredCard(2)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(2)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Who We Are?</strong></h5><br />
                <p>
                 Hope Wave No Poverty is a movement led by a group of enthusiastic people who think that working together can make a big difference, not merely an organization. With the unifying objective of ending poverty, our varied team brings together experts from a range of disciplines, including social work, economics, healthcare, and education.

                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 1)} onMouseEnter={() => setHoveredCard(1)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(1)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Our Vision</strong></h5><br />
                <p>
                 Think about a society in which poverty has faded into the past and has been replaced with prosperous neighborhoods, capable people, and fair opportunities for all. We at Hope Wave No Poverty are committed to using sustainable development projects to end poverty and improve communities. Our commitment rests in equipping individuals and families with the necessary means to escape the cycle of poverty, so enabling them to live honorable and satisfying lives.

                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div> 

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 3)} onMouseEnter={() => setHoveredCard(3)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(3)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Our Approach</strong></h5><br />
                <p>
                  Since poverty has many facets and ingrained roots, we support a comprehensive strategy to solve it. Our initiatives target the core causes of poverty by emphasizing community development, healthcare, education, and economic empowerment. Through addressing these interrelated factors, our goal is to bring about long-lasting change that will improve whole communities.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 4)} onMouseEnter={() => setHoveredCard(4)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(4)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Transparency and Accountability</strong></h5><br />
                <p>
                  In all that we do, Hope Wave No Poverty is dedicated to openness and responsibility. We think that all of our stakeholders—donors, partners, and the communities we work with—have a right to understand the impact of their contributions. To maintain openness in our business practices, we frequently offer financial reports, impact assessments, and project updates.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 5)} onMouseEnter={() => setHoveredCard(5)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(5)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Collaboration and Partnerships</strong></h5><br />
                <p>
                  We recognize that the battle against poverty is a team effort. In order to maximize our effect, Hope Wave No Poverty actively pursues collaborations with corporations, government agencies, and other like-minded groups. Together, we can make better use of our resources and abilities to solve the structural issues surrounding poverty.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 6)} onMouseEnter={() => setHoveredCard(6)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(6)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Get Involved</strong></h5><br />
                <p>
                  We cordially encourage you to join us in this admirable endeavor as we work together to eradicate poverty from the globe. There are several ways for you to support our cause as a person, business, or charitable organization. Look through our "Get Involved" section to find ways to volunteer, donate, and form relationships.
                  <a href='/Login' target="_blank" rel="noopener noreferrer"> Get Involved</a>
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12 d-flex justify-content-center align-items-center'>
           <a href="/Registration" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary">Join us now</Button>{' '}</a>
          </div>
        </div>
      </div>
    </>
  );
}
