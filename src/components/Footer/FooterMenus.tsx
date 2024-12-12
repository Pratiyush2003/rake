import { FC, memo } from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from '@/i18n';
import { changeLanguage } from 'i18next';

const FooterMenus: FC = memo(() => {
  const { t } = useTranslation('footer');

  return (
    <div
      className='relative grid w-full grid-cols-1 gap-10 font-manrope before:absolute
        before:bottom-0 before:-mb-[10px] before:h-[2px] before:w-full
        before:bg-rake_grey-500 before:content-[""] sm:grid-cols-2 md:text-left
        lg:grid-cols-4'
    >
      {/* Sports */}
      <div className='flex flex-col gap-2 font-bold leading-[22px]'>
        <strong className='text-white'>Sports</strong>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/'
        >
          {t('Sports_home_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/live'
        >
          {t('Sports_live_')}
        </a>
      </div>
      {/* Casino */}
      <div className='flex flex-col gap-2 font-bold leading-[22px]'>
        <strong className='text-white'>{t('Casino_')}</strong>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/casino'
        >
          {t('Casino_games_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/promotions'
        >
          {t('Casino_promotions_')}
        </a>
      </div>
      {/* Support */}
      <div className='flex flex-col gap-2 font-bold leading-[22px]'>
        <strong className='text-white'>{t('Support_')}</strong>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/referral'
        >
          {t('Support_referral_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/?modal=ranking-system'
        >
          {t('Support_ranking_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/policies/responsible-gaming-policies'
        >
          {t('Support_gamble_aware_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/'
        >
          {t('Support_live_support_')}
        </a>
      </div>
      {/* Community */}
      <div className='flex flex-col gap-2 font-bold leading-[22px]'>
        <strong className='text-white'>{t('Community_')}</strong>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='https://www.facebook.com/RakeCasino'
        >
          {t('Community_facebook_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='https://twitter.com/RakeCasino'
        >
          {t('Community_twitter_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='https://t.me/RakeCasino'
        >
          {t('Community_telegram_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='https://www.instagram.com/rakecasino'
        >
          {t('Community_instagram_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='#'
        >
          {t('Community_shop_')}
        </a>
      </div>
      {/* About us */}
      <div className='box-content flex flex-col gap-2 font-bold leading-[22px]'>
        <strong className='text-white'>{t('About_us_')}</strong>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/policies'
        >
          {t('About_us_privacy_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/policies/terms'
        >
          {t('About_us_terms_')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/policies/anti-money-laundering'
        >
          {t('AML_policy')}
        </a>
        <a
          className='inline-block font-normal text-white no-underline transition-colors duration-300
            hover:text-rake_blue-500 hover:no-underline'
          href='/policies/responsible-gaming-policies'
        >
          {t('Responsibile_gaming')}
        </a>
      </div>
      {/* Language */}
      <div className='flex flex-col gap-2 font-bold leading-[22px]'>
        <strong className='text-white'>{t('Language_')}</strong>
        <LanguageDropdown onChange={changeLanguage} />
        <a
          className='inline-block font-normal text-rake_grey-250 no-underline transition-colors
            duration-300 hover:text-rake_blue-500 hover:no-underline'
          href='mailto:business@rake.com'
        >
          business@rake.com
        </a>
        <a
          className='inline-block font-normal text-rake_grey-250 no-underline transition-colors
            duration-300 hover:text-rake_blue-500 hover:no-underline'
          href='mailto:shop@rake.com'
        >
          shop@rake.com
        </a>
        <a
          className='inline-block font-normal text-rake_grey-250 no-underline transition-colors
            duration-300 hover:text-rake_blue-500 hover:no-underline'
          href='mailto:contact@rake.com'
        >
          contact@rake.com
        </a>
        <a
          className='inline-block font-normal text-rake_grey-250 no-underline transition-colors
            duration-300 hover:text-rake_blue-500 hover:no-underline'
          href='mailto:pr@rake.com'
        >
          pr@rake.com
        </a>
      </div>
    </div>
  );
});

export default FooterMenus;
