import { useState } from "react";
import {
  Form,
  ProgressBar,
  Button,
  Tooltip,
  OverlayTrigger,
  Accordion,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import './Form.css';
// import TAL from './TAL.png';


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
  currency: "USD"
});

export default function MultiStepFormVal() {

// Step to next page 
  // const [step, setStep] = useState(1);
  // const handleNext = () => {
  //   setStep(step + 1);
  // };

  const [step, setStep] = useState(1);
    const handleNext = () => {
    // Validate the form before proceeding to the next step
    const form = document.getElementById('myForm'); // 
    if (form.checkValidity() === false) {
      form.reportValidity();
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };


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


    const [state, setState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      postcode: "",
      occupation: "",
      // checkMe: false,
    });

    const handleChange = (e) => {
      const name = e.target.name;
      const value =
      e.target.type === "type" ? e.target.checked : e.target.value;
      setState({
        ...state,
        [name]: value
      })
    }
    // dropdown value in form
    const [value, selectValue] = useState("");
    const handleChangeDropDown = (event) => selectValue(event.target.value);
    const [showOptions, setShowOptions] = useState(false); // State to track whether options should be visible
    const handleSelectClick = () => {
      setShowOptions(true); // Show options when the select is clicked
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
    <Container fluid>
      {/* <h3 className="my-4">Multi Step Form with Validation and Progress bar</h3>
      <hr></hr> */}
      <Row className="my-4 header"> 
      <Col lg={6} md={6} sm={6} xs={6}>
        {/* <a href="https://www.tal.com.au/" >
        <img src={TAL} alt="image" className='d-flex justify-content-start' />
        </a> */}
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
        <h4 className="d-flex justify-content-end">Companies Online Services</h4>
        </Col>
      </Row>
      <Row className="d-felx justify-content-center">
        <Col lg={10} sm={10} className="bg-light text-dark p-4 mt-2 form-shadow">
          <Form
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
            className="text-start my-4"
            id="myForm"
          >
            <h4 className="mb-5 d-flex justify-content-center">Get an online quick quote</h4>
            <ProgressBar now={(step / 3) * 100} className="mb-4" />
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
                    type="date"
                    name="date"
                    value={state.date}
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
                    <Form.Group controlId="gender" className="mb-4">
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
                        </Button>
                      </OverlayTrigger>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`}>
                          <Form.Check
                            // required
                            inline
                            label="male"
                            name="checkGender"
                            type={type}
                            id={`inline-${type}-1`}
                            checked={ state.checkMe } 
                            onChange={ handleChange }
                          />
                          <Form.Check
                            // required
                            inline
                            label="female"
                            name="checkGender"
                            type={type}
                            id={`inline-${type}-2`}
                            checked={ state.checkMe } 
                            onChange={ handleChange }
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
                    <Form.Group controlId="smoke" className="mb-4">
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
                        </Button>
                      </OverlayTrigger>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`}>
                          <Form.Check
                            inline
                            label="yes"
                            name="checkSmoke"
                            type={type}
                            id={`inline-${type}-3`}
                            // required
                            checked={ state.checkMe } 
                            onChange={ handleChange }
                          />
                          <Form.Check
                            inline
                            label="no"
                            name="checkSmoke"
                            type={type}
                            id={`inline-${type}-4`}
                            // required
                            checked={ state.checkMe } 
                            onChange={ handleChange }
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    // label="I am self-employed"
                    checked={ state.checkMe } 
                    onChange={ handleChange }
                    // required
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
                    // required
                  >
                    <Button
                      variant="success"
                      size="sm"
                      className="tootip-btn ms-2"
                    >
                    </Button>
                  </OverlayTrigger>
                  <Form.Select 
                    aria-label="Default select example"
                    // required
                    onClick={handleSelectClick}
                    value={ value } 
                    onChange={ handleChangeDropDown }
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                    value={ state.firstName } 
                    onChange={ handleChange }
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    value={ state.lastName } 
                    onChange={ handleChange }
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
                    name="phone"
                    type="text"
                    label="Phone"
                    placeholder="Phone Number"
                    value={ state.phone } 
                    onChange={ handleChange }
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    value={ state.email } 
                    onChange={ handleChange }
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
                    </Button>
                  </OverlayTrigger>
                  <Form.Control
                    // required
                    name="postcode"
                    type="text"
                    label="Postcode"
                    placeholder="Postcode"
                    value={ state.postcode } 
                    onChange={ handleChange }
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                        </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
            </div>
            )}
            {step === 3 && (
    <div>
    <Row className="d-flex justify-content-center my-5">
        <Col lg={8} sm={8} className="mb-4">
        <Card className="form-shadow text-center py-4">
      <Card.Body className="">
        <Card.Title>We&#39;ve sent you an email</Card.Title>
        <Card.Text>
          We&#39;ve sent an email to johndoe@gmail.com
        </Card.Text>
        <Card.Text>
         Make sure you click the activation link contained in the email within the next 24 hours.
        </Card.Text>
        <Button variant="primary" href="/">Home Page</Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>
    </div>
            )}
            <div className="d-flex justify-content-between">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button variant="primary" >
                  Submit
                </Button>
              )}
            </div>
          </Form>
          I agree with Companies&#39;s Online Terms & Privacy Statement

        </Col>
      </Row>
      <p className="d-flex justify-content-center mt-5">This website is validated as a secure site for sending and receiving sensitive data. </p>
    </Container>
  );
}
