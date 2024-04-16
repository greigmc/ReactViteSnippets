import { Carousel} from 'react-bootstrap';
import imageOne from './../../../assets/images/imageOne.jpg';
import imageTwo from './../../../assets/images/imageTwo.jpg';
import imageThree from './../../../assets/images/imageThree.jpg';

export default function SingleCarousel() {
  return (
    <div>

<Carousel interval={2500}>
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
