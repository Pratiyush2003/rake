import React from 'react';
import { Image } from '../ui/core/image';
import { dicepagesdata } from './constant';

const Auto: React.FC = () => {
  return (
    <>
      <div className='space-y-1'>
        <label className='select-none text-nowrap text-xs text-white'>
          Bet Amount
        </label>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 px-1 py-1'>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[0]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
          <div className='flex space-x-1'>
            <button
              className='cursor-pointer select-none rounded-xl border-none bg-rake_grey-500 px-3 py-2
                text-sm'
            >
              1/2
            </button>
            <button
              className='cursor-pointer select-none rounded-xl border-none bg-rake_grey-500 px-3 py-2
                text-sm'
            >
              2x
            </button>
          </div>
        </div>
      </div>

      <div className='space-y-1'>
        <div className='flex w-full items-center justify-between'>
          <div className='select-none text-nowrap text-xs'>Profit on Win</div>
          <div className='select-none text-xs'>$0.00</div>
        </div>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 py-3'>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[0]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
        </div>
      </div>

      <div className='space-y-1'>
        <div className='flex w-full items-center justify-between'>
          <div className='select-none text-nowrap text-xs'>On Win</div>
        </div>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 py-3'>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[2]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
        </div>
      </div>

      <div className='space-y-1'>
        <label className='select-none text-nowrap text-xs text-white'>
          On Win
        </label>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 p-1'>
          <div className='flex space-x-1'>
            <button
              className='cursor-pointer select-none rounded-xl border-none bg-rake_grey-500 px-3 py-2
                text-xs font-bold'
            >
              Reset
            </button>
            <button
              className='w-16 cursor-pointer select-none rounded-xl border-none bg-rake_background-700
                px-2 text-left text-xs'
            >
              Increase by:
            </button>
          </div>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[1]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
        </div>
      </div>

      <div className='space-y-1'>
        <label className='select-none text-nowrap text-xs text-white'>
          On Loss
        </label>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 p-1'>
          <div className='flex space-x-1'>
            <button
              className='cursor-pointer select-none rounded-xl border-none bg-rake_grey-500 px-3 py-2
                text-xs font-bold'
            >
              Reset
            </button>
            <button
              className='w-16 cursor-pointer select-none rounded-xl border-none bg-rake_background-700
                px-2 text-left text-xs'
            >
              Increase by:
            </button>
          </div>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[1]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
        </div>
      </div>

      <div className='space-y-1'>
        <div className='flex w-full items-center justify-between'>
          <div className='select-none text-nowrap text-xs'>Stop on Profit</div>
          <div className='select-none text-xs'>$0.00</div>
        </div>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 py-3'>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[0]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
        </div>
      </div>

      <div className='space-y-1'>
        <div className='flex w-full items-center justify-between'>
          <div className='select-none text-nowrap text-xs'>Stop on Loss</div>
          <div className='select-none text-xs'>$0.00</div>
        </div>
        <div className='flex items-center justify-between rounded-lg bg-rake_grey-700 py-3'>
          <input
            type='text'
            className='mr-2 w-full flex-1 rounded-sm border-none bg-rake_grey-700 text-white
              outline-none'
          />
          <Image
            url={dicepagesdata[0]?.imgUrl}
            alt='dollar'
            className='mr-2 h-4'
          />
        </div>
      </div>
    </>
  );
};

export default Auto;
