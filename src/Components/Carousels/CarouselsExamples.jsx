import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageOne from './images/imageOne.jpg';
import imageTwo from './images/imageTwo.jpg';
import imageThree from './images/imageThree.jpg';



export default function CarouselsExamples() {
    // Controlled Carousel via the activeIndex prop and onSelect handler.
    const [index, setIndex] = useState();
    const handleSelect = (selectIndex) => {
        setIndex(selectIndex);
    };
    
  return (
    <div className='container' data-bs-theme="light">
     <h1>Carousels Examples</h1>
     <hr></hr>
     <h3>Uncontrolled Carousel</h3>
     <h4>Allow the component to control its own state.</h4>
     <hr></hr>
      <Carousel>
        <Carousel.Item>
            <img src={imageOne} alt="Image" className='carouselImg'  />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imageTwo} alt="image" className='carouselImg' />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imageThree} alt="image" className='carouselImg' />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    <hr></hr>
     <h3>Controlled Carousel</h3>
     <h4>Control the Carousel state, via the activeIndex prop and onSelect handler.</h4>
    <hr></hr>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img src={imageOne} alt="Image" className='carouselImg'  />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imageTwo} alt="image" className='carouselImg' />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imageThree} alt="image" className='carouselImg' />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    <hr></hr>
     <h3>Crossfade Carousel</h3>
     <h4>Add the fade prop to your carousel to animate slides with a fade transition instead of a slide.</h4>
    <hr></hr>
    <Carousel fade>
        <Carousel.Item>
            <img src={imageOne} alt="Image" className='carouselImg'  />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imageTwo} alt="image" className='carouselImg' />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imageThree} alt="image" className='carouselImg' />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>


    </div>
  )
}
