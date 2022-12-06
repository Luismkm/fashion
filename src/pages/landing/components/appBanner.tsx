import mobile from '../../../assets/mobile.png';
import appleStore from '../../../assets/apple_store.png';
import googlePlay from '../../../assets/google_play.png';

export function AppBanner() {
  return (
    <section className="max-w-[1290px] mx-auto flex justify-between items-center pl-36 pt-28 pb-28">
      <div>
        <strong className="text-4xl font-black leading-[150%] mb-10 block">
          DOWNLOAD APP &
          {' '}
          <br />
          GET THE VOUCHER!
        </strong>
        <p className="text-lg text-gray-600 mb-14 leading-[32px]">
          Get 30% off for first transaction using
          {' '}
          <br />
          {' '}
          Rondovision mobile app for now.
        </p>
        <div className="flex flex-row gap-4 h-[54px]">
          <img src={appleStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
      <div className="max-w-[560px] bg-white-100">
        <img src={mobile} alt="" className="object-contain w-[100%] h-[100%]" />
      </div>
    </section>
  );
}
