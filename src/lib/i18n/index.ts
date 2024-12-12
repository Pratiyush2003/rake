import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import keys from 'ramda/es/keys';
import { formatDistance, format } from 'date-fns';

import { dateFnsLocales } from './dateFnsLocales';

export enum LocaleKey {
  en = 'en',
  ru = 'ru',
  es = 'es',
  hi = 'hi',
  vi = 'vi',
  ja = 'ja',
  ko = 'ko',
  pt = 'pt',
  fi = 'fi',
  fr = 'fr',
  id = 'id',
  nl = 'nl',
  pl = 'pl',
  tr = 'tr',
  zh = 'zh',
}

export const localeNames = {
  [LocaleKey.en]: 'English',
  [LocaleKey.ru]: 'Русский',
  [LocaleKey.es]: 'Español',
  [LocaleKey.hi]: 'हिन्दी',
  [LocaleKey.vi]: 'Tiếng Việt',
  [LocaleKey.ja]: '日本語',
  [LocaleKey.ko]: '한국어',
  [LocaleKey.pt]: 'Português',
  [LocaleKey.fi]: 'Suomen',
  [LocaleKey.fr]: 'Français',
  [LocaleKey.id]: 'Indonesian',
  [LocaleKey.nl]: 'Nederlands',
  [LocaleKey.pl]: 'Polski',
  [LocaleKey.tr]: 'Türkçe',
  [LocaleKey.zh]: '中文',
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb(LocaleKey.en),
  init: () => {},
  cacheUserLanguage: () => {},
};
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LocaleKey.en,
    resources: {},
    debug: true,
    defaultNS: 'main',
    interpolation: {
      escapeValue: false,
      format: (value, customFormat, lng) => {
        const locale = dateFnsLocales[lng as keyof typeof dateFnsLocales];
        if (customFormat === 'ago') {
          return formatDistance(new Date(value), new Date(), {
            addSuffix: true,
            locale,
          });
        }
        if (customFormat === 'monthYear') {
          return format(value, 'LLLL yyyy', {
            locale,
          });
        }
        return '';
      },
    },
    react: {
      useSuspense: true,
    },
    // lng: JSON.parse(localStorage.getItem('persist:language') ?? '{}')?.locale || LocaleKey.en,
  });

/**
 * Adds single namespace to language
 */
const addNamespace = (
  lng: LocaleKey,
  ns: string,
  resources: Record<string, string>,
) => i18n.addResources(lng, ns, resources);

/**
 * Adds pack of namespaces to i18n
 */
const addResource = (
  lng: LocaleKey,
  bundle: Record<string, Record<string, string>>,
) => keys(bundle).forEach((ns) => i18n.addResources(lng, ns, bundle[ns]));

export { useTranslation } from 'react-i18next';
export { addNamespace, addResource };

export default i18n;
