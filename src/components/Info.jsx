import { useParams } from "react-router-dom";
import { InfoDetails } from "./InfoDetails";

export function InfoMovie({ id, type }) {
  return <InfoDetails id={id} type={type} />;
}

export function InfoSeries({ id, type }) {
  return <InfoDetails id={id} type={type} />;
}

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
        <InfoMovie id={id} type={type} />
      ) : type === "series" ? (
        <InfoSeries id={id} type={type} />
      ) : (
        <InfoUknown />
      )}
    </article>
  );
}
