import React, { useState } from 'react';
import Auto from './Auto';
import Manual from './Manual';
import LoginModal from '../Header/modals/LoginModal';
import useAuth from '@/hooks/useAuth';
import { useOpenModal } from '@/hooks/useOpenModal';

const DiceSidebar: React.FC = () => {
  const [toggleIndex, setToggleIndex] = useState<number>(0);
  const isAuthenticated = useAuth();
  const { openModal } = useOpenModal();


  const handleCheckLogin = () => {
    if (isAuthenticated) {
      console.log('play game');
    } else {
      openModal(LoginModal);
    }
  };
  return (
    <div className='flex w-full flex-col justify-center space-y-4 p-2 md:p-6'>
      <div
        className='order-last mt-2 flex h-auto w-full flex-row items-center justify-between
          rounded-lg bg-rake_background-700 p-[6px] md:order-first md:mt-0'
      >
        <button
          className={`h-10 w-[45%] cursor-pointer rounded-lg border-none outline-none
            ${toggleIndex === 0 ? 'bg-rake_blue-500' : 'bg-rake_grey-500'}`}
          onClick={() => setToggleIndex(0)}
        >
          Manual
        </button>
        <button
          className={`h-10 w-[45%] cursor-pointer rounded-lg border-none outline-none
            ${toggleIndex === 1 ? 'bg-rake_blue-500' : 'bg-rake_grey-500'}`}
          onClick={() => setToggleIndex(1)}
        >
          Auto
        </button>
      </div>

      {toggleIndex === 0 ? <Manual /> : <Auto />}
      <div className='order-first w-full md:order-last'>
        <button
          onClick={handleCheckLogin}
          className='h-10 w-full cursor-pointer rounded-md border-none bg-rake_blue-500 text-sm'
        >
          START AUTOBET
        </button>
      </div>
    </div>
  );
};

export default DiceSidebar;
