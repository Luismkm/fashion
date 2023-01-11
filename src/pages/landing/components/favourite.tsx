import { ArrowRight } from 'phosphor-react';

import favourite1 from '../../../assets/favourite1.png';
import favourite2 from '../../../assets/favourite2.png';

import detail from '../../../assets/detail.svg';

export function Favourite() {
  return (
    <section className="max-w-[1120px] mx-auto">
      <div className="relative pl-4 xl:pl-0 w-[317px] ss:w-[373px] sm:w-[394px] md:w-[471px] lg:w-[468px] h-[48px] ss:h-[57px] sm:h-[60px] md:h-[73px] lg:h-[58px] mt-20 mb-24">
        <img src={detail} alt="" className="absolute w-[110px] ss:w-[129px] sm:w-[140px] md:w-[167px] lg:w-[182px] right-0 bottom-0 -z-10" />
        <strong className="text-[2rem] ss:text-[38px] sm:text-[2.5rem] md:text-[3rem] lg:text-5xl block">
          Young’s Favourite
        </strong>
      </div>
      <div className="flex flex-col md:flex-row px-4 xl:px-0 gap-8">
        <div>
          <img src={favourite1} alt="duas mulheres usando óculos escuro ambas estão sorindo" />
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
          <img src={favourite2} alt="mulher usa shorts jeans com blusa branca e óculos vermelho" />
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
