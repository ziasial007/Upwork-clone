import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Items = ({ Links, title }) => {

    return (
        <div>
            <ul className=' p-[20%] '>
                <h1>{title}</h1>
                {Links.map((data, i) => (
                    <li key={i}>
                        <a className='text-gray-400 cursor-pointer  hover:text-red-300 duration-300'  target='blank' href={data.link}>{data.name}</a>
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Items
