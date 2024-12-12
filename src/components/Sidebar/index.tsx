import React, { FC, memo, useState, useCallback, useEffect } from 'react';
import {
  sideNavLinks,
  PaymentOptions,
  BonusModalConstants,
  fetchCryptoData,
} from './constants';
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
import { CustomAccordion, PopOverComponent } from '../CommonComponents';
import './sidebar.css';
import { Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { LocaleKey } from '@/lib/i18n';
import SideBarMobileView from './SideBarMobileView';
import useLanguage from '@/hooks/useLanguage';
import { AccordionChild, Crypto, Language, SideBarDesktopProps } from './types';
import { useSearchBarFocused } from '@/hooks/useSearchBarFocused';
import { InputComponent } from '../ui/input';
import WalletModal from '../Header/modals/WalletModal';
import { useOpenModal } from '@/hooks/useOpenModal';
import { RedeemModal } from '@/pages/home/modals';
import { Link } from 'react-router-dom';

const Sidebar: FC<SideBarDesktopProps> = memo(
  ({ isSideBarOpen, isTabletScreen }) => {
    const { isSearchBarFocused } = useSearchBarFocused();
    const [isToggled, setIsToggled] = useState(false);
    const { i18n, t } = useTranslation('sidebar');
    const [open, setOpen] = useState<number>(0);
    const { setLanguage } = useLanguage();
    const [languageAccordion, setLanguageAccordion] = useState<boolean>(false);
    const currentWidth = window.innerWidth;
    const [currentLanguage, setCurrentLanguage] = useState<Language>(
      selectLanguage[0],
    );
    const [cryptoLoading, setCryptoLoading] = useState<boolean>(false);
    const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
    const [filteredCryptoData, setFilteredCryptoData] =
      useState<Crypto[]>(cryptoData);
    const [cryptoSearchTerm, setCryptoSearchTerm] = useState<string>('');
    const { openModal } = useOpenModal();

    const handleOpen = useCallback((value: number, close: boolean) => {
      setCryptoSearchTerm('');
      setOpen((prevOpen) => (close && prevOpen === value ? 0 : value));
    }, []);

    const handleLanguageAccordion = () => {
      setLanguageAccordion((prev) => !prev);
    };

    const handleToggle = () => {
      setIsToggled((prev) => !prev);
    };

    const handleLanguageChange = (newLanguage: Language) => {
      if (currentLanguage?.value !== newLanguage.value) {
        setCurrentLanguage(newLanguage);
        setLanguage({ locale: newLanguage.key as LocaleKey });
        i18n
          .changeLanguage(newLanguage.value as keyof typeof LocaleKey)
          .then(() => {
            console.log(`Language changed to ${newLanguage.value}`);
          });
      }
      handleLanguageAccordion();
    };

    const data = async () => {
      setCryptoLoading(true);
      const res = await fetchCryptoData();
      setCryptoLoading(false);
      setCryptoData(res);
      setFilteredCryptoData(res);
    };

    useEffect(() => {
      if (open === 3) {
        data();
      }
    }, [open]);

    const searchCryptoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      setCryptoSearchTerm(searchTerm);
      setFilteredCryptoData(
        cryptoData.filter((crypto) =>
          crypto.name.toLowerCase().startsWith(searchTerm),
        ),
      );
    };

    return (
      <>
        <aside
          className={`scrollbar-thin aside-main box-border grow select-none flex-col justify-between
            overflow-y-auto overflow-x-hidden border-r-[1px] border-solid border-[#293c53]
            bg-rake_grey-500 px-[16px] pb-[10px] pt-[14px] focus-visible:outline-none
            md:flex ${isSearchBarFocused ? 'opacity-[0.3]' : ''}
            ${isSideBarOpen ? 'aside-main-big overflow-auto' : 'aside-main-small w-[60px] min-w-[60px] px-[5px] pb-[4px] pt-[20px]'}
            ${!isSideBarOpen && currentWidth < 576 ? '!hidden' : ''}
            ${isTabletScreen ? 'aside-tablet-close' : currentWidth > 576 && currentWidth < 768 ? 'aside-tablet' : ''} `}
        >
          <div>
            {isSideBarOpen && (
              <div
                className='mb-[21px] box-border flex h-[44px] w-full items-center justify-between
                  gap-[10px] rounded-[10px] bg-[#04141e] p-[6px]'
              >
                {['Casino_', 'Sports_'].map((title, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpen(index + 1, true)}
                    className={`flex h-[32px] w-1/2 cursor-pointer items-center justify-center overflow-hidden
                    text-ellipsis whitespace-nowrap rounded-[10px] border-0 px-[14px] py-[8px]
                    text-[16px] font-medium capitalize text-[#f5f5f5] hover:bg-[#00a0ff]
                    focus-visible:outline-none md:justify-start
                    ${open === index + 1 ? 'bg-[#00a0ff] hover:bg-[#00a0ff]' : ''}`}
                  >
                    {t(title)}
                  </div>
                ))}
              </div>
            )}
            <div className='relative'>
              <Button
                onClick={() => {
                  alert('Bonus Button clicked!');
                }}
                className={`relative my-[.6rem] flex w-full cursor-pointer items-center justify-start
                  gap-[10px] rounded-[10px] !border-l border-b-0 border-r-0 border-t-0
                  border-solid border-[#00a0ff] bg-gradient-to-r from-[#1e5c96] to-[#00a0ff]
                  p-[10px] text-[14px] font-medium capitalize text-[#f5f5f5] hover:bg-transparent
                  ${isSideBarOpen ? 'h-[50px] p-[10px]' : 'mx-[auto] h-[44px] w-[44px] !border-l-0 p-[7px] hover:bg-transparent'}`}
              >
                <div className={`${isSideBarOpen ? 'w-[36px]' : 'w-auto'}`}>
                  <Image
                    url={BonusIcon}
                    alt='bonus'
                    className={` ${isSideBarOpen ? 'h-[36px] w-[36px]' : 'h-[30px] w-[30px]'}`}
                  />
                </div>
                {isSideBarOpen && (
                  <div className='max-w-[90px] overflow-hidden text-ellipsis whitespace-nowrap'>
                    {t('Bonus_')}
                  </div>
                )}
              </Button>
              {isSideBarOpen && (
                <div className='absolute right-0 top-0 z-[2]'>
                  <PopOverComponent
                    className='max-h-80 w-32 overflow-auto rounded-lg !bg-red-500 px-4 py-2'
                    component={() => (
                      <div className='flex h-[90%] w-[90%] flex-col justify-between'>
                        {BonusModalConstants.map((res) => (
                          <div
                            key={res?.key}
                            className='mb-4 flex h-[104px] flex-row items-center justify-around rounded-[10px]
                              bg-rake_grey-500'
                          >
                            <Image
                              url={res.icon}
                              className='h-[64px] w-[64px]'
                            />
                            <div className='w-[231px]'>
                              <h1 className='text-[14px] font-medium leading-[150%] text-[#f5f5f5]'>
                                {res.title}
                              </h1>
                              <h1 className='text-[14px] font-medium leading-[150%] text-[#f5f5f5]'>
                                Accumulated:{' '}
                                <span className='text-[#00a0ff]'>
                                  ${res.accumulated}
                                </span>{' '}
                              </h1>
                            </div>
                            <Button
                              className='h-[32px] w-[133px] cursor-not-allowed rounded-[10px] bg-[#efefef] font-sans
                                font-bold text-[#8a8a8a]'
                            >
                              CLAIM
                            </Button>
                          </div>
                        ))}
                        <Button
                          className='h-[44px] w-full rounded-[10px] bg-[#0099f4] font-sans text-[16px] font-bold
                            text-white'
                        >
                          VIEW DASHBOARD
                        </Button>
                      </div>
                    )}
                    position={{ top: 10, left: 60 }}
                    buttonContent={
                      <p
                        className='opacity-1 box-border flex h-[26px] w-[26px] items-center justify-center
                          rounded-[4px] bg-black p-[7px] font-sans text-[16px] font-medium
                          hover:bg-[#1ab3ff] hover:shadow-dark-sm'
                      >
                        0
                      </p>
                    }
                    buttonContentClasses='hover:bg-transparent'
                    popoverContentClasses='!left-[255px] !top-[72px] p-0 flex justify-center items-center bg-[#455b70] max-h-none max-w-[570px] h-[560px] min-w-[570px]'
                    trigger='click'
                    closeIcon={false}
                  />
                </div>
              )}
            </div>
            <div className='relative'>
              <Button
                onClick={() => {
                  alert('spin Button clicked!');
                }}
                className={`flex h-[50px] w-full cursor-pointer items-center gap-[10px] rounded-[10px]
                  bg-transparent p-[10px] text-[14px] font-medium capitalize text-[#f5f5f5]
                  hover:!bg-transparent ${isSideBarOpen
                    ? `mb-[1.2rem] mt-[.6rem] justify-start !border-l border-b-0 border-r-0 border-t-0
                        border-solid border-[#00de739c] bg-gradient-to-r from-[#00de739c] to-[#23d8b7]`
                    : `mx-[auto] mb-[10px] mt-[15px] h-[44px] w-[44px] !border-0 bg-transparent p-0
                        hover:bg-transparent`
                  }`}
              >
                <div className={`${isSideBarOpen ? 'w-[36px]' : 'w-auto'}`}>
                  <Image
                    url={GIfSpinning}
                    alt='lucky spin'
                    className={`h-[33px] w-[27px] ${isSideBarOpen ? '' : 'h-[37px] w-[30px]'}`}
                  />
                </div>
                {isSideBarOpen && (
                  <div className='max-w-[90px] overflow-hidden text-ellipsis whitespace-nowrap'>
                    {t('Spin_')}
                  </div>
                )}
              </Button>
              {isSideBarOpen && (
                <div className='absolute right-0 top-0 z-[2]'>
                  <PopOverComponent
                    className='max-h-80 w-32 overflow-auto rounded-lg px-4 py-2'
                    component={() => (
                      <p className='text-white'>Popover content</p>
                    )}
                    position={{ top: 10, left: 60 }}
                    buttonContent={
                      <p
                        className='opacity-1 box-border flex h-[26px] w-[26px] items-center justify-center
                          rounded-[4px] bg-black p-[7px] font-sans text-[16px] font-medium text-white
                          hover:bg-[#1ab3ff] hover:shadow-dark-sm'
                      >
                        1
                      </p>
                    }
                    buttonContentClasses='hover:bg-transparent'
                    trigger='click'
                    closeIcon={false}
                  />
                </div>
              )}
            </div>
            {sideNavLinks.map((res, index) => (
              <React.Fragment key={index}>
                {!isSideBarOpen ? (
                  <PopOverComponent
                    className='max-h-80 w-32 overflow-auto rounded-lg bg-[#000] px-4 py-2'
                    content={(setOpenPopover) => (
                      <>
                        {res?.isAccordion ? (
                          <div>
                            <Typography
                              variant='paragraph'
                              className='font-semibold text-white'
                            >
                              {t(`${res?.title}`)}
                            </Typography>
                            {res?.key === 'cryptoFeature' ? (
                              cryptoLoading ? (
                                <div className='mt-[16px] rounded-[10px] bg-rake_background-500 py-[10px] text-center'>
                                  loading...
                                </div>
                              ) : (
                                <React.Fragment>
                                  <div
                                    className='my-[5px] flex h-[32px] items-center rounded-[6px] bg-rake_background-400
                                      pl-[15px]'
                                  >
                                    <Image
                                      url={cryptoSearch}
                                      alt='search-icon'
                                      className='mr-[10px] fill-[#8ca3b8]'
                                    />
                                    <InputComponent
                                      name='search'
                                      value={cryptoSearchTerm}
                                      onChange={searchCryptoHandler}
                                      className='box-border h-[32px] border border-[#8ca3b8] bg-rake_background-400 p-[3px]
                                        text-[#8ca3b8] placeholder:text-[#8ca3b8] focus:outline-none'
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
                                          onClick={() => setOpenPopover(false)}
                                        >
                                          <div className='flex items-center'>
                                            <Image
                                              url={crypto?.image}
                                              alt='icon'
                                              className={`h-[17px] w-[17px] ${open ? 'mr-[8px]' : 'mr-0'}`}
                                            />
                                            <span
                                              className='mx-[12px] max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap
                                                text-[14px] text-[#8ca3b8]'
                                            >
                                              {crypto?.name}
                                            </span>
                                          </div>
                                          <div className='flex items-center'>
                                            <span
                                              className='max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-[14px]
                                                text-[#ffffff]'
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
                                              className='ml-[12px] h-[12px] w-[12px]'
                                            />
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  ) : (
                                    <p className='mt-[16px] rounded-[10px] bg-rake_background-400 py-[10px] text-center text-white'>
                                      No data
                                    </p>
                                  )}
                                </React.Fragment>
                              )
                            ) : (
                              res?.accordionElement?.map(
                                (group, groupIndex) => (
                                  <div key={groupIndex}>
                                    {group.map((child: AccordionChild) => (
                                      <Link to={`${child?.url}`}
                                        key={child?.key}
                                        className={`flex cursor-pointer items-center justify-start gap-2 p-2 ${isSideBarOpen
                                          ? ''
                                          : 'rounded-[5px] hover:bg-[#455b70]'
                                          }`}
                                        onClick={() => setOpenPopover(false)}
                                      >
                                        <Image
                                          url={child?.icon}
                                          alt={child?.title}
                                          className='h-4 w-4'
                                        />
                                        <span className='!ml-0 !mr-0 font-medium capitalize text-[#8ca3b8]'>
                                          {t(`${child?.title}`)}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                ),
                              )
                            )}
                          </div>
                        ) : (
                          <Typography
                            variant='h6'
                            className='text-[13px] font-medium text-white'
                          >
                            {t(`${res?.title}`)}
                          </Typography>
                        )}
                      </>
                    )}
                    position={{ top: 10, left: 60 }}
                    buttonContent={
                      <Image
                        url={res?.icon}
                        alt={res?.title}
                        className='h-[17px] w-[17px] opacity-[0.5] group-hover:opacity-[1] group-focus:opacity-[1]'
                      />
                    }
                    popoverContentClasses={`${res.key === 'cryptoFeature' ? '!top-[306px] min-h-fit' : ''}`}
                    buttonContentClasses='opacity-1'
                    functionForPopOverComponent={index === 2 ? data : () => { }}
                    setCryptoSearchTerm={setCryptoSearchTerm}
                  />
                ) : (
                  <CustomAccordion
                    open={open === index + 1}
                    title={t(`${res?.title}`)}
                    link={res?.link}
                    icon={res.icon}
                    onToggle={() =>
                      res.isAccordion && handleOpen(index + 1, true)
                    }
                    showToggleIcon={res?.isAccordion}
                    isSideBarOpen={isSideBarOpen}
                    onMouseEnter={() => {
                      !isSideBarOpen && setOpen(index + 1);
                    }}
                    openModal={
                      res?.key === 'redeem'
                        ? () => openModal(RedeemModal)
                        : undefined
                    }
                  >
                    {isSideBarOpen &&
                      res?.isAccordion &&
                      res?.key === 'cryptoFeature' ? (
                      cryptoLoading ? (
                        <div className='mt-[16px] rounded-[10px] bg-rake_background-500 py-[10px] text-center'>
                          loading...
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
                              {filteredCryptoData?.map((crypto) => (
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
                                      className='mx-[12px] max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap
                                        text-[14px] text-[#8ca3b8]'
                                    >
                                      {crypto?.name}
                                    </span>
                                  </div>
                                  <div className='flex items-center'>
                                    <span
                                      className='max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-[14px]
                                        text-[#ffffff]'
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
                                      className='ml-[12px] h-[12px] w-[12px]'
                                    />
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : (
                            <p className='mt-[16px] rounded-[10px] bg-rake_background-500 py-[10px] text-center'>
                              No data
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
                            {element.map((child: AccordionChild, j) => (
                              <Link to={`${child?.url}`}
                                key={j}
                                className={`my-[3px] flex cursor-pointer items-center space-x-2 rounded-[10px]
                                  bg-transparent p-[8px] hover:bg-[#455b70] ${isSideBarOpen ? '' : 'w-fit'}`}
                                onClick={() => {
                                  // if (child.key === 'casino-live-casino') {
                                  //   window.location.href =
                                  //     'casino?casino-tabs=live';
                                  // }
                                }}
                              >
                                <Image
                                  url={child.icon}
                                  alt='icon'
                                  className={`mt-[-2px] h-[16px] w-[16px] ${isSideBarOpen ? 'mr-[8px]' : 'mr-0'}`}
                                />
                                <span className='!ml-0 !mr-0 font-medium capitalize text-[#8ca3b8]'>
                                  {t(`${child?.title}`)}
                                </span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </CustomAccordion>
                )}
              </React.Fragment>
            ))}
            {isSideBarOpen ? (
              <CustomAccordion
                open={languageAccordion}
                title={currentLanguage?.label || 'Select Language'}
                icon={currentLanguage?.icon}
                onToggle={() => handleLanguageAccordion()}
                showToggleIcon={true}
                isSideBarOpen={isSideBarOpen}
                isLanguageAccordion={true}
              >
                <div className='border-b-[1px] border-solid border-[#293c53]'>
                  {isSideBarOpen &&
                    selectLanguage.map((element) => (
                      <div
                        className='my-[2px] flex cursor-pointer items-center space-x-2 rounded-[10px]
                          bg-transparent p-[8px] hover:bg-[#455b70]'
                        onClick={() => handleLanguageChange(element)}
                        key={element?.key}
                      >
                        <Image
                          url={element.icon}
                          alt='icon'
                          className='mr-[8px] mt-[-2px] h-[17px] w-[17px]'
                        />
                        {isSideBarOpen && (
                          <span className='font-medium capitalize text-[#8ca3b8]'>
                            {element.label}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              </CustomAccordion>
            ) : (
              <PopOverComponent
                buttonContent={
                  <Image
                    url={currentLanguage?.icon}
                    alt='icon'
                    width='17px'
                    height='17px'
                    className='!h-[17px] !w-[17px] rounded-full object-cover'
                  />
                }
                content={() => (
                  <div>
                    <h6 className='font-medium text-white'>
                      {currentLanguage?.label}{' '}
                    </h6>
                    {selectLanguage.map((element) => (
                      <div
                        key={element.key}
                        className='flex cursor-pointer items-center rounded-[10px] bg-transparent p-[8px]
                          hover:bg-[#455b70]'
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
                  </div>
                )}
                className=''
                position={{ top: 10, left: 60 }}
              />
            )}
          </div>

          <div
            className={`space-y-6 ${isSideBarOpen ? 'mt-0' : 'mt-0 text-center'}`}
          >
            <Button
              onClick={() => {
                openModal(WalletModal);
              }}
              className={`h-[28px] w-full cursor-pointer rounded-[10px] border-0 bg-[#0099f4] py-[10px]
                text-[14px] text-white
                ${isSideBarOpen ? 'mt-[24px]' : 'mt-0 h-[32px] w-[42px] p-0 text-[12px] capitalize'}`}
            >
              {`${isSideBarOpen ? 'Buy Crypto' : 'Buy'}`}
            </Button>
            {isSideBarOpen && (
              <div className='!mt-[5px] flex cursor-pointer justify-center'>
                {PaymentOptions.map((res, index) => (
                  <div
                    key={index}
                    className='my-[4px] ml-[4px] mr-[8px] flex items-center'
                  >
                    <Image
                      url={res.icon}
                      alt={`${index}`}
                      className='h-[18px] w-[27px]'
                    />
                  </div>
                ))}
              </div>
            )}

            <div
              className={`!mt-[5px] flex items-center justify-start space-x-1
                ${isSideBarOpen ? '' : 'flex-col space-x-0'}`}
            >
              {isSideBarOpen && (
                <p className='text-[14px] font-[400]'>Display in</p>
              )}
              <span
                className={`font-sans font-bold text-[#0099f4]
                  ${isSideBarOpen ? '' : 'cursor-pointer text-[12px] font-medium hover:underline'}`}
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
                  isSideBarOpen ? 'm-1' : '!mr-0 mt-[10px] rotate-[90deg]',
                  `relative block h-[17px] w-[32px] cursor-pointer space-x-0 rounded-full border-0
                  focus-visible:!shadow-none focus-visible:outline-none`,
                )}
              >
                <div
                  className={cn(
                    `absolute left-[2px] right-[2px] top-[3px] !h-[11px] w-[10px] space-x-0
                    rounded-full bg-white transition-transform duration-300 ease-in-out`,
                    isToggled ? 'translate-x-[17px]' : 'translate-x-[2px]',
                  )}
                ></div>
              </Toggle>
              <p
                className={`font-[400] ${isSideBarOpen ? 'text-[14px]' : 'mt-[5px] text-[12px]'}`}
              >
                Crypto
              </p>
            </div>
          </div>
        </aside>
        {isSideBarOpen && (
          <SideBarMobileView
            {...{
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
            }}
          />
        )}
      </>
    );
  },
);

export default Sidebar;
