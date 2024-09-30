import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import './App.css';


function App() {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const addToFavourites = (movie) => {
    setFavourites((prevValue) => {
      const updatedFavourites = [...prevValue, movie];
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites)); 
      return updatedFavourites;
    });
  };
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MovieList addToFavourites={addToFavourites}/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="/favourites" element={<Favourites favouritesMovies={favourites}/>}/>
      </Routes>
    </Router>
  )
}

export default App
