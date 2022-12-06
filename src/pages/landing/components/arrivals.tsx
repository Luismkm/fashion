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
  );
}
