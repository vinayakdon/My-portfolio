import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className= 'mb-20  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img className='mx-2 w-10' src="" alt="Vd" /> */}
            <h1 className='mx-2 text-3xl'>Vd</h1>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/vinayak-donawad-a018171b8/'><FaLinkedin /></a>
            <a href='https://github.com/vinayakdon'><FaGithub/></a>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>

    </nav>
  )
}

export default Navbar
