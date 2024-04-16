import {Container, Row, Col, Stack, Button, Form} from 'react-bootstrap';

export default function StacksExamples() {
  return (
    <Container className='mt-4'>
    <section className='container'>
    <h1>Stack Examples</h1>
    <hr></hr>
     <h3 className='my-5'>Vertical</h3>
     <h4>Stacks are vertical by default and stacked items are full-width by default. Use the gap prop to add space between items.</h4>
     <hr></hr>
     <Row>
        <Col> 
        <Stack gap={3} className='mb-2'>
            <div className="border border-danger mb-2 p-2">First item</div>
            <div className="border border-danger mb-2 p-2">Second item</div>
            <div className="border border-danger mb-2 p-2">Third item</div>
        </Stack>
        </Col>
     </Row>

     <h3 className='my-5'>Horizontal</h3>
     <h4>For horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use the gap prop to add space between items.</h4>
     <hr></hr>
     <Row>
        <Col className='mb-2'> 
        <Stack direction='horizontal' gap={3}>
            <div className="border border-danger mb-2 p-2">First item</div>
            <div className="border border-danger mb-2 p-2">Second item</div>
            <div className="border border-danger mb-2 p-2">Third item</div>
            <div className="border border-danger mb-2 p-2">Fourth item</div>
            <div className="border border-danger mb-2 p-2">Fifth item</div>
        </Stack>
        </Col>
     </Row>

     <h3 className='my-5'>Horizontal</h3>
     <h4>Using horizontal margin utilities like .ms-auto as spacers</h4>
     <hr></hr>
     <Row>
        <Col className='mb-2'>
        <Stack direction="horizontal" gap={3}>
          <div className="border border-danger mb-2 p-2">First item</div>
          <div className="border border-danger mb-2 p-2 ms-auto">Second item</div>
          <div className="border border-danger mb-2 p-2">Third item</div>
        </Stack>
        </Col>
      </Row>

      <h3 className='my-5'>Horizontal</h3>
     <h4>And with vertical rules</h4>
     <hr></hr>
     <Row>
        <Col className='mb-2'>
        <Stack direction="horizontal" gap={3}>
          <div className="border border-danger mb-2 p-2">First item</div>
          <div className="border border-danger mb-2 p-2 ms-auto">Second item</div>
          <div className="vr border border-danger mb-2 p-2" />
          <div className="border border-danger mb-2 p-2">Third item</div>
        </Stack>
        </Col>
      </Row>

    <Container className='mt-4'>
    <h3 className='my-5'>Examples</h3>
     <h4>Use a vertical Stack to stack buttons and other elements:</h4>
     <hr></hr>
     <Row>
        <Col className='mb-2'>
        <Stack gap={2} className="col-md-5 mx-auto">
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
        </Stack>
        </Col>
      </Row>
      </Container>
    <hr></hr>
    <Container className='mt-4'>
    <h4>Create an inline form with a horizontal Stack</h4>
     <hr></hr>
     <Row>
        <Col className='mb-2'>
          <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Add your item here..." />
          <Button variant="secondary">Submit</Button>
          <div className="vr" />
          <Button variant="outline-danger">Reset</Button>
          </Stack>
        </Col>
      </Row>
    </Container>


     </section>

    </Container>
  )
}
