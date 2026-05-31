import { useParams } from "react-router-dom";

export function Info() {
    const {type} = useParams();
    return (
        <article>
            {
                (type === "movie")? <>Movies</> : (type === "series")? <>Series</> : <>I don't know</>
            }
        </article>
    );
}
