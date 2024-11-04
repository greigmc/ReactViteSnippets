import { Col, Card } from "react-bootstrap";

export default function NewSingle({ item }) {
  return (
    <Col lg={4} md={4} className="my-4 d-flex align-items-stretch">
      <Card>
        <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
        <Card.Body>
          <h5>{item.title}</h5>
          <Card.Text>{item.description}</Card.Text>
          <a href={item.url} target="_blank" rel="noreferrer">
            Full article
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}
