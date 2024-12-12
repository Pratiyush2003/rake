import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Image } from '../ui/core/image';
import DiceSidebar from './DiceSidebar';
import { dicepagesdata } from './constant';

const DiceGameDashboard: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className='mt-4 flex h-full w-full flex-col items-stretch lg:mt-0'>
      <div className='mb-4 flex flex-grow flex-col items-center justify-center'>
        <div className='mt-14 w-full md:mt-0'>
          <div className='flex w-full items-center justify-between px-4'>
            {[0, 25, 50, 75, 100].map((score) => (
              <div key={score} className='flex h-8 flex-col items-center'>
                <label className='select-none text-sm'>{score}</label>
                <span
                  className='h-0 w-0 border-b-8 border-l-8 border-r-8 border-solid border-[#072537]
                    border-l-transparent border-r-transparent'
                ></span>
              </div>
            ))}
          </div>
          <div
            className='mt-[-4px] flex h-10 w-full items-center justify-center rounded-lg
              bg-rake_grey-500'
          >
            <div
              className='flex h-[60%] w-[97%] items-center justify-center rounded-lg
                bg-rake_background-500'
            >
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className='w-[95%]'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col items-end md:flex-row'>
        <div
          className='flex w-full flex-row items-center gap-2 rounded-t-lg bg-rake_grey-500 px-3 pb-4
            pt-6 md:rounded-lg'
        >
          <div className='flex-1'>
            <label className='block select-none text-nowrap text-sm'>
              Multiplier
            </label>
            <div className='flex items-center rounded-lg bg-rake_grey-700 px-1 py-3'>
              <input
                type='text'
                className='w-full border-none bg-rake_grey-700 text-white outline-none'
              />
              <Image
                url={dicepagesdata[3]?.imgUrl}
                alt='dollar'
                className='mr-2 h-4'
              />
            </div>
          </div>
          <div className='flex-1' onClick={() => setToggle(!toggle)}>
            <label className='block select-none text-nowrap text-sm'>
              {toggle ? 'Roll Over' : 'Roll Down'}
            </label>
            <div className='flex items-center rounded-lg bg-rake_grey-700 px-1 py-3'>
              <input
                disabled
                type='text'
                className='w-full border-none bg-rake_grey-700 text-white outline-none'
              />
              <Image
                url={dicepagesdata[4]?.imgUrl}
                alt='dollar'
                className='mr-2 h-4'
              />
            </div>
          </div>
          <div className='flex-1'>
            <label className='block select-none text-nowrap text-sm'>
              Win Chance
            </label>
            <div className='flex items-center rounded-lg bg-rake_grey-700 px-1 py-3'>
              <input
                type='text'
                className='w-full border-none bg-rake_grey-700 text-white outline-none'
              />
              <Image
                url={dicepagesdata[1]?.imgUrl}
                alt='dollar'
                className='mr-2 h-4'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-full rounded-b-xl bg-rake_grey-500 lg:hidden'>
        <DiceSidebar />
      </div>
    </div>
  );
};

export default DiceGameDashboard;
