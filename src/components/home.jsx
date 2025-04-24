import { useState } from "react";
import { CiHome, CiSearch, CiBoxList } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";

const LabelItem = ({ icon, children }) => {
    return (
        <div className="flex items-center justify-center gap-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors duration-300">
            {icon}{children}
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

const Aside = () => {
    return (
        <aside className="flex flex-col items-center justify-center gap-4 w-1/4 h-screen bg-neutral-900 p-4">
            <LabelItem icon={<CiHome />}>Home</LabelItem>
            <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem>
            <LabelItem icon={<SiSteelseries />}>Series</LabelItem>
            <LabelItem icon={<FaGithub />}>Repository</LabelItem>
        </aside>
    );
}


const ButtonAside = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };  
    return (
        <div onClick={handleClick}  className="flex items-center justify-center gap-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors duration-300">
            <CiBoxList className="text-2xl" />
            {isOpen ? <Aside /> : null}
        </div>
    );
};


function Header() {
    return (
        <header className="p-3 relative flex  justify-between items-center gap-2">
            <nav>
                <ul className="flex items-center gap-4 text-2xl">
                    <li className="text-3xl font-bold">WikiWatch</li>
                    <li className="hidden lg:block"> <LabelItem icon={<CiHome />}>Home</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<SiSteelseries />}>Series</LabelItem> </li>
                    <li className="hidden lg:block"> <LabelItem icon={<FaGithub />}>Repository</LabelItem> </li>
                </ul>
            </nav>
            <div className="hidden lg:flex basis-2xl  items-center gap-4"><SearchBar /></div>
            <div className="flex lg:hidden items-center gap-4"><ButtonAside /></div>
        </header>
    );
}

export default function Home() {
    return (
        <Header />
    );
}