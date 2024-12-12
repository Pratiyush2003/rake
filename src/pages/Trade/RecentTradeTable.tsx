import { FC, memo } from 'react';
import DataTable from '@/components/Table';
import { Image } from '@/components/ui/core/image';
import { bitCoinUrl, popOverData, recentTradeData } from './constants';
import {
  CryptoFeatureIcon,
  LeaderBoardIcon,
  LinkIcon,
  UpArrowIcon,
} from '@/assets/images/trade';
import { Link } from 'react-router-dom';
import { popOverDataTypes, RecentTradeType } from './types';
import { useOpenModal } from '@/hooks/useOpenModal';
import { PlayerDetailsModal } from './modals';
import { PopOverComponent } from '@/components/CommonComponents';
import { rakeLogo } from '@/assets/images/flags';
import { Button } from '@/components/ui/button';

export const RecentTradeTable: FC = memo(() => {
  const { openModal } = useOpenModal();

  const tableColumn = [
    {
      label: 'PLAYER',
      dataIndex: 'player',
      render: (row: RecentTradeType) => (
        <div
          onClick={() => openModal(PlayerDetailsModal)}
          className='flex cursor-pointer items-center overflow-hidden text-ellipsis whitespace-nowrap'
        >
          <Image url={row.profileURL} alt={row.userName} className='h-6 w-6' />
          <span className='ml-[6px]'>{row.userName}</span>
        </div>
      ),
    },
    {
      label: 'TRADE',
      dataIndex: 'trade',
      render: (row: RecentTradeType) => (
        <div className='flex gap-2'>
          <Image url={row.tradeWithIcon} alt='Trade Icon' className='h-5 w-5' />
        </div>
      ),
    },
    {
      label: 'WAGER',
      dataIndex: 'wager',
      render: (row: RecentTradeType) => (
        <PopOverComponent
          className='max-h-fit w-fit overflow-auto rounded-lg px-4 py-2'
          component={() => (
            <div className='rounded-lg text-white'>
              <div className='flex items-center pb-[5px]'>
                <Image
                  className='inline-block h-auto w-5 rounded-full'
                  url='https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png'
                />
                <Image className='h-[10px] w-[20px]' url={UpArrowIcon} />
                <div className='ml-1 text-xs font-bold uppercase text-[#b1b6c6]'>
                  Oct 24, 14:03:43
                </div>
              </div>
              <div className='flex flex-wrap items-center justify-start'>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <Image
                    className='inline-block h-auto w-[80px]'
                    url={rakeLogo}
                  />
                </div>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <div className='flex items-center overflow-hidden whitespace-nowrap text-sm font-bold'>
                    <div className='inline-flex h-6 min-h-[24px] w-6 min-w-[24px] items-center justify-center'>
                      <Image className='h-[20px] w-[20px]' url={bitCoinUrl} />
                    </div>
                    <span className='ml-2 cursor-pointer text-white'>
                      Hidden
                    </span>
                  </div>
                </div>
                {popOverData.map((res: popOverDataTypes) => (
  <div
    key={res?.key}
    className='w-1/2 overflow-hidden pt-5 text-xs font-bold uppercase text-[#b1b6c6]'
  >
    <div className='text-xs font-bold uppercase text-[#b1b6c6]'>
      {res?.key}
    </div>
    <div
      className={`flex items-center pt-1 text-sm font-medium
      ${res?.key === 'Profit & Loss' || res?.key === 'ROI' 
        ? (typeof res.value === 'number' && res.value < 0 
          ? 'text-red-700' 
          : 'text-green-700') 
        : 'text-white'}`}
    >
      {res?.value}
    </div>
  </div>
))}

              </div>
              <div className='flex w-full gap-[12px] pt-[24px]'>
                <Button
                  className='flex h-[40px] w-full cursor-pointer gap-[5px] bg-[#cbd7ff13] text-[14px]
                    font-medium capitalize text-[#b1b6c6] hover:bg-[#cbd7ff13]
                    focus-visible:outline-none'
                >
                  <Image url={LinkIcon} /> Share
                </Button>
              </div>
            </div>
          )}
          position={{ top: 10, left: 60 }}
          buttonContent={
            <div className='font-semibold text-[#b1b6c6]'>{row?.wager}</div>
          }
          buttonContentClasses='hover:bg-transparent h-fit'
          trigger='click'
          closeIcon={false}
          placement='bottom'
          popoverContentClasses='shadow-trade-shadow bg-[#002636] w-[300px] max-h-fit p-[32px] max-h-auto'
        />
      ),
    },
    {
      label: 'MULTIPLIER',
      dataIndex: 'multiplier',
      render: (row: RecentTradeType) => (
        <PopOverComponent
          className='max-h-fit w-fit overflow-auto rounded-lg px-4 py-2'
          component={() => (
            <div className='rounded-lg text-white'>
              <div className='flex items-center pb-[5px]'>
                <Image
                  className='inline-block h-auto w-5 rounded-full'
                  url='https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png'
                />
                <Image className='h-[10px] w-[20px]' url={UpArrowIcon} />
                <div className='ml-1 text-xs font-bold uppercase text-[#b1b6c6]'>
                  Oct 24, 14:03:43
                </div>
              </div>
              <div className='flex flex-wrap items-center justify-start'>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <Image
                    className='inline-block h-auto w-[80px]'
                    url={rakeLogo}
                  />
                </div>
                src/pages/Trade/RecentTradeTable.tsx:165:79
                <div className='w-1/2 overflow-hidden pt-5'>
                  <div className='flex items-center overflow-hidden whitespace-nowrap text-sm font-bold'>
                    <div className='inline-flex h-6 min-h-[24px] w-6 min-w-[24px] items-center justify-center'>
                      <Image className='h-[20px] w-[20px]' url={bitCoinUrl} />
                    </div>
                    <span className='ml-2 cursor-pointer text-white'>
                      Hidden
                    </span>
                  </div>
                </div>
                {popOverData.map((res: popOverDataTypes) => (
                  <div
                    key={res?.key}
                    className='w-1/2 overflow-hidden pt-5 text-xs font-bold uppercase text-[#b1b6c6]'
                  >
                    <div className='text-xs font-bold uppercase text-[#b1b6c6]'>
                      {res?.key}
                    </div>
                    <div
                      className={`flex items-center pt-1 text-sm font-medium ${
                      res?.key === 'Profit & Loss' || res?.key === 'ROI'
                          ? typeof res.value === 'number' && res.value < 0
                            ? 'text-red-700'
                            : 'text-green-700'
                          : 'text-white'
                      }`}
                    >
                      {res?.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex w-full gap-[12px] pt-[24px]'>
                <Button
                  className='flex h-[40px] w-full cursor-pointer gap-[5px] bg-[#cbd7ff13] text-[14px]
                    font-medium capitalize text-[#b1b6c6] hover:bg-[#cbd7ff13]
                    focus-visible:outline-none'
                >
                  <Image url={LinkIcon} /> Share
                </Button>
              </div>
            </div>
          )}
          position={{ top: 10, left: 60 }}
          buttonContent={
            <div className='font-semibold text-[#b1b6c6]'>
              x {row?.multiplier}
            </div>
          }
          buttonContentClasses='hover:bg-transparent h-fit'
          trigger='click'
          placement='bottom'
          closeIcon={false}
          popoverContentClasses='shadow-trade-shadow bg-[#002636] w-[300px] max-h-fit p-[32px] max-h-auto'
        />
      ),
    },
    {
      label: 'P&L',
      dataIndex: 'p&l',
      render: (row: RecentTradeType) => (
        <PopOverComponent
          className='max-h-fit w-fit overflow-auto rounded-lg px-4 py-2'
          component={() => (
            <div className='rounded-lg text-white'>
              <div className='flex items-center pb-[5px]'>
                <Image
                  className='inline-block h-auto w-5 rounded-full'
                  url='https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png'
                />
                <Image className='h-[10px] w-[20px]' url={UpArrowIcon} />
                <div className='ml-1 text-xs font-bold uppercase text-[#b1b6c6]'>
                  Oct 24, 14:03:43
                </div>
              </div>
              <div className='flex flex-wrap items-center justify-start'>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <Image
                    className='inline-block h-auto w-[80px]'
                    url={rakeLogo}
                  />
                </div>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <div className='flex items-center overflow-hidden whitespace-nowrap text-sm font-bold'>
                    <div className='inline-flex h-6 min-h-[24px] w-6 min-w-[24px] items-center justify-center'>
                      <Image className='h-[20px] w-[20px]' url={bitCoinUrl} />
                    </div>
                    <span className='ml-2 cursor-pointer text-white'>
                      Hidden
                    </span>
                  </div>
                </div>
                {popOverData.map((res: popOverDataTypes) => (
  <div
    key={res?.key}
    className='w-1/2 overflow-hidden pt-5 text-xs font-bold uppercase text-[#b1b6c6]'
  >
    <div className='text-xs font-bold uppercase text-[#b1b6c6]'>
      {res?.key}
    </div>
    <div
      className={`flex items-center pt-1 text-sm font-medium
      ${res?.key === 'Profit & Loss' || res?.key === 'ROI' 
        ? (typeof res.value === 'number' && res.value < 0 
          ? 'text-red-700' 
          : 'text-green-700') 
        : 'text-white'}`}
    >
      {res?.value}
    </div>
  </div>
))}

              </div>
              <div className='flex w-full gap-[12px] pt-[24px]'>
                <Button
                  className='flex h-[40px] w-full cursor-pointer gap-[5px] bg-[#cbd7ff13] text-[14px]
                    font-medium capitalize text-[#b1b6c6] hover:bg-[#cbd7ff13]
                    focus-visible:outline-none'
                >
                  <Image url={LinkIcon} /> Share
                </Button>
              </div>
            </div>
          )}
          position={{ top: 10, left: 60 }}
          buttonContent={
            <div
              className={`font-semibold ${row['p&l'] > 0 ? 'text-[#72f238]' : 'text-[#ff4949]'}`}
            >
              {row['p&l']}
            </div>
          }
          buttonContentClasses='hover:bg-transparent h-fit'
          trigger='click'
          placement='bottom'
          closeIcon={false}
          popoverContentClasses='shadow-trade-shadow bg-[#002636] w-[300px] max-h-fit p-[32px] max-h-auto'
        />
      ),
    },
    {
      label: 'ROI',
      dataIndex: 'roi',
      render: (row: RecentTradeType) => (
        <PopOverComponent
          className='max-h-fit w-fit overflow-auto rounded-lg px-4 py-2'
          component={() => (
            <div className='rounded-lg text-white'>
              <div className='flex items-center pb-[5px]'>
                <Image
                  className='inline-block h-auto w-5 rounded-full'
                  url='https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png'
                />
                <Image className='h-[10px] w-[20px]' url={UpArrowIcon} />
                <div className='ml-1 text-xs font-bold uppercase text-[#b1b6c6]'>
                  Oct 24, 14:03:43
                </div>
              </div>
              <div className='flex flex-wrap items-center justify-start'>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <Image
                    className='inline-block h-auto w-[80px]'
                    url={rakeLogo}
                  />
                </div>
                <div className='w-1/2 overflow-hidden pt-5'>
                  <div className='flex items-center overflow-hidden whitespace-nowrap text-sm font-bold'>
                    <div className='inline-flex h-6 min-h-[24px] w-6 min-w-[24px] items-center justify-center'>
                      <Image className='h-[20px] w-[20px]' url={bitCoinUrl} />
                    </div>
                    <span className='ml-2 cursor-pointer text-white'>
                      Hidden
                    </span>
                  </div>
                </div>
                {popOverData.map((res: popOverDataTypes) => (
  <div
    key={res?.key}
    className='w-1/2 overflow-hidden pt-5 text-xs font-bold uppercase text-[#b1b6c6]'
  >
    <div className='text-xs font-bold uppercase text-[#b1b6c6]'>
      {res?.key}
    </div>
    <div
      className={`flex items-center pt-1 text-sm font-medium
      ${res?.key === 'Profit & Loss' || res?.key === 'ROI' 
        ? (typeof res.value === 'number' && res.value < 0 
          ? 'text-red-700' 
          : 'text-green-700') 
        : 'text-white'}`}
    >
      {res?.value}
    </div>
  </div>
))}

              </div>
              <div className='flex w-full gap-[12px] pt-[24px]'>
                <Button
                  className='flex h-[40px] w-full cursor-pointer gap-[5px] bg-[#cbd7ff13] text-[14px]
                    font-medium capitalize text-[#b1b6c6] hover:bg-[#cbd7ff13]
                    focus-visible:outline-none'
                >
                  <Image url={LinkIcon} /> Share
                </Button>
              </div>
            </div>
          )}
          position={{ top: 10, left: 60 }}
          buttonContent={
            <div
              className={`font-semibold ${row?.roi > 0 ? 'text-[#72f238]' : 'text-[#ff4949]'}`}
            >
              {row?.roi}%
            </div>
          }
          placement='bottom'
          buttonContentClasses='hover:bg-transparent h-fit'
          trigger='click'
          closeIcon={false}
          popoverContentClasses='shadow-trade-shadow bg-[#002636] w-[300px] max-h-fit p-[32px] max-h-auto'
        />
      ),
    },
  ];

  return (
    <div className=''>
      <div className='mb-6 mt-8 flex items-center gap-2'>
        <Image url={CryptoFeatureIcon} />
        <span className='text-[14px] font-extrabold uppercase text-white'>
          Recent Trades
        </span>
        <Link
          to='/trading'
          className='flex items-center gap-2 text-[#ffb018] no-underline hover:bg-transparent
            hover:!underline'
        >
          <Image url={LeaderBoardIcon} className='h-4 w-4' />
          <span>Leaderboard</span>
        </Link>
      </div>
      <DataTable
        data={recentTradeData}
        columns={tableColumn}
        mainClasses='trade-table-main'
        tableClasses=''
        tableHeadClasses='bg-rake_grey-500 text-[#676d7c] font-bold text-[12px]'
        tableRowClasses='bg-rake_grey-500 hover:bg-rake_grey-500'
        tableCellClasses=''
        tableHeaderClasses=''
      />
    </div>
  );
});
