import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Hero } from './components/hero';
import { Brand } from './components/brand';
import { Arrivals } from './components/arrivals';
import { Sale } from './components/sale';
import { Favourite } from './components/favourite';
import { AppBanner } from './components/appBanner';
import { Promo } from './components/promo';

export function Landing() {
  return (
    <div className="max-w-[1440px] h-screen mx-auto">
      <Header />
      <Hero />
      <Brand />
      <Arrivals />
      <Sale />
      <Favourite />
      <AppBanner />
      <Promo />
      <Footer />
    </div>
  );
}
