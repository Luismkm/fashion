import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

export function Footer() {
  return (
    <footer className="max-w-[1490px] flex bg-black-900 px-4 py-10 h-auto xl:h-[350px] justify-center text-white-100">
      <div className="flex md:flex-row items-center w-[calc(100vw_-_32px)]">
        <div className="w-[100%] xl:w-[1120px] xl:mx-auto flex flex-col md:flex-row">

          <div className="w-[100%]">
            <strong className="font-black text-4xl">
              FASHION
            </strong>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between">
              <p className="w-auto text-gray-600 text-base lg:text-xl mt-9 leading-6 font-roboto">
                Complete your style with awesome
                {' '}
                <br />
                {' '}
                clothes from us.
              </p>
              <div className="w-auto flex flex-row gap-3 my-9">
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-around w-[calc(100vw_-_32px)] md:w-[100%]">
            <div>
              <ul className="text-sm lg:text-base font-roboto text-gray-550">
                <li className="text-gray-400">Company</li>
                <a href="#"><li className="mt-6">About</li></a>
                <a href="#"><li className="mt-6">Contact us</li></a>
                <a href="#"><li className="mt-6">Support</li></a>
                <a href="#"><li className="mt-6">Careers</li></a>
              </ul>
            </div>
            <div>
              <ul className="text-sm lg:text-base font-roboto text-gray-550">
                <li className="text-gray-400">Quick Link</li>
                <a href="#"><li className="mt-6">Share Location</li></a>
                <a href="#"><li className="mt-6">Orders Tracking</li></a>
                <a href="#"><li className="mt-6">Size Guide</li></a>
                <a href="#"><li className="mt-6">FAQs</li></a>
              </ul>
            </div>
            <div>
              <ul className="text-sm lg:text-base font-roboto text-gray-550">
                <li className="text-gray-400">Legal</li>
                <a href="#"><li className="mt-6">Terms & conditions</li></a>
                <a href="#"><li className="mt-6">Privacy Policy</li></a>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
