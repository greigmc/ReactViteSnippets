import { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

export default function AutoComplete() {
  // Form Validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      {/* <h3 className='my-4'>Form with Validation</h3>
    <p>For native HTML form validation–available in all our supported browsers, the :valid and :invalid pseudo selectors are used to apply validation styles as well as display feedback messages.</p> */}
      <Row className="text-start justify-content-center">
        <Col lg={12} sm={10} className="bg-primary text-white p-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a Last Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Last Name.
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Postcode</Form.Label>
                <Form.Control type="text" placeholder="Postcode" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid postcode.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button variant="light" type="submit">
              Submit form
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
