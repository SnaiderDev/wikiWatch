import { useParams } from "react-router-dom";
import { InfoDetails } from "./InfoDetails";



export function InfoMovie({ id, type }) {
  return <InfoDetails id={id} type={type} />;
}

export function InfoSeries({ id, type }) {
  return <InfoDetails id={id} type={type} />;
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
