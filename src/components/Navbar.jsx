import React, { useState } from 'react';

import {
  FaBars,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

import Logo from '../assets/logo.png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="lumumba" style={{ width: "120px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
        <li>
            <Link to="dance" smooth={true} duration={500}>
              Dance
            </Link>
          </li>
          <Link to="videos" smooth={true} duration={500}>
            Videos
          </Link>
        </li>
        <li>
          <Link to="documents" smooth={true} duration={500}>
            Documents
          </Link>
        </li>
        <li>
          <Link to="pictures" smooth={true} duration={500}>
            Hobbies
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}<Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}<Link onClick={handleClick} to="dance" smooth={true} duration={500}>
            Hobbies
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Dance
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}<Link onClick={handleClick} to="documents" smooth={true} duration={500}>
            Documents
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}<Link onClick={handleClick} to="pictures" smooth={true} duration={500}>
            Hobbies
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/cornelius-shitsukane-717909212/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-800">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#940e0e]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://mail.google.com/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1bbb5e]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://web.whatsapp.com/">
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>;
}

export default Navbar;
