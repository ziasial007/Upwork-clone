import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs"
import { IoLogoApple } from "react-icons/io5";
import { TiVendorAndroid } from "react-icons/ti";

const Fsocialicons = () => {
  return (
    <>

<div className="main flex justify-between ">
    <div className="divi flex items-center gap-4 h-[30px] ">
<p>Follow us</p>
<CiFacebook /><FaLinkedin /><FaInstagram /><RiTwitterXFill /><BsYoutube />
</div>
<div className="second flex items-center gap-4">
<p>Mobile app</p>
<IoLogoApple/><TiVendorAndroid />
</div>
</div>

    </>
  )
}

export default Fsocialicons
