import { useState } from "react";
import {
  Form,
  ProgressBar,
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
  { value: "Desinger", label: "Designer" },
  { value: "Accountant", label: "Accountant" },
  { value: "Recruiter", label: "Recruiter" },
];

// currency field label
const currentcyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default function MultiStepForm() {

// Step to next page 
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

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
const [formData, setFormData] = useState({});
  const handleInputChange = (event) => {
    const { date, value } = event.target;
    setFormData({ ...formData, [date]: value });
  };

  
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


  return (
    <Container>
      <h3 className="my-4">Multi Step Form with Validation and Progress bar</h3>
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
            <ProgressBar now={(step / 2) * 100} className="mb-4" />
            {step === 1 && (
              <div>
                <Form.Group controlId="formStep1" className="my-4">
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
                    value={formData.date}
                    onChange={handleInputChange}
                    min="1930-01-01" 
                    max="2030-12-31"
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    DOB is required.
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                <Col lg={4} sm={12}>
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
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-red"
                      >
                        Your Gender is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col lg={4} sm={12}>
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
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                        Do you smoke is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col lg={4} sm={12}>
                <Form.Group className="mb-4">
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
                    // label="I am self-employed"
                    required
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    I am self-employed is required.
         </Form.Control.Feedback>
                </Form.Group>
            </Col>
            </Row>
                <Row>
                    <Col lg={12} sm={12}>
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
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    Occupation is required.
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
                <Col lg={12} sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Annual Income:
                  </Form.Label>
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
                    value={currency !== "" ? currentcyFormat.format(currency) : ""}
                    onChange={handleInputChange}
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    Annual income is required
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
                {/* <Button variant="primary" type="submit" className="mb-4">
                    Form Validation
                  </Button> */}
                </Row>
              </div>
            )}
            {step === 2 && (
            <div>
            <Row>
                <Col lg={6} sm={12} className="mb-4">
                <Form.Group controlId="formStep2">
                  <Form.Label>
                  First Name:
                  </Form.Label>
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
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    First Name is required
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-4">
                  <Form.Label>
                  Last Name:
                  </Form.Label>
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
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    Last Name is required
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg={6} sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label>
                  Phone Number:
                  </Form.Label>
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
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    Phone number is required
                  </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-4">
                  <Form.Label>
                  Email:
                  </Form.Label>
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
                  />
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback">
                    Email is required
                  </Form.Control.Feedback>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col lg={6} sm={12}>
                <Form.Group className="mb-4">
                  <Form.Label>
                  Postcode:
                  </Form.Label>
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
                  <Form.Control.Feedback type="invalid" className="multi-step-feedback ">
                    Postcode is required
                  </Form.Control.Feedback>
                </Form.Group>
            </Col>
            </Row>
            <Accordion className="my-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>View Disclaimer</Accordion.Header>
                        <Accordion.Body>
                        By providing your contact details and voluntarily clicking on calculate my quote button, you agree that the PDS  and FSG has been provided to you and you consent to us contacting you (by phone, email, mail or SMS) in relation to this quote and the products and services we offer. You voluntarily consent and agree for us to offer, invite you to apply, or contact you by phone (where we have your valid consent), mail, email, SMS or other electronic messages about the products and services we offer. Your consent shall remain in effect in accordance with relevant law or until you tell us otherwise. You can opt out of this marketing at any time – see our Privacy Policy for how to do this. It also includes information about how we collect, use, secure and disclose your personal information.
                        </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
                {/* <Button variant="primary" type="submit" className="my-4">
                    Form Validation
                  </Button> */}
            </div>
            )}
            {/* {step === 3 && (
            <>
              <Form.Group controlId="formStep3">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </>
            )} */}
            <div className="d-flex justify-content-between">
                {step > 1 && (
                <Button variant="secondary" onClick={handlePrevious}>
                    Previous
                </Button>
                )}
                {step < 2 ? (
                <Button variant="primary"  onClick={handleNext}>
                    Next
                </Button>
                ) : (
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
