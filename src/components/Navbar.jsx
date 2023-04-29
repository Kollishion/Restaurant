import React, { useState } from "react";
import "./Navbar.css";
import { close, menu } from "../assets";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <nav className="shadow-md w-full fixed top-0 
    left-0 bg-black-gradient-2 p-1">
      <div className="md:flex item-center 
      justify-between py-3 md:px-10 px-7 font-serif">
        <span className="md:static left-6 
        absolute text-3xl font-semibold text-gradient 
        text-opacity-100 mr-2 leading-[2]">Roo's</span>
        <img src={open ? close : menu}
         onClick={() => 
         setOpen((open) => !open)} alt="menu"
          className="w-[28px] h-[28px] md:hidden
           absolute right-6 object-contain z-10" />
        <div
          className={`md:flex md:items-center 
          md:pb-0 pb-10 left-0 w-full float-right
           md:w-auto md:pl-0 pl-9 transition-all
            duration-500 ease-in ${
            open ? "top-20 opacity-100" : 
            "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((links) => (
            <div key={links.id} className="md:ml-8 
             text-gray-300 text-xl md:my-0 my-6">
              <a href="links.link" 
              className="hover:text-white duration-300">
                {links.name}
              </a>
            </div>
          ))}
          <div className="md:space-x-8 
          flex md:flex-row flex-col w-52 mx-auto
           text-white  items-center
           ">
            <button className="bg-blue-600 
            font-extrabold p-1 transition duration-300
             rounded hover:bg-blue-800 item
              md:ml-8">Sign in</button>
            <button className="bg-blue-600 
            font-extrabold  transition duration-300
             hover:bg-blue-800 rounded
             p-1 md:mt-0 mt-5">Log In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
