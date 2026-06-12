import { Header } from "./components/Header";
import Home from "./components/home";
import { Movies } from "./components/Movies";
import { Series } from "./components/Series";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Routes, Route} from "react-router-dom";
import { HashRouter as BrowserRouter } from "react-router-dom";
import { Info } from "./components/Info";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScrool = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    });

    return window.removeEventListener("scroll", null);
  }, []);

  if (!isVisible) return null;
  return (
    <button
      onClick={handleScrool}
      className="fixed bottom-20 right-4 bg-[var(--color-primary)]  p-2 rounded-full shadow-lg 
        hover:bg-[var(--color-primary-dark)] cursor-pointer"
    >
      <FaCircleArrowUp className="text-4xl  transition-transform duration-300 hover:scale-200 hover:rotate-6" />
    </button>
  );
};

function App() {
  return (
    
      <BrowserRouter>
        <main className="h-min-screen relative  bg-neutral-950 text-neutral-50 font-iu">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path= ":type/:id/:name?" element={<Info />} />
          </Routes>
          <Footer />
          <TopButton />
        </main>
      </BrowserRouter>

  );
}

export default App;
