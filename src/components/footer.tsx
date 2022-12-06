import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

export function Footer() {
  return (
    <footer className="max-w-[1490px] flex bg-black-900 h-[350px] justify-center text-white-100">
      <div className="flex items-center">
        <div className="w-[1290px] mx-auto grid grid-cols-6 gap-2 items-start">
          <div className="col-span-3">
            <strong className="font-black text-4xl">
              FASHION
            </strong>
            <p className="text-gray-600 text-xl mt-9 leading-10 font-roboto">
              Complete your style with awesome
              {' '}
              <br />
              {' '}
              clothes from us.
            </p>
            <div className="flex flex-row gap-3 mt-9">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div>
            <ul className="text-lg font-roboto text-gray-550">
              <li className="text-gray-400">Company</li>
              <li className="mt-6">About</li>
              <li className="mt-6">Contact us</li>
              <li className="mt-6">Support</li>
              <li className="mt-6">Careers</li>
            </ul>
          </div>
          <div>
            <ul className="text-lg font-roboto text-gray-550">
              <li className="text-gray-400">Quick Link</li>
              <li className="mt-6">Share Location</li>
              <li className="mt-6">Orders Tracking</li>
              <li className="mt-6">Size Guide</li>
              <li className="mt-6">FAQs</li>
            </ul>
          </div>
          <div>
            <ul className="text-lg font-roboto text-gray-550">
              <li className="text-gray-400">Legal</li>
              <li className="mt-6">Terms & conditions</li>
              <li className="mt-6">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
