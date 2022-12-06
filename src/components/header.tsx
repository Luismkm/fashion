import logo from '../assets/logo.svg';

export function Header() {
  return (
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
  );
}
