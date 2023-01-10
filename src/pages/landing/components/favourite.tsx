import { ArrowRight } from 'phosphor-react';

import favourite1 from '../../../assets/favourite1.png';
import favourite2 from '../../../assets/favourite2.png';

import detail from '../../../assets/detail.svg';

export function Favourite() {
  return (
    <section className="max-w-[1120px] mx-auto">
      <div className="relative h-[80px] mt-20 mb-24">
        <img src={detail} alt="" className="absolute bottom-[26px] left-[260px] -z-10" />
        <strong className="block text-5xl">
          Young’s Favourite
        </strong>
      </div>
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
  );
}
