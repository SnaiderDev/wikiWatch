import { useContext, useState } from "react";
import { CiHome, CiBoxList, CiSearch } from "react-icons/ci";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { FaGithub, FaLanguage } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Icon, LabelItem } from "./Items";
import { UseMediaSearch } from "../hooks/useContentSearch";
import { LanguageContext } from "../context/ContextLanguage";

const ButtonAside = ({ icon, accion }) => {
    return (
        <div className="text-2xl flex items-center justify-center gap-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors duration-300" onClick={accion}>
            {icon}
        </div>
    );
};

const SearchItems = ({ content }) => {
    const mediaSearch = UseMediaSearch(content);
    return (
        <div className="absolute top-16">
            {mediaSearch.length > 0 ?
                <div className="w-3 bg-amber-300">
                    yes
                </div>
                :
                <div>No results found</div>}
        </div>
    );
}
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInput = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="group  relative flex  items-center justify-center gap-2 w-full">
            <input
                type="text"
                placeholder="Search..."
                className="bg-neutral-800 text-neutral-50 p-2 rounded-md focus:outline-none w-full  pr-10"
                value={searchTerm}
                onChange={handleInput}
            />
            <CiSearch className="group-active:scale-100 transition-all duration-300  text-2xl scale-150 absolute right-3 text-[var(--color-primary)]" />
            {searchTerm && <SearchItems content={searchTerm} />}
        </div>
    );
};


const Aside = ({ children }) => {
    return (
        <aside className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-2/4 h-screen bg-neutral-900 p-4 z-50">
            <div className="text-3xl"><LabelItem icon={null}>
                <div>
                    WikiWatch
                </div>
            </LabelItem></div>
            <LabelItem icon={<CiHome />}>Home</LabelItem>
            <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem>
            <LabelItem icon={<SiSteelseries />}>Series</LabelItem>
            <LabelItem icon={<FaGithub />}>Repository</LabelItem>
            <SearchBar />
            {children}
        </aside>
    );
}

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const handleSetLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="flex items-center gap-2">
            <Icon><FaLanguage /></Icon>
            <select
                className="box-list bg-neutral-800 text-neutral-50 p-2 rounded-md 
                focus:outline-none hover:bg-neutral-700 transition-colors duration-300 
                cursor-pointer 
                "
                value={language}
                onChange={handleSetLanguage}
            >
                <option value="es">ES</option>
                <option value="en">EN</option>

            </select>
        </div>
    );
}


export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="p-3 flex justify-between items-center gap-2 top-0 z-50 sticky bg-neutral-900 opacity-70">
            <nav>
                <ul className="flex items-center gap-4  ">
                    <li className="text-3xl font-bold font-title">
                        Wiki<span className="text-[var(--color-primary)]">Watch</span>
                    </li>
                    <li className="hidden lg:block"> <LabelItem icon={<CiHome />}>Home</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<SiSteelseries />}>Series</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<FaGithub />}>Repository</LabelItem> </li>
                </ul>
            </nav>
            <div className="hidden lg:flex basis-2xl  items-center gap-4"><SearchBar /></div>
            <LanguageSelector />
            <div className="flex lg:hidden items-center gap-4" ><ButtonAside accion={handleClick} icon={<CiBoxList />} /></div>
            {isOpen ? <Aside> <ButtonAside accion={handleClick} icon={<RxExit />} /> </Aside> : null}
        </header>
    );
}