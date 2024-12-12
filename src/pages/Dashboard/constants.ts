const rakeCoin = "https://rake.com/static/media/rake.comSymbol.8117d8d404bc9a8c19d2cb2a740b3570.svg";
const ethCoin = 'https://rake.com/static/media/ethereumIcon.2dd9ad8be91a3ee0f72704bd4abd439a.svg';

const priceChange = [
    {
        key: "1",
        title: "Rake Price:",
        value: "$0.00014648"
    },
    {
        key: "2",
        title: "24h Change",
        value: "$0.00 0.81%"
    },
    {
        key: "3",
        title: "24h High",
        value: "$0.0035"
    },
    {
        key: "4",
        title: "24h Low",
        value: "$0.0018"
    },
    {
        key: "5",
        title: "24h Volume in USD",
        value: "10,950,011.95"
    },
    {
        key: "6",
        title: "TVL",
        value: "$3.55M"
    },
    {
        key: "7",
        title: "Holders",
        value: "5,255"
    },
]

const rakeSupply = [
    {
        key: "1",
        title: "RAKE SUPPLY",
        mainIcon: "https://rake.com/static/media/ethereumIcon.2dd9ad8be91a3ee0f72704bd4abd439a.svg",
        tags: ['DEXSCREENER', 'ETHERSCAN'],
        icon: "https://rake.com/static/media/informationIcon.15e693450eb2af5d1f185d43ce1e7675.svg",
        firstDiv: {
            title: "Original RAKE Total Supply",
            value: "100,000,000,000 RAKE",
            tooltipContent: "The original total supply of Rake Coin is set at 100 billion. This represents the full count of Rake Coins that have been minted."
        },
        secondDiv: {
            title: 'Percentage of RAKE on ETH',
            value: '85%'
        },
        thirdDiv: {
            title: "Burnt RAKE on ETH",
            value: "500,000,000 RAKE",
            tooltipContent: "This refers to the amount of Rake Coins that have been permanently removed from circulation. Once burned, these coins can never be used or reintroduced."
        },
        fourthDiv: {
            title: "Total RAKE Supply after Burn",
            value: "100,000,000,000 RAKE",
            tooltipContent: "The Current Total RAKE Supply is the original number of tokens minted minus the tokens that have been burned. This figure includes both circulating tokens and those that may be locked up or reserved, providing a comprehensive overview of all existing RAKE tokens."
        },
        fifthDiv: {
            title: "Circulating RAKE on ETH",
            value: "500,000,000 RAKE",
            tooltipContent: "This represents the current total of Rake Coins in the market. Burned coins are permanently removed and not counted in this total."
        }
    },
    {
        key: "2",
        title: "RAKE SUPPLY",
        mainIcon: "https://rake.com/static/media/ethereumIcon.2dd9ad8be91a3ee0f72704bd4abd439a.svg",
        tags: ['DEXSCREENER', 'ETHERSCAN'],
        icon: "https://rake.com/static/media/informationIcon.15e693450eb2af5d1f185d43ce1e7675.svg",
        firstDiv: {
            title: "Original RAKE Total Supply",
            value: "100,000,000,000 RAKE",
            tooltipContent: "The original total supply of Rake Coin is set at 100 billion. This represents the full count of Rake Coins that have been minted."
        },
        secondDiv: {
            title: 'Percentage of RAKE on ETH',
            value: '85%'
        },
        thirdDiv: {
            title: "Burnt RAKE on ETH",
            value: "500,000,000 RAKE",
            tooltipContent: "This refers to the amount of Rake Coins that have been permanently removed from circulation. Once burned, these coins can never be used or reintroduced."
        },
        fourthDiv: {
            title: "Total RAKE Supply after Burn",
            value: "100,000,000,000 RAKE",
            tooltipContent: "The Current Total RAKE Supply is the original number of tokens minted minus the tokens that have been burned. This figure includes both circulating tokens and those that may be locked up or reserved, providing a comprehensive overview of all existing RAKE tokens."
        },
        fifthDiv: {
            title: "Circulating RAKE on ETH",
            value: "500,000,000 RAKE",
            tooltipContent: "This represents the current total of Rake Coins in the market. Burned coins are permanently removed and not counted in this total."
        }
    },
]

const tableData = [
    { id: 1, amount: '15,500,500', date: '2023-10-01', dollarValue: '$15,500,500', network: 'ETH', checkBurn: "BURN" },
    { id: 2, amount: '8,250,000', date: '2023-10-02', dollarValue: '$8,250,000', network: 'ETH', checkBurn: "BURN" },
    { id: 3, amount: '12,000,000', date: '2023-10-03', dollarValue: '$12,000,000', network: 'ETH', checkBurn: "BURN" },
    { id: 4, amount: '5,500,000', date: '2023-10-04', dollarValue: '$5,500,000', network: 'ETH', checkBurn: "BURN" },
    { id: 5, amount: '10,000,000', date: '2023-10-05', dollarValue: '$10,000,000', network: 'ETH', checkBurn: "BURN" },
    { id: 6, amount: '7,750,000', date: '2023-10-06', dollarValue: '$7,750,000', network: 'ETH', checkBurn: "BURN" },
    { id: 7, amount: '3,200,000', date: '2023-10-07', dollarValue: '$3,200,000', network: 'ETH', checkBurn: "BURN" },
    { id: 8, amount: '9,500,000', date: '2023-10-08', dollarValue: '$9,500,000', network: 'ETH', checkBurn: "BURN" },
    { id: 9, amount: '14,100,000', date: '2023-10-09', dollarValue: '$14,100,000', network: 'ETH', checkBurn: "BURN" },
    { id: 10, amount: '11,300,000', date: '2023-10-10', dollarValue: '$11,300,000', network: 'ETH', checkBurn: "BURN" },
    { id: 11, amount: '4,600,000', date: '2023-10-11', dollarValue: '$4,600,000', network: 'ETH', checkBurn: "BURN" },
    { id: 12, amount: '6,900,000', date: '2023-10-12', dollarValue: '$6,900,000', network: 'ETH', checkBurn: "BURN" },
];

export {
    rakeCoin,
    priceChange,
    ethCoin,
    rakeSupply,
    tableData,
}