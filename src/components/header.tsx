import { List } from 'phosphor-react';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center sm:w-full max-w-[1120px] h-[46.5px] mx-auto mt-[18px] px-4 xl:px-0">
      <img
        src={logo}
        alt="logo da Fashion"
        className="w-[180px] h-[45px] cursor-pointer"
      />
      <div className="flex ">
        <div className="hidden md:flex flex-1 flex-row justify-end">
          <ul className="flex flex-row items-center gap-12 text-black-800 text-[1.03125rem] font-medium mr-8">
            <li className="h-[34px] cursor-pointer hover:border-b-2 mt-[9px]">
              CATALOGUE
            </li>
            <li className="h-[34px] cursor-pointer hover:border-b-2 mt-[9px]">
              FASHION
            </li>
            <li className="h-[34px] cursor-pointer hover:border-b-2 mt-[9px]">
              FAVOURITE
            </li>
            <li className="h-[34px] cursor-pointer hover:border-b-2 mt-[9px]">
              LIFESTYLE
            </li>
          </ul>
        </div>
        <button className="hidden lg:block w-[100px] h-[46px] text-white-300 bg-black-900 rounded-md font-medium text-lg transition-opacity hover:opacity-90">
          SIGN UP
        </button>
      </div>

      <div className="md:hidden">
        <List size={32} color="#9141ac" weight="bold" />
      </div>
    </header>
  );
}
