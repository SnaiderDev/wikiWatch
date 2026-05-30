import { UseTopRatedSeries,UseOnTheAirSeries,UsePopularSeries} from "../hooks/useSeriesHook"
import { CardSeccion } from "./cards"

const TopRatedSeries = () => {
    const series = UseTopRatedSeries()
    return (
        <CardSeccion content={series} title="Top Rated Series" />
    )
}

const PopularSeries = () => {
    const series = UsePopularSeries()
    return (
        <CardSeccion content={series} title="Popular Series" />
    )
}

const OnTheAirSeries = () => {
    const series = UseOnTheAirSeries()
    return (
        <CardSeccion content={series} title="On The Air Series" />
    )
}

export function Series() {
    return (
        <main>
         <TopRatedSeries />
         <PopularSeries />
         <OnTheAirSeries />
        </main>
    )

}