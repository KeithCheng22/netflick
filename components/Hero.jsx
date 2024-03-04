import React from 'react'
import Image from 'next/image'
import Netflix from '../public/netflix.png'

const Hero = () => {
  return (
    <header id='header'>
        <section className="relative bg-right bg-cover bg-[url('../public/hero.jpeg')] py-8 px-2">

            <div className='relative flex items-center'>
              <Image src={Netflix} width={60} alt='netflick logo'/>
              <h1 className='text-white text-4xl font-bold'>NetFlick</h1>
            </div>

            <div className="mt-3 relative h-fit my-auto text-white text-center">
                <h1 className='w-[80%] mx-auto  max-sm:text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold'>All the movies you <span className='text-red-300'>love</span> in one place</h1>
                <form>
                  <input type='text' name='query' autoFocus className='w-[80%] min-h-10 rounded-xl bg-transparent mt-5 border-2 indent-4 outline-transparent placeholder:text-white' placeholder='Marvels: Infinity War'></input>
                </form>
            </div>
        </section>
    </header>
  )
}

export default Hero