import {
  casinoPageBanner,
  casinoPageBanner3,
  casinoPageBanner2,
  gamecherry,
  gamelive,
  altStarIcon,
  gamerake,
  gameshows,
  ClockIcon,
  providersIcon,
  casinoSportsbookIcon,
  diceIcon,
  spadesIcon
} from '@/assets/images/casinolobby';

interface casinomaincarousel {
  imgsSrc: string;
  alt: string;
  slidetitle: string;
  slidesubtitle: string;
  buttonText: string;
  link: string;
}

interface casinobutton {
  imgSrc: string;
  buttontxt: string;
  url: string;
  name: string;
}

interface CasinoSection {
  topic: string;
  topicimg: string;
}

export const dicetableData = [
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
  {
    id: 1,
    game: 'Mental',
    user: 'Atakan',
    betAmount: '0.2000',
    multiplier: '100x',
    payout: '0.0000',
  },
];

export const casinosection: CasinoSection[] = [
  {
    topic: 'Rake Originals',
    topicimg: gamerake,
  },
  {
    topic: 'Slots',
    topicimg: gamecherry,
  },
  {
    topic: 'Providers',
    topicimg: providersIcon,
  },
  {
    topic: 'New Releases',
    topicimg: ClockIcon,
  },
  {
    topic: 'Sportsbook',
    topicimg: casinoSportsbookIcon,
  },
  {
    topic: 'Live Casino',
    topicimg: diceIcon,
  },
  {
    topic: 'Favourites',
    topicimg: spadesIcon,
  }
];

export const casinobannerdata: casinomaincarousel[] = [
  {
    imgsSrc: casinoPageBanner,
    alt: 'casinoPageBanner',
    slidetitle: 'With every bet, a portion of Rake Coin is burned!',
    slidesubtitle: 'Get $10,000 Free!',
    buttonText: 'Go To Dashboard',
    link: '/dashboard',
  },
  {
    imgsSrc: casinoPageBanner2,
    alt: 'casinoPageBanner2',
    slidetitle: 'Sweet Treat',
    slidesubtitle: 'Sweet Bonanza Heat!',
    buttonText: 'PLAY NOW',
    link: '',
  },
  {
    imgsSrc: casinoPageBanner3,
    alt: 'casinoPageBanner3',
    slidetitle: 'Play Live Blackjack',
    slidesubtitle: 'Real Wins, No Flack!',
    buttonText: 'PLAY NOW',
    link: '',
  },
];

export const casinobuttondata: casinobutton[] = [
  {
    imgSrc: gamecherry,
    buttontxt: 'Lobby',
    url: '?casino-tabs=lobby',
    name: 'lobby'
  },
  {
    imgSrc: gamerake,
    buttontxt: 'Rake Originals',
    url: 'originals',
    name: 'originals'
  },
  {
    imgSrc: gamelive,
    buttontxt: 'Live Casino',
    url: 'live',
    name: "live"
  },
  {
    imgSrc: gameshows,
    buttontxt: 'Game Shows',
    url: 'shows',
    name : "shows"
  },
  {
    imgSrc: altStarIcon,
    buttontxt: 'Favourites',
    url: 'favourites',
    name : "favourites"
  },
  {
    imgSrc: ClockIcon,
    buttontxt: 'Recents',
    url: 'recents',
    name: 'recents'
  },
];

export const toggleTab = [
  {
    key: '1',
    title: 'My Bets',
  },
  {
    key: '2',
    title: 'All Bets',
  },
  {
    key: '3',
    title: 'High Rollers',
  },
];
