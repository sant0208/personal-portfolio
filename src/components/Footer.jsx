import React from 'react'
import { SectionWrapper } from "../hoc";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='w-full h-[20vh] flex flex-col justify-center align-center gap-5'>
        <div className='flex justify-center align-middle gap-5'>
            <a href=""><FaInstagram className='w-10 h-10 hover:w-12 hover:h-12' /></a>
            <a href="www.linkedin.com/in/santhosh-g-c-278267296"><CiLinkedin className='w-10 h-10 hover:w-12 hover:h-12' /></a>
            <a href="https://github.com/sant0208"><FaGithub className='w-10 h-10 hover:w-12 hover:h-12' /></a>
            <a href=""><CiTwitter className='w-10 h-10 hover:w-12 hover:h-12' /></a>
        </div>
        <div className='flex align-middle justify-center'>
            <h1>Copyright &copy; {new Date().getFullYear()} Designed by <span className='glowing-txt'>SANTHOSH</span></h1>
        </div>

    </div>
  )
}

export default SectionWrapper(Footer, "footer");