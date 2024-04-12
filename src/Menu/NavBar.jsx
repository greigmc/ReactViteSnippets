import { Nav, Navbar, Container } from 'react-bootstrap';
import { useMatch, Outlet } from 'react-router-dom';


export default function CustomNavbar () {
    return (
        <div className='container-fluid'>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className='NavBar'>
            <Container>
                <Navbar.Brand href="Homepage">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="Homepage" active={Boolean(useMatch('HomePage'))}>Home</Nav.Link>
                    <Nav.Link href="Carousels" active={Boolean(useMatch('Carousels'))}>Carousels</Nav.Link>
                    <Nav.Link href="NavBar" active={Boolean(useMatch('NavBar'))}>NavBars</Nav.Link>
                    <Nav.Link href="Cards" active={Boolean(useMatch('Cards'))}>Cards</Nav.Link>
                    <Nav.Link href="Accordion" active={Boolean(useMatch('Accordion'))}>Accordion</Nav.Link>
                    <Nav.Link href="Buttons" active={Boolean(useMatch('Buttons'))}>Buttons</Nav.Link>
                    <Nav.Link href="Grid" active={Boolean(useMatch('Grid'))}>Grid</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </div>
    )
}

