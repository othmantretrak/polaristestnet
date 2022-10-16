import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo.svg";

function Header() {
  const [top, setTop] = useState(true);
  const [isopen, setIsopen] = useState(false);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  const hedden = isopen
    ? "absolute bg-white  flex items-center justify-center mobile-menu  pb-8 pt-5 shadow-1 top-full w-full"
    : "hidden";
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a href="/">
              <img src={Logo} className="w-40 ml-7" alt="Polaris" />
            </a>
          </div>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/sobre"
                  className="btn-sm text-blue-900 bg-white hover:bg-gray-200 ml-3 invisible lg:visible"
                >
                  <span>Sobre nós</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="btn-sm text-gray-200 bg-blue-900 hover:bg-blue-700 ml-3 invisible lg:visible"
                >
                  <span>Contato</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile menu button */}
          <div class="md:hidden flex items-center">
            <button
              onClick={() => setIsopen(!isopen)}
              class="outline-none mobile-menu-button"
            >
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* Mobile menu  */}
          <div class={hedden}>
            <ul class="flex flex-col gap-4">
              <li class="active">
                <Link
                  to="/sobre"
                  className="btn-sm text-blue-900 bg-white hover:bg-gray-200 ml-3 "
                >
                  <span>Sobre nós</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="btn-sm text-gray-200 bg-blue-900 hover:bg-blue-700 ml-3 "
                >
                  <span>Contato</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
