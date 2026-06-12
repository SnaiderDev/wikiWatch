import { useState,useEffect } from "react";
import { apikey } from "../config/apiKey";

//photos for the home carousel
export function UseHomePintures(){
    const [pintures,setPintures] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const backdrop_paths = data.results
                    .filter((movie) => movie.backdrop_path)
                    .map((movie) => `https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
                setPintures(backdrop_paths);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }, []);

    return { pintures, loading };
}

//photos for the cards in the home
export function UseCardPinturesHome(){
    const [cardPintures, setcardPintures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchMovie = async () =>{
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const card_paths = data.results
                    .filter((movie) => movie.poster_path)
                    .slice(0, 3)
                    .map((movie) => `https://image.tmdb.org/t/p/original${movie.poster_path}`);
                setcardPintures(card_paths);
            } catch (error) {   
                console.error("Error fetching movie data:", error);
            } finally {
                setLoading(false);
            }
        }; 
        fetchMovie();
    },[])
    return { cardPintures, loading };
}

//photos for the rated movies home
export function UseRatedMoviesPinturesCardHome(){
    const [ratedPintures, setRatedPintures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchRatedMovie = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const rated_paths = data.results
                    .filter((movie) => movie.poster_path)
                    .slice(0, 6)
                    .map((movie) => ({
                        id: movie.id,
                        type: "movies",
                        image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                        name: movie.title,
                    }));
                setRatedPintures(rated_paths);
            } catch (error) {
                console.error("Error fetching rated movie data:", error);
            } finally {
                setLoading(false);
            }
        } 
        fetchRatedMovie();
    },[])
    return { ratedPintures, loading };
}

//photos for the rated series home

export function UseRatedSeriesPinturesCardHome(){
    const [ratedSeries, setRatedSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRatedSeries = async ()=>{
            try {
                const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`)
                const data = await res.json()
                const rated_series_paths = data.results
                    .filter((series) => series.poster_path)
                    .slice(0, 6)
                    .map((series) => ({
                        id: series.id,
                        type:"series",
                        image: `https://image.tmdb.org/t/p/original${series.poster_path}`,
                        name: series.name,
                    }));
                setRatedSeries(rated_series_paths)
            } catch (error) {
                console.error("Error fetching rated series data:", error);
            } finally {
                setLoading(false);
            }
        } 
        fetchRatedSeries();
    },[])
    return { ratedSeries, loading };
}