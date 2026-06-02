import { useParams } from "react-router-dom";
import { UseGetDetailsMedia } from "../hooks/useGetDetailsMedia";
import { CiStar } from "react-icons/ci";

function InfoBase({ id, type }) {
  const details = UseGetDetailsMedia(id, type);
  if (!details) return null;

  return (
    <article>
      <div className="relative h-min w-full">
        <div className="h-full w-full opacity-20 absolute">
          <img
            src={details.backdrop}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <article className="flex flex-wrap  justify-center gap-4 p-4 items-center">
          <div className="basis-xs h-96">
            <img
              src={details.poster}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-3 basis-xs grow-1 ">
            <header className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">{details.title}</h1>{" "}
              <span className="p-1 bg-[var(--color-primary)] rounded-sm flex items-center justify-center gap-1">
                <CiStar className= "scale-150"/> {details.vote_average}
              </span>
            </header>
            <div>{details.tagline}</div>
            <div>{details.overview}</div>
            <div>
              <span className="font-bold">Genres: </span>
              <div className="flex flex-wrap gap-2">
                {details.genres
                  ? details.genres.map((genre) => (
                      <div className="p-1 text-center rounded-sm  bg-[var(--color-primary)]">
                        <span key={genre}>{genre}</span>
                      </div>
                    ))
                  : "No genres available"}
              </div>
            </div>
          </div>
        </article>
      </div>
    </article>
  );
}

export function InfoMovie({ id, type }) {
  return <InfoBase id={id} type={type} />;
}

export function InfoSeries({ id, type }) {
  return <InfoBase id={id} type={type} />;
}

export function Info() {
  const { type, id } = useParams();
  return (
    <article>
      {type === "movie" ? (
        <InfoMovie id={id} type={type} />
      ) : type === "series" ? (
        <InfoSeries id={id} type={type} />
      ) : (
        <>I don't know</>
      )}
    </article>
  );
}
