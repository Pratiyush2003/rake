import React, { FC, memo } from 'react';
import { sideNavLinks, PaymentOptions } from './constants';
import {
  BonusIcon,
  cryptoSearch,
  GIfSpinning,
  GreenArrowIcon,
  RedArrowIcon,
} from '@/assets/images/sideNavBar';
import { Image } from '../ui/core/image';
import { Button } from '../ui/button';
import { Toggle } from '../ui/toggle';
import { cn } from '@/lib/utils';
import { selectLanguage } from '@/i18n/languages';
import { CustomAccordion } from '../CommonComponents';
import './sidebar.css';
import { useTranslation } from 'react-i18next';
import { SideBarProps } from './types';
import { InputComponent } from '../ui/input';
import WalletModal from '../Header/modals/WalletModal';
import { useOpenModal } from '@/hooks/useOpenModal';
import { RedeemModal } from '@/pages/home/modals';

const SideBarMobileView: FC<SideBarProps> = memo(
  ({
    isSideBarOpen,
    handleLanguageAccordion,
    handleToggle,
    handleLanguageChange,
    handleOpen,
    isToggled,
    open,
    languageAccordion,
    currentLanguage,
    filteredCryptoData,
    cryptoSearchTerm,
    searchCryptoHandler,
    cryptoLoading,
  }) => {
    const { t } = useTranslation('sidebar');
    const { openModal } = useOpenModal();

    return (
      <aside
        className={`scrollbar-thin aside-main-mobile aside-main-big box-border grow flex-col
          overflow-auto border-r-[1px] border-solid border-[#293c53] bg-rake_grey-500
          px-[16px] py-[14px] md:flex`}
      >
        <div
          className='mb-[12px] flex h-[44px] w-full items-center justify-between gap-[10px]
            rounded-[10px] bg-[#04141e] p-[6px]'
        >
          {[t('Casino_'), t('Sports_')].map((title, index) => (
            <div
              key={index}
              onClick={() => handleOpen(index + 1, true)}
              className={`flex h-[32px] w-1/2 cursor-pointer items-center justify-center overflow-hidden
              text-ellipsis whitespace-nowrap rounded-[10px] border-0 px-[14px] py-[8px]
              text-center text-[16px] font-medium capitalize text-[#f5f5f5] hover:bg-[#00a0ff]
              focus-visible:outline-none md:justify-start
              ${open === index + 1 ? 'bg-[#00a0ff]' : ''}`}
            >
              {title}
            </div>
          ))}
        </div>
        <div>
          <Button
            onClick={() => alert('Bonus Button clicked!')}
            className={`my-[.6rem] flex h-[50px] w-full cursor-pointer items-center justify-start
              gap-[10px] rounded-[10px] !border-l border-b-0 border-r-0 border-t-0
              border-[#00a0ff] bg-gradient-to-r from-[#1e5c96] to-[#00a0ff] p-[10px]
              text-[14px] font-medium capitalize text-[#f5f5f5] hover:bg-transparent`}
          >
            <div className='w-[36px]'>
              <Image
                url={BonusIcon}
                alt='bonus'
                className={'h-[36px] w-[36px]'}
              />
            </div>
            <>{t('Bonus_')}</>
          </Button>
          <Button
            onClick={() => alert('Lucky Spin Button clicked!')}
            className={`mb-[1.2rem] mt-[.6rem] flex h-[50px] w-full cursor-pointer items-center
              justify-start gap-[10px] rounded-[10px] !border-l border-b-0 border-r-0
              border-t-0 border-[#00de739c] bg-transparent bg-gradient-to-r from-[#00de739c]
              to-[#23d8b7] p-[10px] text-[14px] font-medium capitalize text-[#f5f5f5]
              hover:!bg-transparent`}
          >
            <div className='w-[36px]'>
              <Image
                url={GIfSpinning}
                alt='lucky spin'
                className={'h-[33px] w-[27px]'}
              />
            </div>
            <>{t('Spin_')}</>
          </Button>
        </div>

        {sideNavLinks.map((res, index) => (
          <React.Fragment key={index}>
            <CustomAccordion
              open={open === index + 1}
              title={t(`${res?.title}`)}
              link={res?.link}
              icon={res.icon}
              onToggle={() => handleOpen(index + 1, true)}
              showToggleIcon={res?.isAccordion}
              isSideBarOpen={isSideBarOpen}
              className='w-full flex-row justify-between'
              openModal={
                res?.key === 'redeem' ? () => openModal(RedeemModal) : undefined
              }
            >
              {res.isAccordion &&
                (res?.key === 'cryptoFeature' ? (
                  cryptoLoading ? (
                    <div className='mt-[16px] rounded-[10px] bg-rake_background-500 py-[10px] text-center'>
                      loading
                    </div>
                  ) : (
                    <React.Fragment>
                      <div
                        className='my-[8px] flex h-[37px] items-center rounded-[6px] bg-rake_background-500
                          pl-[15px]'
                      >
                        <Image
                          url={cryptoSearch}
                          alt='search-icon '
                          className='mr-[10px]'
                        />
                        <InputComponent
                          name='search'
                          value={cryptoSearchTerm}
                          onChange={searchCryptoHandler}
                          className='box-border h-[37px] border border-[#8ca3b8] p-[3px] text-[#676b73]
                            placeholder:text-[#676b73] focus:outline-none'
                          placeholder='Search...'
                        />
                      </div>
                      {filteredCryptoData?.length > 0 ? (
                        <>
                          {filteredCryptoData.map((crypto) => (
                            <div
                              key={crypto?.id}
                              className='my-[3px] flex cursor-pointer justify-between rounded-[10px] p-[8px]
                                hover:bg-[#455b70]'
                            >
                              <div className='flex items-center'>
                                <Image
                                  url={crypto?.image}
                                  alt='icon'
                                  className={`h-[17px] w-[17px] ${open ? 'mr-[8px]' : 'mr-0'}`}
                                />
                                <span
                                  className='mx-[12px] max-w-[130px] overflow-hidden text-ellipsis whitespace-nowrap
                                    text-[14px] text-[#ffffff]'
                                >
                                  {crypto?.name}
                                </span>
                              </div>
                              <div className='flex items-center'>
                                <span
                                  className='max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-[14px]
                                    text-[#61e84f]'
                                >
                                  {crypto?.current_price}
                                </span>
                                <Image
                                  url={
                                    crypto?.price_change_percentage_1h_in_currency >
                                      0
                                      ? GreenArrowIcon
                                      : RedArrowIcon
                                  }
                                  alt='price-change-icon'
                                  className={'ml-[12px] h-[12px] w-[12px]'}
                                />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <p className='mt-[16px] rounded-[10px] bg-rake_background-500 py-[10px] text-center'>
                          no Data
                        </p>
                      )}
                    </React.Fragment>
                  )
                ) : (
                  <div>
                    {res.accordionElement.map((element, i) => (
                      <div
                        key={i}
                        className='border-b-[1px] border-solid border-[#293c53]'
                      >
                        {element.map((child, j) => (
                          <div
                            key={j}
                            className={`my-[3px] flex cursor-pointer items-center space-x-2 rounded-[10px]
                              bg-transparent p-[8px] hover:bg-[#455b70]`}
                            onClick={() => {
                              if (child.key === 'casino-live-casino') {
                                window.location.href =
                                  'casino?casino-tabs=live';
                              }
                            }}
                          >
                            <Image
                              url={child?.icon}
                              alt='icon'
                              className={'mr-[8px] mt-[-2px] h-[16px] w-[16px]'}
                            />
                            <span className='!ml-0 !mr-0 font-medium capitalize text-[#8ca3b8]'>
                              {t(`${child?.title}`)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
            </CustomAccordion>
          </React.Fragment>
        ))}
        <CustomAccordion
          open={languageAccordion}
          title={currentLanguage?.label || 'Select Language'}
          icon={currentLanguage?.icon}
          onToggle={() => handleLanguageAccordion()}
          showToggleIcon={true}
          isSideBarOpen={isSideBarOpen}
          isLanguageAccordion={true}
          className='w-full flex-row justify-between'
        >
          {selectLanguage.map((element) => (
            <div
              key={element.key}
              className='my-[2px] flex cursor-pointer items-center space-x-2 rounded-[10px]
                bg-transparent p-[8px] last:my-0 hover:bg-[#455b70]'
              onClick={() => handleLanguageChange(element)}
            >
              <Image
                url={element.icon}
                alt='icon'
                className='mr-[8px] mt-[-2px] h-[17px] w-[17px]'
              />
              <span className='font-medium capitalize text-[#fff]'>
                {element.label}
              </span>
            </div>
          ))}
          <div className='h-[1px] w-full bg-[#293c53]'></div>
        </CustomAccordion>

        <div
          className={`space-y-6 ${isSideBarOpen ? 'mt-0' : 'mt-0 text-center'}`}
        >
          <Button
            onClick={() => {
              openModal(WalletModal);
            }}
            className={`mt-[24px] h-[28px] w-full cursor-pointer rounded-[10px] border-0 bg-blue-500
              py-[10px] text-[14px] text-white`}
          >
            Buy Crypto
          </Button>
          <div className='!mt-[9px] flex cursor-pointer justify-center space-x-4'>
            {PaymentOptions.map((res, index) => (
              <div key={index} className='flex items-center'>
                <Image url={res.icon} alt={`${index}`} className='h-6 w-6' />
              </div>
            ))}
          </div>
          <div
            className={'!mt-[9px] flex items-center justify-center gap-[5px]'}
          >
            <p className='text-[14px] font-[400]'>Display in</p>
            <span
              className={
                'cursor-pointer font-bold text-blue-500 hover:underline'
              }
            >
              USD
            </span>
            <Toggle
              variant='outline'
              size='default'
              pressed={isToggled}
              onPressedChange={handleToggle}
              className={cn(
                isToggled ? '!bg-[#3f4b57]' : '!bg-[#0099f4]',
                `relative block h-[17px] w-[32px] cursor-pointer rounded-full border-0
                focus-visible:!shadow-none focus-visible:outline-none`,
              )}
            >
              <div
                className={cn(
                  `absolute left-[2px] right-[2px] top-[3px] !h-[11px] w-[10px] rounded-full
                  bg-white transition-transform duration-300 ease-in-out`,
                  isToggled ? 'translate-x-[17px]' : 'translate-x-[2px]',
                )}
              ></div>
            </Toggle>
            <p className={'mt-[5px] text-[14px] font-[400]'}>Crypto</p>
          </div>
        </div>
      </aside>
    );
  },
);

export default SideBarMobileView;
