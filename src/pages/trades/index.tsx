import { Outlet } from 'react-router-dom';
import { BetTrade } from './components/bet';
import Chart from './components/chart';

export default function Trades() {
  return (
    <section className='h-fit w-full bg-rake_background-500'>
      <div className='inline-flex h-full w-full items-start gap-4'>
        <Chart />
        <BetTrade />
      </div>
      <div className='inline-flex h-full w-full items-start gap-4'>
        <Chart />
        <BetTrade />
      </div>
      <div className='inline-flex h-full w-full items-start gap-4'>
        <Chart />
        <BetTrade />
        <Outlet />
      </div>
    </section>
  );
}
