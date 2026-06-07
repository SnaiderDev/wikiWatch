import { apikey } from "../config/apikey";
import { useEffect, useState } from "react";

export function UseGetDetailsMedia(id, type) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    try {
      switch (type) {
        case "movie":
          {
            const getDetailsMovie = async () => {
              const getacting = async () => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=en-US`,
                );
                const data = await response.json();
                const cast =
                  data.cast?.slice(0, 10).map((actor) => ({
                    name: actor.name,
                    profile: actor.profile_path
                      ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                      : "",
                  })) ?? [];
                return cast;
              };

              const getImages = async () => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apikey}`,
                );
                const data = await response.json();
                const backdrops =
                  data.backdrops
                    ?.slice(0, 5)
                    .map(
                      (backdrop) =>
                        `https://image.tmdb.org/t/p/original${backdrop.file_path}`,
                    ) ?? [];
                return backdrops;
              };

              const getVideos = async () => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`,
                );
                const data = await response.json();
                const videos =
                  data.results
                    ?.filter((video) => video.type === "Trailer")
                    .slice(0, 1)
                    .map((video) => ({
                      name: video.name,
                      key: video.key,
                      site: video.site,
                    })) ?? [];
                return videos;
              };

              const getReviews = async () => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apikey}&language=en-US`,
                );
                const data = await response.json();
                const reviews =
                  data.results?.slice(0, 6).map((review) => ({
                    author: review.author,
                    content: review.content,
                  })) ?? [];
                return reviews;
              };

              const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`,
              );
              const data = await response.json();
              const res = {
                title: data.title,
                poster: data.poster_path
                  ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                  : "",
                backdrop: data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                  : "",
                overview: data.overview,
                tagline: data.tagline,
                genres: data.genres?.map((genre) => genre.name) ?? [],
                vote_average:
                  data.vote_average != null
                    ? Number(data.vote_average.toFixed(2))
                    : data.vote_average,
                production_companies:
                  data.production_companies
                    ?.map((company) => {
                      const name = company.name;
                      const logo = company.logo_path
                        ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                        : "";
                      return { name, logo };
                    })
                    .filter((company) => company.logo) ?? [],
                acting: await getacting(),
                images: await getImages(),
                videos: await getVideos(),
                reviews: await getReviews(),
              };

              setDetails(res);
            };
            getDetailsMovie();
          }
          break;
        case "series":
          {
            const getImages = async () => {
                const response = await fetch (`https://api.themoviedb.org/3/tv/${id}/images?api_key=${apikey}`)
                const data = await response.json()
               const backdrops =
                  data.backdrops
                    ?.slice(0, 5)
                    .map(
                      (backdrop) =>
                        `https://image.tmdb.org/t/p/original${backdrop.file_path}`,
                    ) ?? [];
                return backdrops;
            }

            const getVideos = async () => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apikey}&language=en-US`,
                );
                const data = await response.json();
                const videos =
                  data.results
                    ?.filter((video) => video.type === "Trailer")
                    .slice(0, 1)
                    .map((video) => ({
                      name: video.name,
                      key: video.key,
                      site: video.site,
                    })) ?? [];
                return videos;
              };

               const getReviews = async () => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apikey}&language=en-US`,
                );
                const data = await response.json();
                const reviews =
                  data.results?.slice(0, 6).map((review) => ({
                    author: review.author,
                    content: review.content,
                  })) ?? [];
                return reviews;
              };

            const getDetailsSeries = async () => {
              const response = await fetch(
                `https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}&language=en-US`,
              );
              const data = await response.json();
              const res = {
                title: data.name,
                poster: data.poster_path
                  ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                  : "",
                backdrop: data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                  : "",
                overview: data.overview,
                tagline: data.tagline,
                status:  data.status,
                genres: data.genres?.map((genre) => genre.name) ?? [],
                vote_average:
                  data.vote_average != null
                    ? Number(data.vote_average.toFixed(2))
                    : data.vote_average,
                production_companies:
                  data.production_companies
                    ?.map((company) => {
                      const name = company.name;
                      const logo = company.logo_path
                        ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                        : "";
                      return { name, logo };
                    })
                    .filter((company) => company.logo) ?? [],
                createdBy: data.createdBy?.map((created) => ({
                  name: created.name,
                  poster: created.poster_path
                    ? `https://image.tmdb.org/t/p/original${created.poster_path}`
                    : "",
                })),
                seasons: data.seasons?.map((season) => ({
                  name: season.name,
                  overview: season.overview,
                  episode_count: season.episode_count,
                  vote_average: season.vote_average,
                  poster: season.poster_path
                    ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                    : "",
                })),
                images: await getImages(),
                videos: await getVideos(),
                reviews: await getReviews()
              };
              setDetails(res);
            };
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
  }, [id, type]);
  return details;
}
