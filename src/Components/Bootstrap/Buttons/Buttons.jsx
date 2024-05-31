import { useEffect, useState } from 'react';
import { Button, ButtonGroup, ToggleButton, Container, Row, Col }  from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';


export default function ButtonsExample() {
    // Button Loading State 
    const [isLoading, setLoading] = useState(false);
    const handleClick = () => setLoading(true);
    useEffect(() => {
        function simulateNetworkRequest() {
          return new Promise((resolve) => setTimeout(resolve, 2000));
        }
    
        if (isLoading) {
          simulateNetworkRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);

    //   Toggle Radio / Checkbox
        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
      
        const radios = [
          { name: 'Active', value: '1' },
          { name: 'Radio', value: '2' },
          { name: 'Radio', value: '3' },
        ];


  return (
  <Container className='mt-4'>
    <section>
     <h1>Button Examples</h1>
     <hr></hr>
     <h3>Uncontrolled Carousel</h3>
     <p>Use any of the available button style types to quickly create a styled button.</p>
     <hr></hr>
     <Button variant="primary" className='mb-3'>Primary</Button>{' '}
      <Button variant="secondary" className='mb-3' >Secondary</Button>{' '}
      <Button variant="success" className='mb-3'>Success</Button>{' '}
      <Button variant="warning" className='mb-3'>Warning</Button>{' '}
      <Button variant="danger" className='mb-3'>Danger</Button>{' '}
      <Button variant="info" className='mb-3'>Info</Button>{' '}
      <Button variant="light" className='mb-3'>Light</Button>{' '}
      <Button variant="dark" className='mb-3'>Dark</Button>
      <Button variant="link" className='mb-3'>Link</Button>

    <hr></hr>
     <h3>Outline buttons</h3>
     <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>
     <hr></hr>
     <Button variant="outline-primary" className='mb-3'>Primary</Button>{' '}
      <Button variant="outline-secondary" className='mb-3'>Secondary</Button>{' '}
      <Button variant="outline-success" className='mb-3'>Success</Button>{' '}
      <Button variant="outline-warning" className='mb-3'>Warning</Button>{' '}
      <Button variant="outline-danger" className='mb-3'>Danger</Button>{' '}
      <Button variant="outline-info" className='mb-3'>Info</Button>{' '}
      <Button variant="outline-light" className='mb-3 border border-danger text-danger'>Light</Button>{' '}
      <Button variant="outline-dark" className='mb-3'>Dark</Button>

      <hr></hr>
     <h3>Button tags</h3>
     <p>Normally Button components will render a HTML button element.
         However you can render whatever you would like, adding a href prop will automatically render an <a /> element. 
         You can use the as prop to render whatever your heart desires.</p>
     <hr></hr>
      <Button href="HomePage" className='m-2'>Link</Button> 
      <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />

      <hr></hr>
     <h3>Button Sizes</h3>
     <p>Fancy larger or smaller buttons? Add size= Add size=&quot;lg&quot;, size=&quot;sm&quot; for additional sizes.</p>
     <hr></hr>
     <div className="d-grid gap-2">
        <Row className='mb-3'>
            <Col sm={6}>
            <Button variant="primary" size="lg" className='mb-3'>
                Block level button
            </Button>
            </Col>
            <Col sm={6}>
                <Button variant="secondary" size="lg" className='mb-3'>
                Large button
                </Button>
            </Col>
        </Row>
      </div>
      <div>
        <Row>
            <Col>
                <Button variant="primary" size="sm">
                Small button
                </Button>{' '}
            </Col>
            <Col>
                <Button variant="secondary" size="sm">
                Small button
                </Button>
            </Col>
        </Row>
      </div>
      <hr></hr>
     <h3>Block buttons</h3>
     <p>Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities.</p>
     <hr></hr>
     <div className="d-grid gap-2">
        <Button variant="primary" size="lg" className='mx-4'>
                Block level button
        </Button>
    </div>

    <hr></hr>
     <h3>Button loading state</h3>
     <p>When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state</p>
     <hr></hr>
     <Button
      variant="primary"
      size="lg"      
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>

    <hr></hr>
     <h3>Checkbox / Radio</h3>
     <p>Buttons can also be used to style checkbox and radio form elements.</p>
     <hr></hr>
     <Row>
      <Col>
      <ToggleButton
        className="mb-3"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup className='gap-3'>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </Col>
      </Row>
    </section>
    </Container>
  )
}
