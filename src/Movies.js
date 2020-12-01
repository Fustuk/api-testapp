import React from "react";

const Movies = ({ title, poster_path, overview, vote_average }) => {
  const img = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie">
      <img src={img + poster_path} alt="title" />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default Movies;
