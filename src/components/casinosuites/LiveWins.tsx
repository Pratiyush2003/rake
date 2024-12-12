import React from 'react';
import InteractiveSlider from '../InteractiveSlider';

const LiveWins: React.FC = () => {
  return (
    <div className='relative mt-6 w-full rounded-lg bg-rake_grey-500 p-3'>
      <div className='flex items-center gap-2'>
        <div>
          <span className='relative flex h-2 w-2'>
            <span
              className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-rake_red-300
                opacity-75'
            ></span>
            <span className='relative inline-flex h-2 w-2 rounded-full bg-rake_red-500'></span>
          </span>
        </div>
        <div className='text-xs text-rake_grey-300'>Live Wins</div>
      </div>
      <div className=' flex w-full cursor-pointer gap-2 overflow-y-auto'>
        <InteractiveSlider 
        count={15} cardclasses=
          "h-24 w-20 transform bg-cover bg-center" showiconclasses="hidden"
          cardimageclasses={"https://cdn.softswiss.net/i/s3/pragmaticexternal/DragonKingdom.png"}
          carouselitemclasses="basis-auto"
          carouselbuttonclasses="hidden"
          carouselclasses="mt-0" 
          
          />

      </div>
    </div>
  );
};

export default LiveWins;
