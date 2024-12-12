import { FC, memo } from 'react';
import { Image } from '@/components/ui/core/image';
import { bettingData } from '../constants';
import { useOpenModal } from '@/hooks/useOpenModal';
import { closeIcon } from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import './playerDetailsModal.css';

export const PlayerDetailsModal: FC = memo(() => {
  const { closeModal } = useOpenModal();
  return (
    <div
      className='scroll-none overflow-scroll relative box-border h-fit w-[99vw] player-modal rounded-[10px] bg-rake_grey-500 p-[32px]
        px-[15px] py-[26px] ss:p-10 ts:w-[600px] max-h-[95vh]'
    >
      <div className='mb-[40px] flex items-center'>
        <Button
          onClick={closeModal}
          className='fixed right-[14px] top-[34px] sm:top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex w-full items-center justify-center'>
          <div className='w-[70px]'>
            <Image
              className='h-[49px] w-[70px]'
              url='https://assets.rake.com/bonus/img/rank_silver%202.svg'
            />
          </div>
          <div className='w-full pl-[24px]'>
            <div className='flex items-center justify-between'>
              <div
                className='text[] mr-[20px] overflow-hidden text-ellipsis whitespace-nowrap pb-[16px]
                  text-[24px] font-extrabold text-white'
              >
                name
              </div>
            </div>
            <div className='player-line h-[5px] w-full rounded-full bg-red-700'></div>
            <div className='flex flex-wrap items-center justify-between pt-2'>
              <div className='flex items-center gap-x-[5px] pt-[5px]'>
                <span className='text-[12px] font-medium text-[#b1b6c6]'>
                  Rank:
                </span>
                <div className='text-[12px] font-bold uppercase text-white'>
                  Bronze 4
                </div>
              </div>
              <div className='flex items-center gap-x-[6px] pt-[5px]'>
                <span className='text-[12px] font-medium text-[#b1b6c6]'>
                  Next:
                </span>
                <Image
                  className='h-[25px] mt-[-6px]'
                  url='https://assets.rake.com/bonus/img/rank_gold%202.svg'
                />
                <div className='text-[12px] font-bold uppercase text-[#ebc066]'>
                  Gold 1
                </div>
                <span className='text-[12px] font-medium text-[#b1b6c6]'>
                  $200,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-[24px] rounded-[4px] bg-[#022e40] p-1'>
        <div className='flex flex-wrap flex-col sm:flex-row items-center justify-start gap-x-[32px] gap-y-[16px] p-4'>
          {bettingData?.map((res) => (
            <div
              key={res?.key}
              className='flex w-full sm:w-[calc(50%-16px)] items-start gap-x-1 text-[14px]'
            >
              <div className='font-medium text-[#b1b6c6]'>{res?.key}:</div>
              <div className='font-bold text-white'>{res?.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col sm:flex-row bg-[#022e40] justify-center sm:justify-between rounded-[10px] p-[20px] !pb-0'>
        <div className='mb-[20px] flex w-full sm:w-1/2 cursor-pointer items-center'>
          <div className='mr-[20px] h-[70px] w-[70px] overflow-hidden rounded-lg'>
            <Image
              className='h-full w-full'
              url='https://assets.rake.com/bonus/img/rank_silver%202.svg'
            />
          </div>
          <div>
            <div className='mb-2 flex items-center text-xs font-extrabold uppercase text-gray-400'>
              FAVOURITE GAME
            </div>
            <div
              className='max-w-[140px] overflow-hidden overflow-ellipsis whitespace-nowrap text-[16px]
                font-extrabold text-white'
            >
              Game Name
            </div>
          </div>
        </div>
        <div className='mb-[20px] flex w-full sm:w-1/2 cursor-pointer items-center'>
          <div className='mr-[20px] h-[70px] w-[70px] overflow-hidden rounded-lg'>
            <Image
              className='h-full w-full'
              url='https://assets.rake.com/bonus/img/rank_silver%202.svg'
            />
          </div>
          <div>
            <div className='mb-2 flex items-center text-xs font-extrabold uppercase text-gray-400'>
              FAVOURITE GAME
            </div>
            <div
              className='max-w-[140px] overflow-hidden overflow-ellipsis whitespace-nowrap text-[16px]
                font-extrabold text-white'
            >
              Game Name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
