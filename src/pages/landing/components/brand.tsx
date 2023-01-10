import hm from '../../../assets/hm.svg';
import obey from '../../../assets/obey.svg';
import shopify from '../../../assets/shopify.svg';
import lacoste from '../../../assets/lacoste.svg';
import levis from '../../../assets/levis.svg';
import amazon from '../../../assets/amazon.svg';

export function Brand() {
  return (
    <section className="hidden lg:flex flex-row w-full max-w-[1490px] h-[140px] bg-yellow-200 mx-auto justify-between items-center px-32 mt-[76px]">
      <img src={hm} alt="" className="w-[96px] h-[56px]" />
      <img src={obey} alt="" className="w-[122px] h-[76px]" />
      <img src={shopify} alt="" className="w-[143px] h-[50px]" />
      <img src={lacoste} alt="" className="w-[96px] h-[56px]" />
      <img src={levis} alt="" className="w-[103px] h-[83px]" />
      <img src={amazon} alt="" className="w-[135px] h-[51px]" />
    </section>
  );
}
