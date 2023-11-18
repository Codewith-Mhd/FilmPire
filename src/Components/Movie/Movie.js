import {useEffect, useState} from "react"
import "./style.css"

const Movies = () => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=1ac57f34&s=movies`
    )
    const data = await response.json()
    setmovies(data.Search)
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h4>{movie.Year}</h4>

          <h3>{movie.Genre}</h3>
        </div>
      ))}
    </div>
  )
}

export default Movies
