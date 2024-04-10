import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useMatch, Outlet } from 'react-router-dom';


export default function CustomNavbar () {
    return (
        <div className='container-fluid'>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className='NavBar'>
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="Homepage" active={Boolean(useMatch('HomePage'))}>Home</Nav.Link>
                    <Nav.Link href="AboutPage" active={Boolean(useMatch('AboutPage'))}>About</Nav.Link>
                    <Nav.Link href="ServicePage" active={Boolean(useMatch('ServicePage'))}>Service</Nav.Link>
                    <Nav.Link href="ContactPage" active={Boolean(useMatch('ContactPage'))}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </div>
    )
}

