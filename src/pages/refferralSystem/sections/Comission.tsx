import { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Comission: FC = memo(() => {
  const { t } = useTranslation('referral');
  return (
    <div>
      <h1 className='mb-[24px] text-[20px]'>{t('You_dont_have_referrals_')}</h1>
    </div>
  );
});
