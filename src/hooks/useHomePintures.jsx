import { useState,useEffect } from "react";
import { apikey } from "../config/apiKey";
export function UseHomePintures(){
    const [pintures,setPintures] = useState([])
        useEffect(() => {
            const fetchMovie = async () => {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
                    const data = await res.json();
                    const backdrop_paths = data.results
                        .filter((movie) => movie.backdrop_path) // Filter out null paths
                        .map((movie) => `https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
                    console.log(backdrop_paths);
                    setPintures(backdrop_paths);
                } catch (error) {
                    console.error("Error fetching movie data:", error);
                }
            };
            fetchMovie();
        }, []);

        return pintures
}