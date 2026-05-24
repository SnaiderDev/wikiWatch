import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export function Footer() {
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
                    <h2 className="font-subtitle text-2xl">Participant</h2>
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