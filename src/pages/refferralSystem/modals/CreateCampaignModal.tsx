import { FC, memo, useState, ChangeEvent } from 'react';
import { createCampaignModalInputs, initialFormValues } from '../constants';
import { InputComponent } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { InputsType } from '../types';
import { useOpenModal } from '@/hooks/useOpenModal';
import { closeIcon } from '@/assets/images/header';
import { Image } from '@/components/ui/core/image';

export const CreateCampaignModal: FC = memo(() => {
  const [formState, setFormState] = useState(initialFormValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { closeModal } = useOpenModal();

  return (
    <div
      className='login-main scroll-none box-border h-full w-[447px] min-w-[300px] select-none
        overflow-scroll rounded-[10px] bg-rake_grey-500 pb-0 ss:min-w-[350px]'
    >
      <div className='relative px-[15px] py-[26px] ss:p-[40px]'>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='p-0 ss:px-[40px]'>
          <h1
            className='hidden text-center text-[32px] font-bold leading-[32px] tracking-[-.01em]
              text-white ss:block'
          >
            CREATE CAMPAIGN
          </h1>
          <div className='p-0 ss:py-[40px]'>
            {createCampaignModalInputs.map((input: InputsType) => (
              <div key={input.key} className='mb-4 flex flex-col'>
                <label
                  htmlFor={input.key}
                  className='pt-4 font-sans text-[12px] font-medium leading-[16px] text-white'
                >
                  {input.label}
                  {input?.required && <span className='text-red-600'>*</span>}
                </label>
                {input.changeable ? (
                  <InputComponent
                    type='text'
                    value={formState[input.key]}
                    onChange={handleChange}
                    className='mt-2 box-border !h-[50px] rounded-[10px] border-0 !bg-rake_background-500 px-4
                      py-0 text-[14px] leading-[24px] text-[#f5f5f5] focus-visible:!shadow-none
                      focus-visible:!outline-none'
                    name={input?.name}
                  />
                ) : (
                  <InputComponent
                    type='text'
                    value={formState[input.key]}
                    disabled
                    className='mt-2 box-border !h-[50px] rounded-[10px] border-0 !bg-rake_background-500 px-4
                      py-0 text-[14px] leading-[24px] text-[#f5f5f5] !opacity-[1]
                      focus-visible:!shadow-none focus-visible:!outline-none'
                  />
                )}
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center pt-[40px] ss:pt-0'>
            <Button
              type='button'
              onClick={() =>
                formState?.campaignName && console.log('Form Data:', formState)
              }
              variant='default'
              className={`${formState?.campaignName ? '' : 'cursor-not-allowed border-none bg-[#efefef] text-[#8a8a8a] hover:bg-[#efefef]'}`}
            >
              CREATE CAMPAIGN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
