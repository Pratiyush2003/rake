import { closeIcon } from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo, useState } from 'react';
import { inputErrorCrossIcon, redeemFatBagImage } from '../constants';
import { InputComponent } from '@/components/ui/input';
import { createImageUrl } from '@/utils';
import './redeemModal.css';

export const RedeemModal: FC = memo(() => {
  const { closeModal } = useOpenModal();
  const [fatBegCode, setFatBegCode] = useState<string>('');
  const [fatBegCodeError, setFatBegCodeError] = useState<string>('');
  return (
    <div
      className='redeem-main scroll-none box-border h-[464px] w-[840px] min-w-[300px] select-none
        overflow-scroll rounded-[10px] bg-rake_grey-500 pb-0 '
    >
      <div className='relative px-[15px] py-[26px] ss:p-[40px]'>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ts:right-[26px] ts:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex gap-[12px]'>
          <div className='w-[274px] top-[8px] absolute z-[1] ts:static ts:w-[374px]'>
            <div className='ts:relative z-[1] ml-0 ts:ml-[50px] w-full'>
              <p className='!font-sans mt-[12px] ts:mt-0 text-[20px] ts:text-[40px] font-bold leading-[28px] ts:leading-[150%] tracking-[1px] text-[#f5f5f5]'>
                Redeem a Fat Bag!
              </p>
              <p
                className='my-[7px] ts:my-[24px] !font-sans text-[12px] ts:text-[14px] font-normal leading-[16px] ts:leading-[24px] tracking-[-.02em]
                  text-[#ffffff99]'
              >
                Grab hefty rewards, crank up the fun, and stuff your <br />{' '}
                casino account with free money, champ! This fat <br />
                bag is bursting with cash - don’t miss out!
              </p>
              <p
                className='mb-[7px] !font-sans text-[12px] font-normal leading-[16px] tracking-[-.02em]
                  text-[#ffffff99]'
              >
                Enter Your Fat Bag Code <span className='text-red-600'>*</span>
              </p>
              <div className='flex flex-row gap-[16px] ts:gap-0 ts:flex-col'>
                <div className='redeem-input h-[74px] w-[187px]  ts:w-[80%]'>
                  <InputComponent
                    placeholder='Enter your Bat Bag code'
                    value={fatBegCode}
                    onChange={(e) => {
                      if (fatBegCodeError) setFatBegCodeError('');
                      setFatBegCode(e.target.value);
                    }}
                    className={`!h-[40px] text-[14px] ts:!h-[52px] rounded-[8px] ts:rounded-[16px] text-[#f5f5f5]
                      ${fatBegCodeError ? '!border-[1px] !border-solid !border-red-600 !opacity-[1]' : '!bg-rake_background-500 opacity-[1]'}`}
                  />
                  {fatBegCodeError && (
                    <div className='mt-[2px] flex w-[335px] items-center text-[#ff4545]'>
                      {' '}
                      <Image
                        url={createImageUrl(inputErrorCrossIcon)}
                        className='mr-[9px] h-[14px] w-[14px]'
                      />{' '}
                      <span className='text-[15px] capitalize'>
                        {fatBegCodeError}
                      </span>
                    </div>
                  )}
                </div>
                <Button
                  onClick={() => {
                    console.log('hello');
                    if (!fatBegCode) {
                      setFatBegCodeError('Please enter the code');
                      return;
                    }
                    alert('call api');
                  }}
                  className='ts:mt-4 text-[12px] ts:text-[14px] h-[38px] ts:h-[56px] w-[80px] ts:w-[200px] cursor-pointer rounded-[8px] ts:rounded-[16px] bg-[#0099f4]
                    hover:bg-[#1ab3ff] hover:shadow-dark-sm focus-visible:outline-none'
                >
                  REDEEM
                </Button>
              </div>
            </div>
          </div>
          <div className='absolute right-[40px] top-[-112px] ts:top-0 w-[335px] ts:w-[448px]'>
            <Image
              url={createImageUrl(redeemFatBagImage)}
              className='redeem-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
});
