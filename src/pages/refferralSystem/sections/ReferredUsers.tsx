import { FC, memo, useState } from 'react';
import { bitCoin, refferedUserUI, testData, upArrow } from '../constants';
import { Image } from '@/components/ui/core/image';
import { Button } from '@/components/ui/button';
import { useOpenModal } from '@/hooks/useOpenModal';
import { CreateCampaignModal } from '../modals';
import { copyIcon } from '@/assets/images/reffral';

export const ReferredUsers: FC = memo(() => {
  const { openModal } = useOpenModal();
  const [openCampaigns, setOpenCampaigns] = useState<number>(0);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied_to_clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className='w-full'>
      <div className='w-full rounded-[10px] bg-transparent p-0 ls:bg-rake_grey-500 ls:p-5'>
        <div className='flex flex-col ls:flex-row justify-between gap-x-[20px]'>
          {refferedUserUI.map((res) => (
            <div
              key={res?.key}
              className={`mb-4 flex w-full flex-col gap-[14px] rounded-[10px] bg-rake_grey-500
              px-[16px] py-[12px] text-[20px] font-medium leading-[100%]
          ls:bg-rake_background-500`}
            >
              <div className='mb-2 text-lg font-semibold'>{res?.title}</div>
              <div className='flex items-center gap-[10px]'>
                <span className='text-[16px] text-[#8ca3b8]'>0</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex w-full flex-col gap-[14px] rounded-[10px] bg-rake_grey-500 px-[16px]
            py-[12px] text-[20px] font-medium leading-[100%] ls:bg-rake_background-500`}
        >
          <div className='mb-2 text-lg font-semibold'>Campaigns</div>
          <div className='flex items-center gap-[10px]'>
            <span className='text-[16px] text-[#8ca3b8]'>0</span>

            <Image url={bitCoin} className='h-[20px] w-[18px]' />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h4 className='my-[20px] text-left text-[24px] font-bold uppercase leading-[1] text-[#f5f5f5]'>
          Campaigns
        </h4>
        {testData.map((res, index) => (
          <div key={res?.key} className='mb-4'>
            <div
              className='mt-[10px] flex flex-col items-start justify-start rounded-[8px] bg-rake_grey-500
                px-[20px] py-[12px] ls:flex-row ls:items-center ls:justify-between'
            >
              <div className='text-[16px] font-medium leading-[150%]'>
                {res?.title}
              </div>
              <div className='flex w-full items-center justify-between ls:w-fit'>
                <div className='mr-1 ts:mr-4 flex items-center'>
                  <div className='mr-2 font-sans text-[16px] font-medium text-[#8ca3b8]'>
                    Commission: {res?.commission}
                  </div>
                  <Image
                    url={res?.coinUrl}
                    className='h-[18px] w-[18px] cursor-pointer'
                  />
                </div>
                <div>
                  <span
                    onClick={() => {
                      setOpenCampaigns(
                        openCampaigns === index + 1 ? 0 : index + 1,
                      );
                    }}
                    className='cursor-pointer bg-transparent'
                  >
                    <Image
                      url={upArrow}
                      className={`${openCampaigns === index + 1 ? 'rotate-[180deg]' : ''} transition-all`}
                    />
                  </span>
                </div>
              </div>
            </div>
            {openCampaigns === index + 1 && (
              <div className='bg-rake_grey-500 px-[20px] pb-[12px] pt-[5px]'>
                <div className='border-b-[1px] border-solid border-[#293c53]'></div>
                <div className='mb-[24px] flex flex-wrap gap-0 rounded-b-[8px] pt-2.5 sm:gap-[24px]'>
                  {res?.metaData?.map((data) => (
                    <div
                      key={data?.key}
                      className='flex w-full flex-row justify-between py-[5px] sm:w-auto sm:flex-col
                        sm:gap-[16px]'
                    >
                      <div className='text-[16px] font-medium uppercase leading-[140%] text-[#8ca3b8] sm:text-[18px]'>
                        {data?.label}
                      </div>
                      <div className='text-[16px] font-normal text-[#f5f5f5] sm:text-[24px]'>
                        {data?.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className='h-[20px] font-sans text-[12px] font-medium uppercase text-[#8ca3b8]'>
                    Referral Link
                  </div>
                  <div
                    className='relative flex h-[50px] w-full items-center overflow-hidden rounded-[10px]
                      bg-rake_background-500 py-[5px]'
                  >
                    <div
                      className='w-full overflow-hidden text-ellipsis whitespace-nowrap px-[16px] text-[14px]
                        leading-[24px] text-[#f5f5f5]'
                    >
                      {res?.referralUrl}
                    </div>
                    <div
                      onClick={() => copyToClipboard(res?.referralUrl)}
                      className='h-[24px] cursor-pointer pl-[10px] pr-[15px]'
                    >
                      <Image url={copyIcon} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Button
        onClick={() => openModal(() => <CreateCampaignModal />)}
        className='w-full cursor-pointer whitespace-break-spaces ts:whitespace-nowrap rounded-[10px] bg-[#0099f4] p-[12px] font-inter
          text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#1ab3ff]
          hover:shadow-dark-sm focus-visible:outline-none ss:w-fit'
      >
        CREATE NEW CAMPAIGN
      </Button>
    </div>
  );
});
