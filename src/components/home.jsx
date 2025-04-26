import { useState } from "react";
import { CiHome, CiSearch, CiBoxList } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { RxExit } from "react-icons/rx";

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
        <aside className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-1/4 h-screen bg-neutral-900 p-4 z-50">
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


const ButtonAside = ({ icon,accion}) => {
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
        <header className="p-3 relative flex  justify-between items-center gap-2">
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
            <div className="flex lg:hidden items-center gap-4" ><ButtonAside accion={handleClick} icon={<CiBoxList/>}/></div>
            {isOpen ? <Aside> <ButtonAside accion={handleClick} icon={<RxExit/>}/> </Aside> : null}
        </header>
    );
}

export default function Home() {
    return (
        <Header />
    );
}