const overViewIcon =
  'https://rake.com/static/media/overviewIcon.31217993a11446753252c62d87ef14f9.svg';

const iFrameLink =
  'https://player.vimeo.com/video/823137206?h=328be16974&badge=0&autopause=0&player_id=0&app_id=58479';

const bitCoin =
  'https://stage.rake.com/static/media/bitcoinIcon.ef5b1e96bfe08d098ee08f6f459ec0f0.svg';

const upArrow =
  'https://stage.rake.com/static/media/arrowIconSelect.31527fadc0f67b084bcefba301392996.svg';

const uiConst = [
  {
    key: '1',
    para: 'All_of_our_games_',
    title: 'Casino_',
    span: 'Casino_formula_',
  },
  {
    key: '2',
    para: 'All_sports_bets_',
    title: 'Sportsbook_',
    span: 'Sportsbook_formula_',
  },
];

const dropdown = [
  {
    key: '1',
    buttonTitle: 'Overview_',
    navigate: 'overview',
    iconUrl:
      'https://stage.rake.com/static/media/overviewIcon.31217993a11446753252c62d87ef14f9.svg',
  },
  {
    key: '2',
    buttonTitle: 'Referred_users_',
    navigate: 'comission',
    iconUrl:
      'https://stage.rake.com/static/media/comissionIcon.bdb43a5f528ae134bed71dc449874d3a.svg',
  },
  {
    key: '3',
    buttonTitle: 'Referred_links_',
    navigate: 'referred-users',
    iconUrl:
      'https://stage.rake.com/static/media/referredUsersIcon.af0cf809112ddb5f5fe86098c4ee3655.svg',
  },
];

const refferedUserUI = [
  {
    key: 'campaignHits',
    title: 'Campaign Hits',
  },
  {
    key: 'totalDeposits',
    title: 'Total Deposits',
  },
];

const createCampaignModalInputs = [
  {
    key: 'campaignName',
    name: 'campaignName',
    required: true,
    label: 'Campaign Name',
    changeable: true,
  },
  {
    key: 'linkName',
    name: 'linkName',
    required: false,
    label: 'Link Name',
    changeable: true,
  },
  {
    key: 'variant',
    name: 'variant',
    required: false,
    label: 'Variant',
    changeable: false,
  },
];

const initialFormValues: { [key: string]: string } = {};

createCampaignModalInputs.forEach((input) => {
  if (input?.key === 'variant') {
    initialFormValues[input.name] = 'CASINO';
  } else {
    initialFormValues[input.name] = '';
  }
});

const testData = [
  {
    key: '1',
    title: 'testing',
    commission: '$0.00',
    coinUrl: bitCoin,
    referralUrl: 'https://stage.rake.com?a=testing 1',
    metaData: [
      {
        key: '1',
        label: 'Campaign hits',
        value: '0',
      },
      {
        key: '2',
        label: 'Referrals',
        value: '6',
      },
      {
        key: '3',
        label: 'Total Deposits',
        value: '$0.00',
      },
      {
        key: '4',
        label: 'Available Commission',
        value: '$0.00',
      },
      {
        key: '5',
        label: 'Total Commission',
        value: '$0.00',
      },
      {
        key: '6',
        label: 'Unique Deposits',
        value: '$0.00',
      },
      {
        key: '7',
        label: 'Commission Rate',
        value: '0',
      },
    ],
  },
  {
    key: '2',
    title: 'test',
    commission: '$0.00',
    coinUrl: bitCoin,
    referralUrl: 'https://stage.rake.com?a=testing 1',
    metaData: [
      {
        key: '1',
        label: 'Campaign hits',
        value: '0',
      },
      {
        key: '2',
        label: 'Referrals',
        value: '6',
      },
      {
        key: '3',
        label: 'Total Deposits',
        value: '$0.00',
      },
      {
        key: '4',
        label: 'Available Commission',
        value: '$0.00',
      },
      {
        key: '5',
        label: 'Total Commission',
        value: '$0.00',
      },
      {
        key: '6',
        label: 'Unique Deposits',
        value: '$0.00',
      },
      {
        key: '7',
        label: 'Commission Rate',
        value: '0',
      },
    ],
  },
];

export {
  overViewIcon,
  iFrameLink,
  uiConst,
  dropdown,
  refferedUserUI,
  bitCoin,
  createCampaignModalInputs,
  initialFormValues,
  testData,
  upArrow,
};
