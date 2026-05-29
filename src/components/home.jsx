import { useContext, useEffect, useState } from "react";
import { UseHomePintures, UseRatedMoviesPinturesCardHome, UseRatedSeriesPinturesCardHome } from "../hooks/useHomePintures";
import { Card, CardSeccion } from "./cards";
import { ContentSection, Icon } from "./Items";
import { FaCircleArrowUp } from "react-icons/fa6";
import { LanguageContext } from "../context/ContextLanguage";


//Actualizacion de las imagnes cada 5 segundos en el homre
const HomePintures = () => {
    const pintures = UseHomePintures();
    const [currentIndex, setCurrentIndex] = useState(0);
    const { language } = useContext(LanguageContext);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pintures.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [pintures]);

    return (
        <div className="w-full h-[600px] overflow-hidden relative">
            <div className="w-full h-full flex items-center justify-center relative">
                {pintures.map((pinture, index) => (
                    <img
                        key={index}
                        src={pinture}
                        alt={`Pinture ${index}`}
                        className="absolute w-full h-full object-cover transition-opacity duration-500"
                        style={{ opacity: index === currentIndex ? 1 : 0 }}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center">
                <div className="absolute w-full h-full bg-neutral-900 opacity-50"></div>
                {
                    language === "en" ?
                        <>
                            <div className="relative flex flex-col gap-1 items-center justify-center text-center text-neutral-50 font-bold z-10">
                                <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Wiki<span className="text-[var(--color-primary)]">Watch</span></h1>
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Discover the world of movies and series</h2>
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">We always think of what's best for you</h3>
                            </div>
                        </>
                        :
                        <>

                            <div className="relative flex flex-col gap-1 items-center justify-center text-center text-neutral-50 font-bold z-10">
                                <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Wiki<span className="text-[var(--color-primary)]">Watch</span></h1>
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Descubre el mundo del cine y las series</h2>
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Siempre pensando en lo mejor para ti</h3>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

const MoviesCardSection = () => {
    const { language } = useContext(LanguageContext);
    const ratedPintures = UseRatedMoviesPinturesCardHome();
    return (

        <article>
            <header>
                {language === "en" ? (
                    <div className="font-bold text-center text-3xl font-subtitle">
                        Discover <span className="text-[var(--color-primary)] font-bold">all</span>
                        <span> </span>the best in the <span className="text-[var(--color-primary)] font-bold">world </span>
                        <span> </span>of cinema <span className="text-[var(--color-primary)] font-bold">!</span>
                    </div>
                ) : (
                    <div className="font-bold text-center text-3xl font-subtitle">
                        Descubre <span className="text-[var(--color-primary)] font-bold">todo</span>
                        <span> </span>lo mejor en el <span className="text-[var(--color-primary)] font-bold">mundo </span>
                        <span> </span>del cine <span className="text-[var(--color-primary)] font-bold">!</span>
                    </div>
                )}
            </header>
            <CardSeccion content={ratedPintures} />
        </article>
    )
}

const SeriesCardSection = () => {
    const { language } = useContext(LanguageContext);
    const ratedSeries = UseRatedSeriesPinturesCardHome();
    return (
        <article>
            <header>
                {
                    language === "en" ? (
                        <div className="font-bold text-center text-3xl font-subtitle">
                            Don't miss <span className="text-[var(--color-primary)] font-bold">any</span>
                            <span> </span>of your <span className="text-[var(--color-primary)] font-bold">favorite</span>
                            <span> </span>series <span className="text-[var(--color-primary)] font-bold">!</span>
                        </div>
                    ) : (
                        <div className="font-bold text-center text-3xl font-subtitle">
                            No te pierdas <span className="text-[var(--color-primary)] font-bold">ninguna</span>
                            <span> </span>de tus <span className="text-[var(--color-primary)] font-bold">series</span>
                            <span> </span>favoritas <span className="text-[var(--color-primary)] font-bold">!</span>
                        </div>
                    )
                }
            </header>
            <CardSeccion content={ratedSeries} />
        </article>

    )
}

export default function Home() {
    return (
        <main>
            <HomePintures />
            <Card />
            <MoviesCardSection />
            <SeriesCardSection />
        </main>
    );
}