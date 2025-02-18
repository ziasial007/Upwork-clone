import React from 'react'
import Items from './Items'
import { LuArrowRight } from "react-icons/lu";

const NavHover2 = () => {
    const hoverside =[
        {heading :'Success stories',para :'Discover how teams work strategically and grow together'},
        {heading :'How to hire',para :'Discover how teams work strategically and grow together'},
        {heading :'Reviews',para :'Discover how teams work strategically and grow together'},
        {heading :'How to find work',para :'Discover how teams work strategically and grow together'},
    ]
    const hoverside2 =[
        {heading : 'Guides' , para:'Getting Started as a Freelancer'},
        {heading : 'Guides' , para:'Growing Your Freelance Career'},
        {heading : 'Guides' , para:'Hiring & Working with Independent Talent'},
    ]
  return (
    <>
      
    <div className="main shadow-2xl w-full h-[410px] flex absolute left-0 bg-[#eaecee] top-16">
        <div className="contaniner first-side w-[50%] h-[400px] ">
        <div className="flex justify-center flex-wrap h-full p-8  ">
            {hoverside.map((item , index)=>(            
                <div className="" key={index}>
                    <div className="content w-[300px] hover:bg-gray-300 py-4 px-4  cursor-pointer rounded-lg">
                     <h4 className='font-medium py-2'>{item.heading}</h4>
                     <p className='text-gray-500'>{item.para}</p>
                     </div>
                </div>
            ))}
        </div>
        </div>


        <div className="contaniner second-side w-[50%] ">
        <div className="h-full flex p-16  gap-4 flex-col ">
            <h2 className=''>Where work gets done</h2>
            {hoverside2.map((item , index)=>(            
                <div className="" key={index}>
                    <div className="content w-[340px] hover:bg-gray-300 px-4 py-2 border border-black cursor-pointer rounded-lg">
                     <h4 className='font-medium'>{item.heading}</h4>
                     <p className='text-gray-500'>{item.para}</p>
                     </div>
                </div>
            ))}
            <div className='flex items-center gap-4 text-green-600'>
            <a href="#"><u className='hover:no-underline'>See Resources</u></a>
            <LuArrowRight />

            </div>
            

        </div>
        </div>


    </div>



    </>
  )
}

export default NavHover2
