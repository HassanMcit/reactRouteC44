import { useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import {  NavLink } from "react-router-dom";

export default function Navbar() {
    

    const [isOpen, setIsOpen] = useState(false);    

    function handleToggle() {
       setIsOpen(!isOpen);
    }
    
  return (
    <>

      <nav className="bg-main-color border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex space-x-5 flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <button
          onClick={handleToggle}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? 'flex' : 'hidden'} bg-white md:bg-transparent w-full flex-col lg:flex-row flex-grow md:flex justify-between  md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="home"
                  className="block py-2 px-3 w-fit text-gray-400 bg-green-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-green-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="product"
                  className="block py-2 px-3 w-fit text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="categories"
                  className="block py-2 px-3 w-fit text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Catgories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="brands"
                  className="block py-2 px-3 w-fit text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Brands
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row items-center space-x-5">
              <ul className="icons flex space-x-4">
                <li>
                  <a
                    to="#"
                    className="block py-2 px-3 w-fit text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black"
                    aria-current="page"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    to="#"
                    className="block py-2 px-3 w-fit text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black"
                    aria-current="page"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    to="#"
                    className="block py-2 px-3 w-fit text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black"
                    aria-current="page"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    to="#"
                    className="block py-2 px-3 w-fit text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black"
                    aria-current="page"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a
                    to="#"
                    className="block py-2 px-3 w-fit text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black"
                    aria-current="page"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    to="#"
                    className="block py-2 px-3 w-fit text-neutral-800 rounded bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black relative"
                    aria-current="page"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div className="absolute bg-green-500 w-[18px] h-[18px] rounded-full center-content top-0 end-0 md:-top-3 md:-end-2 text-white text-sm">
                      8
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="register-login flex space-x-4">
                <li>
                  <NavLink
                    to="register"
                    className="block py-2 px-3 w-fit text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="login"
                    className="block py-2 px-3 w-fit text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="py-2 px-3 md:py-0 md:px-0">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
