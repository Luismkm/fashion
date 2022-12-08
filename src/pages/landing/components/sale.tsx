import woman from '../../../assets/woman.png';
import { ShopNow } from '../../../components/btn-shop';

export function Sale() {
  return (
    <section className="grid grid-cols-2 max-w-[1490px] h-auto mx-auto mt-[69px]">
      <img
        src={woman}
        alt=""
        className="w-[100%] h-[100%]"
      />
      <div className="bg-yellow-gradient -ml-[1px] relative pl-10">
        <div className="ml-16 mt-20">
          <div className="bg-white-100 w-[356px] h-[88px] origin-bottom -rotate-2 left-[88px] absolute z-0" />
          <h2 className="text-7xl font-black leading-[90px] relative z-1">PAYDAY</h2>
          <h2 className="text-7xl font-black leading-[90px]">SALE NOW</h2>
          <p className="font-medium text-2xl leading-[36px] mt-[33px]">
            Spend minimal $100 get 30% off
            {' '}
            <br />
            {' '}
            voucher code for your next purchase
          </p>
          <span className="block font-bold text-2xl mt-10">
            1 June - 10 June 2021
          </span>
          <span className="block text-xl mb-6">
            *Terms & Conditions apply
          </span>
          <ShopNow />
        </div>
      </div>
    </section>
  );
}
