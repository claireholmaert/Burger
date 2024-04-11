// images
import Illustration from '../../../../public/medias/images/burger-explosif.jpg';

// header
import Header from './Header';

// elements
import Container from '../../elements/Container';

function HeroTop() {
  return (
    <div className='w-full h-screen'>
      <div className="bg-no-repeat bg-cover w-full h-full" style={{ backgroundImage: `url(${Illustration})`}}>
        <Container>
          <Header />
        </Container>
      </div>
    </div>
  );
}

export default HeroTop;
