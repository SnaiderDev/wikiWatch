import { useEffect, useState } from "react";
import { CiHome, CiSearch, CiBoxList, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { RxExit } from "react-icons/rx";

import { UseHomePintures } from "../hooks/useHomePintures";
import { Card } from "./cards";

const LabelItem = ({ icon, children }) => {
    return (
        <div className="flex items-center justify-center gap-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors duration-300">
            <div className="scale-140">{icon}</div>{children}
        </div>
    );
};

const SearchBar = () => {
    return (
        <div className="relative flex  items-center justify-center gap-2 w-full">
            <input
                type="text"
                placeholder="Search..."
                className="bg-neutral-800 text-neutral-50 p-2 rounded-md focus:outline-none w-full  pr-10"
            />
            <CiSearch className="text-2xl absolute right-3 text-neutral-50" />
        </div>
    );
};

const Aside = ({ children }) => {
    return (
        <aside className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-2/4 h-screen bg-neutral-900 p-4 z-50">
            <div className="text-3xl"><LabelItem icon={null}>WikiWatch</LabelItem></div>
            <LabelItem icon={<CiHome />}>Home</LabelItem>
            <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem>
            <LabelItem icon={<SiSteelseries />}>Series</LabelItem>
            <LabelItem icon={<FaGithub />}>Repository</LabelItem>
            <SearchBar />
            {children}
        </aside>
    );
}


const ButtonAside = ({ icon, accion }) => {
    return (
        <div className="text-2xl flex items-center justify-center gap-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors duration-300" onClick={accion}>
            {icon}
        </div>
    );
};


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="p-3 flex justify-between items-center gap-2 top-0 z-50 sticky bg-neutral-900">
            <nav>
                <ul className="flex items-center gap-4  ">
                    <li className="text-3xl font-bold font-title">WikiWatch</li>
                    <li className="hidden lg:block"> <LabelItem icon={<CiHome />}>Home</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<SiSteelseries />}>Series</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<FaGithub />}>Repository</LabelItem> </li>
                </ul>
            </nav>
            <div className="hidden lg:flex basis-2xl  items-center gap-4"><SearchBar /></div>
            <div className="flex lg:hidden items-center gap-4" ><ButtonAside accion={handleClick} icon={<CiBoxList />} /></div>
            {isOpen ? <Aside> <ButtonAside accion={handleClick} icon={<RxExit />} /> </Aside> : null}
        </header>
    );
}

//Actualizacion de las imagnes cada 5 segundos en el homre
const HomePintures = () => {
    const pintures = UseHomePintures();
    const [currentIndex, setCurrentIndex] = useState(0);
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
            <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col gap-1 items-center justify-center text-neutral-50 font-bold">
                <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">WikiWatch</h1>
                <h2 className="text-lg sm:text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">Discover the world of movies and series</h2>
                <h3 className="text-base sm:text-lg text-center md:text-xl lg:text-2xl xl:text-3xl">We always think of what's best for you</h3>
            </div>
        </div>
    );
};

function Footer() {
    return (
        <footer>
            <div className="flex flex-wrap items-center justify-center gap-4 p-4">
                <div className="basis-52 h-52 text-center">
                    <a href="">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=""
                            className="h-full w-full" />
                    </a>
                </div>
                <div>
                    <h2 className="font-subtitle text-2xl">Participante</h2>
                    <div className="flex items-center justify-center  gap-2">
                        <p className="font-text">
                            Esnader David Ortega Rodriguez
                        </p>

                        <div className="flex items-center justify-center gap-4 ">
                            <a href="">
                                <CiLinkedin className="text-3xl cursor-pointer hover:text-neutral-400 transition-colors duration-300" />
                            </a>
                            <a href="">
                                <FaGithub className="text-3xl cursor-pointer hover:text-neutral-400 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}


export default function Home() {
    return (
        <main>
            <Header />
            <HomePintures />
            <Card />
            <Footer />
        </main>
    );
}