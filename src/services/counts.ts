import { Keys } from "../constants/constants";
import { ISerializedCount, serializeCounts } from "../utils/serializeCounts";
import { api } from "./api";

export interface ICount {
  id: number;
  ordersTotal: string;
  ordersHavePolling: string;
  ordersHaveSilent: string;
  ordersHaveBoth: string;
  date: string;
}

export const getCounts = async (): Promise<ISerializedCount[]> => {
  const { data } = await api.get<ICount[]>(Keys.Counts);
  return serializeCounts(data);
};
