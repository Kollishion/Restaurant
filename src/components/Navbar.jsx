import React, {useState} from "react";
import './Navbar.css';
import { close, menu } from '../assets'

const Navbar = () =>  {

  let [open, setOpen] = useState(false);

  let links = [
     {name: "HOME", link: "/"}, 
     {name: "ABOUT", link: "/"}, 
     {name: "CONTACT", link: "/"} 
    ]

return (
<nav className=" shadow-md w-full fixed top-0 left-0
 bg-black-gradient-2">
  <div className="md:flex item-center justify-between
   py-4 md:px-10 px-7">
    <div className="flex items-center
       font-serif">
      <span className="text-3xl font-semibold 
      text-gradient text-opacity-100 
       mr-2">Roo's</span>
      <div onClick={() => setOpen((open) => !open)}>
      <img src={open ? close : menu} alt="menu"
       className="w-[28px] h-[28px] md:hidden
       object-contain" 
       />
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 
      md:static md:z-auto z-[-1] left-0 w-full float-right md:w-auto
      md:pl-0 pl-9 transition-all duration-500 ease-in 
       ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'}`}>
      {links.map((links) => (
        <li key={links.name} className="md:ml-8
         text-gray-300 text-xl md:my-0 my-7"><a
         href="links.link" className="hover:text-white
         duration-300">{links.name}</a></li>
      ))}
        <div className="md:space-x-8
        text-white space-y-5">
        <li><button className="bg-blue-600 
         font-extrabold p-1 
         transition duration-300 rounded
          hover:bg-blue-800 item md:ml-8
          ">Sign in</button></li>
        <li><button className="bg-blue-600 
        font-extrabold p-1 transition duration-300 
         hover:bg-blue-800 
          rounded">Log In</button></li>
          </div>
      </ul>
    </div>
  </div>
</nav>
)
}
  
export default Navbar