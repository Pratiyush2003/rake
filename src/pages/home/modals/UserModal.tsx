import { closeIcon } from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo } from 'react';
import { profileIcon } from '../constants';
import { UserModalPropType } from '../types';
import { createImageUrl } from '@/utils';

export const UserModal: FC<UserModalPropType> = memo(({ data }) => {
  const { closeModal } = useOpenModal();
  return (
    <div
      className='login-main scroll-none box-border h-[400px] select-none
        overflow-scroll rounded-[10px] bg-rake_grey-500 pb-0 w-[680px] min-w-[300px] ss:min-w-[350px]'
    >
      <div className='relative px-[15px] py-[26px] ss:p-[40px]'>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
      <div className='flex gap-[12px] justify-center mb-[28px]'>
        <Image url={createImageUrl(profileIcon)} width='18' height='20'/>
        <span className='text-[#f5f5f5] !font-sans  font-medium'>{data?.user}</span>
      </div>
      <h3 className='text-center text-white'>Statistics</h3>
      </div>
    </div>
  );
});
