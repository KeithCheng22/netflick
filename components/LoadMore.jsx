'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Spinner from '../public/spinner.svg'
import { useInView } from 'react-intersection-observer';
import { fetchMovies, searchMovie } from '@/app/action';
import { useSearchParams } from 'next/navigation';
import MovieCard from './MovieCard';

const LoadMore = () => {
    const searchParams = useSearchParams()
    const filterBy = searchParams.get('query')
    const [contLoad, setContLoad] = useState(true)
    const page = useRef(1)

    const { ref, inView } = useInView()
    const [data, setData] = useState([])

    if(!filterBy) {
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
        
    }, [inView, data, contLoad])}
    else {
        useEffect(() => {
            const filterSearchMovies = async () => {
                const filteredData = await searchMovie(filterBy.toLowerCase().trim())
                setData(filteredData)
                setContLoad(false)
            }
            filterSearchMovies()
            
        }, [data])
    }
    
   const movieData = [data.map((movie, index) => <MovieCard index={index} key={index} movieDetails={movie}/>)]

  return (
    <>
        {movieData}

        {contLoad ? <div ref={ref} className='mt-[-1.5em] flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4'>
            <Image className='spin2 my-auto' src={Spinner} width={100}/>
        </div> : (data.length != 0 ? <div className='flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 text-2xl font-semibold text-red-300'>That's all for now!</div> : <div className='flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 text-2xl font-semibold text-red-300'>Sorry, we couldn't find that movie</div>)}
    </>
  )
}

export default LoadMore