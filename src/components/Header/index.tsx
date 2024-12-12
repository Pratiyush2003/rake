/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../ui/button';
import { Image } from '../ui/core/image';
import { Separator } from '../ui/separator';
import { useOpenModal } from '@/hooks/useOpenModal';
import { BasicModalContent } from '../Modals/basic-modal-content';
import { FC, memo, useCallback, useState } from 'react';
import {
  logoImg,
  rakeLogo,
  rakeSymbol,
  sidebarCloseIcon,
} from '@/assets/images/flags';
import './header.css';
import WalletModal from './modals/WalletModal';
import Dropdown from '../CustomComponents/Dropdown/Dropdown';
import { currencyOptions } from './constants';
import WalletSettingModal from './modals/WalletSettingModal';
import { useTranslation } from 'react-i18next';
import { useSearchBarFocused } from '@/hooks/useSearchBarFocused';
import useCurrencies from '@/hooks/useCurrencies';
import useBalance from '@/hooks/useBalance';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { signinRedirect } from '@/store/authoidc/actions';
import useAuth from '@/hooks/useAuth';

interface CurrencyOption {
  key: string;
  label: string;
  value?: string;
  icon: string;
}

interface HeaderProps {
  toggleSideBar: () => void;
}

const Header: FC<HeaderProps> = memo(({ toggleSideBar }) => {
  const { openModal } = useOpenModal();
  const { isSearchBarFocused } = useSearchBarFocused();
  const [mainActiveCurrency, setMainActiveCurrency] = useState<CurrencyOption>(
    currencyOptions[0],
  );
  const { balance } = useBalance();
  const { currencies } = useCurrencies();
  const isAuthenticated = useAuth();

  const { t } = useTranslation('main');
  const data = Object.values(balance).map((b: any) => (
    <div className='flex items-center justify-between' key={`${b.currencyAddress}:${b.currencyNetwork}`}>
      <div className='text-[14px]'>${b.amount}</div>
      <div className='flex items-center'>
        <Image url={b.icon} className='h-[16px] w-[28px]' />
        <div className='w-[38px] font-sans text-[14px] font-medium text-white'>
          {currencies[`${b.currencyNetwork}:${b.currencyAddress}`].symbol}
        </div>
      </div>
    </div>
  ));
  const dispatch = useDispatch<AppDispatch>();
  const authHandler = useCallback(() => {
    dispatch(signinRedirect());
  }, []);

  return (
    <header
      className={`box-border flex h-[69px] max-w-full items-center justify-between border-b-[1px]
        border-solid border-[#2d3947] bg-rake_grey-500 px-2.5 py-[14px] text-white
        ts:py-[14px] ts:pl-2.5 ts:pr-4 ${isSearchBarFocused ? 'opacity-[0.3]' : ''}`}
    >
      <div className='flex items-center gap-2.5'>
        <div
          className='item-center hidden h-[30px] w-[30px] cursor-pointer justify-center rounded-[4px]
            bg-[#223e51] ss:flex'
        >
          <Image
            url={sidebarCloseIcon}
            className='h[20px] w-[20px] cursor-pointer'
            onClick={toggleSideBar}
          />
        </div>
        <Image
          url={rakeLogo}
          className='hidden h-[20px] cursor-pointer ts:block'
        />
        <Image
          url={logoImg}
          className='block h-[19px] cursor-pointer ss:h-[27px] ts:hidden ts:h-[36px]'
        />
      </div>
      {isAuthenticated &&
        (<div
            className='flex h-[42px] items-center rounded-[10px] bg-rake_background-500 px-[4px]
              py-[2px] ts:px-[8px]'
          >
            <Dropdown
              options={[
                ...data,

                <div
                  onClick={() => {
                    openModal(WalletSettingModal);
                  }}
                  className='border-t-[2px] border-solid border-white px-[15px] py-[5px]'
                >
                  <div
                    className='flex items-center justify-center gap-[6px] rounded-[10px] px-[10px] py-[7px]
                      hover:bg-[#455b70]'
                  >
                    <svg
                      width='22px'
                      height='22px'
                      viewBox='0 0 64.00 64.00'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      stroke='#8CA3B8'
                      strokeWidth='4.928'
                      transform='matrix(1, 0, 0, 1, 0, 0)'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path d='M52 20v-4a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4v-4'></path>
                        <path d='M36 20h18a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H36a12 12 0 0 1-12-12 12 12 0 0 1 12-12z'></path>
                        <circle cx='36' cy='32' r='4'></circle>
                      </g>
                    </svg>
                    {t('Wallet_Modal_Settings_')}
                  </div>
                </div>,
              ]}
              currentValue={
                <div className='flex items-center text-[14px] font-bold leading-[21px]'>
                  NZ$ 0.00{' '}
                  <Image url={mainActiveCurrency?.icon} width='21' height='16' />{' '}
                </div>
              }
              onChange={(e) => {
                e !== null && setMainActiveCurrency(e);
              }}
              data={currencyOptions}
              mainClasses='cursor-pointer'
              bodyClasses='!w-[267px] bg-[#00151d] !rounded-[10px] pt-[5px] top-[33px] !max-h-[419px] left-[-21px] !shadow-custom'
              bodyChildClasses='hover:bg-[#455b70] rounded-[10px] last:!p-[0]  last:hover:bg-transparent'
            />
            <Button
              variant='default'
              size='md'
              onClick={() => {
                openModal(WalletModal);
              }}
              className='shadow-[0 0 10px rgba(0,0,0,.6)] rounded-l-[0] rounded-r-lg bg-[#0099f4]
                px-[12px] py-[4px] hover:bg-[#1ab3ff] ts:rounded-[10px] cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                className='block ts:hidden'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.9861 2.75006H12.1111H3.16667C2.03909 2.75006 1.125 3.61943 1.125 4.69184V5.70897V6.54116V7.28088V14.3083C1.125 15.3807 2.03908 16.2501 3.16667 16.2501H14.8333C15.9609 16.2501 16.875 15.3807 16.875 14.3083V7.65075C16.875 6.57833 15.9609 5.70897 14.8333 5.70897H12.9861V3.58225V2.75006ZM11.2361 5.70897H2.875V4.69184C2.875 4.53864 3.00558 4.41444 3.16667 4.41444H11.2361V5.70897ZM2.875 7.37335V14.3083C2.875 14.4615 3.00558 14.5857 3.16667 14.5857H14.8333C14.9944 14.5857 15.125 14.4615 15.125 14.3083V7.65075C15.125 7.49754 14.9944 7.37335 14.8333 7.37335H2.875ZM12.1111 10.2398C11.6816 10.2398 11.3333 10.571 11.3333 10.9795C11.3333 11.3881 11.6816 11.7192 12.1111 11.7192H12.8889C13.3184 11.7192 13.6667 11.3881 13.6667 10.9795C13.6667 10.571 13.3184 10.2398 12.8889 10.2398H12.1111Z'
                  fill='#fff'
                />
              </svg>
              <span className='hidden ts:block'>Wallet</span>
            </Button>
          </div>
        )}
      <section className='header-section flex h-[54px] items-center'>
        {!isAuthenticated && (
          <div className='flex items-center gap-[5px] ss:gap-2.5'>
            <Button
              variant='outlined'
              className='focus::text-[#0099f4] h-[42px] border-0 px-3 py-4 text-[12px] font-bold
                text-white focus:border-[1px] focus:border-solid focus:border-[#0099f4]
                ts:h-[46px] ts:px-[32px] ts:py-2.5 ts:text-[16px] cursor-pointer'
              onClick={authHandler}
            >
              {t('Login_')}
            </Button>
            <Button
              variant='default'
              className='mr-2.5 h-[42px] w-[85px] rounded-[10px] bg-[#0099f4] px-[12px] py-4 text-[12px]
                font-bold leading-[24px] text-white ts:mr-[38px] ts:h-[46px] ts:w-[145px]
                ts:px-[32px] ts:py-2.5 ts:text-[16px] cursor-pointer'
              onClick={authHandler}
            >
              {t('Register_')}
            </Button>
          </div>)}
        <Separator
          orientation='vertical'
          className='mr-4 hidden h-[34px] bg-[#293c53] ss:block'
        />
        <Button className='ml-1.5 bg-transparent p-0 hover:bg-transparent ts:ml-0 cursor-pointer'>
          <Image url={rakeSymbol} className='h-[24px] ss:h-[32px]' />
        </Button>
        <div className='hidden p-1.5 font-normal ss:block'>
          <p className='text-[14px] font-bold leading-[150%] text-[#f5f5f5]'>
            Rake coin <span className='font-normal uppercase'>RAKE</span>
          </p>
          <p className='text-[14px] font-medium leading-[150%] text-[#f5f5f5]'>
            $0.00016515{' '}
            <span className='up_arrow text-[14px] font-medium text-[#49ba36]'>
              0%
            </span>
          </p>
        </div>
        <Button
          className='text-4 hidden h-[44px] rounded-[10px] bg-[#0099f4] px-[12px] py-2.5 capitalize
            text-white hover:bg-[#0099f4] ss:block cursor-pointer'
          onClick={() => {
            openModal(BasicModalContent);
          }}
        >
          Info
        </Button>
      </section>
    </header>
  );
});

export default Header;
