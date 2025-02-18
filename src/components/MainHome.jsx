import React from 'react'
import leftImg from '../assets/img/image-left.png'
import rightImg from '../assets/img/image-right.png'
import svg1 from '../assets/svg/logo-airbnb-grey.svg'
import svg2 from '../assets/svg/logo-microsoft-grey.svg'
import svg3 from '../assets/svg/logo-bissell-grey.svg'
import vidimg from '../assets/img/download.png'
import img1 from '../assets/svg/1.png'
import img2 from '../assets/svg/2.png'
import img3 from '../assets/svg/3.png'
import { FaStar } from "react-icons/fa";
import img4 from '../assets/img/skills.webp'
import img5 from '../assets/img/Support.webp'
import img6 from '../assets/img/Briefcase.webp'
import img7 from '../assets/enterprise.png'
import talentimg from '../assets/img/talent.png'
import { GoArrowRight } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import gropimg from '../assets/img/group.jpeg'
import persion from '../assets/img/person.png'
import { useNavigate } from 'react-router-dom'




const ratings = [
    { heading: 'Development & IT', ratings: '4.85/5', skill: '1853 skill' },
    { heading: 'AI Services', ratings: '4.8/5', skill: '294 skill' },
    { heading: 'Design & Creative', ratings: '4.91/5', skill: '968 skill' },
    { heading: 'Sales & Marketing', ratings: '4.77/5', skill: '492 skill' },
    { heading: 'Writing & Translation', ratings: '4.92/5', skill: '505 skill' },
    { heading: 'Admin & Customer Support', ratings: '4.77/5', skill: '508 skill' },
    { heading: 'Finance & Accounting', ratings: '4.79/5', skill: '214 skill' },
    { heading: 'Engineering & Architecture', ratings: '4.85/5', skill: '650 skill' },
]
const card = [
    { heading: 'Post a job and hire a pro', para: 'Talet marketplace', sub: 'TM', icon: <GoArrowRight /> },
    { heading: 'Post a job and hire a pro', para: 'Talet marketplace', sub: 'TM', icon: <GoArrowRight /> },
    { heading: 'Post a job and hire a pro', para: 'Talet marketplace', icon: <GoArrowRight /> },
]
const sectionSix = [
    { heading: 'Proof of quality', svg: <IoIosStarOutline />, para: 'Check any pro’s work samples, client reviews, and identity verificatio' },
    { heading: 'No cost until you hire', svg: <CiDollar />, para: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve' },
    { heading: 'Safe and secure', svg: <CiCircleCheck />, para: 'Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.' },
]

const MainHome = () => {
    const navigate = useNavigate()
    const handleJoin = () => {
        window.open('/join' , '_blank')
      
    }
    return (
        <>
            <div className="container mx-auto">
                <div className=" bg-white h-[100vh] flex justify-center" style={{
                    alignItems: 'center'
                }}>
                    <div className="container bg-[#FDFDFD] mx-auto flex justify-between p-5 rounded-xl h-[90vh] border border-gray">
                        <div className="imgg">
                            <img src={leftImg} alt="" className='h-[80%]' />
                        </div>
                        <div className="text-center w-[100vh] flex flex-col ">
                            <div className="main-content py-10">
                                <h1 className='text-[56px] font-bold'>We connect people to bring projects to life</h1>
                                <p>Find high-quality talent or open jobs with the help of AI tools that keep you in control.</p>
                            </div>
                            <div className="input">
                                <input type="email" id='mail' placeholder='ASK AI anything...' className='w-[400px] h-10 rounded-full px-6 border-2 border-black focus:border-red-400 ' />
                            </div>
                            <div className="company-logo pt-10">
                                <p>TRUSTED BY</p>
                                <div className="svg flex gap-10 justify-center py-4">
                                    <img src={svg1} alt="" />
                                    <img src={svg2} alt="" />
                                    <img src={svg3} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="img2">
                            <img src={rightImg} alt="" className='h-[80%]' />
                        </div>
                    </div>
                </div>
                <section className='section-2 py-4'>
                    <div className="containe  flex ">
                        <div className="frist-side w-[40%] mx-auto pt-6">
                            <div className="main">
                                <img src={vidimg} alt="" />
                            </div>
                        </div>
                        <div className="second-side w-[50%] p-4 mx-auto">
                            <h1 className='text-[48px]'>Up your work game, it’s easy
                            </h1>
                            <div className="flex py-4 gap-3">
                                <div className="svg-div">
                                    <img src={img3} alt="" className='h-10' />
                                </div>
                                <div className="svg-contnet">
                                    <p className='font-bold text-[18px]'>Work with the best—without breaking the bank.</p>
                                    <span className='text-[16px]'>Upwork makes it affordable to up your work and take advantage of low transaction rates.</ span>
                                </div>
                            </div>
                            <div className="flex py-4 gap-3 " >
                                <div className="svg-div">
                                    <img src={img1} alt="" className='h-10' />
                                </div>
                                <div className="svg-contnet">
                                    <p >Post a job and hire top talent </p>
                                    <span>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</ span>
                                </div>
                            </div>
                            <div className="flex py-4 gap-3">
                                <div className="svg-div">
                                    <img src={img2} alt="" className='h-10' />
                                </div>
                                <div className="svg-contnet">
                                    <p>No cost to join</p>
                                    <span>Register and browse talent profiles, explore projects, or even book a consultation.</ span>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btnn px-4 py-2'>Sign up for free</button>
                                <button className='btn px-4 py-2 border-2 border-green-800 text-green-800 ms-4 rounded-2xl'>Learn how to Hire</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-3'>
                    <div className="mx-auto py-4">
                        <h2 className='text-[48px] font-semibold '>Browse talent by category</h2>
                        <p>Looking for work? <span className='text-green-900 text-[18px]'><a href="#"><u>Browse jobs</u></a></span></p>
                        <div className="flex gap-4  flex-wrap pt-4">
                            {ratings.map((itme, index) => (
                                <div className="card bg-[#f7f8f9] hover:bg-gray-300 cursor-pointer py-10 px-4 md:flex-col-1 w-full lg:w-[24%] mx-auto rounded-md " key={index} onClick={handleJoin} >
                                    <h3 className='text-[20px] font-semibold pb-5'>{itme.heading}</h3>
                                    <div className="flex items-center">
                                        < FaStar className='text-green-400 ' />
                                        <span className='font-medium'>{itme.ratings}</span>
                                        <span className='px-4 font-medium'>{itme.skill}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </section>

                <section className='section-4 bg-[#13544E] rounded-md text-white flex '>
                    <div className="right-side w-[50%] p-5 ">
                        <p className='text-[20px]'>Enterprise Suite</p>
                        <h3 className='text-[48px] font-semibold pb-3'>This is how<br /><span className='text-[#91E6B3]'>good companiesfind good company.</span></h3>
                        <span className='text-[20px] font-semibold leading-7 '>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</span>
                        <div className="icons flex flex-col gap-4 py-4">
                            <div className="flex gap-4  ">
                                <img src={img4} alt="" />
                                <p>Access expert talent to fill your skill gaps</p>
                            </div>
                            <div className="flex gap-4">
                                <img src={img5} alt="" />
                                <p>Access expert talent to fill your skill gaps</p>
                            </div>
                            <div className="flex gap-4">
                                <img src={img6} alt="" />
                                <p>Access expert talent to fill your skill gaps</p>
                            </div>
                        </div>
                        <button className='btn text-[#13544E] rounded-lg py-2 px-4 bg-white'>Learn More</button>
                    </div>

                    <div className="left-side w-[50%]  ">
                        <img src={img7} alt="" className='h-[100%] object-cover' />
                    </div>
                </section>

                <section className='section-5 '>
                    <div className="bg-div py-4 ">
                        <div className='bg-center bg-cover bg-no-repeat rounded-lg h-screen w-[100%]' style={{ backgroundImage: `url(${talentimg})` }}>
                            <div className="divo">
                                <div className="bg-content w-[40%] text-[24px] p-6 text-white">
                                    <p>For clients</p>
                                    <h2 className='text-[64px] '>Find talent your way</h2>
                                    <span>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</span>
                                </div>
                                <div className="flex gap-4 justify-around text-white ">
                                    {card.map((item, index) => (
                                        <div className="cards bg-green-900 w-[380px] flex flex-col justify-center items-start h-[150px] p-6 hover:bg-white cursor-pointer hover:text-green-900 rounded-lg" key={index} onClick={handleJoin}>
                                            <h3 className='text-[24px] font-semibold pb-4'>{item.heading}</h3>
                                            <div className="flex items-center">
                                                <p>{item.para}</p>
                                                <sup className='text-[10px]'>{item.sub}</sup>
                                                <span className='px-4'>{item.icon}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-6'>
                    <div className="section-6-main-div bg-gray-200 p-10 flex flex-wrap">
                        <div className="sec-6-first-side w-[50%] p-5">
                            <div className="section-content w-[70%]">
                                <h1 className='text-[48px] font-medium'>Why businesses turn to Upwork</h1>
                                {sectionSix.map((item, index) => (
                                    <div className="icons" key={index}>
                                        <div className="flex ">
                                            <div className="svg p-3 ">
                                                <span className='text-[20px]'>{item.svg}</span>
                                            </div>
                                            <div className="con">
                                                <h3 className='text-[30px] font-semibold '>{item.heading}</h3>
                                                <span>{item.para}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="sec-6-second-side w-[50%] ">
                            <div className="bg-[#14A800] w-[80%] ms-auto ">
                                <div className="content text-white p-8 pt-36 ">
                                    <h2 className='text-[48px] pb-10 pt-32'>We’rethe world’s workmarketplace</h2>
                                    <div className="star flex text-[20px] gap-[20px]">
                                        <FaStar className='text-[40px]' />
                                        <div>
                                            <span>4.9/5</span>
                                            <p>Clients rate professionals on Upwork</p>
                                        </div>
                                    </div>
                                    <div className="star flex text-[20px] gap-[20px] py-[30px]">
                                        <img src={gropimg} alt="" className='h-[30px]' />
                                        <div>
                                            <span>Award winner</span>
                                            <p>G2’s 2021 Best Software Awards</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <img src={persion} alt="" className='absolute right-[30%] h-[80%] rotate-2' />
                    </div>
                </section>





            </div>
        </>
    )
}

export default MainHome
