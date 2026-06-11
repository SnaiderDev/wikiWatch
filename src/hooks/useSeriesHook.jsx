import { useEffect, useState } from "react";
import { apikey } from "../config/apiKey";

export function UseTopRatedSeries (){
    const [series,setSeries] = useState([])
    useEffect(()=>{
         const fecthTv = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const result = data.results.filter( (tv) => tv.poster_path)
                .slice(0,6)
                .map((tv)=>{
                    return {
                        id: tv.id,
                        name: tv.name,
                        image: `https://image.tmdb.org/t/p/original${tv.poster_path}`
                    }
                })
                setSeries(result)
            } catch (error) {
                console.error("Error fetching tv data:", error);
            }
         }
        fecthTv();   
    },[] )
    return series
}

export function UsePopularSeries(){
    const [series,setSeries] = useState([])
    useEffect(()=>{
         const fecthTv = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language
=en-US&page=1`);
                const data = await res.json();
                const result = data.results.filter( (tv) => tv.poster_path)
                .slice(0,6)
                .map((tv)=>{
                    return {
                        id: tv.id,
                        name: tv.name,
                        image: `https://image.tmdb.org/t/p/original${tv.poster_path}`
                    }
                })
                setSeries(result)
            } catch (error) {
                console.error("Error fetching tv data:", error);
            }
            }
        fecthTv();
    },[] )
    return series
}

export function UseOnTheAirSeries(){
    const [series,setSeries] = useState([])
    useEffect(()=>{
         const fecthTv = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apikey}&language=en-US&page=1`);
                const data = await res.json();
                const result = data.results.filter( (tv) => tv.poster_path)
                .slice(0,6)
                .map((tv)=>{
                    return {
                        id: tv.id,
                        name: tv.name,
                        image: `https://image.tmdb.org/t/p/original${tv.poster_path}`
                    }
                }
                )
                setSeries(result)
            }
            catch (error) {
                console.error("Error fetching tv data:", error);
            }
            }
        fecthTv();
    },[] )
    return series
}