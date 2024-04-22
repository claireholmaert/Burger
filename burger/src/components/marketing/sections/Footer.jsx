// elements
import Container from "../../elements/Container";

// images
import Image from '../../../../public/medias/images/burger-footer.png';

function Footer() {
  return (
    <Container>
      <div className="relative mb-20 p-5 text-white">
        <img src={Image} className="absolute bg-black top-0 left-0 w-full h-full object-cover z-0 rounded-md" alt="un hamburger qui explose" />
        <div className="relative grid md:grid-cols-2 z-10">
            <div className="w-full p-5 mt-20 md:mb-28">
                <h2 className="text-5xl">Burger House</h2>
                <p id="footerParagraphe" className="mt-10">
Explorez une explosion de saveurs chez BurgerHouse. Dégustez nos burgers artisanaux, frites croustillantes et milkshakes onctueux. Commandez en ligne ou visitez-nous aujourd'hui !
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
  <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
</svg>


                    <span className="">15 place bellecour, 51100 Reims</span>
                </div>
                <div className="flex items-center mt-5 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>
                    <span className="">info@burger-house.com</span>
                </div>
            </div>
        </div>
        <div className="relative flex items-center justify-between z-10 mt-10 md:mt-0">
            <div className="uppercase ">
                &copy; burger house 2024. All rights reserved.
            </div>
            <div className="flex">
            <i className="fa-brands fa-facebook-f w-7 h-7 mr-2"></i>
            <i className="fa-brands fa-twitter w-7 h-7 mr-2"></i>
            <i className="fa-brands fa-instagram w-7 h-7 mr-2"></i>
            <i className="fa-brands fa-whatsapp w-7 h-7"></i>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
