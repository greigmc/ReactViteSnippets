import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useMatch, Outlet } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <div className="container-fluid">
      <Navbar
        bg="dark"
        variant="dark"
        expand="sm"
        sticky="top"
        className="NavBar"
      >
        <Container>
          {/* <Navbar.Brand href="/components/">Logo</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/components/"
                active={Boolean(useMatch("/components/"))}
              >
                Home
              </Nav.Link>
              <NavDropdown
                title="Components"
                id="basic-nav-dropdown"
                data-bs-theme="dark"
              >
                <NavDropdown.Item
                  href="Carousels"
                  active={Boolean(useMatch("Carousels"))}
                >
                  Carousels
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="MultiCarousels"
                  active={Boolean(useMatch("MultiCarousels"))}
                >
                  Multi Carousels
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="NavBar"
                  active={Boolean(useMatch("NavBar"))}
                >
                  NavBars
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="Cards"
                  active={Boolean(useMatch("Cards"))}
                >
                  Cards
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="Accordion"
                  active={Boolean(useMatch("Accordion"))}
                >
                  Accordion
                </NavDropdown.Item>
                <NavDropdown.Item href="Api" active={Boolean(useMatch("Api"))}>
                  API Examples
                </NavDropdown.Item>

                {/* <NavDropdown.Item href="Stepper" active={Boolean(useMatch('Stepper'))}>Stepper</NavDropdown.Item> */}
                <NavDropdown.Item
                  href="Buttons"
                  active={Boolean(useMatch("Buttons"))}
                >
                  Buttons
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown
                  title="Forms"
                  id="basic-nav-dropdown"
                  data-bs-theme="dark"
                >
                  <NavDropdown.Item
                    href="Forms"
                    active={Boolean(useMatch("Forms"))}
                  >
                    Form Examples
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="MultiStepForm"
                    active={Boolean(useMatch("MultiStepForm"))}
                  >
                    Multi Step Form
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="MultiStepFormVal"
                    active={Boolean(useMatch("MultiStepFormVal"))}
                  >
                    Multi Form with Validation
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown
                title="Layouts"
                id="basic-nav-dropdown"
                data-bs-theme="dark"
              >
                <NavDropdown.Item
                  href="Grid"
                  active={Boolean(useMatch("Grid"))}
                >
                  Grid
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="ColGrid"
                  active={Boolean(useMatch("ColGrid"))}
                >
                  Content Grids
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="Stack"
                  active={Boolean(useMatch("Stack"))}
                >
                  Stack
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="Imageoverlay"
                  active={Boolean(useMatch("ImageOverlay"))}
                >
                  Image Overlays
                </NavDropdown.Item>
              </NavDropdown>

              {/* <NavDropdown title="Material-UI Components" id="basic-nav-dropdown" data-bs-theme="dark">
                        <NavDropdown.Item href="Stepper" active={Boolean(useMatch('Stepper'))}>Stepper</NavDropdown.Item>
                        <NavDropdown.Item href="CarouselMui" active={Boolean(useMatch('CarouselMui'))}>CarouselMui</NavDropdown.Item>
                    </NavDropdown>    */}

              <NavDropdown
                title="MUI Layouts"
                id="basic-nav-dropdown"
                data-bs-theme="dark"
              >
                <NavDropdown.Item
                  href="GridMui"
                  active={Boolean(useMatch("GridMui"))}
                >
                  Grid Mui
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="StackMui"
                  active={Boolean(useMatch("StackMui"))}
                >
                  Stack Mui
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="ImageList"
                  active={Boolean(useMatch("ImageList"))}
                >
                  Image List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
