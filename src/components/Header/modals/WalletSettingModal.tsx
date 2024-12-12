import { useOpenModal } from '@/hooks/useOpenModal';
import { Button } from '@/components/ui/button';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { closeIcon } from '@/assets/images/header';
import { Image } from '@/components/ui/core/image';
import { rupeeOptions } from '../constants';

const WalletSettingModal: FC = memo(() => {
  const { t } = useTranslation('settings');
  const { closeModal } = useOpenModal();
  const [toggleOne, setToggleOne] = useState<boolean>(false);
  const [toggleTwo, setToggleTwo] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<
    (typeof rupeeOptions)[number][]
  >([]);

  const handleToggleOne = () => setToggleOne((prev) => !prev);
  const handleToggleTwo = () => setToggleTwo((prev) => !prev);

  const handleToggle = (option: (typeof rupeeOptions)[number]) => {
    setSelectedValues((prev) =>
      prev.includes(option)
        ? prev.filter((v) => v !== option)
        : [...prev, option],
    );
  };

  return (
    <div
      className='register-main box-border max-h-[99vh] w-[530px] rounded-[10px] bg-rake_grey-500
        pb-0 ss:min-w-[350px] ts:w-[680px]'
    >
      <div className='relative px-[15px] py-[26px] ss:p-[40px]'>
        <h1
          className='mb-5 text-center font-sans text-[24px] font-bold uppercase leading-[100%]
            tracking-[-.96px] text-[#f5f5f5]'
        >
          {t('Wallet_Modal_Settings_')}
        </h1>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>

        <div className='mb-5 flex items-center justify-start gap-[16px]'>
          <div
            onClick={handleToggleOne}
            className={`relative m-[5px] h-[32px] w-[60px] cursor-pointer rounded-full transition-colors
              duration-300 ${toggleOne ? 'bg-[#0099f4]' : 'bg-[#3f4b57]'}`}
          >
            <div
              className={`absolute left-1 top-1 h-6 w-6 rounded-full transition-transform duration-300
                ease-in-out ${toggleOne ? 'translate-x-[28px]' : ''} bg-white`}
            />
          </div>
          <div className='mb-2.5 w-[60%] ts:w-auto'>
            <p className='font-manrope text-[14px] font-medium leading-[150%] tracking-[-.02em] text-white'>
              {t('Conceal_Balances_')}
            </p>
            <p className='font-manrope text-[14px] font-medium leading-[150%] tracking-[-.02em] text-white'>
              {t('Balances_Wallet_')}
            </p>
          </div>
        </div>

        <div className='mb-5 flex items-center justify-start gap-[16px]'>
          <div
            onClick={handleToggleTwo}
            className={`relative m-[5px] h-[32px] w-[60px] cursor-pointer rounded-full transition-colors
              duration-300 ${toggleTwo ? 'bg-[#0099f4]' : 'bg-[#3f4b57]'}`}
          >
            <div
              className={`absolute left-1 top-1 h-6 w-6 rounded-full transition-transform duration-300
                ease-in-out ${toggleTwo ? 'translate-x-[28px]' : ''} bg-white`}
            />
          </div>
          <div className='mb-2.5 w-[60%] ts:w-auto'>
            <p className='font-manrope text-[14px] font-medium leading-[150%] tracking-[-.02em] text-white'>
              {t('Cryptocurrency_Fiat_')}
            </p>
            <p className='font-manrope text-[14px] font-medium leading-[150%] tracking-[-.02em] text-white'>
              {t('Wagers_Finalized_')}
            </p>
          </div>
        </div>

        <div className='flex flex-wrap'>
          <ul className='list-inside list-disc flex w-full flex-wrap border-b-[1px] pb-4 mb-4 border-solid border-[#293c53]'>
            {selectedValues.map((option) => (
               <label
               key={option.key}
               className='flex w-[50%] p-[8px] sm:w-[33%] ts:w-[20%]'
             >
               <input
                 type='checkbox'
                 checked={selectedValues.includes(option)}
                 onChange={() => handleToggle(option)}
                 style={{ display: 'none' }}
                 aria-hidden='true'
               />
               <div
                 className='mr-2.5 flex h-[20px] w-[20px] items-center justify-center rounded-full
                   border-[1px] border-solid border-[#808080]'
               >
                 {selectedValues.includes(option) && (
                   <div className='h-[14px] w-[13px] rounded-full bg-[#00a0ff]'  />
                 )}
               </div>
               <img
                 src={option.icon}
                  alt={option.label}
                  className='w-[20px] h-[20px] mr-[5px]'
               />
               <span className='font-sans text-[14px] text-[#f5f5f5]'>
                 {option.label}
               </span>
             </label>
            ))}
          </ul>
        </div>

        <div className='flex flex-wrap'>
          {rupeeOptions.map((option) => (
            <label
              key={option.key}
              className='flex w-[50%] p-[8px] sm:w-[33%] ts:w-[20%]'
            >
              <input
                type='checkbox'
                checked={selectedValues.includes(option)}
                onChange={() => handleToggle(option)}
                style={{ display: 'none' }}
                aria-hidden='true'
              />
              <div
                className='mr-2.5 flex h-[20px] w-[20px] items-center justify-center rounded-full
                  border-[1px] border-solid border-[#808080]'
              >
                {selectedValues.includes(option) && (
                  <div className='h-[14px] w-[13px] rounded-full bg-[#00a0ff]' />
                )}
              </div>
              <img
                src={option.icon}
                alt={option.label}
                 className='w-[20px] h-[20px] mr-[5px]'
              />
              <span className='font-sans text-[14px] text-[#f5f5f5]'>
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <div
          className='my-[30px] rounded-[8px] bg-[#7575759a] p-2.5 text-center font-sans
            text-[14px] font-medium leading-[150%] tracking-[-.02em] text-[#f5f5f5]
            '
        >
          {t('wallet_settings_warning_')}
        </div>
        <Button
          onClick={closeModal}
          className='hover:shadow-[0 0 10px rgba(0,0,0,.6)] mt-[10px] h-[32px] w-full rounded-[10px]
            bg-[#0099f4] font-[16px] hover:bg-[#1ab3ff] ts:h-[46px]'
        >
          {t('SAVE_')}
        </Button>
      </div>
    </div>
  );
});

export default WalletSettingModal;
