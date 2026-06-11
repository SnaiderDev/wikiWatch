import { apikey } from "../config/apiKey";
export async function detailsSeries(id) {
  let details = {};

  const getImages = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=${apikey}`,
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
    } catch (error) {
      console.log("This content is  not avalible: " + error);
      return [];
    }
  };

  const getVideos = async () => {
    try {
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
    } catch (error) {
      console.log("This content is  not avalible: " + error);
      return [];
    }
  };

  const getReviews = async () => {
    try {
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
    } catch (error) {
      console.log("This content is  not avalible: " + error);
      return [];
    }
  };

  const getWhachProvider = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${apikey}`,
      );
      const data = await response.json();
      const res =
        data.results?.US?.flatrate?.map((provider) => ({
          name: provider.provider_name,
          logo: `https://image.tmdb.org/t/p/original${provider.logo_path}`,
        })) ?? [];
      return res;
    } catch (error) {
      console.log("This content is  not avalible: " + error);
      return [];
    }
  };

  const getSimilar = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apikey}&language=en-US`,
      );
      const data = await response.json();
      const res = data.results
        ?.filter((result) => result.poster_path)
        .map((similar) => ({
          id: similar.id,
          type: "series",
          title: similar.name,
          poster: `https://image.tmdb.org/t/p/original${similar.poster_path}`,
        }))
        .slice(0, 6);
      return res;
    } catch (error) {
      console.log("This content is  not avalible: " + error);
      return [];
    }
  };

  const getDetailsSeries = async () => {
    try {
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
        status: data.status,
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
        reviews: await getReviews(),
        similar: await getSimilar(),
        provider: await getWhachProvider(),
      };
      details = res;
    } catch (error) {
      console.log("This content is  not avalible: " + error);
      return {};
    }
  };
  await getDetailsSeries();

  return details;
}
