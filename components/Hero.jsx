import React from 'react'
import Image from 'next/image'
import Netflix from '../public/netflix.png'

const Hero = () => {
  return (
    <header id='header'>
        <section className="relative max-h-[70vh] flex">
            <video className="opacity-35 rounded-xl object-cover" muted autoPlay loop src={require('../public/video.mp4')} />;

            <div className='absolute flex px-2 py-6 items-center'>
              <Image src={Netflix} width={60}/>
              <h1 className='text-white text-4xl font-bold'>NetFlick</h1>
            </div>

            <div className="absolute inset-0 h-fit my-auto text-white text-center">
                <h1 className='max-sm:text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold'>All the movies you <span className='text-red-300'>love</span> in one place</h1>
            </div>
        </section>
    </header>
  )
}

export default Hero