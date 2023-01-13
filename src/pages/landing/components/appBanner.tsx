import mobile from '../../../assets/mobile.png';
import appleStore from '../../../assets/apple_store.png';
import googlePlay from '../../../assets/google_play.png';

export function AppBanner() {
  return (
    <section className="max-w-[1120px] h-[960px] ss:h-[1066px] my-0 sm:my-12 md:my-24 lg:my-0 px-4 mx-auto flex lg:flex-row justify-center items-center">
      <div>
        <strong className="text-[2rem] ss:text-[2.375rem] sm:text-[2.5rem] md:text-[3rem] leading-[150%] lg:text-[3rem] text-center xl:text-start font-black  mb-10 block">
          DOWNLOAD APP &
          <br />
          GET THE VOUCHER!
        </strong>
        <div className="lg:hidden max-w-[560px] bg-white-100">
          <img src={mobile} alt="" className="object-contain w-[100%] h-[100%]" />
        </div>
        <p className="text-lg text-center xl:text-start text-gray-600 mb-14 leading-[32px]">
          Get 30% off for first transaction using
          <br />
          Rondovision mobile app for now.
        </p>
        <div className="flex flex-row justify-center xl:justify-start gap-4 h-[54px]">
          <a href="#">
            <img src={appleStore} className="w-[155px] h-[54px]" alt="botao com o logo da Apple" />
          </a>
          <a href="#">
            <img src={googlePlay} className="w-[155px] h-[54px]" alt="botao com o logo da GooglePlay" />
          </a>

        </div>
      </div>
      <div className="hidden lg:block max-w-[560px] bg-white-100">
        <img src={mobile} alt="" className="object-contain w-[100%] h-[100%]" />
      </div>
    </section>
  );
}
