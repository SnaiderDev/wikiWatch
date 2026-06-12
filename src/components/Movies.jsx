import { Link } from "react-router-dom";
import { UsePopularMovies,  UseUpcomingMovies,UseTopRatedMovies} from "../hooks/useMoviesHook";
import { CardSeccion,Card } from "./cards";
import { Loader } from "./Loader";

const MovieSection = ({ title, movies }) => {
    return (
        <CardSeccion title={title}>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}/${movie.name}`} className="basis-sm" >
                    <Card key={movie.id} image={movie.image} text={movie.name} />
                </Link>
            ))}
        </CardSeccion>
    )
}

export function Movies() {
    const { pintures: topRatedMovies, loading: topRatedLoading } = UseTopRatedMovies();
    const { pintures: popularMovies, loading: popularLoading } = UsePopularMovies();
    const { pintures: upcomingMovies, loading: upcomingLoading } = UseUpcomingMovies();

    const isLoading = topRatedLoading || popularLoading || upcomingLoading;

    if (isLoading) {
        return <Loader />;
    }

    return (
        <main className="h-min-screen relative  bg-neutral-950 text-neutral-50 font-iu">
            <div className = "flex flex-col gap-4 mt-10">
                <MovieSection title="Popular Movies" movies={popularMovies} />
                <MovieSection title="Top Rated Movies" movies={topRatedMovies} />
                <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
            </div>
        </main>
    )
}