import {useState} from "react";
import { fetchMovies } from "./api";
import {Link} from "react-router-dom";

const MovieList = ({addToFavourites})=>{

    const [query , setQuery] = useState('');
    const [movies , setMovies] = useState([]);

    const searchMovie =  async (e)=>{
        e.preventDefault();
        const movieData = await fetchMovies(query);
        console.log(movieData); 
        setMovies(movieData);
    }


    return (
        <div>
          <form onSubmit={searchMovie}>
            <input
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search for movie</button>
          </form>
          
          <div className="movie-list-container">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <button onClick={() => addToFavourites(movie)}>Add to Favourites</button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default MovieList