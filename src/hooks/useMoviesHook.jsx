import { useEffect, useState } from "react"
import { apikey } from "../config/apiKey";
export function UsePopularMovies () {
    const [pintures, setPintures] = useState([])
    useEffect(()=>{
        const movies = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const result = data.results.filter( (movie) => movie.poster_path)
                .slice(0,6)
                .map((movie)=>{
                    return {
                        name: movie.title,
                        image: `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    }
                })
                setPintures(result)
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        }
        movies();
    },[])
    return pintures
}