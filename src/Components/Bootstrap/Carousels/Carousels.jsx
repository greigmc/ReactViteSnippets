import { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import imageOne from './../../../assets/images/imageOne.jpg';
import imageTwo from './../../../assets/images/imageTwo.jpg';
import imageThree from './../../../assets/images/imageThree.jpg';




export default function CarouselsExamples() {
    // Controlled Carousel via the activeIndex prop and onSelect handler.
    const [index, setIndex] = useState();
    const handleSelect = (selectIndex) => {
        setIndex(selectIndex);
    };
    
  return (
    <Container className='mt-4'> 
    <div className='container' data-bs-theme="light">
     <h1>Carousels Examples</h1>
     <hr></hr>
     <h3>Uncontrolled Carousel</h3>
     <p>Allow the component to control its own state with interval set to 2.5 seconds</p>
     <hr></hr>
     <Row>
        <Col lg={12} md={12} sm={12}>
            <Carousel interval={2500}>
                <Carousel.Item>
                    <img src={imageOne} alt="Image" className='carouselImg'  />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={imageTwo} alt="image" className='carouselImg' />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={imageThree} alt="image" className='carouselImg' />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row>

    <hr></hr>
     <h3>Controlled Carousel</h3>
     <p>Control the Carousel state, via the activeIndex prop and onSelect handler.</p>
    <hr></hr>
    <Row lg={12} md={12} sm={12}>
        <Col>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={imageTwo} alt="Image" className='carouselImg'  />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={imageThree} alt="image" className='carouselImg' />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={imageOne} alt="image" className='carouselImg' />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Col>
    </Row>

    <hr></hr>
     <h3>Crossfade Carousel</h3>
     <p>Add the fade prop to your carousel to animate slides with a fade transition instead of a slide.</p>
    <hr></hr>
    <Row>
        <Col lg={12} md={12} sm={12}>
            <Carousel fade>
                <Carousel.Item>
                    <img src={imageThree} alt="Image" className='carouselImg'  />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={imageTwo} alt="image" className='carouselImg' />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={imageOne} alt="image" className='carouselImg' />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
      </div>
    </Container>
  )
}
