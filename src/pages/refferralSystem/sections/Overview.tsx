import { memo, FC } from 'react';
import { iFrameLink, uiConst } from '../constants';
import { useTranslation } from 'react-i18next';
import '../refferralSystem.css';

export const Overview: FC = memo(() => {
  const { t } = useTranslation('referral');
  return (
    <div>
      <h5
        className='max-w-full font-sans text-[18px] font-medium leading-[1.3] tracking-[-.03em]
          text-[#f5f5f5] ss:text-[20px]'
      >
        {t('We_are_excited_')}
      </h5>
      <div className='iframe_main'>
        <iframe src={iFrameLink} className='iframe_wrap'></iframe>
      </div>
      <h4 className='mb-[20px] text-[24px] font-bold uppercase tracking-[-.02em] text-[#f5f5f5]'>
        {t('Revenue_model_')}
      </h4>
      <div className='flex flex-wrap gap-[20px] ss:gap-[40px]'>
        {uiConst.map((res) => (
          <div key={res?.key} className=''>
            <p
              className='mb-[16px] block whitespace-pre-wrap text-[12px] leading-[1.5] tracking-[-.03em]
                text-white'
            >
              {t(`${res?.para}`)}
            </p>
            <div className='w-fit rounded-xl bg-transparent ss:bg-rake_grey-500 p-0 ss:p-5'>
              <span className='text-[16px] font-semibold'>
                {t(`${res?.title}`)}
              </span>
              <span
                className='mt-[10px] block rounded-[8px] bg-[#235C96] px-[12px] py-[4px] text-[12px]
                  font-bold uppercase ss:text-[16px]'
              >
                {t(`${res?.span}`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
