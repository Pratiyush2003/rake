import { useTranslation } from '@/i18n/index';
import { FC } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation('main');
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const urlNotFound = searchParams.get('url')
    ? `/${searchParams.get('url')}`
    : pathname;
  return (
    <div className={''}>
      <div className={''}>
        <h3 className={''}>{t('Ooops_', { url: urlNotFound })}</h3>
      </div>
    </div>
  );
};
