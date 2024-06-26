// sections
import Booking from '../components/marketing/sections/Booking';
import Event from '../components/marketing/sections/Event';
import Footer from '../components/marketing/sections/Footer';
import HeroTop from '../components/marketing/sections/HeroTop';
import LastProducts from '../components/marketing/sections/LastProducts';
import Products from '../components/marketing/sections/Products';

function HomePage() {
  return (
    <div>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
      <Footer />
    </div>
  );
}

export default HomePage;