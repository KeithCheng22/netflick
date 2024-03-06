import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Netflix from '../public/netflix.png'
import Hamburger from './Hamburger'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between mb-5'>
        <div className='flex items-center'>
            <Image src={Netflix} width={60} alt='netflick logo'/>
            <h1 className='text-white text-4xl font-bold'>NetFlick</h1>
        </div>
        
        <Hamburger />
        <menu className='text-white flex gap-5 max-sm:hidden text-2xl'>
            <Link className='outline py-1 px-2 rounded-md hover:bg-transparent hover:text-white bg-white text-black/90 transition-all duration-300' href='/'>Home</Link>
            <Link className='outline py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all duration-300' href='/feedback'>Feedback</Link>
        </menu>
    </nav>
  )
}

export default NavBar