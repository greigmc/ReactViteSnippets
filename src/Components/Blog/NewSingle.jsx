import {Col, Card} from 'react-bootstrap';


export default function NewSingle ({item}) {
  return (
    <Col lg={4} md={4} className='my-4 d-flex align-items-stretch'>
      <Card>
          <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
          <Card.Body>
            <h5>
            {item.title}
            </h5>
            <Card.Text>
            {item.description}
            </Card.Text>
            <a href={item.url} target="_blank" rel="noreferrer">Full article</a>
          </Card.Body>
        </Card>
    {/* <div className="card medium">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title}/>
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank" rel="noreferrer">Full article</a>
      </div>
    </div> */}
  </Col>
);
}

