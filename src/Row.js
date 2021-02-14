import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchMovies();
  }, [fetchUrl]);

  //   console.table(Movies);

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {Movies.map((movie, index) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* Container -> Posters */}
    </div>
  );
}

export default Row;
