import { FC, memo, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import {
  flagChineseIcon,
  flagFinIcon,
  flagFrenchIcon,
  flagHindiIcon,
  flagIndoneziIcon,
  flagJapanIcon,
  flagKoreaIcon,
  flagNiderlandIcon,
  flagPolskyIcon,
  flagPortoIcon,
  flagRussianIcon,
  flagSpanishIcon,
  flagTurkeyIcon,
  flagUnitedKingdomIcon,
  flagVietnamIcon,
} from '@/assets/images/flags';

type Language = {
  name: string;
  countryFlagIcon: string;
  shortName: string;
};

const LanguageDropdown: FC<{ onChange: (value: string) => void }> = memo(
  ({ onChange }) => {
    const languages: Array<Language> = [
      {
        name: 'English',
        countryFlagIcon: flagUnitedKingdomIcon,
        shortName: 'en',
      },
      {
        name: 'РУССКИЙ',
        countryFlagIcon: flagRussianIcon,
        shortName: 'ru',
      },
      {
        name: '中文',
        countryFlagIcon: flagChineseIcon,
        shortName: 'zh',
      },
      {
        name: 'ESPAÑOL',
        countryFlagIcon: flagSpanishIcon,
        shortName: 'es',
      },
      {
        name: 'हिन्दी',
        countryFlagIcon: flagHindiIcon,
        shortName: 'hi',
      },
      {
        name: 'TIẾNG VIỆT',
        countryFlagIcon: flagVietnamIcon,
        shortName: 'vi',
      },
      {
        name: 'FRANÇAIS',
        countryFlagIcon: flagFrenchIcon,
        shortName: 'fr',
      },
      {
        name: '日本語',
        countryFlagIcon: flagJapanIcon,
        shortName: 'ja',
      },
      {
        name: '한국어',
        countryFlagIcon: flagKoreaIcon,
        shortName: 'ko',
      },
      {
        name: 'PORTUGUÊS',
        countryFlagIcon: flagPortoIcon,
        shortName: 'pt',
      },
      {
        name: 'SUOMEN',
        countryFlagIcon: flagFinIcon,
        shortName: 'fi',
      },
      {
        name: 'INDONESIA',
        countryFlagIcon: flagIndoneziIcon,
        shortName: 'id',
      },
      {
        name: 'Nederlands',
        countryFlagIcon: flagNiderlandIcon,
        shortName: 'nl',
      },
      {
        name: 'POLSKI',
        countryFlagIcon: flagPolskyIcon,
        shortName: 'pl',
      },
      {
        name: 'TÜRKÇE',
        countryFlagIcon: flagTurkeyIcon,
        shortName: 'tr',
      },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState<Language>({
      name: 'English',
      countryFlagIcon: flagUnitedKingdomIcon,
      shortName: 'en',
    });
    const [isOpen, setIsOpen] = useState(false);

    const onSelect = (language: Language) => {
      setSelectedLanguage(language);
      onChange(language.shortName);
    };

    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className='border-0 bg-transparent text-left outline-none'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-x-2 text-sm'>
              <img
                className='h-4 w-4'
                src={selectedLanguage.countryFlagIcon}
                alt='flagUnitedKingdomIcon'
              />
              {selectedLanguage.name}
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='max-h-80 overflow-y-auto bg-rake_grey-500 text-white'>
          {languages.map((language) => (
            <DropdownMenuItem
              className={`rounded-lg text-base hover:!bg-rake_grey-200 hover:!text-white
              ${selectedLanguage.name === language.name && 'bg-rake_grey-200'}`}
              key={language.name}
              onClick={() => onSelect(language)}
            >
              <div className='flex items-center gap-x-2'>
                <img
                  className='h-4 w-4'
                  src={language.countryFlagIcon}
                  alt='flagUnitedKingdomIcon'
                />
                {language.name}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

export default LanguageDropdown;
