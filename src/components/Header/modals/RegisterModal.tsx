import { FC, memo, useState } from 'react';
import { Image } from '@/components/ui/core/image';
import { rakeLogo } from '@/assets/images/flags';
import { InputComponent } from '@/components/ui/input';
import {
  initialRegisterFormValues,
  registerFormData,
  registerOptions,
  monthOptions,
} from '../constants';
import { Button } from '@/components/ui/button';
import { useOpenModal } from '@/hooks/useOpenModal';
import LoginModal from './LoginModal';
import {
  CheckIcon,
  closeIcon,
  eyeCrossedIcon,
  eyeIconIcon,
} from '@/assets/images/header';
import './modal.css';
import { Trans, useTranslation } from 'react-i18next';

interface dataInterface {
  key: string | undefined;
  value: string | undefined;
  maxDay: number | undefined;
  label: string | undefined;
}

const RegisterModal: FC = memo(() => {
  const [formData, setFormData] = useState(initialRegisterFormValues);
  const [checked, setChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { t } = useTranslation('registration');
  const { closeModal, openModal } = useOpenModal();

  const registerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Write code here to call API with this data:', formData);
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'month') {
      if (formData?.day) {
        const currentMonth = monthOptions.find(
          (option: dataInterface) => option.value === value,
        );
        const maxDay = currentMonth?.maxDay;
        if (maxDay !== undefined && +formData.day > +maxDay) {
          setFormData((prevData) => ({
            ...prevData,
            ['day']: `${maxDay}`,
          }));
          return;
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        month: value,
      }));
      return;
    }

    if (name === 'year') {
      if (value.length > 4) {
        return;
      }
    }

    if (name === 'day') {
      const currentMonth = monthOptions.find(
        (option: dataInterface) => option.value === formData.month,
      );
      const maxDay = currentMonth?.maxDay;

      if (maxDay !== undefined && +value > maxDay) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: `${maxDay}`,
        }));
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className='scroll-none register-main box-border h-full max-h-[460px] min-h-[400px]
        overflow-hidden rounded-[10px] bg-rake_grey-500 pb-0 ss:max-h-[570px]
        ss:w-[458px] ss:min-w-[350px]'
    >
      <div className='relative box-border px-2.5 py-[26px] ss:px-5 ss:py-10'>
        <Button
          onClick={closeModal}
          className='absolute right-3.5 top-3.5 h-fit w-fit cursor-pointer bg-transparent !p-0
            hover:bg-transparent focus-visible:outline-none ss:right-[26px] ss:top-5'
        >
          <Image url={closeIcon} alt='close' className='h-[14px] w-[14px]' />
        </Button>
        <div className='flex w-full justify-center'>
          <Image url={rakeLogo} className='mx-auto h-[20px] pt-3 ts:pt-0' />
        </div>
        <h3
          className='my-5 text-center text-[32px] font-bold leading-[32px] tracking-[-.01em]
            text-white'
        >
          {t('Registration_')}
        </h3>
        <div className='register-main max-h-[310px] !w-auto overflow-auto ss:max-h-[418px] ss:px-5'>
          <div className='ss:px-5'>
            {Object.keys(registerFormData).map((res) => {
              const {
                label,
                type,
                require,
                key,
                name,
                placeHolder,
                multipleInputs,
              } = registerFormData[res];
              if (key === 'dob' && multipleInputs) {
                return (
                  <section key={key} className='mb-4 h-[74px]'>
                    <label
                      htmlFor={name}
                      className='pt-4 font-sans text-[12px] font-medium leading-[16px] text-white'
                    >
                      {t(`${label}`)}
                      <span className='text-[12px] font-medium text-rake_red-500'>
                        *
                      </span>
                    </label>
                    <div className='flex gap-3'>
                      {multipleInputs.map((input) => {
                        {
                          label;
                        }
                        if (input.type === 'select') {
                          return (
                            <select
                              key={input.key}
                              name={input.name}
                              onChange={changeHandler}
                              required={input.require}
                              className='select-input mt-[8px] h-[50px] w-full rounded-[10px] border-0
                                bg-rake_background-500 p-2 px-4 py-0 text-[0.875rem] text-[#f5f5f5]
                                focus-visible:outline-none'
                            >
                              <option value='' disabled>
                                {input.placeHolder}
                              </option>
                              {monthOptions.map((month) => (
                                <option key={month.key} value={month.value}>
                                  {month.label}
                                </option>
                              ))}
                            </select>
                          );
                        }
                        return (
                          <InputComponent
                            key={input.key}
                            name={input.name}
                            value={formData[input?.name]}
                            onChange={changeHandler}
                            placeholder={input.placeHolder}
                            type={'number'}
                            className={`input-reg mt-[8px] box-border !h-[50px] rounded-[10px] border-0
                            !bg-rake_background-500 px-4 py-0 text-[14px] leading-[24px] text-[#f5f5f5]
                            focus-visible:!shadow-none focus-visible:!outline-none
                            ${input.type === 'number' ? 'no-spinner' : ''}`}
                          />
                        );
                      })}
                    </div>
                  </section>
                );
              }

              return (
                <section key={key} className='mb-4 h-[74px]'>
                  <label
                    htmlFor={name}
                    className='pt-4 font-sans text-[12px] font-medium leading-[16px] text-white'
                  >
                    {t(`${label}`)}

                    {require && (
                      <span className='text-[12px] font-medium text-rake_red-500'>
                        *
                      </span>
                    )}
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
                      placeholder={placeHolder}
                      className='input-reg mt-[8px] box-border !h-[50px] rounded-[10px] border-0
                        !bg-rake_background-500 px-4 py-0 text-[14px] leading-[24px] text-[#f5f5f5]
                        focus-visible:!shadow-none focus-visible:!outline-none'
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
          <div className='mt-10 flex items-center justify-center'>
            {checked ? (
              <div
                className='box-border flex h-[24px] w-[24px] items-center justify-center rounded-[4px]
                  border-2 border-solid border-[#73b4ff] bg-[#0099f4]'
              >
                <Image
                  onClick={() => {
                    setChecked(false);
                  }}
                  url={CheckIcon}
                  className='h-[13px] w-[10px]'
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  setChecked(true);
                }}
                className='box-border h-[24px] w-[24px] rounded-[4px] border-2 border-solid
                  border-[#d7d7d7] hover:border-[#19b2ff]'
              ></div>
            )}
            <p
              className='ml-4 w-[184px] font-manrope text-[12px] font-normal leading-[18px]
                tracking-[-.02em] text-[#f5f5f5] ss:w-auto'
            >
              <Trans
                i18nKey='I_read_the_terms_conditions_and_privacy_policy_'
                defaults={t('I_read_the_terms_conditions_and_privacy_policy_')}
                components={{
                  1: <span className='cursor-pointer text-[#0099f4]' />,
                  3: <span className='cursor-pointer text-[#0099f4]' />,
                }}
              />
            </p>
          </div>
          <Button
            type='submit'
            className='mt-6 w-full cursor-not-allowed bg-[#efefef] text-[#8a8a8a] hover:bg-[#efefef]
              focus-visible:outline-none'
            onClick={registerHandler}
          >
            {t('Confirm_')}
          </Button>
          <p className='text-4 mb-4 mt-6 text-center font-medium text-white'>
            {t('Continue_social_')}
          </p>
          <div className='flex justify-center gap-5'>
            {registerOptions.map((res) => (
              <div
                key={res.key}
                className={`${res.bgColor} flex h-[48px] w-[48px] cursor-pointer items-center justify-center
                rounded-[10px]`}
              >
                <Image url={res.icon} />
              </div>
            ))}
          </div>
          <p className='mt-6 text-center text-[14px] font-medium text-[#8ca3b8]'>
            <Trans
              i18nKey='Already_have_an_account'
              defaults={t('Already_have_an_account')}
              components={{
                1: (
                  <span
                    onClick={() => openModal(LoginModal)}
                    className='cursor-pointer text-[#0099f4]'
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

export default RegisterModal;
