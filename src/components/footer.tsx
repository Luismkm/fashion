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
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-around w-[calc(100vw_-_32px)] md:w-[100%]">
            <div>
              <ul className="text-sm lg:text-base font-roboto text-gray-550">
                <li className="text-gray-400">Company</li>
                <li className="mt-6">About</li>
                <li className="mt-6">Contact us</li>
                <li className="mt-6">Support</li>
                <li className="mt-6">Careers</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm lg:text-base font-roboto text-gray-550">
                <li className="text-gray-400">Quick Link</li>
                <li className="mt-6">Share Location</li>
                <li className="mt-6">Orders Tracking</li>
                <li className="mt-6">Size Guide</li>
                <li className="mt-6">FAQs</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm lg:text-base font-roboto text-gray-550">
                <li className="text-gray-400">Legal</li>
                <li className="mt-6">Terms & conditions</li>
                <li className="mt-6">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
