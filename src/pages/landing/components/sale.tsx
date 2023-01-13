import woman from '../../../assets/woman.png';
import { ShopNow } from '../../../components/btn-shop';

export function Sale() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 max-w-[1490px] h-auto mx-auto mt-[69px]">
      <img
        src={woman}
        alt=""
        className="hidden lg:block w-[100%] h-[100%]"
      />
      <div className="bg-yellow-gradient -ml-[1px] relative lg:pl-10">
        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start text-center xl:text-start py-10 px-14 lg:pl-0 lg:pr-10 mx-auto md:ml-16 md:mt-20">
          <div className="relative w-[201px] ss:w-[222px] sm:w-[228px] md:w-[356px]">
            <div className="bg-white-100 w-[202px] ss:w-[222px] sm:w-[234px] md:w-[356px] h-[57px] sm:h-[67px] md:h-[88px] origin-bottom -rotate-2 absolute z-0" />
          </div>
          <h2 className="text-[2.5rem] ss:text-[2.75rem] sm:text-5xl md:text-7xl font-black leading-[55px] ss:leading-[60px] sm:leading-[66px] md:leading-[90px] relative z-1">
            PAYDAY
          </h2>
          <h2 className="text-[2.5rem] ss:text-[2.75rem] sm:text-5xl md:text-7xl font-black leading-[55px] ss:leading-[60px] sm:leading-[66px] md:leading-[90px]">
            SALE NOW
          </h2>
          <p className="font-medium text-base ss:text-xl sm:text-2xl leading-8 md:leading-[36px] mt-[33px]">
            Spend minimal $100 get 30% off
            {' '}
            <br />
            {' '}
            voucher code for your next purchase
          </p>
          <span className="block font-bold text-[1.375rem] md:text-2xl mt-10">
            1 June - 10 June 2021
          </span>
          <span className="block text-lg md:text-xl mb-6">
            *Terms & Conditions apply
          </span>
          <ShopNow />
        </div>
      </div>
    </section>
  );
}
