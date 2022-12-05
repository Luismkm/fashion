import { ArrowRight } from 'phosphor-react';

import logo from './assets/logo.svg';
import detail from './assets/detail.svg';
import woman1 from './assets/woman1.png';
import woman from './assets/woman.png';

import favourite1 from './assets/favourite1.png';
import favourite2 from './assets/favourite2.png';

import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';

import mobile from './assets/mobile.png';
import appleStore from './assets/apple_store.png';
import googlePlay from './assets/google_play.png';

import hm from './assets/hm.svg';
import obey from './assets/obey.svg';
import shopify from './assets/shopify.svg';
import lacoste from './assets/lacoste.svg';
import levis from './assets/levis.svg';
import amazon from './assets/amazon.svg';

import arrival1 from './assets/arrival1.png';
import arrival2 from './assets/arrival2.png';
import arrival3 from './assets/arrival3.png';

function App() {
  return (
    <div className="max-w-[1440px] h-screen mx-auto">

      <header className="flex flex-row w-full max-w-[1290px] h-[46.5px] mt-10 mx-auto">
        <img
          src={logo}
          alt="logo da Fashion"
          className="w-[180px] h-[45px]"
        />
        <div className="flex flex-1 flex-row justify-end">
          <ul className="flex flex-row items-center gap-12 text-black-800 text-[1.03125rem] font-medium mr-8">
            <li>
              CATALOGUE
            </li>
            <li>
              FASHION
            </li>
            <li>
              FAVOURITE
            </li>
            <li>
              LIFESTYLE
            </li>
          </ul>

          <button className="w-[100px] h-[46px] text-white-300 bg-black-900 rounded-md font-medium text-lg">
            SIGN UP
          </button>
        </div>
      </header>

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

      <section className="flex flex-row w-full max-w-[1490px] h-[140px] bg-yellow-200 mx-auto justify-between items-center px-32 mt-[76px]">
        <img src={hm} alt="" className="w-[96px] h-[56px]" />
        <img src={obey} alt="" className="w-[122px] h-[76px]" />
        <img src={shopify} alt="" className="w-[143px] h-[50px]" />
        <img src={lacoste} alt="" className="w-[96px] h-[56px]" />
        <img src={levis} alt="" className="w-[103px] h-[83px]" />
        <img src={amazon} alt="" className="w-[135px] h-[51px]" />
      </section>

      <section className="max-w-[1290px] mx-auto mt-[69px]">
        <strong className="text-5xl font-black mb-[92px] block">
          NEW ARRIVALS
        </strong>
        <div className="flex flex-row gap-12">
          <div className="w-[484px] h-[704px]">
            <img src={arrival1} alt="" />
            <div className="flex flex-row justify-between items-center h-[76px] bg-white-300">
              <div className="flex flex-col">
                <span className="text-black-850 text-xl font-medium">
                  Hoodies & Sweetshirt
                </span>
                <span className="text-gray-600 text-lg">
                  Explore Now!
                </span>
              </div>
              <ArrowRight size={32} color="#797979" />
            </div>
          </div>
          <div>
            <img src={arrival2} alt="" />
            <div className="flex flex-row justify-between items-center h-[76px] bg-white-300">
              <div className="flex flex-col">
                <span className="text-black-850 text-xl font-medium">
                  Coats & Parkas
                </span>
                <span className="text-gray-600 text-lg">
                  Explore Now!
                </span>
              </div>
              <ArrowRight size={32} color="#797979" />
            </div>
          </div>
          <div>
            <img src={arrival3} alt="" />
            <div className="flex flex-row justify-between items-center h-[76px] bg-white-300">
              <div className="flex flex-col">
                <span className="text-black-850 text-xl font-medium">
                  Tees & T-Shirt
                </span>
                <span className="text-gray-600 text-lg">
                  Explore Now!
                </span>
              </div>
              <ArrowRight size={32} color="#797979" />
            </div>
          </div>
        </div>
      </section>

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
            <button className="w-[165px] h-[61px] text-white-100 bg-black-900 rounded-md font-medium text-[1.375rem] mb-[67px] mt-[23px]">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1290px] mx-auto">
        <strong className="pt-[100px] pb-[50px] block text-4xl">
          Young’s Favourite
        </strong>
        <div className="flex gap-8">
          <div>
            <img src={favourite1} alt="" />
            <div className="flex flex-row justify-between items-center h-[76px] bg-white-300">
              <div className="flex flex-col">
                <span className="text-black-850 text-xl font-medium">
                  Trending on instagram
                </span>
                <span className="text-gray-600 text-lg">
                  Explore Now!
                </span>
              </div>
              <ArrowRight size={32} color="#797979" />
            </div>
          </div>
          <div>
            <img src={favourite2} alt="" />
            <div className="flex flex-row justify-between items-center h-[76px] bg-white-300">
              <div className="flex flex-col">
                <span className="text-black-850 text-xl font-medium">
                  All Under $40
                </span>
                <span className="text-gray-600 text-lg">
                  Explore Now!
                </span>
              </div>
              <ArrowRight size={32} color="#797979" />
            </div>
          </div>
        </div>
      </section>

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

      <section className="max-w-[1490px] mx-auto flex flex-col justify-center items-center bg-yellow-550 h-[400px]">
        <h3 className="font-black text-white-100 text-5xl text-center leading-[60px]">
          JOIN SHOPPING COMMUNITY TO
          {' '}
          <br />
          {' '}
          GET MONTHLY PROMO
        </h3>
        <p className="text-white-100 text-xl mt-5">
          Type your email down below and be young wild generation
        </p>
        <div className="w-[370px] h-[64px] bg-white-100 flex justify-center items-center rounded-[10px] mt-9">
          <form className="flex justify-center items-center">
            <input type="text" placeholder="Add your email here" className="p-5 w-[254px] h-[64px] outline-none" />
            <button type="submit" className="bg-black-900 text-white-100 font-medium text-xl py-2 px-6 rounded-lg">
              SEND
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-[1490px] flex bg-black-900 h-[400px] justify-center text-white-100">
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
      </section>
    </div>
  );
}

export default App;
