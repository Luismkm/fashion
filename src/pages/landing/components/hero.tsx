import detail from '../../../assets/detail.svg';
import woman1 from '../../../assets/woman1.png';

export function Hero() {
  return (
    <section className="flex flex-row w-full max-w-[1290px] h-[638px] mx-auto items-end pt-[58px] mt-6">
      <div className="flex flex-col">
        <div className="w-[495px] ml-[93px] relative">
          <h1 className="text-7xl font-black leading-[90px]">
            LET’S
            {' '}
            <br />
            {' '}
            EXPLORE
          </h1>
          <div className="bg-yellow-300 w-[371px] h-[88px] origin-bottom -rotate-2 absolute z-0 -left-6" />
          <h1 className="text-7xl font-black leading-[90px] relative z-1">
            UNIQUE
          </h1>
          <h1 className="text-7xl font-black leading-[90px] relative z-1">
            CLOTHES.
          </h1>

          <span className="block mt-[23px] text-2xl">
            Live for Influential and Innovative fashion!
          </span>
          <div className="flex flex-row">
            <img src={detail} alt="" className="mr-8" />
            <button className="w-[165px] h-[61px] text-white-100 bg-black-900 rounded-md font-medium text-[1.375rem] mb-[67px] mt-[23px]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <img
        src={woman1}
        alt=""
        className="w-[100%] h-[100%] object-contain"
      />
    </section>
  );
}
