import {
  Carousel,
  Card,
  ListGroup,
  Accordion,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import imageOne from "./../assets/images/imageOne.jpg";
import imageTwo from "./../assets/images/imageTwo.jpg";
import imageThree from "./../assets/images/imageThree.jpg";
import MultiCarouselExample from "../Components/Bootstrap/Carousels/MultiCarousel";
import AutoComplete from "../Components/Bootstrap/Forms/AutoComplete";
// import MultiStepForm from '../Components/Bootstrap/Forms/MultiStepForm';

export default function HomePage() {
  return (
    <section className="mt-4">
      <h1>Components &amp; Layouts Library</h1>
      <p>built using Vite &amp; React</p>
      <hr></hr>
      <Container fluid className="my-4">
        <h1>Carousel Example</h1>
        <hr></hr>
        <Row>
          <Col>
            <Carousel interval={2500}>
              <Carousel.Item>
                <img src={imageOne} alt="Image" className="carouselImg" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <Button href="Carousels" variant="light" className="mb-5">
                    View Carousels
                  </Button>{" "}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imageTwo} alt="image" className="carouselImg" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button href="Carousels" variant="light" className="mb-5">
                    View Carousels
                  </Button>{" "}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imageThree} alt="image" className="carouselImg" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <Button href="Carousels" variant="light" className="mb-5">
                    View Carousels
                  </Button>{" "}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Mulit Carousel */}
      <Container className="my-4">
        <Row className="my-4">
          <Col lg={12} md={12} sm={12}>
            <MultiCarouselExample />
          </Col>
        </Row>
      </Container>

      {/* Cards */}
      <Container className="my-4">
        <h1>Cards Example</h1>
        <hr></hr>
        <Row className="my-4">
          <Col lg={4} md={4} sm={12}>
            <Card>
              <Card.Img variant="top" src={imageOne} />
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="Cards">View Cards</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
              <Card.Body>
                <Card.Footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          {/* Card Two */}
          <Col lg={4} md={4} sm={12}>
            <Card>
              <Card.Img variant="top" src={imageTwo} />
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="Cards">View Cards</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
              <Card.Body>
                <Card.Footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          {/* Card Three */}
          <Col lg={4} md={4} sm={12}>
            <Card>
              <Card.Img variant="top" src={imageThree} />
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="Cards">View Cards</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
              <Card.Body>
                <Card.Footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Accordian */}
      <Container className="my-4">
        <h1>Accordion Example</h1>
        <hr></hr>
        <Row className="my-4">
          <Col lg={12} md={12} sm={12}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
                <Accordion.Body>
                  <Button
                    href="Accordion"
                    variant="info"
                    size="lg"
                    className="text-white"
                  >
                    View Accordions
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
                <Accordion.Body>
                  <Button
                    href="Accordion"
                    variant="info"
                    size="lg"
                    className="text-white"
                  >
                    View Accordions
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* Form */}
      <Container className="my-4">
        <h1>Form Example</h1>
        <hr></hr>
        <Row className="my-4">
          <Col lg={12} md={12} sm={12}>
            <AutoComplete />
          </Col>
        </Row>
      </Container>

      {/* Navbar */}
      <Container className="my-4">
        <h1>Navbar Example</h1>
        <hr></hr>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="homepage">Home</Nav.Link>
              <Nav.Link href="NavBar">NavBars Examples</Nav.Link>
              <Nav.Link href="#" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="homepage">Home</Nav.Link>
              <Nav.Link href="NavBar">NavBars Examples</Nav.Link>
              <Nav.Link href="#" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="homepage">Home</Nav.Link>
              <Nav.Link href="NavBar">NavBars Examples</Nav.Link>
              <Nav.Link href="#" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>

      {/* Buttons */}
      <Container className="my-4">
        <h1>Button Examples</h1>
        <hr></hr>
        <Button href="Buttons" variant="outline-primary mb-3">
          Primary
        </Button>{" "}
        <Button href="Buttons" variant="outline-secondary mb-3">
          Secondary
        </Button>{" "}
        <Button href="Buttons" variant="outline-success mb-3">
          Success
        </Button>{" "}
        <Button href="Buttons" variant="outline-warning mb-3">
          Warning
        </Button>{" "}
        <Button href="Buttons" variant="outline-danger mb-3">
          Danger
        </Button>{" "}
        <Button href="Buttons" variant="outline-info mb-3">
          Info
        </Button>{" "}
        {/* <Button variant="outline-light" data-bs-theme="dark">Light</Button>{' '} */}
        <Button variant="outline-dark mb-3">Dark</Button>
      </Container>
    </section>
  );
}
