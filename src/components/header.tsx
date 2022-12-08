import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="flex flex-row w-full max-w-[1290px] h-[46.5px] mt-10 mx-auto">
      <img
        src={logo}
        alt="logo da Fashion"
        className="w-[180px] h-[45px] cursor-pointer"
      />
      <div className="flex flex-1 flex-row justify-end">
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

        <button className="w-[100px] h-[46px] text-white-300 bg-black-900 rounded-md font-medium text-lg transition-opacity hover:opacity-90">
          SIGN UP
        </button>
      </div>
    </header>
  );
}
