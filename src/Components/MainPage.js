import React, { useState } from 'react';
import Navigation from './Navigation';
import Carousel from 'react-bootstrap/Carousel';
import './MainPage.css';
import { Button,} from 'react-bootstrap';

export default function MainPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  return (
    <>
      <Navigation />
      <div className="main-container">
         <a href='/Home'>
                  <Button variant="secondary" style={{ borderRadius: '8px', padding: '0.5rem 1.5rem', margin: '0.5rem', background: 'linear-gradient(to bottom, #000000 0%, #434343 100%)', boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)',  }}>Click here to continue</Button>
                </a>
        <br />
        <Carousel fade>
          <Carousel.Item
            className={hoveredIndex === 0 ? 'hovered' : ''}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="carousel-img-wrapper">
              <img
                src="https://www.canadahelps.org/media/image007.jpg"
                alt=""
                className="d-block w-100 carousel-img"
              />
              <div style={getReflectionStyle()}></div>
            </div>
            <div className="carousel-caption-wrapper">
              <div className="carousel-caption">
                <h3>Poverty</h3>
                <p>
                  Poverty is a complex and multidimensional social issue
                  characterized by the lack of resources necessary for a minimum
                  standard of living. It encompasses various dimensions,
                  including economic, social, and cultural factors.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            className={hoveredIndex === 1 ? 'hovered' : ''}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="carousel-img-wrapper">
              <img
                src="https://static.vecteezy.com/system/resources/previews/026/899/984/non_2x/of-emotional-dynamic-pose-indian-kid-in-school-ai-generative-free-photo.jpg"
                alt=""
                className="d-block w-100 carousel-img"
              />
              <div style={getReflectionStyle()}></div>
            </div>
            <div className="carousel-caption-wrapper">
              <div className="carousel-caption">
                <h3>Social Inequality</h3>
                <p>
                  Poverty is closely tied to social inequalities, including
                  factors such as gender, ethnicity, and race. Certain groups
                  may face higher rates of poverty due to systemic
                  discrimination.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            className={hoveredIndex === 2 ? 'hovered' : ''}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="carousel-img-wrapper">
              <img
                src="https://inmathi.com/wp-content/uploads/2022/06/47318885382_6e65ddd536_o-980x652.jpg"
                alt=""
                className="d-block w-100 carousel-img"
              />
              <div style={getReflectionStyle()}></div>
            </div>
            <div className="carousel-caption-wrapper">
              <div className="carousel-caption">
                <h3>Income Poverty</h3>
                <p>
                  Income poverty is often measured by the income levels of
                  individuals or households. People living below a certain
                  income threshold, such as the poverty line, are considered to
                  be in poverty.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
