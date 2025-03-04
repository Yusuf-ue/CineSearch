
function MovieCard({ movie, onClick }) {
  return (
    <div className="movie" onClick={onClick}>
      <div>
        
      </div>

      <div> 
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://static.thenounproject.com/png/2181345-200.png'} 
          alt={movie.Title} 
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
