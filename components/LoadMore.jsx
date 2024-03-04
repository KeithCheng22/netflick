'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Spinner from '../public/spinner.svg'
import { useInView } from 'react-intersection-observer';
import { fetchMovies } from '@/app/action';
import { useSearchParams } from 'next/navigation';
import MovieCard from './MovieCard';

const LoadMore = () => {
    const searchParams = useSearchParams()
    const filterBy = searchParams.get('query')
    const [contLoad, setContLoad] = useState(true)
    const page = useRef(1)

    const { ref, inView } = useInView()
    const [data, setData] = useState([])


    useEffect(() => {
        const loadMoreMovies = async () => {
            if (inView) {
                const dataObject = await fetchMovies(page.current)
                if (dataObject) {
                    setData([...data, ...dataObject])
                    page.current = page.current + 1
                }
                else {
                    setContLoad(false)
                }
                
            }
        }
        loadMoreMovies()
        
    }, [inView, data, contLoad])

   const filteredData = filterBy ? data.filter(movie => movie.title.toLowerCase().includes(filterBy.toLowerCase().trim())) : data

   const movieData = [filteredData.map((movie, index) => <MovieCard index={index} key={index} movieDetails={movie}/>)]

  return (
    <>
        {movieData}

        {contLoad ? <div ref={ref} className='mt-[-1.5em] flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4'>
            <Image className='spin2 my-auto' src={Spinner} width={100}/>
        </div> : (filteredData.length != 0 ? <div className='flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 text-2xl font-semibold text-red-300'>That's all for now!</div> : <div className='flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 text-2xl font-semibold text-red-300'>Sorry, we couldn't find that movie</div>)}
    </>
  )
}

export default LoadMore