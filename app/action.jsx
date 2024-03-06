'use server'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmZjMWVlNTVmYmE1MzVmZTYwOGIxMjE2NTRiNTMyMCIsInN1YiI6IjY1MTI5Y2MxZTFmYWVkMDEzYTBjNzc1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lvscdJIOHIQfqUnZIr5defjKiXkpPAp0-o4_Trh6hHg'
  }
};

export const fetchMovies = async (page) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&limit=1`, options)
    const data = await res.json()
    const movieData = data.results

    return movieData
}

export const searchMovie = async (movieName) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`, options)
  const data = await res.json()
  const movieData = data.results

  return movieData
}


