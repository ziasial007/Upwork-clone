
import React, { useState } from 'react'
import logo from '../assets/img/logo.png';
import { CiLaptop } from "react-icons/ci";
const Join = () => {
    const selectBox = [
        { icon: <CiLaptop />, heading: 'I’m a client, hiring for a project' },
        { icon: <CiLaptop />, heading: 'I’m a freelancer, looking for work' },
    ]
    const [client, setclient] = useState(null)
    const handelClick = (index) =>{
        setclient(index);
    }
    return (
        <>
            <div className="logo p-4">
                <img src={logo} alt="" className='h-[20px] ' />
            </div>

            <div className="main">
                <div className="hello flex justify-center items-center">
                    <h2 className='text-[30px] font-semibold'>Join as a client or freelancer</h2>
                </div>
                <div className="content flex justify-center h-[55vh] items-center gap-10 ">
                    {selectBox.map((item, index) => (
                        <div className="select-box transition-transform duration-300" key={index} onClick={() => { handelClick(index) }}>

                            <div className="icons w-[300px] h-[160px] border-2 p-3 rounded-lg " >
                                <div className="icon justify-between flex">
                                    <span className='text-[30px]'>{item.icon}</span>
                                    <input type="radio" name='option' className='h-6 w-6 accent-green-600'  />
                                </div>
                                <div className="heading flex justify-center items-center pt-8 text-[22px] ">
                                    <h2>{item.heading}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hello flex justify-center items-center gap-10">
                 {client === 0 && (
                    <button className='btn bg-red-600 py-2 px-4 rounded'>
                       Join as Client
                    </button>
                    )}
                {
                    client === 1 &&(
                        <button className='btn bg-yellow-400 py-2 px-4 rounded'>
                            Apply as a Frelancer
                        </button>
                    )
                }

                </div>
                <div className="login flex justify-center pt-4 gap-2">
                    <span>Already have an account?</span>
                    <a href=""><u className='text-green-700'> Log in</u></a>
                </div>
            </div>
        </>
    )
}

export default Join
