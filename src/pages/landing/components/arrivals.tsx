import { ArrowRight } from 'phosphor-react';

import arrival1 from '../../../assets/arrival1.png';
import arrival2 from '../../../assets/arrival2.png';
import arrival3 from '../../../assets/arrival3.png';

import detail from '../../../assets/detail_arrivals.svg';

export function Arrivals() {
  return (
    <section className="xl:px-4 max-w-[1120px] mx-auto mt-[69px]">
      <div className="relative w-[254px] ss:w-[302px] sm:w-[322px] md:w-[384px]">
        <img src={detail} alt="" className="absolute -z-10 right-0 bottom-[6px] ss:bottom-[7px] md:bottom-[10px] lg:-bottom-[2px] w-[115px] ss:w-[137px] sm:w-[146px] md:w-[174px] lg:md:w-[177px]" />
        <strong className="text-[2rem] ss:text-[38px] sm:text-[2.5rem] md:text-[3rem] lg:text-5xl font-black mb-[92px] block">
          NEW ARRIVALS
        </strong>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6">

          <div className="w-auto">
            <div className="w-auto max-w-[400px] h-[600px] cursor-pointer overflow-hidden bg-black-800 rounded-[14px]">
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

          <div className="w-auto">
            <div className="w-auto max-w-[400px] h-[600px] cursor-pointer overflow-hidden bg-black-800 rounded-[14px]">
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

          <div className="w-auto md:col-span-2 lg:col-span-1 md:mx-auto xl:mx-0">
            <div className="w-auto max-w-[400px] h-[600px] cursor-pointer overflow-hidden bg-black-800 rounded-[14px]">
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
        </div>
      </div>
    </section>
  );
}
