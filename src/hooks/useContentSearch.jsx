import { useState, useEffect } from 'react';
import { apikey } from '../config/apiKey';
export function UseMovieSearch(content) {
    const [searchPintures, setSearchPintures] = useState([]);
    useEffect(() => {
        const findMovies = async () => {
            try {
                const movies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${content}&include_adult=false&language=en-US&page=1&api_key=${apikey}`);
                const data = await movies.json();
                const date_names = data.results.map((movie) => ({ id: movie.id, title: movie.title, path: movie.poster_path }));
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
                const series = await fetch(`https://api.themoviedb.org/3/search/tv?query=${content}&include_adult=false&language=en-US&page=1&api_key=${apikey}`);
                const data = await series.json();
                const date_names = data.results.map((tv) => ({ id: tv.id, name: tv.name , path: tv.poster_path }));
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
    const findMovies = UseMovieSearch(content).slice(0, 2);
    const findSeries = UseSeriesSearch(content).slice(0, 2);
    const combinedResults = [...findMovies, ...findSeries];

    return combinedResults;
}