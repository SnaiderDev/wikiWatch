import { useState } from "react";
import { CiHome, CiBoxList, CiSearch } from "react-icons/ci";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { FaGithub, FaLanguage } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Icon, LabelItem } from "./Items";
import { UseMediaSearch } from "../hooks/useContentSearch";

import { Link } from "react-router-dom";

const ButtonAside = ({ icon, accion }) => {
  return (
    <div
      className="text-2xl flex items-center justify-center gap-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors duration-300"
      onClick={accion}
    >
      {icon}
    </div>
  );
};

const SearchItems = ({ content, handleClear }) => {
  const mediaSearch = UseMediaSearch(content);
  return (
    <div className="absolute top-16 left-0 right-0 z-10 bg-neutral-900 rounded-md shadow-lg p-2 max-h-80 overflow-y-auto">
      {mediaSearch && mediaSearch.length > 0
        ? mediaSearch.map((media) => (
            <Link
              onClick={handleClear}
              key={`${media.type}+${media.id}`}
              to={`/${media.type}/${media.id}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
            >
              <img
                src={media.poster}
                alt={media.title}
                className="h-28 w-20 object-cover rounded-sm"
              />
              <div>
                <header className="text-sm font-bold text-neutral-50">
                  {media.title}
                </header>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};
const SearchBar = () => {
  const [searchContent, setSearchContent] = useState("");

  const handleInput = (e) => {
    setSearchContent(e.target.value);
  };

  const handleClear = () => {
    setSearchContent("");
  };

  return (
    <div className="group relative flex items-center justify-center gap-2 w-full">
      <input
        type="text"
        placeholder={"Search..."}
        className="bg-neutral-800 text-neutral-50 p-2 rounded-md focus:outline-none w-full pr-10"
        value={searchContent}
        onChange={handleInput}
      />
      <CiSearch className="group-active:scale-100 transition-all duration-300 text-2xl scale-150 absolute right-3 text-[var(--color-primary)]" />
      {searchContent && (
        <SearchItems content={searchContent} handleClear={handleClear} />
      )}
    </div>
  );
};

const Aside = ({ children }) => {
  return (
    <aside className="absolute top-0 left-0 flex flex-col items-center justify-center gap-4 w-2/4 h-screen bg-neutral-900 p-4 z-50">
      <div className="text-3xl font-bold font-title">
        Wiki<span className="text-[var(--color-primary)]">Watch</span>
      </div>
      <Link to="/">
        <LabelItem icon={<CiHome />}>Home</LabelItem>
      </Link>
      <Link to="/movies">
        <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem>
      </Link>
      <Link to="/series">
        <LabelItem icon={<SiSteelseries />}>Series</LabelItem>
      </Link>
      <a
        href="https://github.com/SnaiderDev/wikiWatch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LabelItem icon={<FaGithub />}>Repository</LabelItem>
      </a>
      <SearchBar />

      {children}
    </aside>
  );
};

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
          <li className="hidden lg:block">
            {" "}
            <Link to="/">
              <LabelItem icon={<CiHome />}>Home</LabelItem>
            </Link>{" "}
          </li>
          <li className="hidden lg:block">
            {" "}
            <Link to="/movies">
              <LabelItem icon={<MdOutlineLocalMovies />}>Movies</LabelItem>
            </Link>{" "}
          </li>
          <li className="hidden lg:block">
            {" "}
            <Link to="/series">
              <LabelItem icon={<SiSteelseries />}>Series</LabelItem>
            </Link>{" "}
          </li>
          <li className="hidden lg:block">
            {" "}
            <a
              href="https://github.com/SnaiderDev/wikiWatch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LabelItem icon={<FaGithub />}>Repository</LabelItem>
            </a>{" "}
          </li>
        </ul>
      </nav>
      <div className="hidden lg:flex basis-2xl  items-center gap-4">
        <SearchBar />
      </div>

      <div className="flex lg:hidden items-center gap-4">
        <ButtonAside accion={handleClick} icon={<CiBoxList />} />
      </div>
      {isOpen ? (
        <Aside>
          {" "}
          <ButtonAside accion={handleClick} icon={<RxExit />} />{" "}
        </Aside>
      ) : null}
    </header>
  );
}
