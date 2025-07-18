import React from 'react';
import { logo } from '../assets/index';

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeNavbarBackground);
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, []);

  const [menuIcon, setMenuIcon] = React.useState(
    <svg
      className="block h-20 w-10"
      fill="#A3F7BF"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>,
  );

  function handleClick() {
    setShowMenu(!showMenu);
    setMenuIcon(
      showMenu ? (
        <svg
          className="block h-20 w-10 fill-[#A3F7BF]"
          fill="#A3F7BF"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <svg
          className="block h-20 w-10"
          fill="#A3F7BF"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
    );
  }
  return (
    <nav
      className={`z-10 fixed w-full py-2 transition-all duration-300 mx-auto container ${
        navbar ? 'backdrop-blur-sm' : 'backdrop-blur-sm '
      }`}
    >
      <div className="mx-auto container w-full">
        <div className="relative flex h-20 items-center justify-between text-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              aria-controls="mobile-menu"
              aria-expanded={showMenu ? 'true' : 'false'}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="sr-only">Open main menu</span>
              {showMenu ? (
                <svg
                  className="block h-20 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-20 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-between py-7">
            <div className="items-center text-white font-bold text-center">
              <div className="flex flex-shrink-0 items-center ">
                <img
                  className="block h-12 w-auto lg:hidden"
                  src={logo}
                  alt="Your Company"
                />
                <img
                  className="hidden h-14 w-auto lg:block"
                  src={logo}
                  alt="Your Company"
                />
                <h1 className="lg:text-3xl sm:text-2xl tracking-wider ">
                  FAJAR
                </h1>
              </div>
            </div>

            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex lg:space-x-8 md:space-x-1 text-center ">
                <a
                  href="/"
                  className="text-white  hover:text-white px-3 py-2 text-base font-md hover:font-bold "
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white  hover:text-white px-3 py-2 text-base font-md hover:font-bold"
                >
                  About
                </a>
                <a
                  href="#skill"
                  className="text-white  hover:text-white px-3 py-2 text-base font-md hover:font-bold"
                >
                  Skill
                </a>
                <a
                  href="#timeline"
                  className="text-white  hover:text-white px-3 py-2 text-base font-md hover:font-bold"
                >
                  Timeline
                </a>
                <a
                  href="#portofolio"
                  className="text-white  hover:text-white px-3 py-2 text-base font-md hover:font-bold"
                >
                  Portofolio
                </a>
              </div>
            </div>
            <div className=" hidden sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href="#contact"
                class="bg-[#A3F7BF]  py-3 px-4 text-sm font-semibold text-black shadow-sm hover:bg-[#6cff9d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3F7BF] rounded-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div
          className={`sm:hidden backdrop-blur-sm  ${
            showMenu ? 'active' : 'inactive'
          }`}
        >
          <div className={`space-y-1 px-2 pt-2 pb-3 max-h-screen max-h-full`}>
            <a
              href="/"
              className="text-gray-300 hover:font-bold hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:font-bold hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>

            <a
              href="#skill"
              className="text-gray-300 hover:font-bold hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Skill
            </a>

            <a
              href="#timeline"
              className="text-gray-300 hover:font-bold hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Timeline
            </a>
            <a
              href="#portofolio"
              className="text-gray-300 hover:font-bold hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Portofolio
            </a>
            <div className="flex justify-center ">
              <a
                href="#contact"
                className=" px-3 py-2 bg-[#A3F7BF] w-[50%] text-[#1B2430] rounded-md text-md text-center"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
