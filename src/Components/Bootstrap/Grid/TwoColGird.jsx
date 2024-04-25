import {Container, Row, Col, Image} from 'react-bootstrap';
import imageCol from './../../../assets/images/imageCol.png';
import imageColTwo from './../../../assets/images/imageColTwo.png';



const colTwo = {
    header: "Responsive two col row using expressions ",
    headerReverse: "Responsive two col using expressions and row-reverse",
    img: (imageCol),
    imgTwo: (imageColTwo),
    heading: "Heading Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
};

export default function TwoColGird() {
  return (
    // <div>TwoColGird</div>
    <Container className='my-4'> 
        {/* Row usning props */}
        <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row'>
            <h3 className='m-4'>{colTwo.header} </h3>
           <Col lg={6} md={6} sm={12} className='my-4 overflow-hidden d-flex justify-content-start' >
           <Image 
              src={colTwo.img}
              />            
            </Col>
            <Col lg={6} md={6} sm={12} className='text-start'>
            <h3>{colTwo.heading}</h3>
            <p>{colTwo.text}.</p>
           </Col>
        </Row>
        <hr></hr>

        {/* Row usning props */}
        <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row-reverse'>
        <h3 className='m-4'>{colTwo.headerReverse} </h3>
           <Col lg={6} md={6} sm={12} className='my-4 overflow-hidden d-flex justify-content-end' >
           <Image 
              src={colTwo.imgTwo}
            />            
            </Col>
            <Col lg={6} md={6} sm={12} className='text-start'>
            <h3>{colTwo.heading}</h3>
            <p>{colTwo.text}.</p>
           </Col>
        </Row>
    </Container>
  )

}
