// logo
import Logo from '../../../../public/medias/svg/burger_icon.svg';

// elements
import Button from '../../elements/Button';

function Header() {
  return (
    <div className='flex justify-between py-10'>
        <div className='flex items-center justify-start space-x-3 w-full'>
        <img src={Logo} alt="Burger House App" className="w-10 md:w-16" />
          <h1 className="text-4xl text-marron hidden md:block">Burger House</h1>
        </div>
        <div className='flex flex-col items-center justify-end text-marron'>
          <div className='space-x-1 hidden md:flex'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
</svg>

            <p className='mt-1 tracking-widest'>Commander votre repas en ligne</p>
          </div>
            <div className='flex md:mt-5 space-x-5'>
              <Button className="tracking-widest">
                Inscription
              </Button>
              <Button  className="tracking-widest" color="marron">
                Connexion
              </Button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
