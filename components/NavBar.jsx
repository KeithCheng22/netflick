'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Netflix from '../public/netflix.png'
import Hamburger from './Hamburger'
import { useState } from "react"

const NavBar = () => {
  const [expanded, setExpanded] = useState(false)
  const toggle = () => {
      setExpanded(prev => !prev)
  }

  return (
    <nav className={`flex flex-col mb-5 sm:flex-row sm:justify-between sm:items-center`}>

      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <Image src={Netflix} width={60} alt='netflick logo'/>
            <h1 className='text-white text-4xl font-bold'>NetFlick</h1>
        </div>
        
        <Hamburger expanded={expanded} toggle={toggle}/>
      </div>

        <menu className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[200px]' : 'max-h-0'} mt-2 ml-2`}>
          <Link onClick={() => setExpanded(false)} className='text-white block font-semibold text-xl hover:text-white/80' href='/'>Home</Link>
          <Link onClick={() => setExpanded(false)} className='text-white block font-semibold text-xl hover:text-white/80' href='/feedback'>Feedback</Link>
        </menu>

        <menu className='text-white flex gap-5 max-sm:hidden text-2xl'>
            <Link className='outline py-1 px-2 rounded-md hover:bg-transparent hover:text-white bg-white text-black/90 transition-all duration-300' href='/'>Home</Link>
            <Link className='outline py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all duration-300' href='/feedback'>Feedback</Link>
        </menu>
    </nav>
  )
}

export default NavBar