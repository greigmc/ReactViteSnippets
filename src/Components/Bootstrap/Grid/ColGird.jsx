import {Container, Row, Col, Image} from 'react-bootstrap';
import imageCol from './../../../assets/images/imageCol.png';
import imageColTwo from './../../../assets/images/imageColTwo.png';

const header = {
    header: "Responsive two col row using expressions & props",
    headerRev: "Responsive two col using expressions, row-reverse & props",
    headerThree: "Responsive three col row using expressions & props",
    headerFour: "Responsive four col row using expressions & props",
};

const image = {
    img: (imageCol),
    imgTwo: (imageColTwo),
};

const heading  = {
    heading: "Heading One Here",
    headingTwo: "Heading Two Here",
    headingThree: "Heading Three Here", 
    headingFour: "Heading Four Here",
};
 const text = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    textRev: "Et quos autem ab ullam consequuntur ea quisquam obcaecati. Sit fugiat dicta eum quia nostrum et quibusdam soluta. In molestiae reprehenderit sed accusantium rerum et laborum officiis quo unde nostrum ab temporibus suscipit ea tenetur omnis. Qui unde ratione aut voluptates natus vel nihil omnis qui ducimus dolorum et nisi deleniti in impedit sint.",
    textShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

 };

export default function TwoColGird() {
  return (
    <Container className='my-4'> 
        {/* Row using props */}
        <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row'>
            <h3 className='m-4'>{header.header} </h3>
           <Col lg={6} md={6} sm={12} className='my-4 overflow-hidden d-flex justify-content-start' >
           <Image 
              src={image.img}
              />            
            </Col>
            <Col lg={6} md={6} sm={12} className='text-start'>
            <h3>{heading.heading}</h3>
            <p>{text.text}.</p>
           </Col>
        </Row>
        <hr></hr>

        {/* Row reverse */}
        <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row-reverse'>
        <h3 className='m-4'>{header.headerRev} </h3>
           <Col lg={6} md={6} sm={12} className='my-4 overflow-hidden d-flex justify-content-end' >
           <Image 
              src={image.imgTwo}
            />            
            </Col>
            <Col lg={6} md={6} sm={12} className='text-start'>
            <h3>{heading.headingTwo}</h3>
            <p>{text.textRev}.</p>
           </Col>
        </Row>
        <hr></hr>

        {/* Three column row */}
        <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row'>
            <h3 className='m-4'>{header.headerThree} </h3>
           <Col lg={4} md={4} sm={12} className='my-4 overflow-hidden text-start' >
           <Image 
              src={image.img}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.heading}</h5>
            <p>{text.textShort}.</p>         
            </Col>
            <Col lg={4} md={4} sm={12} className='my-4 overflow-hidden text-start' >
            <Image 
              src={image.imgTwo}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.headingTwo}</h5>
            <p>{text.textShort}.</p>   
           </Col>
           <Col lg={4} md={4} sm={12} className='my-4 overflow-hidden text-start' >
            <Image 
              src={image.img}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.headingThree}</h5>
            <p>{text.textShort}.</p>   
           </Col>
        </Row>
        <hr></hr>

        {/* Four column row */}
        <Row className='m-0 overflow-hidden d-flex justify-content-center flex-row'>
            <h3 className='m-4'>{header.headerFour} </h3>
           <Col lg={3} md={3} sm={12} className='my-4 overflow-hidden text-start' >
           <Image 
              src={image.img}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.heading}</h5>
            <p>{text.textShort}.</p>         
            </Col>
            <Col lg={3} md={3} sm={12} className='my-4 overflow-hidden text-start' >
            <Image 
              src={image.imgTwo}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.headingTwo}</h5>
            <p>{text.textShort}.</p>   
           </Col>
           <Col lg={3} md={3} sm={12} className='my-4 overflow-hidden text-start' >
            <Image 
              src={image.img}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.headingThree}</h5>
            <p>{text.textShort}.</p>   
           </Col>
           <Col lg={3} md={3} sm={12} className='my-4 overflow-hidden text-start' >
            <Image 
              src={image.imgTwo}
              alt=''
              height={200}
              />  
            <h5 className='my-3 text-center'>{heading.headingFour}</h5>
            <p>{text.textShort}.</p>   
           </Col>
        </Row>
        <hr></hr>
    </Container>
  )

}
