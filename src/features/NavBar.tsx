import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode"
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
 
import React, { useState } from 'react'

const NavBar = () => {
  let Links = [
    {name:"HOME",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"SERVICE",link:"/"},
    {name:"BLOG'S",link:"/"},
    {name:"CONTACT",link:"/"},
  ]
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex md:items-center md:justify-between bg-white py-4 md:px-10 px-7">
           <a href="#">
           <div className="flex font-bold text-2xl cursor-pointer items-center text-gray-800">
                <span className="text-3xl text-indigo-600">
                <FontAwesomeIcon icon={faCode} beat />
                </span>&nbsp;
                Developer
            </div>
            <div onClick={toggleMenu} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {open?(
                <FontAwesomeIcon icon={faCircleXmark} beat />
                ):(
                <FontAwesomeIcon icon={faBars} />

              )}
            </div>
           </a>
            <ul className={`md:flex md:items-center gap-6 absolute px-14 right-0 md:static bg-gray-100 md:bg-white md:z-auto z-[-1] w-full  md:w-auto ease-in ${open ? 'top-16 pb-4':'top-[-490px]'}`}>

              {Links.map((link)=>(
                <li key={link.name} className="text-xl my-7">
                  <a className="text-gray-800 hover:text-gray-600 duration-500" href={link.link}>{link.name}</a>
                </li>
              ))}
              <button className="bg-blue-600 hover:bg-black text-white hover:text-white px-2 py-1 duration-500 rounded-md">GetStarted</button>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
