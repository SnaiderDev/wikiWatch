import { Link } from "react-router-dom"
import { UseTopRatedSeries, UseOnTheAirSeries, UsePopularSeries } from "../hooks/useSeriesHook"
import { CardSeccion, Card } from "./cards"
import { Loader } from "./Loader"

const SeriesSection = ({ title, series }) => {
    return (
        <CardSeccion title={title}>
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
    const { series: topRatedSeries, loading: topRatedLoading } = UseTopRatedSeries()
    const { series: popularSeries, loading: popularLoading } = UsePopularSeries()
    const { series: onTheAirSeries, loading: onTheAirLoading } = UseOnTheAirSeries()

    const isLoading = topRatedLoading || popularLoading || onTheAirLoading

    if (isLoading) {
        return <Loader />
    }

    return (
        <main>
            <SeriesSection title="Top Rated Series" series={topRatedSeries} />
            <SeriesSection title="Popular Series" series={popularSeries} />
            <SeriesSection title="On The Air Series" series={onTheAirSeries} />
        </main>
    )
}