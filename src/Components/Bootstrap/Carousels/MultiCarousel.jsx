import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import imageOne from './../../../assets/images/imageOne.jpg';
import imageTwo from './../../../assets/images/imageTwo.jpg';
import imageThree from './../../../assets/images/imageThree.jpg';

export default function MultiCarouselExample() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Container className='mt-4'>
    <section data-bs-theme="light">
     <h1> Multi Carousels Examples</h1>
     <hr></hr>
     <h3>Auto play Carousel</h3>
     <p>Allow the component to control its own state with interval set to 3 seconds</p>
     <hr></hr>
     <Row>
        <Col lg={12} md={12} sm={12}>
      <div className='position-relative d-grid gap-3' >
        <Carousel 
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {/* item one */}
          <Card className='m-2'>
          <Card.Img variant="top" src={imageOne} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* item two */}
        <Card className='m-2'>
          <Card.Img variant="top" src={imageTwo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* item three */}
        <Card className='m-2'>
          <Card.Img variant="top" src={imageThree} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          {/* item four */}
          <Card className='m-2'>
          <Card.Img variant="top" src={imageOne} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          {/* item five */}
          <Card className='m-2'>
          <Card.Img variant="top" src={imageTwo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          {/* item six */}
          <Card className='m-2'>
          <Card.Img variant="top" src={imageThree} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Carousel>
      </div>
      </Col>
      </Row>
      </section>
      </Container>
      
  );
}
