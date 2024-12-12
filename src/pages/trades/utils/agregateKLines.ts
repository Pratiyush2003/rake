import { CandlestickData, Time } from 'lightweight-charts';

export function aggregateKlines(
  data: CandlestickData[],
  interval: number,
): CandlestickData[] {
  const result: CandlestickData[] = [];
  let currentIntervalStart =
    Math.floor((data[0].time as number) / interval) * interval;
  let currentIntervalData: CandlestickData[] = [];

  data.forEach((kline) => {
    const timestamp = kline.time;
    if (
      (timestamp as number) >= currentIntervalStart &&
      (timestamp as number) < currentIntervalStart + interval
    ) {
      currentIntervalData.push(kline);
    } else {
      const open = currentIntervalData[0].open;
      const high = Math.max(...currentIntervalData.map((k) => k.high));
      const low = Math.min(...currentIntervalData.map((k) => k.low));
      const close = currentIntervalData[currentIntervalData.length - 1].close;

      result.push({
        time: currentIntervalStart as Time,
        open,
        high,
        low,
        close,
      });

      currentIntervalStart += interval;
      currentIntervalData = [kline];
    }
  });

  if (currentIntervalData.length > 0) {
    const open = currentIntervalData[0].open;
    const high = Math.max(...currentIntervalData.map((k) => k.high));
    const low = Math.min(...currentIntervalData.map((k) => k.low));
    const close = currentIntervalData[currentIntervalData.length - 1].close;

    result.push({
      time: currentIntervalStart as Time,
      open,
      high,
      low,
      close,
    });
  }

  return result;
}
