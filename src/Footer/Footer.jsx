import {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import companyLogo from "./../assets/images/001.jpg";
import CookieConsent from "react-cookie-consent";
import { Container, Row, Col } from "react-bootstrap";


export default function Footer()  {
  const [time, setTime] = useState(new Date().toString());
  
  useEffect(() => {
    const internal =     setInterval(showDate, 1000);
    return() => {
      clearInterval(internal);
    };
}, [time] );

  function showDate() {
    // console.log(new Date().toString());
    setTime(new Date().toString());
  }
  return (
    <>
    <Container fluid className="bg-primary-custom bg-dark text-start text-light pt-5">
      <Container>
        <Row>
         <Col sm={6}>
            <div className="widget about">
              <h5 className="widget-title font-alt">About</h5>
              <p className="d-flex justify-content-start">
                I’m a professional Web developer with a BSc (Hons) in Web &amp;
                Mobile Development coupled with a Diploma in Business
                Management. My skillset allows me to implement a business savvy
                approach to creating secure bespoke websites. My working style
                is to liaise closely with my clients to fully understand and
                implement their requirements, ensuring the website fulfills both
                the brief and their objectives.
              </p>

              <p>Phone: 0449 606 926</p>

              <p>
                Email:
                <a href="mailto:info@greigmcmahon.com" target="_top" className="text-white">
                  {" "}
                  info@greigmcmahon.com
                </a>
              </p>
            </div>
        </Col>
        <Col sm={6} className="d-flex justify-content-around flex-direction-column">
          <div className="widget ">
              <h5 className="widget-title font-alt">
                Greig McMahon Web Development
              </h5>

              <div className="widget-posts-image">
                <a href="#">
                  <img src={companyLogo} alt="Post Thumbnail" />
                </a>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      {/* <hr className="divider-d"></hr> */}
      {/* // Sub Footer */}
      <hr></hr>
      <Container>
        <Row>
            <Col sm={12}>
                <div className="copyright font-alt d-flex justify-content-center">
                <p className="copyright font-alt">
                    {time.substring(0, 33)} @All Rights Reserved
                </p>
                </div>
            </Col>
            <Col sm={12} className="justify-content-centre">
                <CookieConsent style={{ background: "rgba(10, 10, 10, 1.9)" }}
                enableDeclineButton 
                declineButtonText="Decline" 
                declineButtonStyle={{background:"red", color: "#fff"}}
                buttonText="Accept"
                buttonStyle={{background:"#2a66dd", color: "#fff"}}
                flipButtons
                debug={false}>
                We and selected third parties use cookies or similar technologies for technical purposes and, with your consent.

                Use the “Accept” button to consent. Use the “Decline” button or close this notice to continue without accepting.
                </CookieConsent>
            </Col>
          </Row>
          </Container>      
        </Container>
    </>
  );
}

setInterval(1000)


