import React, { FC, memo, useState } from 'react';
import { Image } from '@/components/ui/core/image';
import { rakeLogo } from '@/assets/images/flags';
import { InputComponent } from '@/components/ui/input';
import { initialLoginFormValues, loginFormData } from '../constants';
import {
  CheckIcon,
  closeIcon,
  eyeCrossedIcon,
  eyeIconIcon,
  ServiceGoogleIcon,
} from '@/assets/images/header';
import { Button } from '@/components/ui/button';
import { useOpenModal } from '@/hooks/useOpenModal';
import RegisterModal from './RegisterModal';
import RecoverAccountModal from './RecoverAccountModal';
import { AppDispatch } from '@/store';
import '../header.css';
import { useTranslation, Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { signinRedirect } from '@/store/authoidc/actions';

const LoginModal: FC = memo(() => {
  const [formData, setFormData] = useState(initialLoginFormValues);
  const [checked, setChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { t } = useTranslation('login');
  const { closeModal, openModal } = useOpenModal();
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch<AppDispatch>();
  const loginHandler = () => {
    dispatch(signinRedirect());
  };

  return (
    <div
      className='login-main scroll-none box-border h-[99vh] max-h-[713px] select-none
        overflow-scroll rounded-[10px] bg-rake_grey-500 pb-0 ss:w-[572px]'
    >
      <div className='relative px-[15px] py-[26px] ss:p-[40px]'>
        <Button
          onClick={closeModal}
          className='absolute right-[14px] top-[14px] h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-[26px]'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex w-full justify-center pt-3 ts:pt-0'>
          <Image url={rakeLogo} className='mx-auto h-[20px]' />
        </div>
        <h3
          className='mb-4 mt-10 text-center text-[32px] font-bold leading-[32px] tracking-[-.01em]
            text-white'
        >
          {t('Login_')}
        </h3>
        <div className='mx-auto w-[95%] ss:w-[335px]'>
          {Object.keys(loginFormData).map((res) => {
            const { name, key, label, type } = loginFormData[res];
            return (
              <section key={key} className='mb-4 h-[74px]'>
                <label
                  htmlFor={name}
                  className='pt-4 font-sans text-[12px] font-medium leading-[16px] text-white'
                >
                  {t(label)}
                  <span className='text-[12px] font-medium text-rake_red-500'>
                    *
                  </span>
                </label>
                <div className='relative'>
                  <InputComponent
                    name={name}
                    value={formData[name]}
                    onChange={changeHandler}
                    type={
                      key === 'password'
                        ? showPassword
                          ? 'text'
                          : 'password'
                        : type
                    }
                    className='mt-2 box-border !h-[50px] rounded-[10px] border-0 !bg-rake_background-500 px-4
                      py-0 text-[14px] leading-[24px] text-[#f5f5f5] focus-visible:!shadow-none
                      focus-visible:!outline-none'
                  />
                  {key === 'password' && (
                    <Button
                      className='absolute right-0 top-0 h-[50px] w-[48px] cursor-pointer bg-transparent p-2.5
                        hover:bg-transparent'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Image
                        url={showPassword ? eyeCrossedIcon : eyeIconIcon}
                        alt='eye icon'
                      />
                    </Button>
                  )}
                </div>
              </section>
            );
          })}
        </div>
        <div className='mt-[26px] flex items-center justify-center'>
          {checked ? (
            <div
              className='box-border flex h-[24px] w-[24px] cursor-pointer items-center justify-center
                rounded-[4px] border-2 border-solid border-[#73b4ff] bg-[#0099f4]'
            >
              <Image
                onClick={() => setChecked(false)}
                url={CheckIcon}
                className='h-[13px] w-[10px]'
              />
            </div>
          ) : (
            <div
              onClick={() => setChecked(true)}
              className='box-border h-[24px] w-[24px] rounded-[4px] border-2 border-solid
                border-[#d7d7d7]'
            ></div>
          )}
          <p className='ml-4 text-[16px] font-normal text-[#f5f5f5]'>
            {t('Stay_logged_in_')}
          </p>
        </div>
        <div className='h-[72px]'></div>
        <p className='my-4 ml-4 text-center text-[16px] font-medium text-[#f5f5f5]'>
          {t('Continue_social_')}
        </p>
        <div
          className='mx-auto flex h-[48px] w-[48px] cursor-pointer items-center justify-center
            rounded-lg bg-[#f32e06]'
        >
          <Image url={ServiceGoogleIcon} />
        </div>
        <div className='mb-[24px] mt-[36px] flex justify-center gap-2.5'>
          <Button
            className='h-[32px] w-[108px] cursor-pointer bg-transparent px-[24px] py-[3px] text-[14px]
              font-bold uppercase hover:bg-transparent hover:text-[#1ab3ff] ts:h-[46px]
              ts:w-[132px] ts:text-[16px]'
            onClick={closeModal}
          >
            {t('Cancel_')}
          </Button>
          <Button
            className='h-[32px] w-[98px] cursor-pointer rounded-[10px] px-[24px] py-[3px] text-[14px]
              ts:h-[46px] ts:w-[115px] ts:text-[16px]'
            onClick={loginHandler}
          >
            {t('Login_')}
          </Button>
        </div>
        <div className='flex justify-between gap-[10px] ss:gap-[45px]'>
          <p
            className='text-left text-[14px] font-medium leading-[140%] tracking-[-.04em]
              text-[#8ca3b8]'
          >
            <Trans
              i18nKey='Not_account_'
              defaults={t('Not_account_')}
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
          <p
            className='text-left text-[14px] font-medium leading-[140%] tracking-[-.04em]
              text-[#8ca3b8]'
          >
            <Trans
              i18nKey='Forgot_password_'
              defaults={t('Forgot_password_')}
              components={{
                1: (
                  <span
                    className='cursor-pointer text-[#0099f4]'
                    onClick={() => openModal(RecoverAccountModal)}
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

export default LoginModal;
