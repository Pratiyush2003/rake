import { FC, memo } from 'react';
import { respectModelContent } from '../constants';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { CloseIcon } from '@/assets/images/chat';
import { useOpenModal } from '@/hooks/useOpenModal';
import { useTranslation } from 'react-i18next';

const RespectModal: FC = () => {
  const { closeModal } = useOpenModal();
  const { t } = useTranslation('chat');
  return (
    <div className='w-[470px] rounded-[10px] bg-rake_grey-500 ss:w-[520px]'>
      <div className='relative box-border px-[15px] py-[26px] ss:p-[40px]'>
        <Button
          className='absolute right-[14px] top-[14px] h-fit bg-transparent p-0 hover:bg-transparent
            focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image
            url={CloseIcon}
            alt='close'
            onClick={closeModal}
            className='h-[14px] w-[14px] cursor-pointer'
          />
        </Button>
        <h2
          className='mb-[40px] text-center text-[32px] font-semibold uppercase leading-[32px]
            text-[#f5f5f5]'
        >
          {t('Be_respectful_to_other_players')}
        </h2>
        <p className='text-left text-[12px] font-medium leading-[150%] text-[#8ca3b8] ts:text-[14px]'>
          {t('Please_read_the_rules_of_the_chat')}
        </p>
        <ul
          className='mb-[40px] pl-[20px] text-left text-[14px] font-medium leading-[150%]
            text-[#8ca3b8]'
        >
          {respectModelContent.map((res) => (
            <li key={res.key}>{t(`${res.text}`)}</li>
          ))}
        </ul>
        <div className='flex justify-center'>
          <Button
            onClick={closeModal}
            className='h-[32px] cursor-pointer rounded-[10px] border-0 bg-[#0099f4] px-[24px] py-[3px]
              text-[16px] focus-visible:outline-none ts:h-[46px] ts:px-[32px] ts:py-[10px]'
          >
            {t('Ok_I_got_it')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(RespectModal);
