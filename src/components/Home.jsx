import React from 'react';
import img1 from '../assets/img/hero-img.jpeg';
import comp from '../assets/img/comp.png';
import { FaStar, FaArrowRight, FaHeadset } from "react-icons/fa";
import cardimg1 from '../assets/img/card/4.png';
import cardimg2 from '../assets/img/card/2.png';
import cardimg3 from '../assets/img/card/3.png';
import cardimg4 from '../assets/img/card/1.png';
import cardimg5 from '../assets/img/card/5.png';
import cardimg6 from '../assets/img/card/6.png';
import womenimg from '../assets/img/women.png';
import logo from '../assets/img/logoo.png';
import icon from '../assets/img/icon.png';
import rehan from '../assets/img/rehan.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/join');
    console.log("Hello from Join");
  };

  const compImage = [comp, comp, comp, comp, comp];

  const review = [
    { rating: '4.9', text: 'Average rating of talent from 2M+ reviews' },
  ];

  const collegeCard = [
    { heading: 'Development and IT', para: '20k+ jobs posted weekly', imgSrc: cardimg1 },
    { heading: 'Sales and Marketing', para: '10k+ jobs posted weekly', imgSrc: cardimg2 },
    { heading: 'Design & Creative', para: '15k+ jobs posted weekly', imgSrc: cardimg4 },
    { heading: 'Writing & Translation', para: '20k+ jobs posted weekly', imgSrc: cardimg5 },
    { heading: 'Admin & Customer Support', para: '10k+ jobs posted weekly', imgSrc: cardimg3 },
    { heading: 'Finance & Accounting', para: '15k+ jobs posted weekly', imgSrc: cardimg6 },
  ];

  const secCard = [
    { heading: 'How Flexible Talent Helps a Fast-Paced Company Improve Productivity' },
    { heading: 'PGA of America Tests New Ideas With On-Demand Devs' },
    { heading: 'Singularity University Shows What Working Faster (and Doing it Right) Looks Like' }
  ];

  const secondSec = [
    {
      heading: 'Discover quality talent fast', imgsrc: icon,
      list: [
        'Post a job and receive proposals from talent',
        'See verified work history and reviews',
        'Send 30 invitations to talent per job post',
        'Use advanced search filters',
      ]
    },
    {
      heading: 'Safe, easy payments',
      list: [
        'Get an extra level of security with Upwork Payment Protection',
        'Pay as you go billing for milestone and hourly contracts',
        '3-5% marketplace fee depending on billing method'
      ]
    },
    {
      heading: 'Collaboration tools for project tracking',
      list: [
        'Chat, video call, and share files with talent',
        'Get advanced reporting and tracking',
        'Set coworker teams and member permission settings',
        'Set coworker teams and member permission settings'
      ]
    },
    {
      heading: 'Account support and guidance',
      list: [
        'Account support and guidance'
      ]
    }
  ];

  return (
    <>
      <div className="container mt-32">
        <div className="upper-level">
          <div className="hero h-[80vh] pt-5 flex flex-col md:flex-row px-4 md:px-10">
            <div className="hero-side1 w-full md:w-1/2 p-5">
              <h2 className='text-4xl md:text-6xl font-semibold'>Post a job today,<br /> hire tomorrow</h2>
              <p className='mt-4'>Connect with talent that gets you, and hire them to take your business to the next level</p>
              <button className='btnn px-20 py-4 my-8 md:my-16'>Get Started</button>
            </div>
            <div className="hero-side2 w-full md:w-1/2">
              <img src={img1} alt="" className='h-[70%] w-full object-cover' />
            </div>
          </div>
          <div className="lower-level">
            <div className="company-icons flex flex-wrap justify-around py-6 items-center">
              <p>TRUSTED BY</p>
              {compImage.map((item, index) => (
                <div className="company-images" key={index}>
                  <img src={comp} alt="" className='h-11 w-16' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container min-h-[80vh] bg-[#F9F9F9] py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="upper sidee w-full md:w-1/2">
            <h1 className='text-4xl md:text-5xl font-semibold'>The best colleagues you’ve never met</h1>
            <p className='py-8 font-semibold'>Logo designers. App developers. Customer support gurus. Marketing agencies. Make the right connection and it’ll last a lifetime.</p>
          </div>
          {review.map((item, index) => (
            <div className="reviews" key={index}>
              <div className="review-icon flex items-center space-x-2">
                <h2 className='text-4xl md:text-5xl font-semibold'>{item.rating}</h2>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className='max-w-[200px]'>{item.text}</p>
            </div>
          ))}
          <div className="sec-review">
            <h2 className='text-4xl md:text-5xl font-semibold'>8k+</h2>
            <p className='max-w-[200px]'>Skills represented by talent on Upwork.</p>
          </div>
        </div>
        <div className="card flex flex-wrap gap-5 justify-center">
          {collegeCard.map((item, index) => (
            <div className="cards flex p-4 w-full md:w-[400px] rounded-md hover:shadow-2xl shadow-md cursor-pointer" key={index} onClick={handleJoin}>
              <img src={item.imgSrc} className='h-20 px-4' />
              <div className="para flex flex-col justify-center space-y-2">
                <h2 className='text-lg font-semibold'>{item.heading}</h2>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section p-4 md:p-14">
        <div className="mainfirst flex flex-col md:flex-row">
          <div className="main-post-img w-full md:w-1/2">
            <img src={womenimg} alt="" className='h-full w-full object-cover' />
          </div>
          <div className="content w-full md:w-1/2 pt-10">
            <h1 className='text-3xl md:text-5xl font-semibold'>Post today, hire tomorrow</h1>
            <p className='text-lg md:text-xl font-medium mt-4'>We've got you covered from idea to delivery. Post your job and you'll start getting proposals. Once you've found your expert, you can talk timings, availability, and prices before going ahead.</p>
            <div className="post-icon flex py-6">
              <img src={logo} alt="" className='h-12 pe-4' />
              <div className="icon-content flex flex-col justify-center">
                <p className='text-lg md:text-xl font-medium'>Upwork Payment Protection</p>
                <p>Gives you security and peace of mind</p>
              </div>
            </div>
            <button className='btnn py-3 px-10 m-3 text-lg md:text-xl font-medium'>Post a job</button>
          </div>
        </div>
      </div>

      <div className="section-2 py-6 px-4 md:px-5">
        <div className="company pb-8 md:pb-16">
          <h1 className='text-3xl md:text-5xl font-bold'>You’re in good company</h1>
          <p className='text-lg md:text-xl mt-2'>Millions of companies, big and small, use Upwork to get great work done. Join them today.</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {secCard.map((item, index) => (
            <div className="section w-full md:w-[400px] hover:shadow-gray-400 duration-100 cursor-pointer p-4 bg-white shadow-lg font-semibold text-lg md:text-2xl rounded-2xl group" key={index}>
              <h1 className='h-[105px]'>{item.heading}</h1>
              <div className="arrow-icon mb-0 top-0">
                <FaArrowRight className="transition-transform duration-300 text-green-900 group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className='py-6 px-4 md:px-5'>
        <div className="secondSection p-6">
          <h1 className='text-3xl md:text-5xl font-bold'>What you’ll get</h1>
        </div>
        <div className="flex flex-wrap justify-around">
          {secondSec.map((item, index) => (
            <div className="sectionsec p-4 w-full md:w-[570px]" key={index}>
              <div className="icons flex">
                <img src={icon} alt="" className='w-12 h-12 me-5' />
                <div>
                  <h1 className='text-2xl md:text-3xl font-semibold'>{item.heading}</h1>
                  <ul>
                    {item.list.map((item2, index2) => (
                      <li key={index2}>{item2}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container-fluid py-10">
        <div className="container bg-[#1F57C3] mx-auto rounded-2xl flex flex-col md:flex-row justify-around p-8">
          <div className="sec-4-content w-full md:w-1/2 leading-10 text-white">
            <p>Project catalog</p>
            <h1 className='text-3xl md:text-5xl font-medium'>Take the first step toward a smarter talent strategy</h1>
            <p>Browse and buy projects from talent</p>
            <button className='btn bg-white text-black py-2 px-10 mt-5 rounded-lg'>Browse Project</button>
          </div>
          <div className="sec-4-img w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img src={rehan} alt="" className='h-72' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;