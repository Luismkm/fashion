import { ArrowRight } from 'phosphor-react';

import arrival1 from '../../../assets/arrival1.png';
import arrival2 from '../../../assets/arrival2.png';
import arrival3 from '../../../assets/arrival3.png';

import detail from '../../../assets/detail_arrivals.svg';

export function Arrivals() {
  return (
    <section className="max-w-[1290px] mx-auto mt-[69px]">
      <div className="relative">
        <img src={detail} alt="" className="absolute -z-10 left-[198px] top-[20px]" />
        <strong className="text-5xl font-black mb-[92px] block">
          NEW ARRIVALS
        </strong>
      </div>
      <div className="flex flex-row gap-12">
        <div>
          <div className="w-[400px] h-[600px] cursor-pointer overflow-hidden bg-black-800 rounded-[14px]">
            <div className="w-[100%] h-[100%] overflow-hidden">
              <img src={arrival1} alt="" className="w-[100%] h-[100%] hover:ease-in-[cubic-bezier(0.25, 0.45, 0.45, 0.95] hover:scale-[1.08] hover:duration-[5000ms]" />
            </div>
          </div>
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
          <div className="w-[400px] h-[600px] cursor-pointer overflow-hidden bg-black-800 rounded-[14px]">
            <div className="w-[100%] h-[100%] overflow-hidden">
              <img src={arrival2} alt="" className="w-[100%] h-[100%] hover:ease-in-[cubic-bezier(0.25, 0.45, 0.45, 0.95] hover:scale-[1.08] hover:duration-[5000ms]" />
            </div>
          </div>
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
          <div className="w-[400px] h-[600px] cursor-pointer overflow-hidden bg-black-800 rounded-[14px]">
            <div className="w-[100%] h-[100%] overflow-hidden">
              <img src={arrival3} alt="" className="w-[100%] h-[100%] hover:ease-in-[cubic-bezier(0.25, 0.45, 0.45, 0.95] hover:scale-[1.08] hover:duration-[5000ms]" />
            </div>
          </div>
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

        {/* <div>
          <div className="w-[430px] h-[628px] bg-black-800">
            <img src={arrival2} alt="" />
          </div>
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
          <img src={arrival3} alt="" className="cursor-pointer hover:scale-img" />
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
        </div> */}
      </div>
    </section>
  );
}
