import { useQuery } from "react-query";
import { Keys } from "../constants/constants";
import { getCounts } from "../services/counts";
import { ISerializedCount } from "../utils/serializeCounts";

export const useCounts = () => {
  return useQuery<ISerializedCount[]>(Keys.Counts, getCounts);
};
