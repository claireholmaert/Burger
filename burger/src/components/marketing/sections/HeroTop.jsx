// images
import Image from '../../../../public/medias/images/burger-elements-volants.png';

// header
import Header from './Header';

// elements
import Container from '../../elements/Container';
import Button from '../../elements/Button';

function HeroTop() {
  return (
    <div className='w-full '>
      <div>
        <Container>
          <Header />
          <div className='relative w-full bg-yellow rounded-md flex items-center p-5 mt:10 md:space-x-20'>
            <div className='absolute hidden xl:block right-80 top-60 bg-red w-40 h-40 rounded-full p-3'>
              <div className='flex items-center justify-center w-full h-full rounded-full border-2 border-dashed border-white'>
                <div className='flex flex-col font-secondary text-white text-center uppercase'>
                  <span className='block tracking-widest '>
                  <span>Clic</span>
                  </span>
                  <span className='text-xl md:text-3xl'> & </span>
                  <span>Collect</span>
                </div>
              </div>
            </div>
            <div className='w-full text-marron text-xl uppercase tracking-widest'>
              <h1 className='mb-3'>Des hamburgers qui réveillent les papilles!</h1>
              <h2 className='shadowTitle font-secondary'>
                <span className='text-5xl md:text-6xl block sm:inline-block'>Burger House</span>  
                </h2>
                <p className='shadowTitle font-secondary xl:hidden'>Clic
                <span className='text-red'> & </span>Collect</p>
                <div className='mt-5'>
                <Button color="marron" theme="big">
                Créer mon compte
              </Button>
                </div>
            </div>
            <div className='w-full hidden md:block'>
              <img src={Image} alt="un hamburger avec ses éléments qui volent" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeroTop;
