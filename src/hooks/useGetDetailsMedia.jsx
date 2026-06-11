import { useEffect, useState } from "react";
import { DetailMovie } from "./useGetMediaMovie";
import { detailsSeries } from "./useGetDetailsSerie";

export function UseGetDetailsMedia(id, type) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    try {
      switch (type) {
        case "movies":
          {
            const getDetails = () => {
              const result = async () => {
                const res = await DetailMovie(id);
                setDetails(res);
              };
              result();
            };
            getDetails();
          }
          break;
        case "series":
          {
            const getDetails = () => {
              const result = async () => {
                const res = await detailsSeries(id);
                setDetails(res);
              };
              result();
            };
            getDetails();
          }
          break;
        default:
          setDetails({});
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }, [id, type]);
  return details;
}
