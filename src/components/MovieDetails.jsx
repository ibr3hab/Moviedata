import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits, fetchMovieDetails } from "./api";



const MovieDetails = ()=>{

    const {id} = useParams();
    const [movie , setMovie ] = useState(null);
    

    useEffect(()=>{
        const fetchMovieData = async()=>{
            const MovieDetails = await fetchMovieDetails(id);
            const movieCredits = await fetchMovieCredits(id);
            setMovie({...MovieDetails, credits: movieCredits})
        };
        fetchMovieData();
    },[id])

    if(!movie) return <div>Loading...</div>

    return(
        <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <h3>Cast :</h3>
        <ul>
            {movie.credits?.cast.map((actor)=>(
             <li key={actor.cast_id}>{actor.name} as {actor.character} </li>
            ))}
        </ul>
        </div>
    )
}
export default MovieDetails;