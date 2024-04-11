// elements
import Container from "../../elements/Container"

// images
import Image1 from '../../../../public/medias/images/burger-tex.jpeg';
import Image2 from '../../../../public/medias/images/burger-vue-dessus.jpg';
import Image3 from '../../../../public/medias/images/burger-veggie.jpeg';

function LastProducts() {
  return (
        <Container>
            <div className="grid grid-cols-2 grid-rows-2 gap-9 w-full h-96 px-11 my-20 text-white uppercase tracking-wider">
                <div className="relative row-span-2 bg-yellow h-full rounded-md p-7">
                    <img src={Image1} className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md" alt="Un délicieux hamburger exposé sur une pièce de bois" />
                    <div className="relative">
                    <p className="font-bold">L'Explosion Tex-Mex</p>
                    <p className="text-2xl">Savoureux & relevé</p>
                    </div>
                 
                </div>
                <div className="relative bg-yellow h-full rounded-md p-7">
                    <img src={Image2} className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md" alt="Un hamburger vu du dessus avec des frites dans un recipient en forme de bateau et des anneaux d'oignons rouge à côté" />
                    <div className="relative">
                    <p className="font-bold">Le Suprême Saumoné</p>
                    <p className="text-2xl">Frais & délicat</p>
                    </div>
                    
                </div>
                <div className="relative bg-yellow h-full rounded-md p-7">
                    <img src={Image3} className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md" alt="Un hamburger veggie" />
                    <div className="relative">
                    <p className="font-bold">L'Extravagant Veggie</p>
                    <p className="text-2xl">Créatif & équilibré</p>
                    </div>
                </div>
            </div>
        </Container>
  )
}

export default LastProducts
