import { useEffect, useRef, useState } from 'react';
import {
  CandlestickData,
  ColorType,
  createChart,
  MismatchDirection,
  Time,
} from 'lightweight-charts';
import { aggregateKlines } from '../utils/agregateKLines';
import { sortAndSanitizeSeries } from '../utils/sortAndSanitizeSeries';
import { IconLoader2 } from '@tabler/icons-react';
import useMarket from '@/hooks/useMarket';

export default function Chart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ReturnType<typeof createChart> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineSeriesRef = useRef<any>(null);
  const [chartData, setChartData] = useState<CandlestickData[]>([]);

  const { marketList } = useMarket();

  useEffect(() => {
    (async () => {
      const response_1 = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=5000`,
      );
      const historicData_1 = await response_1.json();
      const response_2 = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=5000&endTime=${historicData_1[0][0]}`,
      );
      const historicData_2 = await response_2.json();
      const response_3 = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=5000&endTime=${historicData_2[0][0]}`,
      );
      const historicData_3 = await response_3.json();
      const historicData = [
        ...historicData_3,
        ...historicData_2,
        ...historicData_1,
      ];
      setChartData(
        historicData.map((p: unknown[]) => ({
          time: (Number(p[0]) / 1000) as Time,
          open: Number(p[1]),
          high: Number(p[2]),
          low: Number(p[3]),
          close: Number(p[4]),
        })),
      );
    })();
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current || !chartData.length) return;

    const aggregateInitialData = sortAndSanitizeSeries(
      aggregateKlines(chartData as CandlestickData[], 5),
    );

    const currentLocale = window.navigator.languages[0];
    const myPriceFormatter = Intl.NumberFormat(currentLocale, {
      style: 'currency',
      currency: 'USD',
    }).format;

    const setupChart = () => {
      const containerWidth = chartContainerRef.current
        ? chartContainerRef.current.clientWidth
        : undefined;

      const containerHeight = chartContainerRef.current
        ? chartContainerRef.current.clientHeight
        : undefined;

      chartInstance.current =
        chartContainerRef.current &&
        createChart(chartContainerRef.current, {
          width: containerWidth,
          height: containerHeight,
          layout: {
            textColor: '#5C6975',
            background: { type: 'solid' as ColorType, color: '#072537' },
          },
          localization: {
            priceFormatter: myPriceFormatter,
          },
          grid: {
            vertLines: { color: '#5C697511' },
            horzLines: { color: '#5C697511' },
          },
          timeScale: {
            fixRightEdge: true,
            fixLeftEdge: true,
            timeVisible: true,
            secondsVisible: false,
            ticksVisible: true,
          },
          autoSize: true,
        });

      lineSeriesRef.current =
        chartInstance.current && chartInstance.current.addCandlestickSeries();
      if (aggregateInitialData[0].time) {
        lineSeriesRef.current.setData(aggregateInitialData);
      }
    };

    lineSeriesRef.current &&
      chartInstance.current &&
      chartInstance.current?.removeSeries(lineSeriesRef.current);
    chartInstance.current && chartInstance.current.remove();

    setupChart();

    const handleResize = () => {
      if (chartInstance.current) {
        const width = chartContainerRef.current?.clientWidth || 0;
        const height = chartContainerRef.current?.clientHeight || 0;
        chartInstance.current.resize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartData]);

  useEffect(() => {
    if (lineSeriesRef.current && Object.keys(marketList).length > 0) {
      const { time, value } = marketList['BTCUSDT'];
      const time_s = Math.floor(time / 1000);
      const {
        time: l_time,
        high,
        low,
        open,
      } = lineSeriesRef.current.dataByIndex(
        lineSeriesRef.current.data().length,
        MismatchDirection.NearestLeft,
      );
      lineSeriesRef.current.update({
        time: time_s > l_time + 5 ? time_s : l_time,
        open: time_s > l_time + 5 ? value : open,
        high: time_s > l_time + 5 ? value : Math.max(high, value),
        low: time_s > l_time + 5 ? value : Math.min(low, value),
        close: value,
      });
    }
  }, [marketList]);

  return chartData.length ? (
    <section
      ref={chartContainerRef}
      className='w-full'
      style={{ height: '400px' }}
    />
  ) : (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconLoader2 size={64} style={{ color: 'white', fill: 'transparent' }} />
    </div>
  );
}
