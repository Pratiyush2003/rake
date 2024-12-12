import InteractiveSlider from '../InteractiveSlider';
import DataTable from '../Table';
import { casinosection, toggleTab } from './constant';
import { gaming, playicon } from '@/assets/images/casinolobby';
import { useState } from 'react';
import { dicetableData } from './constant';
import { Image } from '../ui/core/image';
import { Button } from '../ui/button';
import { ActiveNavType } from './type';
import { createImageUrl } from '@/utils';
import { gameLogo } from '@/pages/home/constants';
import { BetModal } from '@/pages/home/modals';
import { useOpenModal } from '@/hooks/useOpenModal';
import { RowPropType } from './type';
import { UserModal } from '@/pages/home/modals';
import { coinUrl } from '@/pages/home/constants';
import './casinolobby.css';

const Lobby = () => {
  const [activeNav, setActiveNav] = useState<ActiveNavType>('All Bets');
  const { openModal } = useOpenModal();

  const tableColumnForAllBets = [
    {
      label: 'GAME',
      dataIndex: 'game',
      render: (row: RowPropType) => (
        <div className='flex items-center gap-2'>
          <Image className='h-[24px] w-[24px]' url={createImageUrl(gameLogo)} />

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
          <p
            className='!font-sans !text-[14px] font-medium leading-[150%] tracking-[-.03em]
              !text-[#f5f5f5]'
          >
            {' '}
            $ {row?.betAmount}
          </p>
          <Image url={createImageUrl(coinUrl)} height='18' width='18' />
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
            $ {row?.payout}
          </p>

          <Image url={createImageUrl(coinUrl)} height='18' width='18' />
        </div>
      ),
    },
  ];

  return (
    <div>
      <InteractiveSlider
        topicdata={[casinosection[0]]}
        count={1}
        cardclasses='h-52 transform bg-cover bg-center transition-transform duration-300 hover:-translate-y-4 lg:h-56'
        icon={playicon}
        carouselclasses='mt-4'
        showiconclasses='inset-0 hidden items-center justify-center text-center group-hover:flex'
        cardimageclasses='https://assets.rake.com/dice/img/Rectangle%201dice_game.svg'
        cardhoverclasses='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-25'
        carouselitemclasses='basis-40 pl-1 md:basis-1/4 lg:basis-1/6 xl:basis-48 '
        livesectionclassess='hidden'
        carouselbuttonclasses='hidden'
      />

      <InteractiveSlider
        topicdata={[casinosection[1]]}
        count={15}
        cardclasses='h-52 transform bg-cover bg-center transition-transform duration-300 hover:-translate-y-4 lg:h-56'
        icon={playicon}
        carouselclasses='mt-4'
        showiconclasses='inset-0 hidden items-center justify-center text-center group-hover:flex'
        cardimageclasses='https://assets.rake.com/dice/img/Rectangle%201dice_game.svg'
        cardhoverclasses='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-25'
        carouselitemclasses='basis-40 pl-1 md:basis-1/4 lg:basis-1/6 xl:basis-48 '
        livesectionclassess='hidden'
      />

      <InteractiveSlider
        topicdata={[casinosection[2]]}
        count={15}
        cardclasses='h-16 bg-rake_grey-500 '
        icon={gaming}
        carouselclasses='mt-4'
        carouselitemclasses='basis-40 pl-1 md:basis-1/4 lg:basis-1/6 xl:basis-48 '
        livesectionclassess='hidden'
      />

      <InteractiveSlider
        topicdata={[casinosection[3]]}
        count={15}
        cardclasses='h-52 transform bg-cover bg-center transition-transform duration-300 hover:-translate-y-4 lg:h-56'
        icon={playicon}
        carouselclasses='mt-4'
        showiconclasses='inset-0 hidden items-center justify-center text-center group-hover:flex'
        cardimageclasses='https://assets.rake.com/dice/img/Rectangle%201dice_game.svg'
        cardhoverclasses='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-25'
        carouselitemclasses='basis-40 pl-1 md:basis-1/4 lg:basis-1/6 xl:basis-48 '
        livesectionclassess='hidden'
      />

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
  );
};

export default Lobby;
