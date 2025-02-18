import React from 'react'
import Items from './Items'
import {Link} from 'react-router-dom'
import {ForClients, ForTalent, Resources,Company} from './Menu'
import Fsocialicons from './Fsocialicons'
const Footer = () => {
  return (
    <>
      <footer className='bg-gray-950 text-white '>
      <div className="md:flex md:justify-between  md:items-center sm:px-12 px-4 bg-red-200 py-7 ">
        <h2 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 '><span className='text-teal-500'>Open the minde</span>until you're ready to learn</h2>
        <div className=''>
        <input type="text" placeholder='enter your phone number ' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none ' />
        </div>
        <button className='btnn py-4 px-4 md:w-auto w-full'>get more if have</button>
      </div>
      <div className="container mx-auto my-14 ">
        <hr />
      {/* <div className="grid grid-cols-1  lg:grid-cols-4 items-center border sm:grid-cols-3 md:grid-cols-2 md:items-center "> */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
      <Items Links={ForClients} title='ForClients' />
      <Items  Links={ForTalent} title='ForTalent' />
      <Items  Links={Resources} title='Resources' />
      <Items  Links={Company} title='Company' />
      </div>
      <Fsocialicons />
      <hr className='pb-14'/>
      </div>
     
      </footer>
    </>
  )
}

export default Footer
