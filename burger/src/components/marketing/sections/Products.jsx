// elements
import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";
import HeadingTitles from "../../elements/DisplayTitles/HeadingTitles";
import Button from '../../elements/Button';

// images
import Image1 from '../../../../public/medias/images/burger-feu.jpeg';
import Image2 from '../../../../public/medias/images/burger-fusion.jpeg';
import Image3 from '../../../../public/medias/images/burger-epice.jpeg';

function Products() {
  return (
    <Container>
      <HeadingTitles variant="h2">
        Toujours de délicieux burger
      </HeadingTitles>
      <Heading variant="h2" theme="marron" alignement="center" className="my-5">
        Choississez
        <span className="text-5xl text-red"> & </span>
         savourez
      </Heading>
      <p className="text-center">
      Dans notre sélection, vous trouverez une variété de délicieux burgers préparés avec des ingrédients frais et de qualité, prêts à être dégustés avec plaisir.
      </p>

      <div className="grid grid-cols-3 gap-x-1 mb-20 mt-10">
        <div className="w-full h-full">
            <div className="relative w-full h-96">
            <img src={Image1} className="bg-yellow absolute top-0 left-0 w-full h-full object-cover z-0" alt="" />
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
            Burger Feu Follet
            </Heading>
            <p className="text-center">
            Une explosion de saveurs envoûtantes.
            </p>
            <Button className="font-secondary" color="red">
                Commandez
            </Button>
            </div>
            
        </div>
        <div className="w-full h-full">
            <div className="relative w-full h-96">
            <img src={Image2} className="bg-yellow absolute top-0 left-0 w-full h-full object-cover z-0" alt="" />
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
            Burger Fusion Extravagant
            </Heading>
            <p className="text-center">
            Un mariage harmonieux de cultures culinaires.
            </p>
            <Button className="font-secondary" color="red">
                Commandez
            </Button>
            </div>
            
        </div>
        <div className="w-full h-full">
            <div className="relative w-full h-96">
            <img src={Image3} className="bg-yellow absolute top-0 left-0 w-full h-full object-cover z-0" alt="" />
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
            Burger Délice Épicé
            </Heading>
            <p className="text-center">
            Une expérience gustative inoubliable.
            </p>
            <Button className="font-secondary" color="red">
                Commandez
            </Button>
            </div>
            
        </div>
      </div>
    </Container>
  )
}

export default Products
