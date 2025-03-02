export interface AccordionChild {
  key: string;
  title: string;
  icon: string;
  isAccordion: boolean;
  url?: string;
}
export interface ResponsiveNavBarProp {
  toggleSideBar: () => void;
}

export interface Language {
  key: string;
  label: string;
  icon: string;
  alticon?: string;
  value: string;
  url?: string
}

export interface SideBarProps {
  isSideBarOpen: boolean;
  handleLanguageAccordion: () => void;
  handleToggle: () => void;
  handleLanguageChange: (language: Language) => void;
  handleOpen: (value: number, close: boolean) => void;
  isToggled: boolean;
  open: number;
  languageAccordion: boolean;
  currentLanguage: Language;
  filteredCryptoData: Crypto[] | [];
  cryptoSearchTerm: string;
  searchCryptoHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cryptoLoading: boolean;
}

export interface SideBarDesktopProps {
  isSideBarOpen?: boolean;
  isTabletScreen?: boolean;
}

export interface Crypto {
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string;
  circulating_supply?: number;
  current_price?: number;
  fully_diluted_valuation?: number;
  high_24h?: number;
  id?: string;
  image?: string;
  last_updated?: string;
  low_24h?: number;
  market_cap?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  market_cap_rank?: number;
  max_supply?: number;
  name: string;
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  roi?: null | string | number;
  symbol?: string;
  total_supply?: number;
  total_volume?: number;
  price_change_percentage_1h_in_currency: number;
}


// key: string; title: string; icon: string; isAccordion: boolean; url: string; } | { key: string; title: string; icon: string; isAccordion: boolean;