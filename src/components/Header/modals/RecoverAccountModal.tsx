import React, { FC, memo, useState } from 'react';
import { Image } from '@/components/ui/core/image';
import { rakeLogo } from '@/assets/images/flags';
import { InputComponent } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useOpenModal } from '@/hooks/useOpenModal';
import RegisterModal from './RegisterModal';
import { closeIcon } from '@/assets/images/header';
import '../header.css';
import { Trans, useTranslation } from 'react-i18next';

type FormEvent = React.FormEvent<HTMLFormElement>;

const RecoverAccountModal: FC = memo(() => {
  const { closeModal, openModal } = useOpenModal();
  const [email, setEmail] = useState<string>('');
  const { t } = useTranslation('restoringAccess');

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log('write code here to call API with this data', email);
  };

  return (
    <div className='register-main box-border rounded-[10px] bg-rake_grey-500 pb-0 ss:min-w-[350px]'>
      <div className='relative box-border px-[15px] py-[26px] ss:p-[40px]'>
        <Button
          onClick={closeModal}
          className='absolute right-3.5 top-3.5 h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex w-full justify-center pt-3 ts:pt-0'>
          <Image
            url={rakeLogo}
            className='mx-auto h-[17px] ss:h-[20px] '
          />
        </div>
        <h3
          className='mb-4 mt-10 text-center text-[25px] font-bold leading-8 tracking-[-.01em]
            text-white ss:text-[32px]'
        >
          {t('Restoring_access_')}
        </h3>
        <form onSubmit={loginHandler}>
          <div className='mx-auto w-full ss:w-[335px]'>
            <section className='mb-4'>
              <label
                htmlFor='email'
                className='pt-4 font-sans text-[12px] font-medium leading-4 text-white'
              >
                {t('Enter_your_email_')}
              </label>
              <InputComponent
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type='email'
                className='mt-[8px] box-border !h-[50px] rounded-[10px] border-0 !bg-rake_background-500
                  px-4 py-0 leading-6 text-[#f5f5f5] focus-visible:!shadow-none
                  focus-visible:!outline-none'
              />
            </section>
          </div>
          <div className='mb-6 mt-10 flex justify-center gap-2.5'>
            <Button
              className='cursor-pointer bg-transparent px-8 py-2.5 hover:bg-transparent'
              onClick={closeModal}
            >
              {t('Cancel_')}
            </Button>
            <Button
              className='text-4 cursor-not-allowed bg-[#efefef] px-8 py-2.5 font-bold !text-[#8a8a8a]
                hover:bg-[#efefef] focus-visible:outline-none'
              type='submit'
            >
              {t('Continue_')}
            </Button>
          </div>
          <p className='text-center text-[14px] font-medium leading-[140%] tracking-[-.04em]
              text-[#8ca3b8]'>
            <Trans
              i18nKey='Not_account_'
              defaults={t(
                'Not_account_',
              )}
              components={{
                1: (
                  <span
                    className='cursor-pointer text-[#0099f4]'
                    onClick={() => openModal(RegisterModal)}
                  />
                ),
              }}
            />
          </p>
        </form>
      </div>
    </div>
  );
});

export default RecoverAccountModal;
