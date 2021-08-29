import { useQuery } from "react-query";
import { GetAreas } from "../helpers/helpers";

const fetchAreas = async () => {
  return GetAreas();
};

export const useAreas = () => {
  return useQuery(
    ["projects"],
    () => {
      return fetchAreas();
    },
    {
      initialData: [],
      // Keep data fresh.
      refetchInterval: 5000,
    }
  );
};