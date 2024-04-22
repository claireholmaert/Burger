// elements
import Container from "../../elements/Container";

import Heading from '../../elements/DisplayTitles/Heading';

// images
import Image from '../../../../public/medias/images/burger-booking.png';

function Booking() {
  return (
    <Container>
        <div className="relative mb-20">
        <img src={Image} className="absolute top-0 -left-60 hidden lg:block" alt="un hamburger avec de la sauce et du soda" />
        <div className="max-w-3xl mx-auto px-10 py-20">
        <Heading variant="h3" alignement="center">
                Réservation
            </Heading>
            <Heading alignement="center" theme="marron" className="mt-5">
                Réservez votre table
            </Heading>
            <form action="" method="post" className="grid md:grid-cols-2 gap-x-7 gap-y-6 mt-20">
                <div>
                    <label htmlFor="name" hidden>Nom</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="focus:ring-yellow focus:border-yellow block w-full border-formulaire rounded-md p-5 placeholder:text-marron" 
                    placeholder="Nom" 
                    />
                </div>
                <div>
                    <label htmlFor="email" hidden>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="focus:ring-yellow focus:border-yellow block w-full border-formulaire rounded-md p-5 placeholder:text-marron" 
                    placeholder="exemple@hotmail.com" 
                    />
                </div>
                <div>
                    <label htmlFor="date" hidden>Date</label>
                    <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    className="focus:ring-yellow focus:border-yellow block w-full border-formulaire rounded-md p-5 placeholder:text-marron" 
                    />
                </div>
                <div>
                    <label htmlFor="time" hidden>Heure</label>
                    <input 
                    type="time" 
                    name="time" 
                    id="time" 
                    className="focus:ring-yellow focus:border-yellow block w-full border-formulaire rounded-md p-5 placeholder:text-marron" 
                    />
                </div>
                <div>
                    <label htmlFor="owner" hidden>Nombre de personnes</label>
                    <input 
                    type="number" 
                    name="owner" 
                    id="owner" 
                    className="focus:ring-yellow focus:border-yellow block w-full border-formulaire rounded-md p-5 placeholder:text-marron" 
                    placeholder="Nombre de personnes" />
                </div>
                <div>
                    <label htmlFor="submit" hidden>Trouvez une table</label>
                    <input 
                    type="button" 
                    name="submit" 
                    id="submit" 
                    className="bg-red hover:bg-red-hover w-full text-white font-button tracking-widest uppercase py-5 animate rounded-md cursor-pointer"
                    value="Trouvez une table" 
                    />
                </div>
            </form>
        </div>
        </div>
    </Container>
  )
}

export default Booking
