import MovieDetails from '@/components/MovieDetails'
import React from 'react'
import { searchMovie } from '../action'

const MoviePage = async ({ params }) => {
  const movieName = params.movieName
  const data = await searchMovie(movieName)
  const movieDetails = data[0] // get the first rated

  return (
    <>
        <MovieDetails movieDesc={movieDetails}/>
    </>
  )
}

export default MoviePage