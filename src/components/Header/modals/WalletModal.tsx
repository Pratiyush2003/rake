import { closeIcon, QrCode } from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  currencyOptions,
  paymentAccept,
  rupeeOptions,
  walletBuyCrypto,
  walletDeposit,
  walletWithdraw,
} from '../constants';
import { InputComponent } from '@/components/ui/input';
import { Option, RupeeOption } from '../types';
import Dropdown from '@/components/CustomComponents/Dropdown/Dropdown';
import { WalletModalProps } from '../types';

const WalletModal: FC<WalletModalProps> = memo(({ openTab = 'Deposit_' }) => {
  const [activeTab, setActiveTab] = useState<
    'Deposit_' | 'Withdraw_' | 'Buy_crypto_'
  >(openTab);

  const [depositInputValues, setDepositInputValues] = useState<
    Record<string, string>
  >({});
  const [withdrawInputValues, setWithdrawInputValues] = useState<
    Record<string, string>
  >({});
  const [buyCryptoInputValues, setBuyCryptoInputValues] = useState<
    Record<string, string>
  >({});

  const [activeCurrency, setActiveCurrency] = useState<Option>(
    currencyOptions[0],
  );
  const [activeCurrencyForWithdraw, setActiveCurrencyForWithdraw] =
    useState<Option>(currencyOptions[0]);
  const [activeCurrencyForBuy, setActiveCurrencyForBuy] = useState<RupeeOption>(
    rupeeOptions[0],
  );
  const [activeCurrencyToReceive, setActiveCurrencyToReceive] =
    useState<Option>(currencyOptions[0]);

  const { t } = useTranslation('walletModal');
  const { closeModal } = useOpenModal();

  const handleTabChange = (tab: 'Deposit_' | 'Withdraw_' | 'Buy_crypto_') => {
    setActiveTab(tab);
  };

  const handleInputChange = (
    key: string,
    value: string,
    tab: 'Deposit_' | 'Withdraw_' | 'Buy_crypto_',
  ) => {
    if (tab === 'Deposit_') {
      setDepositInputValues((prev) => ({ ...prev, [key]: value }));
    } else if (tab === 'Withdraw_') {
      setWithdrawInputValues((prev) => ({ ...prev, [key]: value }));
    } else if (tab === 'Buy_crypto_') {
      setBuyCryptoInputValues((prev) => ({ ...prev, [key]: value }));
    }
  };
  console.log(depositInputValues);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(t('Copied_to_clipboard'));
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const tabs = ['Deposit_', 'Withdraw_', 'Buy_crypto_'] as const;

  return (
    <div
      className='wallet-main scroll-none box-border h-[99vh] max-h-[713px] select-none
        overflow-scroll rounded-[10px] bg-rake_grey-500 pb-0 ss:w-[516px]
        ss:min-w-[450px]'
    >
      <div className='relative box-border px-[15px] py-[26px] ss:p-[40px]'>
        <h3
          className='mb-[90px] text-center font-sans text-[25px] font-bold uppercase leading-8
            tracking-[-.01em] text-white ss:text-[32px]'
        >
          {t('Wallet_')}
        </h3>
        <Button
          onClick={closeModal}
          className='absolute right-[26px] top-[26px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent'
          aria-label='Close modal'
        >
          <Image url={closeIcon} alt='close' className='h-[13px] w-[13px]' />
        </Button>
        <div className='mb-4 flex w-full items-center gap-0 rounded-[8px] bg-[#010e17] p-1 ss:gap-[8px]'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex w-full cursor-pointer items-center justify-center rounded-[10px] border-0
              py-2 font-sans text-[13px] font-bold leading-[20px] text-white transition-[0.3s]
              focus-visible:outline-none ss:text-[16px]
              ${activeTab === tab ? 'bg-[#0099f4]' : 'bg-transparent'}`}
              onClick={() => handleTabChange(tab)}
              aria-selected={activeTab === tab}
            >
              {t(tab)}
            </button>
          ))}
        </div>

        <div>
          {activeTab === 'Deposit_' && (
            <div id='deposit' role='tabpanel'>
              {walletDeposit.map((field) => (
                <div key={field.key} className='mb-5'>
                  <label
                    htmlFor={field.key}
                    className={`mb-[10px] block font-sans font-normal leading-[140%] text-white
                    ${field.type === 'text' ? 'text-[12px]' : 'text-[14px]'}`}
                  >
                    {t(field.label, { coinSymbol: activeCurrency.label })}
                  </label>
                  {field.type === 'select' ? (
                    <Dropdown
                      bodyClasses='bg-rake_background-500 scroll-none'
                      mainClasses='bg-rake_background-500 h-[44px] p-2.5 rounded-[10px]'
                      options={currencyOptions.map((currency) => (
                        <div
                          className='flex items-center gap-3 group-hover:bg-transparent'
                          key={currency.key}
                        >
                          <Image
                            url={currency.icon}
                            className='mr-[8px] h-[16px] w-[21px]'
                          />
                          <div className='font-sans text-[14px] font-medium text-white group-hover:text-[#0099f4]'>
                            {currency.label}
                          </div>
                        </div>
                      ))}
                      currentValue={
                        <div className='flex items-center p-2.5'>
                          <Image
                            url={activeCurrency.icon}
                            className='mr-[8px] h-[16px] w-[21px]'
                          />
                          <span className='font-sans text-[14px] font-bold leading-[21px] text-white'>
                            {activeCurrency.value}
                          </span>
                        </div>
                      }
                      onChange={(currency) =>
                        setActiveCurrency(currency as Option)
                      }
                      data={currencyOptions}
                    />
                  ) : (
                    <div
                      className='input-wrap box-border flex h-[50px] items-center rounded-[10px]
                        !bg-rake_background-500'
                    >
                      <InputComponent
                        type={field.type}
                        className='overflow-hidden text-ellipsis whitespace-nowrap border-0 !p-0 !px-4 font-sans
                          text-[14px] !font-bold text-[#f5f5f5] !opacity-[1]'
                        disabled={field.disabled}
                        onChange={(e) =>
                          handleInputChange(
                            field.key,
                            e.target.value,
                            'Deposit_',
                          )
                        }
                        value={
                          field?.key === 'network'
                            ? activeCurrency?.label
                            : `some dummy deposit address for ${activeCurrency?.label}`
                        }
                      />
                      {field.label === 'Your_deposit_address_' && (
                        <div
                          className='group mr-4 flex h-[32px] w-[42px] cursor-pointer items-center justify-center
                            rounded-[10px] bg-rake_grey-500 px-[6px]'
                          onClick={() =>
                            copyToClipboard(
                              `some dummy deposit address for ${activeCurrency?.label}`,
                            )
                          } // Replace with actual address
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
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <p
                className='150% my-5 cursor-pointer bg-transparent text-center font-sans text-[14px]
                  font-medium text-[#00a0ff]'
                onClick={closeModal}
              >
                {t('Your_deposits_')}
              </p>
              <div className='mx-auto w-fit bg-gray-200 p-[19px] text-center'>
                <Image url={QrCode} />
              </div>
              <div
                className='mx-auto mt-5 w-full max-w-[20rem] text-center font-sans text-[12px] font-medium
                  text-[#8ca3b8]'
              >
                {t('IMPORTANT_Funds_will_be_added_after')}
              </div>
            </div>
          )}
          {activeTab === 'Withdraw_' && (
            <div id='withdraw' role='tabpanel'>
              {walletWithdraw.map((field) => (
                <div key={field.key} className='mb-5'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor={field.key}
                      className={`mb-[10px] block font-sans font-normal leading-[140%] text-white
                      ${field.type === 'text' ? 'text-[12px]' : 'text-[14px]'}`}
                    >
                      {t(field.label, {
                        coinSymbol: activeCurrencyForWithdraw.name,
                      })}
                    </label>
                    {field.key === 'amount' && (
                      <div
                        className='text-center font-sans text-[14px] font-medium leading-[150%] tracking-[-.56px]
                          text-[#8ca3b8]'
                      >
                        $0.00
                      </div>
                    )}
                  </div>
                  {field.type === 'select' ? (
                    <Dropdown
                      bodyClasses='bg-rake_background-500 scroll-none'
                      mainClasses='bg-rake_background-500 h-[44px] p-2.5 rounded-[10px]'
                      options={currencyOptions.map((currency) => (
                        <div
                          className='flex items-center justify-between gap-3 group-hover:bg-transparent'
                          key={currency.key}
                        >
                          <div className='flex items-center'>
                            <Image
                              url={currency.icon}
                              className='mr-[8px] h-[16px] w-[21px]'
                            />
                            <div className='font-sans text-[14px] font-medium text-white group-hover:text-[#0099f4]'>
                              {currency.name}
                            </div>
                          </div>
                          <p className='font-sans text-[14px] font-medium text-white group-hover:text-[#0099f4]'>
                            {currency.minLimit}
                          </p>
                        </div>
                      ))}
                      currentValue={
                        <div className='flex w-full items-center justify-between p-2.5'>
                          <div className='flex items-center'>
                            <Image
                              url={activeCurrencyForWithdraw.icon}
                              className='mr-[8px] h-[16px] w-[21px]'
                            />
                            <span className='font-sans text-[14px] font-bold leading-[21px] text-white'>
                              {activeCurrencyForWithdraw?.name}
                            </span>
                          </div>
                          <div className='flex font-sans text-[14px] font-bold text-[#8ca3b8] group-hover:text-[#0099f4]'>
                            Balance:{' '}
                            <div
                              className='ss:max-w-auto max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap
                                text-white'
                            >
                              {activeCurrencyForWithdraw.minLimit}
                            </div>
                          </div>
                        </div>
                      }
                      onChange={(currency) =>
                        setActiveCurrencyForWithdraw(currency as Option)
                      }
                      data={currencyOptions}
                    />
                  ) : (
                    <div
                      className='input-wrap box-border flex h-[50px] items-center rounded-[10px]
                        !bg-rake_background-500'
                    >
                      <InputComponent
                        type={field.type}
                        className='overflow-hidden text-ellipsis whitespace-nowrap border-0 !p-0 !px-4 font-sans
                          text-[14px] !font-bold text-[#f5f5f5] !opacity-[1]'
                        disabled={field.disabled}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (!field.regex || field.regex.test(value)) {
                            handleInputChange(field.key, value, 'Withdraw_');
                          }
                        }}
                        value={
                          field.key === 'network'
                            ? activeCurrencyForWithdraw?.label
                            : withdrawInputValues[field.key] || ''
                        }
                      />
                      {field.label === 'Amount' && (
                        <div className='flex gap-[10px] pl-[10px] pr-[15px]'>
                          <Image url={activeCurrencyForWithdraw.icon} />
                          <Button
                            className='h-[33px] cursor-pointer rounded-[10px] bg-[#072537] p-[12px] font-sans
                              text-[14px] font-normal capitalize leading-[12px]'
                            // onClick={() => handleMaxAmountClick(field.key)}
                          >
                            Max
                          </Button>
                        </div>
                      )}
                      {field.key === 'coinAddress' && (
                        <div
                          className='copy_icon mr-[12px] h-[33px] cursor-pointer rounded-[10px] bg-[#072537] p-[12px]
                            font-sans text-[14px] font-normal capitalize leading-[12px]'
                          onClick={() =>
                            copyToClipboard(
                              withdrawInputValues[field.key] || '',
                            )
                          }
                        >
                          <Image
                            url='https://dev.rake.com/static/media/pasteIcon.f7164bef9dec653b3776b64736dd3684.svg'
                            className='mt-[-4px]'
                          />
                        </div>
                      )}
                      {field.label === 'BTC Address' && (
                        <div className='flex gap-[10px] pl-[10px] pr-[15px]'>
                          <Button
                            className='address-copy-icon h-[33px] cursor-pointer rounded-[10px] bg-rake_grey-500
                              p-[12px] font-sans text-[14px] font-normal capitalize leading-[12px]
                              hover:bg-rake_grey-500'
                            onClick={() =>
                              copyToClipboard(
                                withdrawInputValues[field.key] || '',
                              )
                            }
                          >
                            <Image url='https://dev.rake.com/static/media/pasteIcon.f7164bef9dec653b3776b64736dd3684.svg' />
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <p
                className='mb-10 mt-2 text-center font-inter text-[12px] font-normal leading-[16px]
                  text-[#e6e6e6]'
              >
                {t('Your_withdrawal_must_be_more_than')}
                <span>0.008302200083022002 ETH</span>
              </p>
              <div
                className='mb-5 cursor-pointer text-center font-sans text-[14px] font-medium leading-[150%]
                  text-[#00a0ff]'
                onClick={closeModal}
              >
                {t('Your_pending_withdrawals')}
              </div>
              <div className='flex items-center justify-center'>
                <Button
                  className='not-allowed bg-[#efefef] px-[32px] py-[10px] text-[16px] text-[#8a8a8a]
                    hover:bg-[#efefef]'
                >
                  {t('Withdraw_button_')}
                </Button>
              </div>
            </div>
          )}
          {activeTab === 'Buy_crypto_' && (
            <div id='buy_crypto' role='tabpanel'>
              {walletBuyCrypto.map((field, index) => (
                <div key={field.key} className='mb-5'>
                  <label
                    htmlFor={field.key}
                    className={`mb-[10px] block font-sans font-normal leading-[140%] text-white
                    ${field.type === 'text' ? 'text-[12px]' : 'text-[14px]'}`}
                  >
                    {t(field?.label)}
                  </label>
                  <div
                    className='input-wrap box-border flex h-[50px] items-center rounded-[10px]
                      !bg-rake_background-500'
                  >
                    <InputComponent
                      type={field.type}
                      className='overflow-hidden text-ellipsis whitespace-nowrap border-0 !p-0 !px-4 font-sans
                        text-[14px] !font-bold text-[#f5f5f5] !opacity-[1]'
                      disabled={field.disabled}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (field.regex.test(value) || value === '') {
                          handleInputChange(field.key, value, 'Buy_crypto_');
                        }
                      }}
                      placeholder={field.placeholder}
                      value={buyCryptoInputValues[field.key] || ''}
                    />
                    <Dropdown
                      bodyClasses='bg-rake_background-500 scroll-none'
                      mainClasses='bg-rake_background-500 h-[44px] p-2.5 rounded-[10px]'
                      options={field.options.map((data) => (
                        <div key={data.key} className='flex'>
                          <Image
                            url={data.icon}
                            className='mr-[8px] h-[16px] w-[21px]'
                          />
                          <p className='font-sans text-[14px] font-bold leading-[21px] text-[#f5f5f5]'>
                            {data.label}
                          </p>
                        </div>
                      ))}
                      currentValue={
                        index === 0 ? (
                          <div className='flex items-center p-2.5'>
                            <Image
                              url={activeCurrencyForBuy.icon}
                              className='mr-[8px] h-[16px] w-[21px]'
                            />
                            <p className='font-sans text-[14px] font-bold leading-[21px] text-[#f5f5f5]'>
                              {activeCurrencyForBuy.label}
                            </p>
                          </div>
                        ) : (
                          <div className='flex items-center p-2.5'>
                            <Image
                              url={activeCurrencyToReceive.icon}
                              className='mr-[8px] h-[16px] w-[21px]'
                            />
                            <p className='font-sans text-[14px] font-bold leading-[21px] text-[#f5f5f5]'>
                              {activeCurrencyToReceive.label}
                            </p>
                          </div>
                        )
                      }
                      onChange={(currency) => {
                        if (currency) {
                          if (index === 0) {
                            setActiveCurrencyForBuy(currency as RupeeOption);
                          } else {
                            setActiveCurrencyToReceive(currency as Option);
                          }
                        }
                      }}
                      data={index === 0 ? rupeeOptions : currencyOptions}
                    />
                  </div>
                </div>
              ))}
              <p
                className='mt-10 text-center font-sans text-[14px] font-normal leading-[150%]
                  tracking-[-.02em] text-[#8ca3b8]'
              >
                {t('DISCLAIMER_By_using_Bitvium_services_')}
              </p>
              <div className='mx-auto my-[10px] flex w-[90%] justify-evenly gap-[2px]'>
                {paymentAccept.map((res) => (
                  <Image key={res.key} url={res.icon} height='30' width='30' />
                ))}
              </div>
              <div className='mt-[20px] flex justify-center'>
                <Button
                  className='h-[32px] w-[60%] whitespace-nowrap rounded-[10px] bg-[#0099f4] px-[24px]
                    py-[3px] font-inter text-[14px] font-bold leading-[14px] text-white'
                >
                  {t('BUY_ON_BITVIUM_')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default WalletModal;
