import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
import imageOne from './../../../assets/images/imageOne.jpg';
import imageTwo from './../../../assets/images/imageTwo.jpg';
import imageThree from './../../../assets/images/imageThree.jpg';

export default function CardsExample() {
  return (
    <Container className='mt-4'>
    <section>
        <h1>Cards Examples</h1>
        <hr></hr>
        <h3>Basic Example</h3>
        <p>Bootstrap cards provide a flexible and extensible content container with multiple variants and options.</p>
    <Row className="my-4">
       <Col lg={4} md={4} sm={12}>
        <Card>
          <Card.Img variant="top" src={imageOne} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col lg={4} md={4} sm={12}>
        <Card>
          <Card.Img variant="top" src={imageTwo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col lg={4} md={4} sm={12}>
        <Card>
          <Card.Img variant="top" src={imageThree} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>

        <hr></hr>
        <h3>Kitchen Sink</h3>
        <p>Card with image, header, styled by passing a heading element through the as prop, body and footer syled as a blockquote </p>
        <Row className="my-4">
        <Col lg={4} md={4} sm={12}>
            <Card>
              <Card.Img variant="top" src={imageOne} />
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
              <Card.Body>
              <Card.Footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={4} sm={12}>
          <Card>
              <Card.Img variant="top" src={imageTwo} />
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
              <Card.Body>
              <Card.Footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <Card>
              <Card.Img variant="top" src={imageThree} />
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
              <Card.Body>
              <Card.Footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr></hr>
        <h3>Image Overlays</h3>
        <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
         <Row className="my-4">
          <Col lg={4} md={4} sm={12}>
            <Card className="bg-dark text-white mb-3">
              <Card.Img src={imageOne} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            </Col>
            <Col lg={4} md={4} sm={12}>
            <Card className="bg-dark text-white mb-3">
              <Card.Img src={imageTwo} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
           </Col>
           <Col lg={4} md={4} sm={12}>
            <Card className="bg-dark text-white mb-3">
              <Card.Img src={imageThree} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
           </Col>
          </Row>

        </section>
    </Container>

  )
}
