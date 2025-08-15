import { useState,useEffect } from "react";
import { apikey } from "../config/apiKey";

//photos for the home carousel
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

//photos for the cards in the home
export function UseCardPinturesHome(){
    const [cardPintures, setcardPintures] = useState([]);
    useEffect(()=>{
        const fetchMovie = async () =>{
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const card_paths = data.results
                    .filter((movie) => movie.poster_path) // Filter out null paths
                    .slice(0, 3) // Take only the first 3
                    .map((movie) => `https://image.tmdb.org/t/p/original${movie.poster_path}`);
                console.log(card_paths);
                setcardPintures(card_paths);
            } catch (error) {   
                console.error("Error fetching movie data:", error);
                
            }
        }; 
        fetchMovie();
    },[])
    return cardPintures;
}

//photos for the rated movies home
export function UseRatedMoviesPinturesCardHome(){
    const [ratedPintures, setRatedPintures] = useState([]);
    useEffect(()=>{
        const fetchRatedMovie = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const rated_paths = data.results
                    .filter((movie) => movie.poster_path) // Filter out null paths
                    .slice(0, 6) // Take only the first 6
                    .map((movie) => ({
                        image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                        name: movie.original_name || movie.original_title,
                    }));
//                console.log(rated_paths);
                setRatedPintures(rated_paths);
            } catch (error) {
                console.error("Error fetching rated movie data:", error);
            }
        } 
        fetchRatedMovie();
    },[])
    return ratedPintures;
}

//photos for the rated resies home

export function UseRatedSeriesPinturesCardHome(){
    const [ratedSeries, setRatedSeries] = useState([]);
    useEffect(() => {
        const fetchRatedSeries = async ()=>{
            try {
                const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`)
                const data = await res.json()
                const rated_series_paths = data.results
                    .filter((series) => series.poster_path) // Filter out null paths
                    .slice(0, 6) // Take only the first 6
                    .map((series) => ({
                        image: `https://image.tmdb.org/t/p/original${series.poster_path}`,
                        name: series.original_name,
                    }));
//
           //     console.log(rated_series_paths)
                setRatedSeries(rated_series_paths)
            } catch (error) {
                console.error("Error fetching rated series data:", error);
            }
        } 
        fetchRatedSeries();
    },[])
    return ratedSeries;
}