import { useState, useEffect } from "react";
import { apikey } from "../config/apikey";
export function UseMovieSearch(content) {
  const [searchPintures, setSearchPintures] = useState([]);
  useEffect(() => {
    const findMovies = async () => {
      try {
        const movies = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${content}&include_adult=false&language=en-US&page=1&api_key=${apikey}`,
        );
        const data = await movies.json();
        const date_names = data.results
          ?.filter((data) => data.poster_path)
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3)
          .map((movie) => ({
            id: movie.id,
            type: "movie",
            title: movie.title,
            popularity: movie.popularity,
            poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          }));
        setSearchPintures(date_names);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };
    findMovies();
  }, [content]);

  return searchPintures;
}

export function UseSeriesSearch(content) {
  const [searchPintures, setSearchPintures] = useState([]);
  useEffect(() => {
    const findSeries = async () => {
      try {
        const series = await fetch(
          `https://api.themoviedb.org/3/search/tv?query=${content}&include_adult=false&language=en-US&page=1&api_key=${apikey}`,
        );
        const data = await series.json();
        const date_names = data.results
          ?.filter((data) => data.poster_path)
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3)
          .map((tv) => ({
            id: tv.id,
            type: "series",
            title: tv.name,
            popularity: tv.popularity,
            poster: `https://image.tmdb.org/t/p/original${tv.poster_path}`,
          }));
        setSearchPintures(date_names);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };
    findSeries();
  }, [content]);

  return searchPintures;
}

export function UseMediaSearch(content) {
  const findMovies = UseMovieSearch(content);
  const findSeries = UseSeriesSearch(content);
  const contentMedia = [...findMovies, ...findSeries];
  const result = [...contentMedia].sort((a, b) => b.popularity- a.popularity)

  return result;
}
