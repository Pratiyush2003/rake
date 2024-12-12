import {
  CasinoIcon,
  LobbyIcon,
  RakeOriginalIcon,
  ExclusivesIcon,
  NewReleasesIcon,
  SlotsIcon,
  TableGamesIcon,
  LiveCasinoIcon,
  BlackJackIcon,
  RouletteIcon,
  SportsIcon,
  BetsIcon,
  LiveIcon,
  ScheduleIcon,
  FavouritesIcon,
  SoccerIcon,
  TennisIcon,
  FIFAIcon,
  BasketballIcon,
  IcoHockeyIcon,
  VolleyballIcon,
  TableTennisIcon,
  BaseballIcon,
  HandballIcon,
  GolfIcon,
  BoxingIcon,
  RugbyIcon,
  AussieRulesIcon,
  AmericanFootballIcon,
  CyclingIcon,
  SpecialsIcon,
  SnookerIcon,
  CricketIcon,
  DartsIcon,
  WaterPoloIcon,
  FutsalIcon,
  SquashIcon,
  Formula1Icon,
  BiathlonIcon,
  CounterStrikeIcon,
  LeagueofLegendIcon,
  Dota2Icon,
  StarcraftIcon,
  MMAIcon,
  MotorcycleRacingIcon,
  StockcarRacingIcon,
  RocketLeagueIcon,
  NBA2k19Icon,
  AOtennis2Icon,
  eFightingIcon,
  eCricketIcon,
  PromotionsIcon,
  AffiliateIcon,
  BlogIcon,
  LiveMainIcon,
  LiveSupportIcon,
  RedeemIcon,
  ApplePayIcon,
  GooglePayIcon,
  IdealPayIconIcon,
  MasterCardIcon,
  VisaIcon,
  ChatIcon,
  PurpleBoxIcon,
  GreenBoxIcon,
  YellowBoxIcon,
  BlueBoxIcon,
} from '@/assets/images/sideNavBar';

export const sideNavLinks = [
  {
    key: 'casino',
    title: 'Casino_',
    icon: CasinoIcon,
    isAccordion: true,
    accordionElement: [
      [
        {
          key: 'casino-lobby',
          title: 'Lobby_',
          icon: LobbyIcon,
          isAccordion: false,
          url: "/casino?casino-tabs=lobby"
        },
        {
          key: 'casino-rake-original',
          title: 'Rake_Originals_',
          icon: RakeOriginalIcon,
          isAccordion: false,
          url: "/casino/originals"
        },
        {
          key: 'casino-exclusives',
          title: 'Exclusives_',
          icon: ExclusivesIcon,
          isAccordion: false,
          url: "#"
        },
      ],
      [
        {
          key: 'casino-new-releases',
          title: 'New_Releases_',
          icon: NewReleasesIcon,
          isAccordion: false,
          url: "#"
        },
        {
          key: 'casino-slots',
          title: 'Casino_slots_',
          icon: SlotsIcon,
          isAccordion: false,
          url: "#"
        },
        {
          key: 'casino-table-games',
          title: 'Casino_table_games_',
          icon: TableGamesIcon,
          isAccordion: false,
          url: "/casino/table"
        },
        {
          key: 'casino-live-casino',
          title: 'Casino_live_casino_',
          icon: LiveCasinoIcon,
          isAccordion: false,
          url: "/casino/live"
        },
        {
          key: 'casino-blackjack',
          title: 'Blackjack_',
          icon: BlackJackIcon,
          isAccordion: false,
          url: "/casino/blackjacks"
        },
        {
          key: 'casino-roulette',
          title: 'Casino_roulette_',
          icon: RouletteIcon,
          isAccordion: false,
          url: "#"
        },
      ],
    ],
  },
  {
    key: 'sports',
    title: 'Sports',
    icon: SportsIcon,
    isAccordion: true,
    accordionElement: [
      [
        {
          key: 'sports-lobby',
          title: 'Lobby_',
          icon: LobbyIcon,
          isAccordion: false,
        },
        {
          key: 'sports-bets',
          title: 'Bets_',
          icon: BetsIcon,
          isAccordion: false,
        },
        {
          key: 'sports-live',
          title: 'Live_',
          icon: LiveIcon,
          isAccordion: false,
        },
      ],
      [
        {
          key: 'sports-schedule',
          title: 'Schedule_',
          icon: ScheduleIcon,
          isAccordion: false,
        },
        {
          key: 'sports-favourites',
          title: 'Favourites_',
          icon: FavouritesIcon,
          isAccordion: false,
        },
        {
          key: 'sports-soccer',
          title: 'Soccer_Sports_',
          icon: SoccerIcon,
          isAccordion: false,
        },
        {
          key: 'sports-tennis',
          title: 'Tennis_Sports_',
          icon: TennisIcon,
          isAccordion: false,
        },
        {
          key: 'sports-fifa',
          title: 'FIFA_Sports_',
          icon: FIFAIcon,
          isAccordion: false,
        },
        {
          key: 'sports-basketball',
          title: 'Basketball_Sports_',
          icon: BasketballIcon,
          isAccordion: false,
        },
        {
          key: 'sports-ico-hockey',
          title: 'Ice_Hockey_Sports_',
          icon: IcoHockeyIcon,
          isAccordion: false,
        },
        {
          key: 'sports-volleyball',
          title: 'Volley_Sports_',
          icon: VolleyballIcon,
          isAccordion: false,
        },
        {
          key: 'sports-table-tennis',
          title: 'Table_Tennis_Sports_',
          icon: TableTennisIcon,
          isAccordion: false,
        },
        {
          key: 'sports-baseball',
          title: 'Baseball_Sports_',
          icon: BaseballIcon,
          isAccordion: false,
        },
        {
          key: 'sports-handball',
          title: 'Handball_Sports_',
          icon: HandballIcon,
          isAccordion: false,
        },
        {
          key: 'sports-golf',
          title: 'Golf_Sports_',
          icon: GolfIcon,
          isAccordion: false,
        },
        {
          key: 'sports-boxing',
          title: 'Boxing_Sports_',
          icon: BoxingIcon,
          isAccordion: false,
        },
        {
          key: 'sports-rugby',
          title: 'Rugby_Sports_',
          icon: RugbyIcon,
          isAccordion: false,
        },
        {
          key: 'sports-aussie-rules',
          title: 'Aussie_Rules_Sports_',
          icon: AussieRulesIcon,
          isAccordion: false,
        },
        {
          key: 'sports-american-football',
          title: 'American_Football_Sports_',
          icon: AmericanFootballIcon,
          isAccordion: false,
        },
        {
          key: 'sports-cycling',
          title: 'Cycling_Sports_',
          icon: CyclingIcon,
          isAccordion: false,
        },
        {
          key: 'sports-specials',
          title: 'Specials_Sports_',
          icon: SpecialsIcon,
          isAccordion: false,
        },
        {
          key: 'sports-snooker',
          title: 'Snooker_Sports_',
          icon: SnookerIcon,
          isAccordion: false,
        },
        {
          key: 'sports-cricket',
          title: 'Cricket_Sports',
          icon: CricketIcon,
          isAccordion: false,
        },
        {
          key: 'sports-darts',
          title: 'Darts_Sports_',
          icon: DartsIcon,
          isAccordion: false,
        },
        {
          key: 'sports-water-polo',
          title: 'Water_Polo_Sports_',
          icon: WaterPoloIcon,
          isAccordion: false,
        },
        {
          key: 'sports-futsal',
          title: 'Futsal_Sports_',
          icon: FutsalIcon,
          isAccordion: false,
        },
        {
          key: 'sports-squash',
          title: 'Squash_Sports_',
          icon: SquashIcon,
          isAccordion: false,
        },
        {
          key: 'sports-formula1',
          title: 'Formula_1_Sports_',
          icon: Formula1Icon,
          isAccordion: false,
        },
        {
          key: 'sports-biathlon',
          title: 'Biathlon_Sports_',
          icon: BiathlonIcon,
          isAccordion: false,
        },
        {
          key: 'sports-counter-strike',
          title: 'Counter_Strike_Sports_',
          icon: CounterStrikeIcon,
          isAccordion: false,
        },
        {
          key: 'sports-league-of-legend',
          title: 'League_Of_Legends_Sports_',
          icon: LeagueofLegendIcon,
          isAccordion: false,
        },
        {
          key: 'sports-dota2',
          title: 'Dota_2_Sports',
          icon: Dota2Icon,
          isAccordion: false,
        },
        {
          key: 'sports-starcraft',
          title: 'Star_Craft_Sports',
          icon: StarcraftIcon,
          isAccordion: false,
        },
        {
          key: 'sports-mma',
          title: 'MMA_Sports_',
          icon: MMAIcon,
          isAccordion: false,
        },
        {
          key: 'sports-motorcycle-racing',
          title: 'Motorcycle_Racing_Sports_',
          icon: MotorcycleRacingIcon,
          isAccordion: false,
        },
        {
          key: 'sports-stockcar-racing',
          title: 'Stockcar_Racing_Sports_',
          icon: StockcarRacingIcon,
          isAccordion: false,
        },
        {
          key: 'sports-rocket-league',
          title: 'Rocket_League_Sports',
          icon: RocketLeagueIcon,
          isAccordion: false,
        },
        {
          key: 'sports-nba-2k19',
          title: 'NBA_2K19_Sports_',
          icon: NBA2k19Icon,
          isAccordion: false,
        },
        {
          key: 'sports-ao-tennis2',
          title: 'AO_Tennis_2_',
          icon: AOtennis2Icon,
          isAccordion: false,
        },
        {
          key: 'sports-efighting',
          title: 'e_Fighting_Sports_',
          icon: eFightingIcon,
          isAccordion: false,
        },
        {
          key: 'sports-ecricket',
          title: 'e_Cricket_Sports_',
          icon: eCricketIcon,
          isAccordion: false,
        },
      ],
    ],
  },
  {
    key: 'cryptoFeature',
    title: 'CryptoFeature_',
    icon: PromotionsIcon,
    isAccordion: true,
    accordionElement: [],
  },
  {
    key: 'promotions',
    title: 'Promotion_',
    icon: PromotionsIcon,
    isAccordion: false,
    accordionElement: [],
  },
  {
    key: 'affiliate',
    title: 'Affiliate_',
    icon: AffiliateIcon,
    isAccordion: false,
    accordionElement: [],
    link: '/referral', // Add your affiliate link here
  },
  {
    key: 'blog',
    title: 'Blog_',
    icon: BlogIcon,
    isAccordion: false,
    accordionElement: [],
    link: '/blog',
  },
  {
    key: 'live',
    title: 'Live_',
    icon: LiveMainIcon,
    isAccordion: false,
    accordionElement: [],
  },
  {
    key: 'live-support',
    title: 'LiveSupport_',
    icon: LiveSupportIcon,
    isAccordion: false,
    accordionElement: [],
  },
  {
    key: 'redeem',
    title: 'Redeem_',
    icon: RedeemIcon,
    isAccordion: false,
    accordionElement: [],
  },
];

export const PaymentOptions = [
  { icon: MasterCardIcon, key: 'MasterCardIcon' },
  { icon: VisaIcon, key: 'VisaIcon' },
  { icon: ApplePayIcon, key: 'ApplePayIcon' },
  { icon: GooglePayIcon, key: 'GooglePayIcon' },
  { icon: IdealPayIconIcon, key: 'IdealPayIconIcon' },
];

export const ResponsivenavBar = [
  {
    key: 'casino',
    title: 'Casino',
    icon: CasinoIcon,
  },
  {
    key: 'bets',
    title: 'Bets',
    icon: BetsIcon,
  },
  {
    key: 'sports',
    title: 'Sports',
    icon: SportsIcon,
  },
  {
    key: 'chat',
    title: 'Chat',
    icon: ChatIcon,
  },
];

export const BonusModalConstants = [
  {
    key: '1',
    icon: PurpleBoxIcon,
    title: 'SPORTSBOOK WEEKLY BONUS',
    accumulated: '0.00',
  },
  { key: '2', icon: GreenBoxIcon, title: 'WEEKLY BONUS', accumulated: '0.00' },
  {
    key: '3',
    icon: YellowBoxIcon,
    title: 'MONTHLY BONUS',
    accumulated: '0.00',
  },
  { key: '4', icon: BlueBoxIcon, title: 'RAKEBACK BONUS', accumulated: '0.00' },
];

export const fetchCryptoData = async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&z=1h&price_change_percentage=1h',
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return null;
  }
};
