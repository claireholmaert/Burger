// elements
import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";

// carousel
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css';

// props
import PropTypes from 'prop-types';

// images
import Image1 from '../../../../public/medias/images/jo-2024.jpeg';
import Image2 from '../../../../public/medias/images/degustation.jpeg';
import Image3 from '../../../../public/medias/images/concert.jpeg';

const Slide = ({children, image, category, title}) => {
    return(
        <div className="grid grid-cols-2 p-6">
        <div className="p-10 mb-10">
            <Heading variant="h4">
                {category}
            </Heading>
            <Heading theme="marron" variant="h3" className="mb-5">
                {title}
            </Heading>
            <p id="carouselParagraphe" className="tracking-wide text-lg leading-relaxed text-black mb-10">
            {children}
            </p>
        </div>
        <div className="relative bg-yellow w-full h-[400px]">
            <img 
            src={image} 
            className="absolute bg-yellow top-0 left-0 w-full h-full object-cover object-bottom z-0" 
            alt="image d'une athlètes sur une piste"
             />
        </div>
    </div>
    )
}

Slide.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
}

function Event() {

    const items = [
        <Slide
        key={0} 
        image={Image1}
        category="évènement à venir"
        title="Vivez les JO 2024"
        >
           <p>
            Vivez l'excitation des Jeux Olympiques 2024 à Paris, où les athlètes du monde entier s'affrontent pour l'excellence sportive dans une atmosphère électrisante.
           </p>
        </Slide>,
        <Slide
        key={1} 
        image={Image2}
        category="évènement à venir"
        title="Friendzone Fest"
        >
           <p>
            Préparez-vous à l'événement 'Friendzone Fest', où les rencontres sont légères, les sourires abondent et les liens d'amitié se tissent sans pression ni attentes, juste du plaisir et de la convivialité !
           </p>
        </Slide>,
        <Slide
        key={2} 
        image={Image3}
        category="évènement à venir"
        title="Concert DJ Burger"
        >
           <p>
           Plongez dans l'atmosphère électrisante du 'Concert de l'Amitié', où les mélodies envoûtantes se mêlent aux rires partagés, créant des souvenirs inoubliables et des liens indéfectibles dans une ambiance chaleureuse et festive !
           </p>
        </Slide>,
    ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 rounded-md">
        <AliceCarousel 
        mouseTracking
        autoPlay
        infinite
        autoPlayInterval={4000}
        animationType="fadeout"
        disableButtonsControls
        items={items}
         />
      </div>
    </Container>
  )
}

export default Event
