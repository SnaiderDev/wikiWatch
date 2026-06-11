import { Link } from "react-router-dom"
import { UseTopRatedSeries, UseOnTheAirSeries, UsePopularSeries } from "../hooks/useSeriesHook"
import { CardSeccion, Card } from "./cards"

const TopRatedSeries = () => {
    const series = UseTopRatedSeries()
    return (
        <CardSeccion title="Top Rated Series">
            {
                series.map((serie) => (
                    <Link key={serie.id} to={`/series/${serie.id}/${serie.name}`} className="basis-sm">
                        <Card key={serie.id} image={serie.image} text={serie.name} />
                    </Link>
                ))
            }
        </CardSeccion>
    )
}

const PopularSeries = () => {
    const series = UsePopularSeries()
    return (
        <CardSeccion title="Popular Series">
            {
                series.map((serie) => (
                    <Link key={serie.id} to={`/series/${serie.id}/${serie.name}`} className="basis-sm">
                        <Card key={serie.id} image={serie.image} text={serie.name} />
                    </Link>
                ))
            }
        </CardSeccion>
    )
}

const OnTheAirSeries = () => {
    const series = UseOnTheAirSeries()
    return (
        <CardSeccion title="On The Air Series">
            {
                series.map((serie) => (
                    <Link key={serie.id} to={`/series/${serie.id}/${serie.name}`} className="basis-sm">
                        <Card key={serie.id} image={serie.image} text={serie.name} />
                    </Link>
                ))
            }
        </CardSeccion>
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