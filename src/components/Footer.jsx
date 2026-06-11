import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaReact } from "react-icons/fa";
import { Icon } from "./Items";
import { SiTailwindcss } from "react-icons/si";

export function Footer() {
  return (
    <footer className="flex-col gap-2">
      <div className="flex flex-wrap justify-center  items-center gap-4 p-4">
        <div className="basis-52 h-52 text-center">
          <a href="https://www.themoviedb.org/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
              className="h-full w-full"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-subtitle text-2xl text-center text-[var(--color-primary)]">
            Participant
          </h2>
          <div className="flex items-center justify-center  gap-2">
            <p className="font-text">Esnaider David Ortega Rodriguez</p>

            <div className="flex items-center justify-center gap-4 ">
              <a href="">
                <Icon>
                  <CiLinkedin className="text-3xl" />
                </Icon>
              </a>
              <a href="">
                <Icon>
                  <FaGithub className="text-3xl" />
                </Icon>
              </a>
            </div>
          </div>
          <div className="text-center">
            ----{" "}
            <span className="text-[var(--color-primary)] font-bold">2026</span>{" "}
            ----
          </div>
          <div className="flex flex-wrap  gap-3 justify-center items-center">
            <Icon>
              <FaReact />
            </Icon>
            <Icon>
              <SiTailwindcss />
            </Icon>
          </div>
        </div>
      </div>
    </footer>
  );
}
