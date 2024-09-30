const API_KEY =  import.meta.env.VITE_API_KEY;    
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query)=>{
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();
        return data.results;
}

export const fetchMovieDetails = async (id) =>{
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;

}

export const fetchMovieCredits = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
};




