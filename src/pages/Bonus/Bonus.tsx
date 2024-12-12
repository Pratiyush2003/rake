import { FC, memo, useState } from 'react';
import {
  sectionFourth,
  sectionOne,
  sectionThird,
  sectionTwo,
  tableBody,
} from './constants';
import { Image } from '@/components/ui/core/image';
import { Button } from '@/components/ui/button';
import './Bonus.css';
import { useOpenModal } from '@/hooks/useOpenModal';
import PerksOverview from './Modals/PerksOverview';
import SpinNowModal from './Modals/SpinNowModal';
import SwiperComponent from '@/components/CommonComponents/SwiperComponent/SwiperComponent';

const Bonus: FC = () => {
  const { openModal } = useOpenModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const filteredData = tableBody
    .map((row) => {
      const data = row.tableData;
      return {
        title: data[0].title,
        value: data[activeIndex + 1]?.title,
      };
    })
    .filter((item) => item.value);
  const slide = sectionThird.map((res, index) => (
    <div className='flex flex-col items-center' key={res?.key}>
      <div
        className={`relative my-[15px] mt-[40px] flex !h-[5px] justify-start
          !bg-[linear-gradient(#3f4b57,#3f4b57)]
          ${index === 0 ? 'ml-auto !w-1/2' : 'w-full'}
          ${sectionThird?.length - 1 === index ? 'mr-auto !w-1/2' : 'w-full'}`}
      >
        <div
          className={`absolute rounded-full
            ${index === 0 ? '!left-0 -translate-x-0 -translate-y-1/2 transform' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'}
            ${sectionThird?.length - 1 === index ? '!right-[-19px] left-auto -translate-x-0 -translate-y-1/2 transform' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'}`}
        >
          {index === 0 ? (
            <div
              className='absolute left-[-13px] top-[-30px] flex whitespace-nowrap rounded-[10px]
                bg-[#293c53] px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#8ca3b8]'
            >
              LVL 1 <span className='hidden el:block'>.0003241399935172</span>
            </div>
          ) : (
            ''
          )}
          <div
            className={`z-10 box-border flex !h-[24px] !w-[24px] items-center justify-center
              rounded-full !border-[4px] border-solid
              ${index === 0 ? '!border-[#7ec2ff] !bg-[#00a0ff]' : 'border-[#3f4b57] bg-[#3f4b57]'}`}
          >
            {index === 0 ? (
              ''
            ) : (
              <Image url='https://assets.rake.com/bonus/img/Icon%20pack%20Variants.svg' />
            )}
          </div>
        </div>
      </div>
      <div
        key={res?.key}
        className='poly-shape relative flex h-[112.58px] !w-[130px] flex-col items-center
          justify-center bg-[#293c53]'
      >
        <Image url={res?.icon} className='h-[72px] w-[72px]' />
        <div
          className='absolute left-1/2 top-1/2 w-full max-w-[130px] -translate-x-1/2 -translate-y-1/2
            transform'
        >
          <Image url={res?.bgIcon} className='h-[113px] w-full max-w-[130px]' />
        </div>
        <p className='mt-[4px] font-inter text-[14px] font-semibold leading-[18px] text-[#f5f5f5]'>
          {res?.title}
        </p>
      </div>
    </div>
  ));
  return (
    <div className='p-[25px] max-w-[1440px] mx-auto'>
      <h1 className='mb-[25px] text-[32px] font-medium leading-[150%] tracking-[-.02em]'>
        BONUS
      </h1>
      <div className='flex w-full flex-col justify-between gap-y-[25px] lg:flex-row'>
        {sectionOne?.map((res) => (
          <div
            key={res?.key}
            className='flex py-[22px] w-auto lg:h-[164px] flex-col justify-center rounded-[10px] bg-rake_grey-500
              lg:w-[calc(50%-15px)]'
          >
            <h2
              className='ml-[12px] font-mulish text-[20px] font-bold leading-[150%] tracking-[-.02em]
                text-[#f5f5f5] ts:ml-[25px] lg:text-[24px]'
            >
              {res?.title}
            </h2>
            <p
              className='ml-[12px] font-mulish text-[25px] font-bold leading-[150%] tracking-[-.02em]
                text-[#00a0ff] ts:ml-[25px] lg:text-[32px]'
            >
              {res?.value}
            </p>
          </div>
        ))}
      </div>
      <div
        className='mt-[25px] box-border h-fit w-full bg-transparent p-0 el:rounded-[10px]
          el:bg-rake_grey-500 el:px-[12px] el:py-[24px]'
      >
        <div className='rounded-[10px] bg-rake_grey-500 px-[12px] py-[24px] ts:p-[25px] el:p-0'>
          <div className='flex flex-wrap items-center justify-between gap-[25px] gap-y-[10px]'>
            <h2 className='font-mulish text-[24px] text-[#f5f5f5]'>RANK</h2>
            <Button
              className='hidden h-[28px] w-[165px] cursor-pointer rounded-[10px] bg-[#f7f9fd] px-[20px]
                py-[6px] font-inter text-[14px] font-bold text-[#0099f4] hover:bg-[#f7f9fd]
                el:flex'
              onClick={() => {
                openModal(PerksOverview);
              }}
            >
              PERKS OVERVIEW
            </Button>
          </div>
          <div
            className='my-[30px] box-border flex min-h-[42px] w-full flex-col flex-wrap justify-around
              gap-[10px] rounded-[10px] bg-rake_background-500 p-[10px] ts:flex-row
              ts:items-center ts:py-[0] ls:my-[50px]'
          >
            {sectionTwo?.map((res, index) => (
              <div key={res?.key} className='flex items-center justify-between'>
                <h1 className='text-[16px] font-normal text-[#8ca3b8] ls:text-[18px]'>
                  {res?.title}
                </h1>{' '}
                &nbsp;
                <div className='flex items-center'>
                  {index === 0 ? (
                    <Image
                      url='https://assets.rake.com/bonus/img/rank_bronze%203.svg'
                      alt='bonus'
                      height='24'
                      width='24'
                      className='mb-[5px]'
                    />
                  ) : (
                    ''
                  )}

                  <p className='font-inter text-[16px] font-normal text-[#f5f5f5] ls:text-[18px]'>
                    {res?.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='my-[30px] flex flex-col'>
          <div className='flex w-full flex-row items-center justify-between'>
            {sectionThird.map((res, index) => (
              <div className='hidden w-full el:block' key={res?.key}>
                <div className='flex flex-col items-center'>
                  <div
                    className={`relative my-[15px] flex !h-[5px] justify-start
                    !bg-[linear-gradient(#3f4b57,#3f4b57)]
                    ${index === 0 ? 'ml-auto !w-1/2' : 'w-full'}
                    ${sectionThird?.length - 1 === index ? 'mr-auto !w-1/2' : 'w-full'}`}
                  >
                    <div
                      className={`absolute rounded-full
                      ${index === 0 ? '!left-0 -translate-x-0 -translate-y-1/2 transform' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'}
                      ${sectionThird?.length - 1 === index ? 'left-auto right-[-21px] -translate-x-0 -translate-y-1/2 transform' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'}`}
                    >
                      {index === 0 ? (
                        <div
                          className='absolute top-[-30px] flex whitespace-nowrap rounded-[10px] bg-[#293c53]
                            px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#8ca3b8]'
                        >
                          LVL 1{' '}
                          <span className='hidden el:block'>
                            .0003241399935172
                          </span>
                        </div>
                      ) : (
                        ''
                      )}

                      <div
                        className={`z-10 box-border flex !h-[24px] !w-[24px] items-center justify-center
                        rounded-full !border-[4px] border-solid
                        ${index === 0 ? '!border-[#7ec2ff] !bg-[#00a0ff]' : 'border-[#3f4b57] bg-[#3f4b57]'}`}
                      >
                        {index === 0 ? (
                          ''
                        ) : (
                          <Image url='https://assets.rake.com/bonus/img/Icon%20pack%20Variants.svg' />
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    key={res?.key}
                    className='poly-shape relative flex !h-[90px] w-[95px] flex-col items-center justify-center
                      bg-[#293c53] 2xl:h-[112.58px] 2xl:!w-[108px]'
                  >
                    <Image
                      url={res?.icon}
                      className='h-[50px] w-[50px] 2xl:h-[62px] 2xl:w-[62px]'
                    />
                    <div
                      className='absolute left-1/2 top-1/2 w-full max-w-[130px] -translate-x-1/2 -translate-y-1/2
                        transform'
                    >
                      <Image
                        url={res?.bgIcon}
                        className='h-[113px] w-full max-w-[80px] 2xl:max-w-[130px]'
                      />
                    </div>
                    <p
                      className='mt-[4px] font-inter text-[12px] font-semibold leading-[18px] text-[#f5f5f5]
                        2xl:text-[14px]'
                    >
                      {res?.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className='mx-auto block w-full el:hidden'>
              <SwiperComponent
                slides={slide}
                slidesPerView={2}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                className='mySwiper rank-slider'
                setActiveIndex={setActiveIndex}
              />
              <div className='mt-[20px] rounded-[10px] bg-rake_grey-500 px-[12px] py-[24px]'>
                <h1 className='font-mulish text-[24px] font-bold leading-[32px]'>
                  Perks Overview
                </h1>
                <div className='mt-[12px] overflow-x-auto rounded-[10px] bg-rake_background-500'>
                  <table className='min-w-full border-collapse border border-gray-200'>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td
                            className='p-[12px] align-middle font-sans text-[14px] font-normal leading-[18px]
                              text-[#8ca3b8]'
                          >
                            {item.title}
                          </td>
                          <td
                            className='p-[12px] align-middle font-sans text-[14px] font-normal leading-[18px]
                              text-[#f5f5f5]'
                          >
                            {item.value.startsWith('https') ? (
                              <Image url={item.value} height='24' width='24' />
                            ) : (
                              item.value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='mt-[25px] box-border h-auto w-full rounded-[10px] bg-rake_grey-500 px-[12px]
          py-[24px] ts:p-[25px]'
      >
        <h2 className='text-center font-mulish text-[24px] font-medium text-[#f5f5f5] ss:text-left'>
          BONUS
        </h2>
        <div className='mt-[25px] flex w-full flex-wrap justify-center gap-[25px]'>
          <div
            className='box-border flex w-full flex-col items-center rounded-[10px]
              bg-rake_background-500 p-[30px] ts:w-[87%] ls:w-[46%] xl:w-[47.5%]'
          >
            <Image
              url='https://assets.rake.com/bonus/img/rank_bronze%203-1.svg'
              className='h-[150px] w-[150px]'
            />
            <p className='text-center font-mulish text-[18px] font-bold text-[#f5f5f5] ls:text-[24px]'>
              LUCKY SPIN
            </p>
            <p
              className='mt-[4px] text-center font-inter text-[14px] font-normal text-[#e6e6e6]
                ls:text-[18px]'
            >
              Available Spin:{' '}
              <span className='font-inter text-[14px] font-normal text-[#00a0ff] ls:text-[18px]'>
                1
              </span>
            </p>
            <p
              className='mt-[4px] text-center font-inter text-[14px] font-normal text-[#e6e6e6]
                ls:text-[18px]'
            >
              Accumulated:{' '}
              <span className='font-inter text-[14px] font-normal text-[#00a0ff] ls:text-[18px]'>
                $0.00
              </span>
            </p>
            <div className='mt-[12px] flex flex-wrap justify-center gap-[12px]'>
              <Button
                className='h-[32px] w-[104px] cursor-pointer rounded-[10px] bg-[#0099f4] font-mulish
                  text-[14px] font-bold text-white hover:bg-[#0099f4]'
                onClick={() => {
                  openModal(SpinNowModal);
                }}
              >
                SPIN NOW
              </Button>
              <Button
                className='rounded-[10px]font-bold h-[32px] w-[104px] cursor-not-allowed bg-[#efefef]
                  font-mulish text-[14px] text-[#8a8a8a] hover:bg-[#efefef]'
              >
                CLAIM
              </Button>
            </div>
          </div>
          {sectionFourth.map((res, index) => (
            <div
              key={res?.key}
              className={`${
              index === 0
                  ? `box-border flex w-full flex-col items-center rounded-[10px]
                    bg-rake_background-500 p-[30px] ts:w-[87%] ls:w-[46%] xl:w-[47.5%]`
                  : `box-border flex w-full flex-col items-center rounded-[10px]
                    bg-rake_background-500 p-[30px] ts:w-[87%] ls:w-[46%] xl:w-[30%]`
              }`}
            >
              <Image url={res?.icon} className='h-[150px] w-[150px]' />
              <p className='text-center font-mulish text-[18px] font-bold text-[#f5f5f5] ls:text-[24px]'>
                {res?.title}
              </p>
              <p
                className='mt-[4px] text-center font-inter text-[14px] font-normal text-[#e6e6e6]
                  ls:text-[18px]'
              >
                Accumulated:{' '}
                <span className='font-inter text-[14px] font-normal text-[#00a0ff] ls:text-[18px]'>
                  {res?.accumulated}
                </span>
              </p>
              <div className='mt-[12px] flex justify-center gap-[12px]'>
                <Button
                  className='rounded-[10px]font-bold h-[32px] w-[104px] cursor-not-allowed bg-[#efefef]
                    font-mulish text-[14px] text-[#8a8a8a] hover:bg-[#efefef]'
                >
                  CLAIM
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Bonus);
