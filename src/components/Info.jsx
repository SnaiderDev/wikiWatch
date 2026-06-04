import { useParams } from "react-router-dom";
import { InfoDetails, InfoDetailsMovie } from "./InfoDetails";
import { InfoDetailsTV } from "./InfoDetailsTv";

export function InfoUknown() {
  return (
    <main className="flex flex-col items-center gap-4 h-screen justify-center">
      <article>
        <h1 className="text-4xl font-bold">
          <span className="text-[var(--color-primary)] ">Unknown </span>
           media type
        </h1>
        <p className="text-lg">
          The media type you are trying to access is not <span className="text-[var(--color-primary)] "> recognized.</span>
        </p>
      </article>
    </main>
  );
}
export function Info() {
  const { type, id } = useParams();
  return (
    <article>
      {type === "movie" ? (
        <InfoDetailsMovie id={id} type={type} />
      ) : type === "series" ? (
        <InfoDetailsTV id={id} type={type} />
      ) : (
        <InfoUknown />
      )}
    </article>
  );
}
