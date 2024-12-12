import DiceGameDashboard from '@/components/Dicepage/DiceGameDashboard';
import DiceSidebar from '@/components/Dicepage/DiceSidebar';
import { dicetableData, toggleTab } from './constant';
import { useState } from 'react';
import DataTable from '@/components/Table';
import { ethCoin } from '../Dashboard/constants';
import { Image } from '@/components/ui/core/image';
import { UserModal } from '../home/modals';
import { ActiveNavType, RowPropType } from './type';
import { BetModal } from '../home/modals';
import { useOpenModal } from '@/hooks/useOpenModal';
import { createImageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

const DicePage = () => {
  const [activeNav, setActiveNav] = useState<ActiveNavType>('All Bets');
  const { openModal } = useOpenModal();

  const tableColumnForAllBets = [
    {
      label: 'GAME',
      dataIndex: 'game',
      render: (row: RowPropType) => (
        <div className='flex items-center gap-2'>
          <Image className='h-[24px] w-[24px]' url={createImageUrl(ethCoin)} />

          <div
            className='max-w-[131px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap
              text-left font-sans text-[14px] font-medium tracking-[-.03em] text-[#0099f4]'
            onClick={() => {
              openModal(() => <BetModal data={row} />);
            }}
          >
            {row?.game}
          </div>
        </div>
      ),
    },
    {
      label: 'USER',
      dataIndex: 'user',
      render: (row: RowPropType) => (
        <div
          className='max-w-[131px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap
            text-left font-sans text-[14px] font-medium leading-[150%] tracking-[-.03em]
            text-[#0099f4]'
          onClick={() => {
            openModal(() => <UserModal data={row} />);
          }}
        >
          {row?.user}
        </div>
      ),
    },
    {
      label: 'BET AMOUNT',
      dataIndex: 'betAmount',
      render: (row: RowPropType) => (
        <div className='flex items-center justify-start gap-2'>
          <Image url={createImageUrl(ethCoin)} height='18' width='18' />
          <p
            className='!font-sans !text-[14px] font-medium leading-[150%] tracking-[-.03em]
              !text-[#f5f5f5]'
          >
            {' '}
            $ {row?.betAmount}
          </p>
        </div>
      ),
    },
    {
      label: 'MULTI',
      dataIndex: 'multiplier',
    },
    {
      label: 'PAYOUT',
      dataIndex: 'payout',
      render: (row: RowPropType) => (
        <div className='flex items-start justify-start gap-2'>
          <p
            className='!font-sans !text-[14px] font-medium leading-[150%] tracking-[-.03em]
              !text-[#8ca3b8]'
          >
            {' '}
            $ {row?.payout}x
          </p>

          <Image url={createImageUrl(ethCoin)} height='18' width='18' />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className='mx-auto mt-5 flex h-full w-full flex-col overflow-hidden'>
        <div
          className='relative flex h-full w-full flex-col justify-evenly gap-2 px-2 before:absolute
            before:bottom-0 before:-mb-[30px] before:h-[2px] before:w-full
            before:bg-rake_grey-500 before:content-[""] md:h-screen lg:flex-row'
        >
          <div className='hidden rounded-lg bg-rake_grey-500 lg:block lg:w-[320px]'>
            <DiceSidebar />
          </div>
          <div className='w-full rounded-lg lg:w-2/3'>
            <DiceGameDashboard />
          </div>
        </div>
        <div className='my-12 md:mx-9 md:my-14'>
          <div className='mt-14 md:px-8'>
            <div className='flex w-full justify-center ts:justify-start'>
              <div className='flex h-[52px] w-fit items-center gap-2.5 rounded-xl bg-rake_grey-500 px-[6px]'>
                {toggleTab.map((res) => (
                  <Button
                    key={res?.key}
                    className={`casino-spots-btn flex h-[40px] cursor-pointer items-center gap-[6px] px-[20px]
                py-[14px] hover:!bg-[#0099f4] focus-visible:outline-none
                ${activeNav === res?.title ? 'casino-spots-btn-active bg-[#0099f4]' : '!bg-transparent'}`}
                    onClick={() => {
                      setActiveNav(res?.title as ActiveNavType);
                    }}
                  >
                    <span className='text-[16px] font-medium capitalize'>
                      {`${res?.title}`}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className=''>
              <DataTable
                data={activeNav === 'All Bets' ? dicetableData : []}
                columns={tableColumnForAllBets}
                mainClasses='after:!bg-none mt-5 mb-[90px]'
                tableClasses='home-table-main border-spacing-y-[8px]'
                tableHeaderClasses='home-header-row'
                tableHeadClasses='bg-rake_background-500 whitespace-nowrap w-auto text-[#8ca3b8] font-medium leading-[150%] text-left text-[12px] py-[12px] px-[20px] relative z-[2] table-cell '
                tableRowClasses='bg-transparent last:bg-[linear-gradient(rgba(4,20,30,0),#04141e)] home-table-row'
                tableCellClasses='bg-rake_grey-500 !py-[12px] whitespace-nowrap !px-[20px] !text-[#f5f5f5] !text-[14px] !font-sans tracking-[-.03em] leading-[150%] font-medium'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DicePage;
