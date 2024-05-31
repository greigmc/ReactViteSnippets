import {Container, Row, Col} from 'react-bootstrap';

export default function GridExample() {
  return (
    <Container className='mt-4'>
        <section>
          <div className='my-4'>
            <h1>Grid Examples</h1>
            <hr></hr>
            <h3>Auto-layout columns</h3>
            <p>When no column widths are specified the Col component will render equal width columns</p>
            <Row clas>
                <Col className='border border-danger mb-2'>1 of 1</Col>
            </Row>
            <Row>
                <Col className='border border-danger mb-2'>1 of 2</Col>
                <Col className='border border-danger mb-2'>2 of 2</Col>
            </Row>
            <Row>
                <Col className='border border-danger mb-2'>1 of 3</Col>
                <Col className='border border-danger mb-2'>2 of 3</Col>
                <Col className='border border-danger mb-2'>3 of 3</Col>
            </Row>
            <Row>
                <Col className='border border-danger mb-2'>1 of 4</Col>
                <Col className='border border-danger mb-2'>2 of 4</Col>
                <Col className='border border-danger mb-2'>3 of 4</Col>
                <Col className='border border-danger mb-2'>4 of 4</Col>
            </Row>
        </div>

        <div className='my-4'>
            <hr></hr>
            <h3>Setting one column width</h3>
            <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.</p>
            <Row>
                <Col className='border border-danger mb-2'>1 of 3</Col>
                <Col className='border border-danger mb-2' xs={6}>2 of 3 (wider)</Col>
                <Col className='border border-danger mb-2'>3 of 3</Col>
            </Row>
            <hr></hr>
            <Row>
                <Col className='border border-danger mb-2'>1 of 4</Col>
                <Col className='border border-danger mb-2' xs={2}>3 of 4</Col>
                <Col className='border border-danger mb-2' xs={2}>3 of 4</Col>
                <Col className='border border-danger mb-2'>4 of 4</Col>
            </Row>
        </div>

        <div className='my-4'>
            <h3>Variable width content</h3>
            <p>Set the column value for any breakpoint size to auto to size columns based on the natural width of their content.</p>
            <Row className="justify-content-md-center my-5">
                <Col className='border border-danger mb-2' xs lg="2">
                1 of 3
                </Col>
                <Col className='border border-danger mb-2' md="auto">Variable width content</Col>
                <Col className='border border-danger mb-2' xs lg="2">
                3 of 3
                </Col>
            </Row>
            <Row>
                <Col className='border border-danger mb-2'>1 of 3</Col>
                <Col className='border border-danger mb-2' md="auto">Variable width content</Col>
                <Col className='border border-danger mb-2' xs lg="2">
                3 of 3
                </Col>
            </Row>
        </div>

        <div className='my-4'>
            <h3>Responsive grids</h3>
            <p>The Col lets you specify column widths across 6 breakpoint sizes xs, sm, md, lg, xl and xxl.</p>
            <Row>
                <Col className='border border-danger mb-2' sm={8}>sm=8</Col>
                <Col className='border border-danger mb-2' sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col className='border border-danger mb-2' sm>sm=true</Col>
                <Col className='border border-danger mb-2' sm>sm=true</Col>
                <Col className='border border-danger mb-2' sm>sm=true</Col>
            </Row>
        </div>

        <div className='my-4'>
            <h3>Setting column widths in Row</h3>
            <p>The Row lets you specify column widths across 6 breakpoint sizes xs, sm, md, lg, xl and xxl. For every breakpoint, you can specify the amount of columns that will fit next to each other.</p>
            <Row xs={2} md={4} lg={3}>
                <Col className='border border-danger mb-2'>1 of 2</Col>
                <Col className='border border-danger mb-2'>2 of 2</Col>
            </Row>
            <Row xs={1} md={3}>
                <Col className='border border-danger mb-2'>1 of 1</Col>
                <Col className='border border-danger mb-2'>2 of 2</Col>
                <Col className='border border-danger mb-2'>3 of 3</Col>
            </Row>
            <Row xs="auto">
                <Col className='border border-danger mb-2'>1 of 1</Col>
                <Col className='border border-danger mb-2'>2 of 2</Col>
                <Col className='border border-danger mb-2'>3 of 3</Col>
            </Row>
        </div>
        </section>
    </Container>
  )
}
