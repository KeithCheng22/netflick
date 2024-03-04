import React from 'react'
import Image from 'next/image'
import { Bebas_Neue } from "next/font/google";

const baseImageUrl = "https://image.tmdb.org/t/p/";
const posterSize = "w500";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: '400' });

const MovieDetails = ({ movieDesc }) => {
  const {original_language, title, overview, popularity, poster_path, release_date, vote_average} = movieDesc

  const imageUrl = `${baseImageUrl}${posterSize}${poster_path}`;
  const year = release_date.split('-')[0]

  return (
    <div className='text-white p-4 max-w-[1200px] md:flex md:items-center md:h-[100vh] md:gap-6 bg-white bg-opacity-30 shadow-[0_8px_32px_0_rgba( 31, 38, 135, 0.37 )] backdrop-blur-[4px] border border-white/20 rounded-lg'>
      <div className='md:w-[50%]'>
        <Image src={imageUrl} width={300} height={50} className='rounded-lg md:mx-auto' alt={`${title} poster`}/>
      </div>

      <section className='md:w-[35%]'>
      <h1 className={`text-white text-xl tracking-[0.08em] font-semibold mt-3 ${bebas.className}`}>{title}</h1>
      <p className={`px-2 bg-white bg-opacity-50 rounded-md w-fit ${bebas.className}`}>{original_language}</p>
      <p className='mt-3'><span className='font-semibold'>Sypnosis: </span>{overview}</p>
      <p className='mt-3'><span className='font-semibold'>Popularity: </span>{popularity.toFixed(0)}</p>
      <p><span className='font-semibold'>Release Date:</span> {year}</p>
      <p><span className='font-semibold'>Average Votes:</span> {vote_average.toFixed(1)}</p>
      </section>
    </div>
  )
}

export default MovieDetails