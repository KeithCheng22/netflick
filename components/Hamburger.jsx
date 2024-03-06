'use client'
import { useState } from "react"
import Link from "next/link"

const Hamburger = () => {
    const [expanded, setExpanded] = useState(false)
    const toggle = () => {
        setExpanded(prev => !prev)
    }
  return (
    <>
    <div className="z-10">
      <div className={`cursor-pointer sm:hidden z-30`} onClick={toggle}>
            <div className={`w-[30px] h-[4px] bg-white  transition-all duration-500 ${expanded ? '-rotate-45 origin-right -translate-y-[0.35rem]' : 'block'}`}></div>
            <div className={`w-[30px] h-[4px] bg-white mt-1 transition-all duration-500 ${expanded ? 'opacity-0' : 'opacity-1'}`}></div>
            <div className={`w-[30px] h-[4px] bg-white mt-1 transition-all duration-500 ${expanded ? 'rotate-45 origin-right ' : 'block'}`}></div>

            <div className={`transition-all duration-[5000] flex gap-2 p-1 ${expanded ? 'absolute max-h-[300px] sm:hidden inset-0 z-1 bg-white/30' : 'hidden'}`}>
              <Link className='text-white text-2xl' href='/'>Home</Link>
              <Link className='text-white text-2xl' href='/feedback'>Feedback</Link>
            </div>
      </div>
    </div>

    
    </>
   
  )
}

export default Hamburger