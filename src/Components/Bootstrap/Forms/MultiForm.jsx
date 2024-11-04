import { useState } from "react";
import {
  Form,
  // ProgressBar,
  Button,
  Tooltip,
  OverlayTrigger,
  Accordion,
  Row,
  Col,
  Container,
} from "react-bootstrap";

const selectOptions = [
  { value: "Broker", label: "Broker" },
  { value: "Developer", label: "Developer" },
  { value: "Designer", label: "Designer" },
  { value: "Accountant", label: "Accountant" },
  { value: "Recruiter", label: "Recruiter" },
];

// currency field label
const currentcyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function MultiStep() {
  // Step to next page
  // const [step, setStep] = useState(1);
  // const handleNext = () => {
  //   setStep(step + 1);
  // };
  // const handlePrevious = () => {
  //   setStep(step - 1);
  // };

  //     const handleNext = () => {
  //     // Validate the form before proceeding to the next step
  //     const form = document.getElementById('myForm'); //
  //     if (form.checkValidity() === false) {
  //       form.reportValidity();
  //       return;
  //     }

  //     setStep(step + 1);
  //   };

  // Form Validation on submit
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  // Set Form Data on handle input change
  // const [formData, setFormData] = useState({});
  //   const handleInputChange = (event) => {
  //     const { date, value } = event.target;
  //     setFormData({ ...formData, [date]: value });
  //   };

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add overlay content here
    </Tooltip>
  );

  // dropdown value in form
  const [value, selectValue] = useState("");
  const handleChange = (event) => selectValue(event.target.value);
  const [showOptions, setShowOptions] = useState(false); // State to track whether options should be visible
  const handleSelectClick = () => {
    setShowOptions(true); // Show options when the select is clicked
  };

  const [currency, setCurrency] = useState("");

  const keyPressHanlder = (event) => {
    const { key } = event;
    setCurrency((prevValue) =>
      key !== "Backspace"
        ? !Number.isNaN(parseInt(key)) || key === "," || key === "."
          ? prevValue + key
          : prevValue
        : prevValue.substring(0, prevValue.length - 1)
    );
  };

  const isFormComplete = () => {
    return firstName && lastName && phone && email && income && dob;
  };

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [occupation, setoccupation] = useState('');
  const [income, setIncome] = useState("");
  // const [male, setMale] = useState('');
  const [dob, setDob] = useState("");

  return (
    <Container>
      <h3 className="my-5">
        Form with Validation on all fields & diabled button
      </h3>
      <hr></hr>
      <Row className="d-felx justify-content-center">
        <Col lg={10} sm={10} className="bg-light text-dark p-4 mt-2">
          <Form
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
            className="text-start my-4"
            id="myForm"
          >
            {/* <ProgressBar now={(step / 2) * 100} className="mb-4" />
            {step === 1 && ( */}
            <div>
              <Row>
                <Col lg={6} sm={12} className="mb-4">
                  <Form.Group controlId="formStep2">
                    <Form.Label>First Name:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      name="firstName"
                      type="text"
                      label="First Name"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      First Name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Last Name:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      name="lastName"
                      type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      Last Name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} sm={12}>
                  <Form.Group className="mb-4">
                    <Form.Label>Phone Number:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      name="phone"
                      type="text"
                      label="Phone"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      Phone number is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Email:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      Email is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} sm={12}>
                  <Form.Group className="mb-4">
                    <Form.Label>Postcode:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      name="postcode"
                      type="postcode"
                      label="Postcode"
                      placeholder="Postcode"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback "
                    >
                      Postcode is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg={6} sm={12}>
                  <Form.Group controlId="formStep1" className="mb-4">
                    <Form.Label>Date of birth:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      type="date"
                      name="date"
                      min="1930-01-01"
                      max="2030-12-31"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      DOB is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} sm={12} className="d-flex justify-content-start">
                  <Form.Group controlId="" className="mb-4">
                    <Form.Label>Your Gender:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          required
                          inline
                          label="Male"
                          name="gender"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          required
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                    <Form.Control.Feedback type="invalid" className="text-red">
                      Your Gender is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg={6} sm={12} className="d-flex justify-content-start">
                  <Form.Group controlId="" className="mb-4">
                    <Form.Label>Do you Smoke?:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          label="Yes"
                          name="smoke"
                          type={type}
                          id={`inline-${type}-1`}
                          required
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="smoke"
                          type={type}
                          id={`inline-${type}-2`}
                          required
                        />
                      </div>
                    ))}
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      Do you smoke is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} sm={12}>
                  <Form.Group
                    className="mb-4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Occupation:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                      required
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      onClick={handleSelectClick}
                      value={value}
                      // onChange={(e) => setfirstName(e.target.value)}
                      onChange={handleChange}
                    >
                      {/* Render options conditionally based on showOptions state */}
                      {showOptions && (
                        <>
                          {selectOptions.map((option) => {
                            return (
                              <option key={option.label} value={option.value}>
                                {option.label}
                              </option>
                            );
                          })}{" "}
                        </>
                      )}
                    </Form.Select>
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      Occupation is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg={6} sm={12}>
                  <Form.Group className="mb-4">
                    <Form.Label>Annual Income:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Control
                      required
                      name="currency-input"
                      onKeyDown={keyPressHanlder}
                      placeholder={currentcyFormat.format("")}
                      value={
                        currency !== "" ? currentcyFormat.format(currency) : ""
                      }
                      // onChange={handleInputChange}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      Annual income is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg={6} sm={12}>
                  <Form.Group className="mb-4 mt-2">
                    <Form.Label>I am self-employed:</Form.Label>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="success"
                        size="sm"
                        className="tootip-btn ms-2"
                      >
                        ?
                      </Button>
                    </OverlayTrigger>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      required
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="multi-step-feedback"
                    >
                      I am self-employed is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Accordion className="my-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>View Disclaimer</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Button
                variant="primary"
                type="submit"
                className="my-4"
                disabled={!isFormComplete()}
              >
                Form Validation
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
