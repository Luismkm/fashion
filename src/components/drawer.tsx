import { TfiClose } from 'react-icons/tfi';

import { NavLink } from 'react-router-dom';

function Drawer() {
  return (
    <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col w-screen bg-white-100 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="h-[72px] offcanvas-header flex items-center justify-between px-6">
        <button className="p-1" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
          <TfiClose size={20} color="#000" />
        </button>
      </div>
      <div className="flex flex-col items-center offcanvas-body flex-grow p-4 overflow-y-auto">
        <nav>
          <ul className="flex flex-col gap-12 mt-[60px] text-center font-bold text-2xl text-black-900">
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="#">CATALOGUE</a>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="#">FASHION</a>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="#">FAVOURITE</a>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="#">LIFESTYLE</a>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}

export { Drawer };
