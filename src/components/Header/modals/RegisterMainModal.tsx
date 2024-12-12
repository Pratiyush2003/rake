import { rakeLogo } from '@/assets/images/flags';
import {
  ServiceGoogleIcon,
  EmailIcon,
  backButtonIcon,
  closeIcon,
} from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo } from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import '../header.css';
import { Trans, useTranslation } from 'react-i18next';

const RegisterMainModal: FC = memo(() => {
  const { openModal, closeModal } = useOpenModal();
  const { t } = useTranslation('socialMediaLogin');

  return (
    <div
      className='register-main mx-h-[550px] scroll-none ss:min-w-auto box-border max-h-[99vh]
        min-w-[300px] overflow-auto rounded-[10px] bg-rake_grey-500 pb-0'
    >
      <div className='relative box-border px-[15px] py-[26px] ss:p-[40px]'>
        <div className='flex w-full justify-center pt-3 ts:pt-0'>
          <Image url={rakeLogo} className='mx-auto h-[20px] ' />
        </div>
        <Button
          onClick={closeModal}
          className='absolute left-[30px] top-[30px] hidden h-fit bg-transparent p-0
            hover:bg-transparent focus-visible:outline-none ss:block'
        >
          <Image url={backButtonIcon} alt='back buttonIcon' />
        </Button>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] block h-fit w-fit cursor-pointer bg-transparent
            !p-0 hover:bg-transparent focus-visible:outline-none ss:right-[26px]
            ss:top-[26px] ss:hidden'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex min-h-[360px] flex-col justify-between ss:min-w-[320px]'>
          <h3 className='mt-10 text-center text-[32px] font-bold leading-[32px] text-white'>
            {t('Join_')}
          </h3>
          <div className='flex flex-col gap-[12px]'>
            <Button
              onClick={() => openModal(RegisterModal)}
              className='w-full cursor-pointer rounded-[10px] bg-[#0099f4] p-0 hover:bg-[#0099f4]
                focus-visible:outline-none'
              variant={'default'}
            >
              <div className='relative flex w-full items-center justify-center p-3'>
                <Image
                  url={EmailIcon}
                  className='absolute left-[22px] right-0'
                />
                <p
                  className='mx-auto font-inter text-[16px] font-bold uppercase leading-[24px]
                    tracking-[-.02em] text-white'
                >
                  {t('Sign_up_with_email_')}
                </p>
              </div>
            </Button>
            <Button
              className='w-full cursor-pointer rounded-[10px] bg-[#f32e06] p-0 hover:bg-[#f32e06]
                focus-visible:outline-none'
              variant={'red'}
            >
              <div className='relative flex w-full items-center justify-center p-3'>
                <Image
                  url={ServiceGoogleIcon}
                  className='absolute left-[22px] right-0'
                />
                <span
                  className='mx-auto font-inter text-[16px] font-bold uppercase leading-[24px]
                    tracking-[-.02em] text-white'
                >
                  {t('Sign_up_with_google_')}
                </span>
              </div>
            </Button>
          </div>
          <p className='text-center text-[14px] font-normal text-[#8ca3b8]'>
            <Trans
              i18nKey='Already_have_an_account_'
              defaults={t(
                'Already_have_an_account_',
              )}
              components={{
                1: (
                  <span
                    className='cursor-pointer text-[#0099f4]'
                    onClick={() => openModal(LoginModal)}
                  />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
});

export default RegisterMainModal;
