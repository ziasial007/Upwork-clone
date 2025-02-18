import React from 'react'

const NavHover1 = () => {
    const hoverside= [
    {heading:'Ways to earn' , para:'Learn why Upwork has the right opportunities for you'},
    {heading:'Finde work your skill' , para:'Explore the kind of work available in your field.'},
    {heading:'Win work whit ads' , para:'Get noticed by the right client.'},
    {heading:'Join Freelnacer Plus' , para:'Access more Connects, get strategic insights on competitors, and try out the latest tools.'},
    ]
  return (
    <>
      
    <div className="main absolute top-16 bg-[#eaecee]  left-0">
        <div className="content shadow-2xl rounded-xl w-full gap-4 flex h-[250px] ">
            {hoverside.map((item , index)=>(
                <div className='container flex justify-center items-center px-4' key={index}>
                    <div className='text-gray-600 hover:bg-gray-300 py-10 px-4 cursor-pointer rounded-xl'>
                    <h4 className='font-medium py-2'>{item.heading}</h4>
                    <p className='text-gray-500'>{item.para}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>





    </>
  )
}

export default NavHover1
