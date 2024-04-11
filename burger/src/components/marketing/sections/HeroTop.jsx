// images
import Image from '../../../../public/medias/images/burger-elements-volants.png';

// header
import Header from './Header';

// elements
import Container from '../../elements/Container';
import Button from '../../elements/Button';

function HeroTop() {
  return (
    <div className='w-full h-screen bg-yellow'>
      <div>
        <Container>
          <Header />
          <div className='w-full flex items-center space-x-20'>
            <div className='w-full text-marron text-xl uppercase'>
              <h1 className='mb-3'>Des hamburgers qui réveillent les papilles!</h1>
              <h2 className='font-secondary'>
                <span className='text-6xl block'>Burger House</span>  
                <span className='text-2xl'>Clic
                <span className='text-3xl text-red'>&</span>Collect</span>
                </h2>
                <div className='mt-5'>
                <Button color="marron" theme="big">
                Créer mon compte
              </Button>
                </div>
                
            </div>
            <div className='w-full'>
              <img src={Image} alt="un hamburger avec ses éléments qui volent" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeroTop;
