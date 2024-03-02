'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Spinner from '../public/spinner.svg'
import { useInView } from 'react-intersection-observer';
import { fetchMovies } from '@/app/action';

let page = 2

const LoadMore = () => {
    const { ref, inView } = useInView()
    const [data, setData] = useState([])


    useEffect(() => {
        const loadMoreMovies = async () => {
            if (inView) {
                const dataObject = await fetchMovies(page)
                setData([...data, ...dataObject])
                page++
            }
        }
        loadMoreMovies()
        
    }, [inView, data])

  return (
    <>
            {data}

        <div ref={ref} className='mt-[-1.5em] flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4'>
            <Image className='spin2 my-auto' src={Spinner} width={100}/>
        </div>
    </>
  )
}

export default LoadMore