import { UseGetDetailsMedia } from "../hooks/useGetDetailsMedia";
import { CiStar } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";

export function InfoDetailsTV({ id, type }) {
  const details = UseGetDetailsMedia(id, type);
  if (!details) return null;
  console.log(details);

  return (
    <main>
      <article className="relative h-min w-full">
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
                <CiStar className="scale-150" /> {details.vote_average}
              </span>
            </header>
            <div>{details.tagline}</div>
            <div>{details.overview}</div>
            <div>
              <span className="font-bold">Genres: </span>
              <div className="flex flex-wrap gap-2">
                {details.genres ? (
                  details.genres.map((genre) => (
                    <div
                      key={genre}
                      className="p-1 text-center rounded-sm bg-[var(--color-primary)]"
                    >
                      <span>{genre}</span>
                    </div>
                  ))
                ) : (
                  <> </>
                )}
              </div>
            </div>
          </div>
        </article>
      </article>
   
      {details.production_companies &&
      details.production_companies.length > 0 ? (
        <article className="flex flex-col items-center gap-2">
          <header className="p-2 text-[var(--color-primary)]">
            <h2 className="text-xl font-bold">Production Companies</h2>
          </header>
          <div className="flex flex-wrap gap-4 p-4">
            {details.production_companies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center gap-2"
              >
                {company.logo && (
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 object-contain bg-amber-50 p-2"
                  />
                )}
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </article>
      ) : (
        <></>
      )}
      {
        details.createdBy && details.createdBy.length > 0 ? (
          <article className="flex flex-col items-center gap-2">
            <header className = "p-2 text-[var(--color-primary)]">
                <h2 className="text-xl font-bold">Main Cast</h2>
            </header>
            <div className="flex flex-wrap justify-center gap-4 p-4">
              {details.createdBy.map((created) => (
                <div
                  key={created.name}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  {created.poster && (
                    <img
                      src={created.poster}
                      alt={`${created.name} profile`}
                      className="h-16 object-cover rounded-full"
                    />
                  )}
                  <span>{created.name}</span>
                </div>
              ))}
            </div>
          </article>
        ): <></>
      }
      {
        details.seasons && details.seasons.length > 1 ? (
          <article className = "flex flex-col justify-center gap-2">
            <header className="p-2 text-[var(--color-primary)]">
              <h2 className="text-xl font-bold text-center">Seasons</h2>
            </header>
            <div className="flex flex-wrap gap-4 p-4 justify-center"> 
              {
                details.seasons.map((season)=>(
                  <div key={season.name} className="flex flex-col gap-2 basis-3xs">
                    <img
                      src={season.poster}
                      alt={`${season.name} poster`}
                      className="w-full h-86 object-cover rounded-sm"
                    />
                    <div className="w-full flex  items-center  gap-3">
                      {season.name} 
                      <span className="flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white p-1 rounded-sm"><CiStar className="scale-150" /> {season.vote_average}</span>
                    </div>
                    <p>
                      {season.overview}
                    </p>
                  </div>
                ))
              }
            </div>
          </article>
        ) : <></>
      }
    </main>
  );
}
