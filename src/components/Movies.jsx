import { UseRatedMoviesPinturesCardHome } from "../hooks/useHomePintures";
import { UsePopularMovies,  UseUpcomingMovies} from "../hooks/useMoviesHook";
import { CardSeccion } from "./cards";

const TopRatedMovies = () => {
    const topRatedMovies =  UseRatedMoviesPinturesCardHome();
    return (
        <CardSeccion content = {topRatedMovies} title="Top Rated Movies" />
    )
}

const PopularMovies = () => {
    const popularMovies = UsePopularMovies()
    return (
        <CardSeccion content={popularMovies} title="Popular Movies" />
    )
}

const UpcomingMovies = () => {
    const upcomingMovies = UseUpcomingMovies()
    return (
        <CardSeccion content={upcomingMovies} title="Upcoming Movies" />
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