import { Container, Row, Col, } from 'react-bootstrap';
import './ImageOverlay.css';


export default function ImageOverlay() {

  return (
    // <div>ImageOverlay</div>
    <div className="blog">
      {/* <Container fluid className='mb-4'> 
        <img src="https://www.loreal.com/-/media/project/loreal/brand-sites/corp/master/lcorp/4-brands/loreal-luxe-division/zendaya-hero.png?rev=f8befc29be7c467d81b97a5e0852feaf&cx=0.51&cy=0.46&cw=1920&ch=800&blr=False&hash=CBA64641FD37561483EEB6D6F2764CA3" alt="" />
        <Carousel.Caption className='text-start banner'>
          <h2>A Deep Dive Into Beauty</h2>
          <Button variant="light" size="sm">Discover LOréal Groupe</Button>{' '}
        </Carousel.Caption>
      </Container> */}
<h2 className='my-4'>Image text overlay using Flexbox</h2>
<Container fluid className='mb-4 text-light d-flex justify-content-between text-start position-relative'> 
<img src="https://placehold.co/1600x400/000/000/png" alt="" />

<div className='mb-4 text-light d-flex justify-content-between text-start position-absolute w-100 h-100'> 
      <div className="d-flex m-2 justify-content-between flex-column">
        <h2>Text</h2>
        <h2>Text</h2>
        <h2>Text</h2>
        </div>

        <div className="d-flex m-2 justify-content-between flex-column">
        <h2>Text</h2>
        <h2>Text</h2>
        <h2>Text</h2>
        </div>

        <div className="d-flex m-2 justify-content-between flex-column">
        <h2>Text</h2>
        <h2>Text</h2>
        <h2>Text</h2>
        </div>
      </div>
      </Container>      
 
        <Container className='mb-4'>
        <h2 className='mt-2'>Collection of Image overlays</h2>
          <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row'>
          {/* <Col lg={2} md={2} sm={6} className='my-4 overflow-hidden text-start' >
          <em>Discover</em>
            <h2>Our beautiful stories</h2>
          </Col> */}
          <Col lg={4} md={4} sm={6} className='my-4 overflow-hidden text-start' >
              <div className="item animated wow fadeIn">
                  <img src="https://placehold.co/216x400/000/000/png" alt="" />
                  <div className="overlay top-overlay">
                    <div className="text">Top Overlay</div>
                </div>
                </div>
            </Col>
            <Col lg={4} md={4} sm={6} className='my-4 overflow-hidden text-start' >
              <div className="item animated wow fadeIn">
                  <img src="https://placehold.co/216x400/000/000/png" alt="" />
                  <div className="overlay bottom-overlay">
                <div className="text">Bottom Overlay</div>
            </div>
            </div>
            </Col>
            <Col lg={4} md={4} sm={6} className='my-4 overflow-hidden text-start' >
            <div className="item animated wow fadeIn">
                  <img src="https://placehold.co/216x400/000/000/png" alt="" />
                  <div className="overlay right-overlay">
                <div className="text">Right Overlay</div>
            </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} className='my-4 overflow-hidden text-start' >
            <div className="item animated wow fadeIn">
                  <img src="https://placehold.co/216x400/000/000/png" alt="" />
                  <div className="overlay left-overlay">
                <div className="text">Left Overlay</div>
            </div>
            </div>
            </Col>
            <Col lg={4} md={4} sm={6} className='my-4 overflow-hidden text-start' >
            <div className="item animated wow fadeIn">
                  <img src="https://placehold.co/216x400/000/000/png" alt="" />
                  <div className="overlay fade-overlay">
                    <div className="text">Fade in overlay</div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} className='my-4 overflow-hidden text-start' >
            <div className="item animated wow fadeIn">
                  <img src="https://placehold.co/216x400/000/000/png" alt="" />
                  <div className="overlay title-overlay">
                <div className="text">Image Overlay Title</div>
              </div>
              </div>
            </Col>
        </Row>
        </Container>

      </div>
  )
}
