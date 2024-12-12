import React, { useEffect, useRef, useState } from 'react';
import { casinobuttondata } from './constant';
import { cross } from '@/assets/images/dicepages';
import { gamerake } from '@/assets/images/casinolobby';
import './searchbutton.css';
import { Link } from 'react-router-dom';
import GamesCard from '../GamesCard';

interface SearchInputButtonProps {
  pages?: string;
  clicked?: boolean;
  setClicked: (value: boolean) => void;
}

const SearchInput_Button: React.FC<SearchInputButtonProps> = ({
  pages,
  clicked,
  setClicked,
}) => {
  const [getinputsearch, setinputsearchdata] = useState<string>('');
  const searchBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setClicked(false);
        setinputsearchdata('');
      } else {
        setClicked(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='relative w-full space-y-4'>
        <div className='flex w-full gap-2 overflow-x-auto rounded-lg bg-rake_grey-500 p-2'>
          {casinobuttondata.map((ele, index) => (
            <Link to={ele.url.startsWith('?') ? `/casino${ele.url}` : `/casino/${ele.url}`} key={index}>
              <button
                aria-pressed={ele?.name === pages}
                className={`rounded-md border-none text-white outline-none transition-all duration-200
                ${ele?.name === pages ? 'bg-rake_blue-500' : 'bg-transparent text-gray-500'}
                hover:bg-rake_blue-500`}
              >
                <>
                  <div
                    className={`flex cursor-pointer items-center justify-center gap-2 px-5 py-2
                    ${ele?.name === pages ? 'filete active' : 'filete'}`}
                  >
                    <img
                      src={ele.imgSrc}
                      alt={ele.buttontxt}
                      className='h-4 w-4 bg-transparent'
                    />
                    <div className='decoration-none select-none text-nowrap text-sm font-bold'>
                      {ele.buttontxt}
                    </div>
                  </div>
                </>
              </button>
            </Link>
          ))}
        </div>

        <div
          ref={searchBoxRef}
          className={`relative z-20 w-full rounded-lg bg-rake_grey-500 px-4 py-3
            ${clicked ? 'border-2 border-solid border-rake_blue-500' : 'border border-solid border-rake_grey-500'}`}
        >
          <div className='flex items-center justify-center gap-4'>
            <div>
              <img
                src='https://rake.com/static/media/searchIcon.1204edb183e4cfd12c081551620c7391.svg'
                alt=''
                className='mt-2'
              />
            </div>
            <div className='w-full'>
              <input
                value={getinputsearch}
                onChange={(e) => setinputsearchdata(e.target.value)}
                type='text'
                className='w-full border-none bg-rake_grey-500 text-xs text-white placeholder-white
                  outline-none'
                placeholder='Search your game'
              />
            </div>
            {getinputsearch && (
              <div onClick={() => setinputsearchdata('')}>
                <img src={cross} alt='cross' className='mt-2 cursor-pointer' />
              </div>
            )}
          </div>
        </div>
        <div>
          <div
            className={`z-20 flex h-[20rem] w-full gap-2 rounded-lg bg-rake_grey-500 p-4
              ${getinputsearch.length > 0 ? 'absolute' : 'hidden'}`}
          >
            <div className='w-full overflow-y-scroll'>
              <div className='flex gap-2'>
                <img src={gamerake} alt='' />
                <div className='text-xl font-bold text-white'>Rake Search</div>
              </div>
              <GamesCard />
            </div>
          </div>
        </div>
      </div>
      {clicked && <div className='fixed inset-0 bg-rake_grey-500 opacity-50' />}
    </>
  );
};

export default SearchInput_Button;
