import React from 'react'
import Image from 'next/image'
import Star from '../public/star.svg'
import MotionDiv from './MotionDiv';
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: '400' });

const baseImageUrl = "https://image.tmdb.org/t/p/";
const posterSize = "w500";

const variants = {
  visible: {
      opacity: 1,
  },
  invisible: {
    opacity: 0,
  }
}

const MovieCard = ({ movieDetails, index }) => {
    const {title, poster_path, vote_average, original_language, release_date} = movieDetails
    const year = release_date.split('-')[0]

    const imageUrl = `${baseImageUrl}${posterSize}${poster_path}`;

  return (
    <MotionDiv initial="invisible" variants={variants} animate='visible' transition={{ delay: index * 0.15, ease: "linear", duration: 0.5 }} className='flex flex-col items-center p-3 cursor-pointer hover:scale-105 transition-all duration-500'>
        <div className='text-white'>
          <Image className='rounded-lg max-sm:w-[250px]' src={imageUrl} width={300} height={200} alt={`${title} poster`}/>

          <div className=''>
            <div className='flex mt-2'>
              <h2 className={`text-white text-xl tracking-[0.08em] max-sm:text-lg ${bebas.className}`}>{title} ({year})</h2>
              <div className='ml-auto h-fit'>
                <h3 className={`px-2 bg-white bg-opacity-50 rounded-md max-sm:hidden ${bebas.className}`}>{original_language}</h3>
              </div>
            </div>

            <span className='flex gap-2 items-center font-normal'>
              <Image className='inline-block' src={Star} width={15} alt='star rating'/>{vote_average.toFixed(1)}
            </span>
          </div>
        </div>

    </MotionDiv>
  )
};

export default MovieCard