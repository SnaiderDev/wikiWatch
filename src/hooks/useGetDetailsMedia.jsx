import { useEffect, useState } from "react";
import { DetailMovie } from "./useGetMediaMovie";
import { detailsSeries } from "./useGetDetailsSerie";

export function UseGetDetailsMedia(id, type) {
  const [details, setDetails] = useState({});
  const [loading,setloading] = useState(true);
  useEffect(() => {
    let mounted = true
    const load = async()=>{
      setloading(true)
      try {
        if (type ==="movies") {
          let res = {}
          res = await DetailMovie(id)
          if(mounted){
            setDetails(res)
            setloading(false)
          } 
        } else if (type === "series"){
          let res = {}
          res = await detailsSeries(id)
          if(mounted){
            setDetails(res)
            setloading(false)
          } 
        }
        else {
            console.log("This type is not valid")
        }
      } catch (error) {
        console.log("The content is not avalible "+error)
      }
    }
    if(id) load()
    else{
      setDetails({})
      setloading(false)
    }
    return () =>{
      mounted = false
    }

  }, [id, type]);
  return {details,loading};
}
