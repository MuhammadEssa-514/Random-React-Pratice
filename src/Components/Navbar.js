import React from "react";
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  // const Menu = (e) => {
  //     let list = document.querySelector('ul');
  //     if (e.target.name === 'menu') {
  //       e.target.name = 'close';
  //       list.classList.add('top-[80px]');
  //       list.classList.add('opacity-100');
  //     } else {
  //       e.target.name = 'menu';
  //       list.classList.remove('top-[80px]');
  //       list.classList.remove('opacity-100');
  //     }
  //   };

  return (
    <div>
      <body className="bg-cyan-400 font-[poppins]">
        <nav className="p-4 bg-white shadow-red-700 md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <span className="ml-6 font-[poppins] cursor-pointer">
              <img
                className="h-10 inline"
                src="https://metalbadgeandbutton.com/wp-content/uploads/2016/06/aims-logo.png"
                alt="logo"
              />
            </span>
            <span className="text-3xl cursor-pointer md:hidden lg:hidden    xl:hidden 2xl:hidden">
              <a name="menu">
                <MdOutlineMenu />
              </a>
            </span>
          </div>
          <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-[white] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400] transition-all ease-in duration-500 font-semibold">
            <li className="mx-4 my-6 md:my-0 bolder">
              <a
                className="text-[17px] p-2 rounded hover:bg-black hover:text-white duration-500"
                href=""
              >
                Home
              </a>
            </li>
            <li className="mx-4  my-6 md:my-0">
              <a
                className="text-[17px] p-2 rounded hover:bg-black hover:text-white duration-500"
                href=""
              >
                Services
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                className="text-[17px] p-2 rounded hover:bg-black hover:text-white duration-500"
                href=""
              >
                About
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                className="text-[17px] p-2 rounded hover:bg-black hover:text-white duration-500"
                href=""
              >
                Contact
              </a>
            </li>
            
            <button className="bg-black text-white duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
              Suscribe
            </button>
          </ul>
        </nav>
      </body>
    </div>
  );
}

export default Navbar;
