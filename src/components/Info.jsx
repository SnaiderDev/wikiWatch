import { useParams } from "react-router-dom";
import { UseGetDetailsMedia } from "../hooks/useGetDetailsMedia";

export function InfoMovie({id, type}){
    const details = UseGetDetailsMedia(id, type);
    console.log(details);
    
    return(
        <article>
            <div className = "">
                <img src={details.backdrop}/>
            </div>
        </article>
    )
}

export function Info() {
    const {type,id} = useParams();
    return (
        <article>
            {
                (type === "movie")? <InfoMovie id={id} type={type}/> : (type === "series")? <InfoSeries id={id} type={type}/> : <>I don't know</>
            }
        </article>
    );
}
