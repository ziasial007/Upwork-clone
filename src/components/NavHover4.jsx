import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const NavHover4 = () => {
const navigate = useNavigate()
const handleClick = () =>{
  window.open('/home', '_blank')
}



    const box = [
        { p: 'Post a job and hire a pro', a: 'Talent Marketplace' },
        { p: 'Browse and buy projects', a: 'Project Catalog' },
        { p: 'Get advice from an industry expert', a: 'Consultations' },
      ];
      
  return (
    <>
        <div 
          className="main-1st w-full bg-[#eaecee] flex pt-2 box-show left-0" >
          <div className="side-1 w-[30%] border-r-2 border-[#d5d8dc]">
            {box.map((item, index) => (
              <div className="box1 hover:bg-gray-300 m-3 p-6 cursor-pointer" key={index} onClick={handleClick}>
                <p>{item.p}</p>
                <Link to="" className="text-green-400">{item.a}</Link>
              </div>
            ))}
          </div>
          <div className="side-2 w-1/3 py-4 px-2">
            <div className="box1 p-[20px]">
              <h1 className="text-lg text-black py-2">Talent Marketplace <sup>TM</sup></h1>
              <p>Learn about working with talent or explore your specific hiring needs.</p>
              <Link to="#" className="text-[#145a32] pt-4">Hire on Talent Marketplace</Link>
            </div>
          </div>
          <div className="side-3 w-1/3 flex h-[80vh] items-center justify-center">
            <ul className="link-list list-none space-y-3 w-[400px]">
              {[
                { text: "Development & IT", link: 'https://tailwindcss.com/' },
                { text: "Writing & Translation", link: 'https://getbootstrap.com/docs/5.0/components/navs-tabs/' },
                { text: "Admin & Customer Support", link: "#" },
                { text: "Finance & Accounting", link: "#" },
                { text: "HR & Training", link: "#" },
                { text: "Legal", link: "#" },
                { text: "Engineering & Architecture", link: "#" },
                { text: "Hire freelancers", link: "#" },
              ].map((item, index) => (
                <li className="hover:bg-gray-300 p-2 rounded-md" key={index}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>






      
    </>
  )
}

export default NavHover4
