import { FC, memo } from 'react';
import { useTranslation } from '@/i18n';

const CopyRight: FC = memo(() => {
  const { t } = useTranslation('footer');
  const currentYear = new Date().getFullYear();

  return (
    <div className='text-rake_grey-250 text-center text-sm font-normal leading-normal'>
      <p>{t('Copyright_', { nowYear: currentYear })}</p>
      <p>1 BTC = $63,889.00</p>
      <p>{t('Description_')}</p>
    </div>
  );
});

export default CopyRight;
