import React, { useState } from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Welfare() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCardStyle = (isHovered) => ({
    width: '20rem',
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
        className='container'
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
          justifyContent: 'center',
          marginTop: '1rem' // Added marginTop for the gap
        }}
      >
        <div className='row my-5'>
          <div className='col-lg-12'>
            <h3 className='text-center' style={{ color: '#e0e0e0', fontSize: '2rem', fontWeight: 'bold' }}>How We Can Help</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4'>
            <Card
              style={getCardStyle(hoveredCard === 1)}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(1)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/R.1f4b602f7c51979681e27d11cb5b8a6d?rik=3nGfBKsn6ml%2fQQ&riu=http%3a%2f%2farteixeira.com%2fjuanteixeira%2fwp-content%2fuploads%2f2016%2f04%2fIdomeniKids-40.jpg&ehk=5cDg6eqZ87DcoUkxeFT2DCHDw327hUhETBOo0X%2fiiF8%3d&risl=&pid=ImgRaw&r=0"
                height='200px'
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Basic Needs Assistance</Card.Title>
                <Card.Text>
                  Food distribution programs to address immediate hunger.
                </Card.Text><br />
                <a href="https://www.feedingindia.org/requestfoodsupport" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem' }}>Click Here</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card
              style={getCardStyle(hoveredCard === 2)}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(2)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src="https://community.opogo.com/wp-content/uploads/2020/04/teacher-older-lesson-768x432.jpg"
                height='200px'
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Educational Empowerment</Card.Title>
                <Card.Text>
                  Scholarships and educational support for children and adults.
                </Card.Text><br />
                <a href="https://scholarships.gov.in/Students" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem' }}>Click Here</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card
              style={getCardStyle(hoveredCard === 3)}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(3)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/united-care-medical-team-joining-hands-solidarity_1037362-19044.jpg"
                height='200px'
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Health and Wellness Services</Card.Title>
                <Card.Text>
                  Access to healthcare resources, including medical check-ups and treatment assistance.
                </Card.Text>
                <a href="https://ab-hwc.nhp.gov.in/" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem' }}>Click Here</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className='row my-5'>
          <div className='col-lg-4'>
            <Card
              style={getCardStyle(hoveredCard === 4)}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(4)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src="https://fthmb.tqn.com/i6wUK0_sy3TnzkyEncQVMfXdkFI=/4948x3350/filters:fill(auto,1)/cropped-image-of-hand-putting-coins-in-jars-with-plants-755740897-5ab88ee1875db9003759d390.jpg"
                height='250px'
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Financial Aid and Microfinance</Card.Title>
                <Card.Text>
                  Financial assistance programs provide grants, loans, and counseling to alleviate economic difficulties and promote long-term stability.
                </Card.Text>
                <a href="https://financialservices.gov.in/beta/en" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem' }}>Click Here</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card
              style={getCardStyle(hoveredCard === 5)}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(5)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src="https://ruralindiaonline.org/media/images/IMG_8039.max-1000x500.jpg"
                height='250px'
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Employment Opportunities</Card.Title>
                <Card.Text>
                  Job Training Programs: Develop programs that offer job training and skills development to enhance employability.<br></br> <br></br>
                </Card.Text>
                <a href="https://www.ncs.gov.in//Pages/Search.aspx" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem' }}>Click Here</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card
              style={getCardStyle(hoveredCard === 6)}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(6)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src="https://cdn.brandfolder.io/XG3NESCC/at/mrb7b4gvcf36xmkmmks8mv6s/Womens_Employee_Resource_Group_Improves_Communities.jpg?quality=35"
                height='250px'
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Community Building</Card.Title>
                <Card.Text>
                  Social Support Programs: Create support networks and community groups to foster social connections and emotional well-being. <br></br> <br></br>
                </Card.Text>
                <a href="https://disha.gov.in/home" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" style={{ borderRadius: '10px', padding: '0.5rem 1.5rem' }}>Click Here</Button>
                </a>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
