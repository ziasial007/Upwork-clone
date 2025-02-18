import React from 'react'
import logo from '../assets/img/logo.png'
import { FaRegUser } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";

const Login = () => {
  return (
    <>
      <div className="main p-4 ">
        <div className="logo fixed ">
            <img src={logo} alt=""  className='h-[20px]'/>
        </div>
        <div className="main-div border mt-14 flex justify-center items-center rounded-xl p w-[50%] m-auto">
        <div className="login-div  ">
            <div className="divi flex flex-col py-5">
                <h2 className='flex justify-center font-semibold text-[25px]'>Log in to Upwork</h2>
                <div className="user flex items-center py-4">
                <FaRegUser  className='absolute left-[38%] '/>
                <input type="text" placeholder='Username or Email' className='px-8 py-2  w-[350px] border  border-gray-500  rounded-lg outline-none'/>
                </div>
                <button className='btn bg-[#14A800] py-2 px-24 rounded-xl text-white'>Contue</button>
                <div className="hr py-10">
                    <hr />
                    <p className='absolute top-[67%] left-[49%] bg-white px-2'>or</p>
                </div>
                          
                
                <button className='btn flex items-center justify-center bg-[#4285F4] py-2 px-24 rounded-xl text-white w-[350px]'><FaGoogle className='absolute left-[38%] rounded-lg '/>Contue</button>
                
                          
                <button className='btn border border-black py-2 px-24 rounded-xl text-black mt-6 w-[350px] flex items-center justify-center '><FaApple className='absolute left-[46%] '/> Contue</button>
              
                <div className="pt-24 flex justify-center items-center flex-col">
                    <p> Don't have an Upwork account? </p>
                <button className='btn  my-4 py-2 px-24 rounded-xl text-green-600 border border-green-600 w-[280px]'>Contue</button>
                </div>

                
               

                


            </div>
        </div>
        </div>
      </div>




    </>
  )
}

export default Login
