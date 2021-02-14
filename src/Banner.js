import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${Movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
          {Movie?.name || Movie?.title || Movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <p className="banner__description">{Movie?.overview}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
