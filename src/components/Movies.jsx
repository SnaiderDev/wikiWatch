import { Link } from "react-router-dom";
import { UsePopularMovies,  UseUpcomingMovies,UseTopRatedMovies} from "../hooks/useMoviesHook";
import { CardSeccion,Card } from "./cards";

const TopRatedMovies = () => {
    const topRatedMovies =  UseTopRatedMovies();
    return (
        <CardSeccion title="Top Rated Movies">
            {topRatedMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}/${movie.name}`} className="basis-sm" >
                    <Card key={movie.id} image={movie.image} text={movie.name} />
                </Link>
            ))}
        </CardSeccion>
    )
}

const PopularMovies = () => {
    const popularMovies = UsePopularMovies()
    return (
        <CardSeccion title="Popular Movies">
            {popularMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}/${movie.name}`} className="basis-sm">
                    <Card key={movie.id} image={movie.image} text={movie.name} />
                </Link>
            ))}
        </CardSeccion>
    )
}

const UpcomingMovies = () => {
    const upcomingMovies = UseUpcomingMovies()
    return (
        <CardSeccion title="Upcoming Movies">
            {upcomingMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}/${movie.name}`} className="basis-sm">
                    <Card key={movie.id} image={movie.image} text={movie.name} />
                </Link>
            ))}
        </CardSeccion>
    )
}

export function Movies() {
    return (
        <main className="h-min-screen relative  bg-neutral-950 text-neutral-50 font-iu">
            <div className = "flex flex-col gap-4 mt-10">
                <PopularMovies />
                <TopRatedMovies />
                <UpcomingMovies />
            </div>
        </main>
    )
}