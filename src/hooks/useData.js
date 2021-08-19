import { useEffect, useState } from "react";

import { arrayToMap } from "utils";
import useGoogleSheets from "./useGoogleSheets";

const SheetIndex = {
  HONOR_ROLL: 0,
  TITLES: 1,
};

const API_KEY = "AIzaSyDxuhhNtVSnG8BAor5RyLUJL8eZLdA4vPQ";
const shareUrl = "1JGx4wQkLQjESbbmIbVZ-0AtWkPI_eTuBA1yWKAPNS1c"; //old: "1tj2UFP2PujdBUMCYR4z67rtk0CnBiAtl_wNDd8iXVQY";

export function useData() {
  const { sheets, isFetching, error } = useGoogleSheets(shareUrl, API_KEY);

  const [state, setState] = useState({ titles: {}, honorRoll: [] });
  const { titles, honorRoll } = state;

  useEffect(() => {
    if (!isFetching && sheets) {
      // Convert raw sheets to something more usable
      const titles = arrayToMap(sheets[SheetIndex.TITLES]);
      const honorRoll = sheets[SheetIndex.HONOR_ROLL]?.map((dog) => ({
        ...dog,
        title: titles[dog.title],
      }));

      setState({ titles, honorRoll });
    }
  }, [isFetching, sheets]);

  //console.log("useData", { isFetching, titles, honorRoll, error });
  return { isFetching, titles, honorRoll, error };
}
