import { ArrowRight } from 'phosphor-react';

import favourite1 from '../../../assets/favourite1.png';
import favourite2 from '../../../assets/favourite2.png';

export function Favourite() {
  return (
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
  );
}
