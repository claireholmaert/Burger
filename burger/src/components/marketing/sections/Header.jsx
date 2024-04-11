// logo
import Logo from '../../../../public/medias/svg/burger_icon.svg';

// elements
import Button from '../../elements/Button';

function Header() {
  return (
    <div className='flex justify-between py-10'>
        <div className='flex items-center justify-start gap-3 w-full'>
        <img src={Logo} alt="Burger House App" className="w-16" />
          <h1 className="text-4xl text-marron">Burger House</h1>
        </div>
        <div className='flex flex-col items-center justify-end w-full font-secondary text-marron'>
          <div className='flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p className='mt-1'>Commander votre repas en ligne</p>
          </div>
            <div className='flex mt-5 space-x-5'>
              <Button className={'bg-yellow hover:bg-marron'}>
                Inscription
              </Button>
              <Button className={'bg-marron hover:bg-yellow'}>
                Connexion
              </Button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
