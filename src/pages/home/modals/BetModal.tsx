import { closeIcon } from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo } from 'react';
import { betsIcon, coinUrl, profileIcon } from '../constants';
import DataTable from '@/components/Table';
import './betModal.css';
import { createImageUrl } from '@/utils';
import { BetModalPropType, RowPropType } from '../types';

const tableColumn = [
  {
    label: 'BET',
    dataIndex: 'betAmount',
    render: (row: RowPropType) => (
      <div className='flex items-center justify-center gap-2'>
        <Image url={createImageUrl(coinUrl)} height='18' width='18' className='w-[14px] ss:w-[18px] h-[14px] ss:h-[18px]'/>
        <p
          className='!font-sans !text-[12px] ss:!text-[16px] font-medium leading-[150%] tracking-[-.03em]
            !text-[#8ca3b8]'
        >
          {' '}
          $ {row?.betAmount}
        </p>
      </div>
    ),
  },
  {
    label: 'MULTIPLIER',
    dataIndex: 'multiplier',
  },
  {
    label: 'PAYOUT',
    dataIndex: 'payout',
    render: (row: RowPropType) => (
      <div className='flex items-center justify-center gap-2'>
        <Image url={createImageUrl(coinUrl)} height='18' width='18' />
        <p
          className='!font-sans !text-[12px] ss:!text-[16px] font-medium leading-[150%] tracking-[-.03em]
            !text-[#8ca3b8]'
        >
          {' '}
          $ {row?.payout}x
        </p>
      </div>
    ),
  },
];

export const BetModal: FC<BetModalPropType> = memo(({ data }) => {
  const { closeModal } = useOpenModal();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied_to_clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div
      className='bet-main scroll-none box-border h-fit max-h-[713px] w-[491px] select-none
        overflow-scroll rounded-[10px] bg-rake_grey-500 pb-0'
    >
      <div className='relative px-[15px] py-[26px] ss:p-[32px]'>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex items-center justify-center gap-2.5'>
          <Image url={createImageUrl(betsIcon)} />
          <span className='font-sans text-[18px] font-medium text-[#f5f5f5]'>
            Bet
          </span>
        </div>
        <div className='mt-[34px] flex items-center justify-center gap-2.5'>
          <div className='text-[18px] leading-[20px] font-medium font-sans text-[#8ca3b8]'>
            some_dummy_text
          </div>
          <span
            onClick={() => {
              copyToClipboard('some_dummy_text');
            }}
            className='group h-[20px]'
          >
             <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='fill-none stroke-[#8ca3b8] group-hover:fill-[#fff]
                              group-hover:stroke-rake_grey-500'
                          >
                            <path
                              d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1'
                              className='group-hover:stroke-rake_grey-500'
                            ></path>
                            <path
                              d='M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z'
                              className='group-hover:stroke-rake_grey-500'
                            ></path>
                          </svg>
          </span>
        </div>
        <div className='mt-[22px] flex items-center justify-center'>
          <span className='font-sans text-[18px] leading-[20px] font-normal text-[#f5f5f5]'>
            Placed By
          </span>
          <Image className='mx-4' url={createImageUrl(profileIcon)} />
          <span className='font-sans text-[18px] leading-[20px] font-normal text-[#f5f5f5]'>
            {data?.user}
          </span>
        </div>
        <div
          className='mt-[10px] flex items-center justify-center text-[14px] leading-[20px]
            text-[#8ca3b8]'
        >
          on 10/10/2024 at 04:53 pm
        </div>
        <div className='leading mt-[24px] w-full '>
          <DataTable
            data={[data]}
            columns={tableColumn}
            mainClasses=' after:h-0
        after:content-[""] bet-table'
            tableClasses='!bg-[#04141e] rounded-[10px] border-spacing-y-0'
            tableHeaderClasses='!bg-transparent'
            tableHeadClasses='!text-center text-[12px] h-[3rem] text-[#8ca3b8] !py-[12px] px-[12px] ss:px-[20px] '
            tableRowClasses='!bg-transparent'
            tableCellClasses='!text-center whitespace-nowrap h-[43px] py-[12px] px-[12px] ss:px-[20px] text-white !text-[16px] font-semibold'
          />
        </div>
        <div className='mt-[20px] flex items-center justify-center '>
          <Button className='cursor-pointer h-[34px] w-[86px] rounded-[10px] text-[14px] font-bold leading-[16px]'>PLAY</Button>
        </div>
      </div>
    </div>
  );
});
