/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from '@/components/ui/core/image';
import { FC, memo, useState } from 'react';
import {
  priceChange,
  rakeCoin,
  rakeSupply,
  tableData,
  ethCoin,
} from './constants';
import { Button } from '@/components/ui/button';
import DataTable from '@/components/Table';
import { Tooltip, Typography } from '@material-tailwind/react';
import './dashboard.css';

const tableColumn = [
  { label: 'AMOUNT', dataIndex: 'amount' },
  { label: 'DATE', dataIndex: 'date' },
  { label: 'DOLLAR VALUE', dataIndex: 'dollarValue' },
  {
    label: 'NETWORK',
    dataIndex: 'network',
    render: (row: any) => (
      <div className='flex items-start justify-center gap-2'>
        <Image url={ethCoin} />
        {row?.network}
      </div>
    ),
  },
  {
    label: 'CHECK BURN',
    dataIndex: 'checkBurn',
    render: (row: any) => (
      <p className='w-fit cursor-pointer'>{row?.checkBurn}</p>
    ),
  },
];

const Dashboard: FC = memo(() => {
  const [switchTo, setSwitchTo] = useState<string>('ETHEREUM');
  return (
    <div className='select-none p-[20px] ss:p-10'>
      <div className='rounded-[8px] bg-transparent p-[12px] ss:bg-rake_grey-500 ss:px-5 ss:py-4'>
        <div className='mb-[38px] flex flex-wrap items-center justify-between gap-y-[30px]'>
          <div className='flex items-center gap-[12px]'>
            <Image url={rakeCoin} height='40' width='40' />
            <div>
              <p
                className='mb-[8px] flex-nowrap font-sans text-[24px] font-bold uppercase leading-[24px]
                  text-[#f5f5f5]'
              >
                RaKE COIN
              </p>
              <p className='font-sans text-[16px] font-medium text-[#f5f5f5]'>
                {switchTo === 'ETHEREUM' ? 'SOLANA' : 'ETHEREUM'} NETWORK
              </p>
            </div>
          </div>
          <Button
            className='h-fit cursor-pointer rounded-[10px] bg-[#f7f9fd] px-[20px] py-[6px] font-inter
              text-[14px] font-bold uppercase leading-[16px] text-[#0099f4] hover:bg-[#0099f4]
              hover:text-[#f7f9fd] hover:shadow-dark-sm'
            onClick={() =>
              setSwitchTo(switchTo === 'SOLANA' ? 'ETHEREUM' : 'SOLANA')
            }
          >
            SWITCH TO {switchTo}
          </Button>
        </div>
        <div className='flex flex-wrap gap-0 gap-y-[2px] ss:gap-x-3'>
          {priceChange.map((res) => (
            <div key={res?.key} className='mb-[17px] w-[48%] ss:mb-0 ss:w-fit'>
              <div
                className='font-sans text-[16px] font-medium leading-[16px] tracking-[-.02em]
                  text-[#5c6975]'
              >
                {res?.title}
              </div>
              <div
                className='mt-[8px] font-sans text-[17px] font-medium leading-[20px] tracking-[-.02em]
                  text-[#f5f5f5] ss:text-[20px]'
              >
                {res?.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[20px] flex flex-wrap justify-between gap-5'>
        {rakeSupply.map((res) => (
          <div
            key={res?.key}
            className='w-full rounded-[8px] bg-transparent p-[12px] ss:bg-[#002636] ss:p-5 xl:w-[48%]'
          >
            <div className='flex items-center gap-3'>
              <div className='font-sans text-[24px] font-bold leading-[24px] text-[#f5f5f5]'>
                {res?.title}
              </div>
              <Image url={res?.mainIcon} width='15' height='23' />
            </div>
            <div className='mt-[8px] flex flex-wrap items-center gap-[10px] lg:flex-nowrap'>
              {res?.tags.map((tag) => (
                <Button
                  key={tag}
                  className='h-[31px] cursor-pointer rounded-[10px] bg-[#072537] px-[12px] py-[4px] font-sans
                    font-[14px] leading-[21px] tracking-[-.42px] hover:bg-[#04141e]
                    hover:shadow-dark-sm ss:bg-[#04141e]'
                >
                  {tag}
                </Button>
              ))}
            </div>
            <div className='mt-[24px] border-b-[1px] border-solid border-b-[#293c53] pb-[12px]'>
              <p
                className='mb-[8px] font-sans text-[16px] font-normal leading-[24px] tracking-[-.48px]
                  text-[#e6e6e6]'
              >
                {res?.firstDiv?.title}
              </p>
              <div className='flex items-center gap-[4px]'>
                <p className='text-[14px] font-normal text-[#f5f5f5] ts:text-[18px]'>
                  {res?.firstDiv?.value}
                </p>
                <Tooltip
                  content={
                    <div className='w-[250px]'>
                      <Typography className='text-[13px] font-medium leading-[19px]'>
                        {res?.firstDiv?.tooltipContent}
                      </Typography>
                    </div>
                  }
                  className='dashboard_tooltip mt-[-10px]'
                >
                  <Image url={res?.icon} width='16' height='15' />
                </Tooltip>
              </div>
            </div>
            <div
              className='mt-[12px] flex items-center justify-between border-b-[1px] border-solid
                border-b-[#293c53] pb-[12px]'
            >
              <p
                className='font-sans text-[16px] font-normal leading-[24px] tracking-[-.48px]
                  text-[#e6e6e6]'
              >
                {res?.secondDiv?.title}
              </p>
              <div className='flex items-center gap-[4px]'>
                <p>{res?.secondDiv?.value}</p>
                <Image
                  url={res?.icon}
                  width='16'
                  height='15'
                  className='mt-[-5px]'
                />
              </div>
            </div>
            <div className='mt-[12px] border-b-[1px] border-solid border-b-[#293c53] pb-[12px]'>
              <p
                className='mb-[8px] font-sans text-[16px] font-normal leading-[24px] tracking-[-.48px]
                  text-[#e6e6e6]'
              >
                {res?.thirdDiv?.title}
              </p>
              <div className='flex items-center gap-[4px]'>
                <p>{res?.thirdDiv?.value}</p>
                <Tooltip
                  content={
                    <div className='w-[250px]'>
                      <Typography className='text-[13px] font-medium leading-[19px]'>
                        {res?.thirdDiv?.tooltipContent}
                      </Typography>
                    </div>
                  }
                  className='dashboard_tooltip mt-[-10px]'
                >
                  <Image url={res?.icon} width='16' height='15' />
                </Tooltip>
              </div>
            </div>
            <div className='mt-[12px] border-b-[1px] border-solid border-b-[#293c53] pb-[12px]'>
              <p
                className='mb-[8px] font-sans text-[16px] font-normal leading-[24px] tracking-[-.48px]
                  text-[#e6e6e6]'
              >
                {res?.fourthDiv?.title}
              </p>
              <div className='flex items-center gap-[4px]'>
                <p>{res?.fourthDiv?.value}</p>
                <Tooltip
                  content={
                    <div className='w-[250px]'>
                      <Typography className='text-[13px] font-medium leading-[19px]'>
                        {res?.fourthDiv?.tooltipContent}
                      </Typography>
                    </div>
                  }
                  className='dashboard_tooltip mt-[-10px]'
                >
                  <Image url={res?.icon} width='16' height='15' />
                </Tooltip>
              </div>
            </div>
            <div className='mt-[12px]'>
              <p
                className='mb-[8px] font-sans text-[16px] font-normal leading-[24px] tracking-[-.48px]
                  text-[#e6e6e6]'
              >
                {res?.fifthDiv?.title}
              </p>
              <div className='flex items-center gap-[4px]'>
                <p>{res?.fifthDiv?.value}</p>
                <Tooltip
                  content={
                    <div className='w-[250px]'>
                      <Typography className='text-[13px] font-medium leading-[19px]'>
                        {res?.fifthDiv?.tooltipContent}
                      </Typography>
                    </div>
                  }
                  // open={true}
                  className='dashboard_tooltip mt-[-10px]'
                >
                  <Image url={res?.icon} width='16' height='15' />
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className='mb-[20px] mt-[30px] font-sans text-[24px] font-bold uppercase leading-[100%]
          text-[#f5f5f5]'
      >
        Rake Burned
      </div>
      <DataTable
        columns={tableColumn}
        data={tableData}
        mainClasses='relative max-h-[850px] w-full overflow-y-hidden hidden ss:block after:!bg-transparent  after:pointer-events-none
        after:!static after:bottom-0 after:left-0 after:h-auto after:w-full'
        tableClasses='!border-spacing-y-[9px]'
        tableHeaderClasses='!bg-transparent'
        tableHeadClasses='text-[12px] whitespace-nowrap  font-medium leading-[150%] text-left text-[#8ca3b8] uppercase py-[12px] px-[20px] [&:nth-child(3)]:text-center [&:nth-child(4)]:text-center [&:nth-child(5)]:text-right'
        tableRowClasses='bg-rake_grey-500 last:bg-[linear-gradient(rgba(4,20,30,0),#04141e)] animate-table-scroll-down rounded-[8px] hover:bg-rake_grey-500 transition-all
              duration-500'
        tableCellClasses='text-[14px] h-[45px] box-border whitespace-nowrap font-medium leading-[150%] text-left [&:nth-child(3)]:text-center [&:nth-child(4)]:text-center [&:nth-child(5)]:text-right  text-white uppercase py-[9px] px-[20px] last:text-[#0099f4] last:flex last:justify-end'
      />
      <div className='block ss:hidden'>
        {tableData.map((res) => (
          <div
            key={res?.id}
            className='mb-[12px] h-[148px] w-full rounded-[12px] bg-rake_grey-500'
          >
            <div className='mx-auto flex w-[85%] px-[0] pb-[0] pt-[12px]'>
              <div className='w-1/2'>
                <div className='h-[47px]'>
                  <div className='font-sans text-[12px] text-[#8ca3b8]'>
                    Amount
                  </div>
                  <div className='font-sans text-[14px] text-white'>
                    {res?.amount}
                  </div>
                </div>
                <div className='h-[47px]'>
                  <div className='font-sans text-[12px] text-[#8ca3b8]'>
                    Dollar Value
                  </div>
                  <div className='font-sans text-[14px] text-white'>
                    {res?.dollarValue}
                  </div>
                </div>
              </div>

              <div className='w-1/2'>
                <div className='h-[47px]'>
                  <div className='font-sans text-[12px] text-[#8ca3b8]'>
                    Date
                  </div>
                  <div className='font-sans text-[14px] text-white'>
                    {res?.date}
                  </div>
                </div>
                <div className='h-[47px]'>
                  <div className='font-sans text-[12px] text-[#8ca3b8]'>
                    Network
                  </div>
                  <div className='flex items-center font-sans text-[14px] text-white'>
                    {' '}
                    <Image
                      url='https://rake.com/static/media/ethereumIcon.2dd9ad8be91a3ee0f72704bd4abd439a.svg'
                      className='mr-[4px]'
                    />{' '}
                    {res?.network}
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto w-[85%]'>
              <Button
                className='mt-[0] h-[25px] w-full cursor-pointer rounded-[10px] bg-[#0099f4] font-medium
                  hover:bg-[#1ab3ff] hover:shadow-dark-sm'
              >
                {res?.checkBurn}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Dashboard;
