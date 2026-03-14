import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Slogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "HOME", link: "/#home" },
    { name: "CONFERENCE LIST", link: "/#conferences" },
    { name: "CALL FOR PAPERS", link: "/#callForPapers" },
    { name: "SUBMISSIONS", link: "/#submission" },
    { name: "REGISTRATION", link: "/#registrationFee" },
    { name: "DATES", link: "/#registrationDates" },
    { name: "COMMITTEE", link: "/#committee" },
    { name: "CONTACT US", link: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        {/* Logo */}
        <HashLink smooth to="/#home">
          <img
            src={logo}
            alt="Aditya University"
            className="h-22 md:h-26 w-auto object-contain"
          />
        </HashLink>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700 text-sm tracking-wide">
          {menuItems.map((item) => (
            <li key={item.name}>
              <HashLink
                smooth
                to={item.link}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </HashLink>
            </li>
          ))}

          {/* Register Button */}
          {/* <li>
            <HashLink
              smooth
              to="/#registrationFee"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Register
            </HashLink>
          </li> */}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-semibold text-gray-700 text-sm tracking-wide bg-white shadow transition-all duration-300">
          {menuItems.map((item) => (
            <li key={item.name}>
              <HashLink
                smooth
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </HashLink>
            </li>
          ))}

          {/* Register Button */}
          {/* <li>
            <HashLink
              smooth
              to="/#registrationFee"
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center hover:bg-orange-600 transition"
            >
              Register
            </HashLink>
          </li> */}
        </ul>
      )}
    </nav>
  );
}
