import { apikey } from "../config/apikey";
import { useEffect, useState } from "react";

export function UseGetDetailsMedia(id, type) {
    const [details, setDetails] = useState({});
    useEffect(() => {
        try {
            switch (type) {
                case "movie": {
                    const getDetailsMovie = async () => {
                        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`);
                        const data = await response.json();
                        const res = {
                            title: data.title,
                            poster: data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : "",
                            backdrop: data.backdrop_path ?  `https://image.tmdb.org/t/p/original${data.backdrop_path}` : "",
                            overview: data.overview,
                            tagline: data.tagline,
                            genres: data.genres?.map((genre) => genre.name) ?? [],
                            vote_average: data.vote_average != null ? Number(data.vote_average.toFixed(2)) + " / 10" : data.vote_average + " / 10",
                            production_companies: data.production_companies?.map((company)=> {
                                const  name = company.name
                                const logo = company.logo_path ? `https://image.tmdb.org/t/p/original${company.logo_path}}` : ""
                                return {name, logo}
                            }).filter(company => company.logo) ?? []
                        }
                        setDetails(res);
                    }
                    getDetailsMovie();
                }
                    break;
                case "series": {
                    const getDetailsSeries = async () => {
                        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}&language=en-US`);
                        const data = await response.json();
                        const res = {
                            title: data.name,
                            poster: data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : "",
                            backdrop: data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : "",
                            overview: data.overview,
                            tagline: data.tagline,
                            genres: data.genres?.map((genre) => genre.name) ?? [],
                            vote_average: data.vote_average != null ? Number(data.vote_average.toFixed(2)) + " / 10" : data.vote_average + " / 10"
                        }
                        setDetails(res);
                    }
                    getDetailsSeries();
                }
                    break;
                default:
                    setDetails({});
                    break;

            }
        } catch (error) {
            console.log(error);
        }

    }, [id, type])
    return details;
}