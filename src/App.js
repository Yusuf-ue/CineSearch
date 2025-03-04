import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import AboutMe from "./AboutMe";  // Import AboutMe component

const API_URL = 'https://www.omdbapi.com/?apikey=c87834e8'; //fine in this case

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`${API_URL}&i=${movieId}&plot=full`);
    const data = await response.json();
    setSelectedMovie(data);
  };

  function handleEnter(event) {
    if (event.key === 'Enter' && searchTerm) {
      searchMovies(searchTerm);
    }
  }

  const closeModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    searchMovies("Hello World");
  }, []);

  return (
    <Router>
        {/* Navigation links */}
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Me</Link>
        </nav>

      <div className="app">
        <h1 onClick={() => searchMovies("Hello World")} style={{ cursor: "pointer" }}>
          CineSearch
        </h1>


        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                {/* Search Bar */}
                <div className="search">
                  <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleEnter}
                  />
                  <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
                </div>

                {/* Movie List */}
                {movies.length > 0 ? (
                  <div className="container">
                    {movies.map((movie) => (
                      <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onClick={() => fetchMovieDetails(movie.imdbID)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    <h2>No movies found</h2>
                  </div>
                )}

                {/* Modal for displaying movie plot */}
                {selectedMovie && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={closeModal}>&times;</span>
                      <div className="modal-year">{selectedMovie.Year}</div>
                      <h2 className="modal-title">{selectedMovie.Title}</h2>
                      <p className="modal-plot"><strong>Plot:</strong> {selectedMovie.Plot}</p>
                      <img className="modal-poster" src={selectedMovie.Poster} alt={selectedMovie.Title} />
                    </div>
                  </div>
                )}
              </>
            }
          />
          
          {/* About Me Route */}
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
