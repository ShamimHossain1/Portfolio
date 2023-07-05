import React, { useState } from 'react';
import { BiRightArrowAlt } from "react-icons/bi";

import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  return (


    <div className="navbar bg-base-100 -mt-16 shadow-lg px-20 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

        </div>
        <Link to="#about" smooth className="btn btn-ghost normal-case text-4xl">Shamim</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 font-semibold text-lg">
          <li><Link smooth className='hover:text-blue-500' to="#" >Home</Link></li>
          <li><Link smooth className='hover:text-blue-500' to="#about">About</Link></li>
          <li><Link smooth className='hover:text-blue-500' to="#skills">Skills</Link></li>
          <li><Link smooth className='hover:text-blue-500' to="#projects">Projects</Link></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <Link to="#contact" smooth className="btn  border-blue-500 hover:text-slate-300  px-2 py-2 rounded-lg  text-blue-500 font-bold text-lg">Hire <BiRightArrowAlt></BiRightArrowAlt></Link>
      </div>
    </div>


  );
};

export default Navbar;