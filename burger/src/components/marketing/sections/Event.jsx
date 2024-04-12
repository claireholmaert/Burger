// elements
import Container from "../../elements/Container";

// carousel
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css';

// images
import Image1 from '../../../../public/medias/images/jo-2024.jpeg';
import Image2 from '../../../../public/medias/images/degustation.jpeg';
import Image3 from '../../../../public/medias/images/concert.jpeg';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img key={1} src={Image1} onDragStart={handleDragStart} role="presentation" />,
	<img key={2} src={Image2} onDragStart={handleDragStart} role="presentation" />,
	<img key={3} src={Image3} onDragStart={handleDragStart} role="presentation" />,
];

function Event() {
  return (
    <Container>
      <div className="shadow-2xl mb-20 h-96">
        <AliceCarousel 
        mouseTracking
        disableButtonsControls
        items={items}
         />
      </div>
    </Container>
  )
}

export default Event
