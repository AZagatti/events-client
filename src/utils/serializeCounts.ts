import { ICount } from "../services/counts";

interface CountGroup {
  value: string;
  percentage: string;
}

export interface ISerializedCount {
  id: number;
  date: string;
  total: CountGroup;
  polling: CountGroup;
  silent: CountGroup;
  both: CountGroup;
}

interface IGetPercentage {
  total: string | number;
  value: string | number;
}

const formatNumber = (value: string | number) =>
  Intl.NumberFormat("pt-BR").format(Number(value));

const getPercentage = ({ total, value }: IGetPercentage) => {
  return `${((Number(value) * 100) / Number(total)).toFixed(2)}%`;
};

export const serializeCounts = (counts: ICount[]): ISerializedCount[] => {
  return counts.map((count) => ({
    id: count.id,
    date: new Date(`${count.date} 00:00:00`).toLocaleDateString("pt-BR"),
    total: {
      value: formatNumber(count.ordersTotal),
      percentage: "100%",
    },
    polling: {
      value: formatNumber(count.ordersHavePolling),
      percentage: getPercentage({
        total: count.ordersTotal,
        value: count.ordersHavePolling,
      }),
    },
    silent: {
      value: formatNumber(count.ordersHaveSilent),
      percentage: getPercentage({
        total: count.ordersTotal,
        value: count.ordersHaveSilent,
      }),
    },
    both: {
      value: formatNumber(count.ordersHaveBoth),
      percentage: getPercentage({
        total: count.ordersTotal,
        value: count.ordersHaveBoth,
      }),
    },
  }));
};
