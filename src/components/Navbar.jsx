import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import logo from '../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import NavHover1 from './NavHover1';
import NavHover2 from './NavHover2';
import NavHover4 from './NavHover4';
import join from './Join'

const Navbar = () => {

  //Finde Talent ////
  const [hhover, setHhover] = useState(false)
  const handelMouse = () => setHhover(true)
  const handelMouse2 = () => {
    setHhover(true)
  }
  const hhandelMouseleave = (e) => {
    setHhover(false)
  }



  /////// Finde work//////
  const [hover, setHover] = useState(false);
  const handleMouseLeave = (event) => {

    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
      setHover(false);
    }
  };
  //////////////
  //////Why upwork////////
  const [navHover1, setNavHover1] = useState(false)
  const handleMouseEnter = () => setHover(true);
  const handleMouseEnter2 = () => {
    setNavHover1(true)
  }
  const handleNavHoverLeave = (e) => {
    setNavHover1(false)
  };


  /////////////////////////
  /////////Whats new/////////
  const [navHover2, setNavHover2] = useState(false)
  const handleMouseEnter3 = () => setNavHover2(true);
  const handleMouseEnter4 = () => {
    setNavHover2(true)
  };
  const handleNavMouseLeave3 = (e) => {
    setNavHover2(false)
  }
  ///////////////
  ////////Enter Prise///////
  const [NavHover3, setNavHover3] = useState(false)
  const hMouseEnter = () => setHover(true);
  const hMouse2Enter = () => {
    setNavHover3()
  }

  const navigate1 = useNavigate()
  const handleClick1 = () => {
    navigate('/join')
    console.log("wrok");
  }
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('./login')
  }

  return (
    <>
      <div className="container-fluid all-menu top-0 fixed w-[100%] shadow-xl bg-white z-10">
        <nav className="flex justify-around p-3 items-center ">
          <div className="logo">
            <Link to="http://localhost:5173/" >
              <img src={logo} alt="logo" className="h-6" />
            </Link>
          </div>

          <div className="main-menu">
            <ul className="flex gap-10 items-center">
              <li
                className="group"
                onMouseEnter={handelMouse}
                onMouseLeave={hhandelMouseleave}>
                <Link to="#" className='py-6 '> Find work</Link>
                {hhover && <NavHover4 />}
              </li>
              <li className='p-2'
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleNavHoverLeave}
              ><Link to="#" className='py-6'>Why Upwork</Link>
                {navHover1 && <NavHover1 />}
              </li>

              <li className=''
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleNavMouseLeave3}>
                <Link to="#" className='py-6'>What's new</Link>
                {navHover2 && <NavHover2 />}
              </li>
              <li><Link to="#">Enterprise</Link></li>
              <Link to="#"><li>Pricing</li></Link>
            </ul>
          </div>

          <div className="search-icon flex items-center relative ms-4  rounded-full border">
            <GoSearch className="absolute top-3 left-3 " />
            <input type="email" placeholder="Search" className="p-2 rounded-full  outline-none px-[34px]"/>

            <select className="p-2 rounded-full bg-none" onChange={handleClick1} >
              <option>Talent</option>
              <option>Job</option>
              <option>Project</option>
            </select>
          </div>

          <Link to="login" onClick={handleClick}>Login</Link>
          <button className="btn bg-green-600 font-semibold px-4 py-2 rounded-xl text-white hover:bg-green-500 transition duration-500 ease-in-out" onClick={handleClick1}>Sign Up</button>
        </nav>
        <hr className='border-gray-400' />
        <div className="p-5 ">
          <ul className="sec flex list-none gap-8 ">
            <Link><li>Development & IT</li></Link>
            <Link><li>AI Services</li></Link>
            <Link><li>Design & Creative</li></Link>
            <Link><li>Sales & Marketing</li></Link>
            <Link><li>Admin & Customer Support</li></Link>
            <li className="relative group cursor-pointer ">
              More
              <ul className="absolute hidden group-hover:block bg-white border right-1 rounded-lg py-2 w-[220px]">
                <li className="py-2 px-4 hover:bg-gray-200">Submenu 1</li>
                <li className="py-2 px-4 hover:bg-gray-200">Submenu 2</li>
                <li className="py-2 px-4 hover:bg-gray-200">Submenu 3</li>
                <li className="py-2 px-4 hover:bg-gray-200">Submenu 4</li>
                <li className="py-2 px-4 hover:bg-gray-200">Submenu 5</li>
                <li className="py-2 px-4 hover:bg-gray-200">Submenu 6</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>


      {/* Hover Box */}



    </>
  );
}

export default Navbar;
