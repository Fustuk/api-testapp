import React, { useEffect, useState } from "react";
//import Movies from "./Movies";
import Movies from "./Movies";
function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const movie_API =
    "https://api.themoviedb.org/3/movie/popular?api_key=baedd02d5a4e1bd7abc93117ef8f1241&language=en-US&page=1";
  //const search_API =
  //"https://api.themoviedb.org/3/search/keyword?api_key=baedd02d5a4e1bd7abc93117ef8f1241&page=1&query=";
  const search_API =
    "https://api.themoviedb.org/3/search/movie?api_key=baedd02d5a4e1bd7abc93117ef8f1241&language=en-US&query=flash&page=1&include_adult=false";
  useEffect(() => {
    fetch(movie_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (setSearchTerm) {
      fetch(search_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setMovies(data.results);
        });
      setSearchTerm("");
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            type="search"
            placeholder="Search..."
            className="search"
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movies {...movie} key={movie.id} />)}
      </div>
    </>
  );
}

export default Movie;
