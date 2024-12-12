import { FC, memo, useState } from 'react';
import { InputComponent } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import {
  bitCoinUrl,
  cryptoData,
  hexToRgb,
  getRandomHexColor,
} from './constants';
import { Image } from '@/components/ui/core/image';
import { RecentTradeTable } from './RecentTradeTable';
import {
  CryptoFeatureIcon,
  NoDataFoundSearchIcon,
  SearchIcon,
} from '@/assets/images/trade';
import { CryptoDataType } from './types';
import './trade.css';

const Trade: FC = memo(() => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] =
    useState<CryptoDataType[]>(cryptoData);

  const searchHandler = (value: string) => {
    const filteredData = cryptoData.filter((data) =>
      data?.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );
    setFilteredData(filteredData);
  };

  return (
    <div className='p-10'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-[9px]'>
          <div className=''>
            <Image url={CryptoFeatureIcon} />
          </div>
          <Link to='/trading' className='no-underline'>
            <div className='flex items-center gap-3'>
              <span className='text-[14px] font-extrabold uppercase text-white'>
                Crypto Futures
              </span>
              <div className='font-medium text-[#b1b6c6]'>
                Total 24h Volume: <span className='!text-white'>$1.27B</span>
              </div>
            </div>
          </Link>
          <Link
            to='/trading'
            className='text-[#ffb018] no-underline hover:!underline'
          >
            Trade
          </Link>
        </div>
        <div
          className='ml-10 flex items-center rounded border-[1px] border-solid border-transparent
            bg-[#010e17] px-4 focus-within:border-[#ffffc1]
            focus-within:shadow-yellow-shadow'
        >
          <Image url={SearchIcon} />
          <InputComponent
            placeholder='Search coins'
            className=''
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              searchHandler(e?.target?.value);
            }}
          />
        </div>
      </div>
      <div
        className={`${filteredData?.length > 0 && 'trade-card-main'} mt-10 grid items-stretch
          gap-x-2 gap-y-5`}
      >
        {filteredData?.length > 0 ? (
          filteredData.map((res) => (
            // <div className='pt-[10px]'>
            <Link
              style={{
                background: `linear-gradient(0deg, rgba(${hexToRgb(res.ui_color ? res.ui_color : getRandomHexColor())}, 0.15) 0%, rgba(236, 239, 240, 0.12) 100%)`,
              }}
              key={res?.icon_id}
              className={`decoration-none mt-[10px] block rounded-xl p-[16px] text-white no-underline
                transition-transform hover:translate-y-[-8px]`}
              to={`/trading/${res?.name}`}
            >
              <div className='flex items-center justify-start gap-3 pb-[16px]'>
                <Image className='h-8 w-8' url={bitCoinUrl} />
                <div className='flex flex-col'>
                  <span className='text-[14px] font-extrabold leading-[1.2]'>
                    {res?.name}
                  </span>
                  <span className='font-medium leading-[1.2] text-[#ff4949]'>
                    -2.230%
                  </span>
                </div>
              </div>
              <div className='pb-[16px] text-[16px] font-bold'>
                {res?.max_multiplier}
              </div>
              <div className='flex items-center gap-x-[4px] text-[14px] leading-[1.2] text-[#b1b6c6]'>
                24H vol:
                <span className='text-[14px] font-medium text-[#ffb018]'>
                  ${res?.max_multiplier}k
                </span>
              </div>
              <div className='flex items-center gap-x-[4px] text-[14px] leading-[1.2] text-[#b1b6c6]'>
                Leverage:
                <span className='text-[14px] font-medium text-[#ffb018]'>
                  {res?.max_multiplier}
                </span>
              </div>
            </Link>
            // </div>
          ))
        ) : (
          <div className='flex w-full flex-col items-center justify-center py-[32px]'>
            <Image className='w-[26px]' url={NoDataFoundSearchIcon} />
            <div className='mt-2 text-[14px] font-extrabold uppercase text-[#676d7c]'>
              No matches found
            </div>
          </div>
        )}
      </div>
      <RecentTradeTable />
    </div>
  );
});

export default Trade;
