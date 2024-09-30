const Favorites = ({ favouritesMovies }) => {
    return (
        <div className="favorites-container">
            <h1>Your Favorites</h1>
            <div className="favorites-grid">
            
                {favouritesMovies.map(movie => (
                      <div key={movie.id} className="favorite-badge">
                        
                        {movie.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;


