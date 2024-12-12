import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  backgroundVideo,
  cards,
  coinUrl,
  currentLevel,
  gameLogo,
  gameLogoForSportsTab,
  goggleIcon,
  options,
  paymentCards,
  SwiperData,
  tableDataForCasinoTab,
  toggleTab,
} from './constants';
import './home.css';
import DataTable from '@/components/Table';
import { useOpenModal } from '@/hooks/useOpenModal';
import { BetModal, UserModal, LuckySpinModal, RedeemModal } from './modals';
import WalletModal from '@/components/Header/modals/WalletModal';
import { RowPropType } from './types';
import { useNavigate } from 'react-router-dom';
import { createImageUrl } from '@/utils';
import { PathType, ActiveNavType } from './types';
import SwiperComponent from '@/components/CommonComponents/SwiperComponent/SwiperComponent';

const Home: FC = () => {
  const { t } = useTranslation('welcome');
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState<'SHOW LESS' | 'SEE MORE'>(
    'SEE MORE',
  );
  const [activeNav, setActiveNav] = useState<ActiveNavType>('Casino_');
  const { openModal } = useOpenModal();

  const tableColumnForCasinoTab = [
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
            $ {row?.payout}x
          </p>

          <Image url={createImageUrl(coinUrl)} height='18' width='18' />
        </div>
      ),
    },
  ];

  const tableColumnForSportsTab = [
    {
      label: 'GAME',
      dataIndex: 'game',
      render: (row: RowPropType) => (
        <div className='flex items-center gap-2'>
          <Image
            className='h-[24px] w-[24px]'
            url={createImageUrl(gameLogoForSportsTab)}
          />

          <div
            className='max-w-[131px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap
              text-left font-sans text-[14px] font-medium tracking-[-.03em] text-[#0099f4]'
            onClick={() => {
              openModal(() => <BetModal data={row} />);
            }}
          >
            {row?.game} x test1
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
            $ {row?.payout}x
          </p>

          <Image url={createImageUrl(coinUrl)} height='18' width='18' />
        </div>
      ),
    },
  ];

  const buttonClickHandler = (path: PathType) => {
    switch (path) {
      case 'redeem':
        openModal(RedeemModal);
        break;
      case 'sports':
        navigate('/sports');
        break;
      case 'luckyspin':
        openModal(LuckySpinModal);
        break;
      case 'bonus':
        navigate('/bonus');
        break;
      case 'buyCrypto':
        openModal(() => <WalletModal openTab='Buy_crypto_' />);
        break;
      default:
        return;
    }
  };

  return (
    <div className='relative mx-auto w-full max-w-[1410px] select-none'>
      <div className='relative z-[1] mb-[110px] min-h-[656px] overflow-hidden'>
        <div
          className='home-video absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full
            translate-y-[-1px]'
        >
          <video
            autoPlay
            muted
            loop
            className='absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover'
          >
            <source src={createImageUrl(backgroundVideo)} type='video/mp4' />
          </video>
        </div>
        <div className='mt-[130px] w-full max-w-[800px] px-[20px] ls:px-[40px]'>
          <h1
            className='text-center !font-sans text-[2.5rem] font-bold leading-[100%] tracking-[2px]
              text-[#f5f5f5] ts:text-left ts:text-[3rem] ts:leading-[80px] ls:text-[4rem]'
          >
            {t('Title_')}
          </h1>
          <h1
            className='whitespace-pre-wrap text-center font-sans text-[2.5rem] font-bold leading-[100%]
              tracking-[2px] text-[#00a0ff] ts:text-left ts:text-[3rem] ts:leading-[80px]
              ls:text-[4rem]'
          >
            {t('Subtitle_')}
          </h1>
          <div className='mx-auto mt-[30px] flex max-w-[280px] flex-col items-center gap-[15px] ts:mx-0'>
            <Button
              className='h-[44px] w-full cursor-pointer rounded-[10px] bg-[#0099f4] px-[32px] font-inter
                text-[16px] font-bold leading-[24px] text-white hover:bg-[#1ab3ff]
                hover:shadow-dark-sm'
            >
              {t('Register_now')}
            </Button>
            <p className='text-center font-sans text-[16px] font-medium leading-[150%] tracking-[-.02em]'>
              {t('Or_continue_with')}
            </p>
            <div
              className='group flex h-[48px] w-[48px] cursor-pointer items-center justify-center
                rounded-[10px] bg-[#293c53]'
            >
              <Image
                url={createImageUrl(goggleIcon)}
                width='20'
                height='20'
                className='transition-[0.3s] group-hover:scale-[1.3]'
              />
            </div>
          </div>
          <div className='mt-[20px] flex max-w-[600px] justify-between'>
            <div
              className='mb-[25px] flex gap-[4px] whitespace-nowrap font-sans text-[14px] font-normal
                ss:text-[18px]'
            >
              Your Level:
              <span>Lvl. 1</span>
            </div>

            <div
              className='mb-[25px] flex gap-[4px] whitespace-nowrap font-inter text-[14px] font-bold
                text-[#00a0ff] ss:text-[18px]'
            >
              50068
              <span> / $50,000,000</span>
            </div>
          </div>
          <div className='relative flex max-w-[600px] justify-between'>
            <div
              className='absolute left-0 top-0 z-[-1] my-[9.5px] flex h-[5px] w-full items-center
                justify-center'
            >
              <div className='level-range relative m-0 h-[5px] w-full bg-white'></div>
            </div>
            {currentLevel.map((res) => (
              <div
                key={res?.key}
                className='flex w-full max-w-[130px] flex-col items-center justify-center gap-[12px]'
              >
                <div
                  className={`box-border flex !h-[24px] !w-[24px] items-center justify-center rounded-full
                  !border-[4px] border-solid !border-[#00a0ff] !bg-[#00a0ff]`}
                >
                  <Image url='https://assets.rake.com/bonus/img/Icon%20pack%20Variants.svg' />
                </div>
                <div
                  key={res?.key}
                  className='poly-shape flex !h-[48px] w-[56px] flex-col items-center justify-center
                    bg-[#293c53] 2xl:h-[112.58px] 2xl:!w-[70px]'
                >
                  <Image
                    url={res?.icon}
                    className='h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px]'
                  />
                  <div
                    className='absolute left-1/2 top-1/2 w-full max-w-[80px] -translate-x-1/2 -translate-y-1/2
                      transform'
                  >
                    <Image
                      url={res?.bgIcon}
                      className='h-[48px] w-full max-w-[56px] 2xl:max-w-[70px]'
                    />
                  </div>
                </div>
                <p
                  className='mt-[12px] text-center !font-inter text-[12px] font-semibold leading-[18px]
                    text-[#f5f5f5] 2xl:text-[14px]'
                >
                  {res?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='p-[20px] ts:p-10'>
        <div>
          <SwiperComponent
            slides={SwiperData.map((slide) => (
              <div
                key={slide?.key}
                className='relative mx-auto mt-[30px] flex h-auto w-full flex-col items-center
                  overflow-hidden rounded-[10px] bg-rake_grey-500 xl:h-[223px] xl:flex-row'
              >
                <div className='home-swipe relative mr-0 flex h-full w-full xl:mr-[7%] xl:w-[413px]'>
                  <Image
                    url={createImageUrl(slide?.iconUrl)}
                    className='mr-0 w-full xl:h-full xl:w-auto 2xl:w-full'
                  />
                </div>
                <div className='m-[14px] flex w-full flex-col items-center justify-center p-5 xl:w-[48%] xl:p-0'>
                  <h3 className='text-center font-sans font-bold leading-[44px] text-white xl:text-[33px]'>
                    {slide?.description}
                  </h3>
                  <Button
                    className='mr-[4%] mt-[22px] h-[32px] w-[120px] cursor-pointer rounded-[10px] font-inter
                      font-[14px] leading-[24px] hover:bg-[#1ab3ff] hover:shadow-dark-sm'
                    onClick={() =>
                      buttonClickHandler(slide?.navigate as PathType)
                    }
                  >
                    {slide?.buttonText}
                  </Button>
                </div>
              </div>
            ))}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className='mySwiper main-slider'
          />
        </div>

        <div className='card-image-main mt-[100px] flex flex-col gap-[20px] lg:flex-row'>
          {cards.map((res) => (
            <div
              key={res?.key}
              className='card-image-wrap flex min-h-full w-full flex-col gap-[30px] lg:w-[50%]'
            >
              <div className='flex items-center gap-[10px]'>
                <Image
                  url={createImageUrl(res?.iconUrl)}
                  width='18'
                  height='18'
                />
                <h4 className='font-sans text-[18px] font-medium leading-[100%] text-[#f5f5f5]'>
                  {t(`${res?.title}`)}
                </h4>
              </div>
              <div className='grid h-full w-full grid-rows-[268px] gap-x-[32px] rounded-[10px] bg-[#072537]'>
                <div className='card-image relative z-[1] overflow-hidden rounded-t-[10px]'>
                  <Image
                    url={createImageUrl(res?.backgroundMainImage)}
                    className='absolute bottom-0 left-0 z-[3] h-full w-full object-cover'
                  />
                  <Image
                    url={createImageUrl(res?.backgroundCoverImage)}
                    className='h-[268px] max-w-full rounded-t-[10px]'
                  />
                </div>
                <div className='box-border flex flex-col items-start gap-[16px] p-5 pt-[30px] ts:p-[30px]'>
                  <h3 className='text-[32px] font-bold leading-[32px]'>
                    {t(`${res?.descriptionTitle}`)}
                  </h3>
                  <p className='text-left font-sans !text-[14px] leading-[150%] text-[#8ca3b8] ss:!font-manrope'>
                    {t(`${res?.description}`)}
                  </p>
                  <Button
                    className='mt-auto box-border h-auto w-full cursor-pointer whitespace-break-spaces
                      rounded-[10px] bg-[#0099f4] px-[32px] py-[10px] font-sans text-[14px] font-bold
                      leading-[140%] text-[#f5f5f5] focus-visible:outline-none ts:w-fit'
                  >
                    {t(`${res?.buttonTitle}`)}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className='my-[40px] w-full rounded-[10px] bg-rake_grey-500 p-[28px] text-center
            ts:p-[24px]'
        >
          <h4 className='w-full text-center !font-inter text-[18px] font-bold leading-[24px]'>
            No crypto? We've got you covered!
          </h4>
          <div
            className='mt-[24px] box-border flex flex-wrap-reverse items-center justify-evenly
              gap-x-[40px] gap-y-[8px] ts:mt-5 ts:flex-wrap ts:justify-between ts:gap-0'
          >
            {paymentCards.map((res) => (
              <Image
                url={createImageUrl(res?.imageUrl)}
                key={res?.key}
                className='w-[45px] ts:w-auto'
              />
            ))}
          </div>
          <Button
            className='mt-5 h-[34px] cursor-pointer bg-[#293c53] px-[24px] py-[10px] !font-inter
              text-[14px] font-bold leading-[16px] hover:bg-[#1ab3ff] hover:shadow-dark-sm
              ts:h-[46px] ts:bg-[#0099f4] ts:px-[32px] ts:text-[16px] ts:leading-[24px]'
            onClick={() =>
              openModal(() => <WalletModal openTab='Buy_crypto_' />)
            }
          >
            {t('Buy_crypto')}
          </Button>
        </div>

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
                <Image
                  width='16'
                  height='16'
                  url={createImageUrl(res?.iconUrl)}
                />
                <span className='text-[16px] font-medium capitalize'>
                  {t(`${res?.title}`)}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <DataTable
          data={tableDataForCasinoTab}
          columns={
            activeNav === 'Casino_'
              ? tableColumnForCasinoTab
              : tableColumnForSportsTab
          }
          mainClasses='after:!bg-none mt-5 mb-[90px]'
          tableClasses='home-table-main border-spacing-y-[8px]'
          tableHeaderClasses='home-header-row'
          tableHeadClasses='bg-rake_background-500 whitespace-nowrap w-auto text-[#8ca3b8] font-medium leading-[150%] text-left text-[12px] py-[12px] px-[20px] relative z-[2] table-cell '
          tableRowClasses='bg-transparent last:bg-[linear-gradient(rgba(4,20,30,0),#04141e)] home-table-row'
          tableCellClasses='bg-rake_grey-500 !py-[12px] whitespace-nowrap !px-[20px] !text-[#f5f5f5] !text-[14px] !font-sans tracking-[-.03em] leading-[150%] font-medium'
        />
        <div
          className={`relative overflow-hidden rounded-[10px] bg-rake_grey-500
            ${buttonText === 'SEE MORE' ? 'h-[960px]' : 'see-less-main h-fit'}`}
        >
          {options.map((res) => (
            <div
              key={res?.key}
              className='flex flex-col items-start gap-[24px] p-[30px]'
            >
              <h3 className='font-sans text-[32px] font-bold leading-[100%]'>
                {t(`${res?.title}`)}
              </h3>
              <p
                className='text-left !font-sans text-[14px] font-medium leading-[150%] text-[#8ca3b8]
                  ts:text-[16px]'
              >
                {t(`${res?.description}`)}
              </p>
            </div>
          ))}
          <div
            className={` ${buttonText === 'SEE MORE' ? 'see-more-wrap' : 'see-less-wrap'}`}
          ></div>
          <div className='sticky bottom-5 mb-5 flex items-start justify-center'>
            <Button
              onClick={() => {
                setButtonText(
                  buttonText === 'SEE MORE' ? 'SHOW LESS' : 'SEE MORE',
                );
              }}
              className='cursor-pointer bg-[#0099f4] hover:bg-[#1ab3ff] hover:shadow-dark-sm
                focus-visible:outline-none'
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
