import {
    Button, 
    Container, 
    Form, 
    Nav, 
    Navbar, 
    NavDropdown,
    Col,
    Row,
  } from 'react-bootstrap';
  import imageOne from './../../assets/images/imageOne.jpg';


export default function NavBarExamples() {
  return (
  <Container>
    <section className='container'>
    <h1>NavBar Examples</h1>
    <hr></hr>
     <h3 className='my-5'>Color schemes</h3>
     <p>Theming the navbar using classes and background-color utilities. </p>
     <hr></hr>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     <hr></hr>
     <h3 className='my-5'>Responsive navigation header</h3>
     <p>Navbar menu with dropdown, disabled Href and form</p>
     <hr></hr>
    
    <Navbar expand="sm" className="bg-body-primary px-4" bg="primary" data-bs-theme="dark">
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">Search</Button>
        </Form>
      </Navbar.Collapse>
  </Navbar>
  <hr></hr>
  <h3 id='home' className='my-5'>Responsive Scrolling NavBar</h3>
     <p>navbarScroll prop in a to enable vertical scrolling within the toggleable contents of a collapsed navbar.</p>
     <hr></hr>
     <Navbar expand="lg" className="bg-body-primary px-4" bg="primary" data-bs-theme="dark" id='home'>
        <Navbar.Brand href="#">Top Of Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#scroll">Section One</Nav.Link>
            <Nav.Link href="#scrollOne">Section Two</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#about">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
    </Navbar>
    <section id='scroll' className='my-5'> &nbsp;
    <h1 className='my-0'>&nbsp;</h1>
    <h1 className='my-5'>Section One</h1>
    <Row className='my-5'>
        <Col lg={4} md={4} sm={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Col>
        <Col lg={4} md={4} sm={12}><img src={imageOne} alt='image' height={200} /> </Col>
    </Row>
      <Row className='my-5'>
        <Col lg={4} md={4} sm={12}><img src={imageOne} alt='image' height={200} /> </Col>
        <Col lg={4} md={4} sm={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Col>
      </Row>
    </section>
   <section id='scrollOne' className='my-5'>
   <h1 className='my-5'>&nbsp;</h1>
   <h1 className='my-4'>Section Two </h1>
    <Row className='my-5'>
         <Col lg={4} md={4} sm={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Col>
        <Col lg={4} md={4} sm={12}><img src={imageOne} alt='image' height={200} /> </Col>
      </Row>
      <Row className='my-5'>
    <Col lg={4} md={4} sm={12}><img src={imageOne} alt='image' height={200} /> </Col>
        <Col lg={4} md={4} sm={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Col>
    </Row>
    </section>
 </section>
 </Container>
  )
}
