import detail from '../../../assets/detail.svg';
import woman1 from '../../../assets/woman1.png';
import { ShopNow } from '../../../components/btn-shop';

export function Hero() {
  return (
    <section className="flex flex-row w-full max-w-[1290px] h-auto lg:h-[638px] mx-auto pt-[58px] mt-6">
      <div className="flex flex-col">
        <div className="flex flex-col items-center lg:items-start w-screen lg:w-[495px] lg:ml-[33px] relative">
          <h1 className="text-[2.5rem] ss:text-[3rem] sm:text-[3.5rem] md:text-7xl font-black leading-[62px] sm:leading-[75px] md:leading-[100px] text-center lg:text-start">
            <span className="block mr-3">
              LET’S
            </span>
            EXPLORE
          </h1>
          <div className="relative flex justify-center w-screen lg:w-[278px]">
            <div className="bg-yellow-300 w-[212px] ss:w-[250px] sm:w-[287px] md:w-[371px] h-[63px] sm:h-[72px] md:h-[92px] origin-bottom -rotate-2 absolute lg:-left-[14px] z-0" />
            <h1 className="text-[2.5rem] ss:text-[3rem] sm:text-[3.5rem] md:text-7xl font-black leading-[62px] sm:leading-[75px] md:leading-[100px] relative z-1 text-center lg:text-start">
              UNIQUE
            </h1>
          </div>
          <h1 className="text-[2.5rem] ss:text-[3rem] sm:text-[3.5rem] md:text-7xl font-black leading-[62px] sm:leading-[75px] md:leading-[100px] relative z-1 text-center lg:text-start">
            CLOTHES.
          </h1>

          <span className="block mt-[23px] text-2xl text-center lg:text-start w-[300px] ss:w-[470px] md:w-auto">
            Live for Influential and Innovative fashion!
          </span>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <img src={detail} alt="" className="hidden lg:block mr-8" />
            <ShopNow />
          </div>
        </div>
      </div>
      <img
        src={woman1}
        alt=""
        className="hidden lg:block w-[100%] h-[100%] object-contain"
      />
    </section>
  );
}
