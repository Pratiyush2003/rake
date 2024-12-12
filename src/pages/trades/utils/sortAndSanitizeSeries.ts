import { CandlestickData } from 'lightweight-charts';

export const sortAndSanitizeSeries = (data: CandlestickData[]) => {
  return data
    .sort((a, b) => (a.time as number) - (b.time as number))
    .filter(
      (item, index, self) => index === 0 || item.time !== self[index - 1].time,
    );
};
