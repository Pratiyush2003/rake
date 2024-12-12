import { rakeLogo } from '@/assets/images/flags';
import { backButtonIcon, closeIcon } from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo } from 'react';

export const LuckySpinModal: FC = memo(() => {
  const { closeModal } = useOpenModal();
  return (
    <div
      className='register-main mx-h-[550px] scroll-none ss:min-w-auto box-border max-h-[99vh]
        min-w-[300px] overflow-auto rounded-[10px] bg-rake_grey-500 pb-0'
    >
      <div className='relative box-border px-[15px] py-[26px] ss:p-[40px]'>
        <div className='flex w-full justify-center pt-3 ts:pt-0'>
          <Image url={rakeLogo} className='mx-auto h-[20px]' />
        </div>
        <Button
          onClick={closeModal}
          className='absolute left-[30px] top-[30px] hidden h-fit cursor-pointer bg-transparent p-0
            hover:bg-transparent focus-visible:outline-none ss:block'
        >
          <Image url={backButtonIcon} alt='back buttonIcon' />
        </Button>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] block h-fit w-fit cursor-pointer bg-transparent
            !p-0 hover:bg-transparent focus-visible:outline-none ss:right-[26px]
            ss:top-[26px] ss:hidden'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex min-h-[360px] flex-col justify-between ss:min-w-[320px]'></div>
      </div>
    </div>
  );
});
