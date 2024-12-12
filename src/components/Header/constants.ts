import { FacebookIcon, ServiceGoogleIcon, TwitterIcon } from "@/assets/images/header";
import { FormData, InitialFormValues } from "./types";

const loginFormData: FormData = {
    Email: {
        label: "Username_",
        type: "email",
        require: true,
        key: 'email',
        name: "email",
    },
    Password: {
        label: "Password_",
        type: "password",
        require: true,
        key: 'password',
        name: "password",
    }
};

const initialLoginFormValues: InitialFormValues = {};

for (const key in loginFormData) {
    initialLoginFormValues[loginFormData[key].name] = "";
}

const registerFormData: FormData = {
    Username: {
        label: "Username_",
        type: "text",
        require: true,
        key: 'username',
        name: "username",
        placeHolder: ""
    },
    Password: {
        label: "Password_",
        type: "password",
        require: true,
        key: 'password',
        name: "password",
        placeHolder: ""
    },
    "Date of birth": {
        label: "Date_of_birth_",
        type: "text",
        require: true,
        key: 'dob',
        name: "dob",
        placeHolder: "",
        multipleInputs: [
            {
                label: "",
                type: "number",
                require: true,
                key: 'day',
                name: "day",
                placeHolder: "DD",
            },
            {
                label: "",
                type: "select",
                require: true,
                key: 'month',
                name: "month",
                placeHolder: "month",
            },
            {
                label: "",
                type: "number",
                require: true,
                key: 'year',
                name: "year",
                placeHolder: "YYYY",
            },
        ]
    },
    Email: {
        label: "Email_",
        type: "email",
        require: true,
        key: 'email',
        name: "email",
        placeHolder: ""
    },
    'Code (optional)': {
        label: "Code_optional_",
        type: "text",
        require: false,
        key: 'code',
        name: "code",
        placeHolder: ""
    }
};

const initialRegisterFormValues: InitialFormValues = { day: "", month: "jan", year: "" };

for (const key in registerFormData) {
    initialRegisterFormValues[registerFormData[key].name] = "";
}

const registerOptions = [
    {
        key: "1",
        icon: ServiceGoogleIcon,
        bgColor: "bg-[#f32e06]",
    },
    {
        key: "2",
        icon: FacebookIcon,
        bgColor: "bg-[#3b5998]",
    },
    {
        key: "3",
        icon: TwitterIcon,
        bgColor: "bg-[#6441a5]",
    },
];

const monthOptions = [
    { key: "jan", value: "jan", maxDay: 31, label: "January" },
    { key: "feb", value: "feb", maxDay: 28, label: "February" },
    { key: "mar", value: "mar", maxDay: 31, label: "March" },
    { key: "apr", value: "apr", maxDay: 30, label: "April" },
    { key: "may", value: "may", maxDay: 31, label: "May" },
    { key: "jun", value: "jun", maxDay: 30, label: "June" },
    { key: "jul", value: "jul", maxDay: 31, label: "July" },
    { key: "aug", value: "aug", maxDay: 31, label: "August" },
    { key: "sep", value: "sep", maxDay: 30, label: "September" },
    { key: "oct", value: "oct", maxDay: 31, label: "October" },
    { key: "nov", value: "nov", maxDay: 30, label: "November" },
    { key: "dec", value: "dec", maxDay: 31, label: "December" },
];

const currencyOptions = [
    {
        key: "1",
        label: "BITCOIN",
        value: "Bitcoin",
        minLimit: "0.0000000",
        name: "BTC",
        icon: "https://dev.rake.com/static/media/bitcoinIcon.ef5b1e96bfe08d098ee08f6f459ec0f0.svg",
    },
    {
        key: "2",
        label: "LITECOIN",
        value: "Litecoin",
        minLimit: "0.0000000",
        name: "LTC",
        icon: "https://dev.rake.com/static/media/litecoinIcon.9c43d95508eb91ced7f4c99fe7fdf02b.svg",
    },
    {
        key: "3",
        label: "ETHEREUM",
        value: "Ethereum",
        minLimit: "0.0000000",
        name: "ETH",
        icon: "https://dev.rake.com/static/media/ethereumIcon.2dd9ad8be91a3ee0f72704bd4abd439a.svg",
    },
    {
        key: "4",
        label: "DOGECOIN",
        value: "Dogecoin",
        minLimit: "0.0000000",
        name: "DOGE",
        icon: "https://dev.rake.com/static/media/dogecoinIcon.4030956c002db49f498f05ca311d1af9.svg",
    },
    {
        key: "5",
        label: "TRON",
        value: "TRON",
        minLimit: "0.0000000",
        name: "TRX",
        icon: "https://dev.rake.com/static/media/tronIcon.f619a0d3c3e889c7676ed9103853d726.svg",
    },
    {
        key: "6",
        label: "BINANCE",
        value: "BNB",
        minLimit: "58111.00525",
        name: "BNC",
        icon: "https://dev.rake.com/static/media/binanceIcon.371b4f1e4d44ea045e6301d0ad2a0c01.svg",
    },
    {
        key: "7",
        label: "ETHEREUM",
        value: "USDC",
        minLimit: "0.0000000",
        name: "USDC",
        icon: "https://dev.rake.com/static/media/usdcIcon.ecc9faba24ac9cd7cc8229a80943db09.svg",
    },
    {
        key: "8",
        label: "ETHEREUM",
        value: "USDT",
        minLimit: "0.0000000",
        name: "USDT",
        icon: "https://dev.rake.com/static/media/usdtIcon.69c11fcc5bf88f07caa3b0b6e425cb8c.svg",
    },
    {
        key: "9",
        label: "ETHEREUM",
        value: "Rake Coin",
        minLimit: "0.0000000",
        name: "Rake",
        icon: "https://dev.rake.com/static/media/rake.comSymbol.8117d8d404bc9a8c19d2cb2a740b3570.svg",
    },
]

const rupeeOptions = [
    {
        key: "1",
        icon: "https://dev.rake.com/static/media/usdCoin.ff4f101dc7f1cc649ef71d361fb0f8ed.svg",
        label: "USD",
        value: "USD",

    },
    {
        key: "2",
        icon: "https://dev.rake.com/static/media/eurCoin.2b0ae7dc623e6af9ce1d6260359187c8.svg",
        label: "EUR",
        value: "EUR",

    },
    {
        key: "3",
        icon: "https://dev.rake.com/static/media/jpyCoin.f1f67562444d102ade7ca048f8e5e305.svg",
        label: "JPY",
        value: "JPY",

    },
    {
        key: "4",
        icon: "https://dev.rake.com/static/media/gbpCoin.e87394227ac34d07478884a86bb0bd0f.svg",
        label: "GBP",
        value: "GBP",

    },
    {
        key: "5",
        icon: "https://dev.rake.com/static/media/audCoin.8b48073a18b2344f0169ebd2acf1f636.svg",
        label: "AUD",
        value: "AUD",

    },
    {
        key: "6",
        icon: "https://dev.rake.com/static/media/chfCoin.ab0de9d77dac59000485b8da2de676db.svg",
        label: "CAD",
        value: "CAD",

    },
    {
        key: "7",
        icon: "https://dev.rake.com/static/media/nzdCoin.5f1e22388781de90b1eb7bcc51a55dfc.svg",
        label: "NZD",
        value: "NZD",

    },
    {
        key: "8",
        icon: "https://dev.rake.com/static/media/hkdCoin.03fdb210d782111c6ba20bcc4adcc5a4.svg",
        label: "CNY",
        value: "CNY",

    },
    {
        key: "9",
        icon: "https://dev.rake.com/static/media/tryCoin.a94e6c558e812811d580bd76a1d7c2e5.svg",
        label: "SEK",
        value: "SEK",

    },
    {
        key: "10",
        icon: "https://dev.rake.com/static/media/brlCoin.96287ca63cf0d998eeda48e979da294e.svg",
        label: "BRL",
        value: "BRL",

    },
    {
        key: "11",
        icon: "https://dev.rake.com/static/media/cnyCoin.3d0eee1a21c6354f96eb098a02dad461.svg",
        label: "MXN",
        value: "MXN",

    },
    {
        key: "12",
        icon: "https://dev.rake.com/static/media/mxnCoin.1d09f50fef59e30d7c30c997725082df.svg",
        label: "SGD",
        value: "SGD",

    },
    {
        key: "13",
        icon: "https://dev.rake.com/static/media/nokCoin.d3762b57dd7d45bc8dd03e3aad283e69.svg",
        label: "NOK",
        value: "NOK",

    },
    {
        key: "14",
        icon: "https://dev.rake.com/static/media/inrCoin.1766d8dc3e3161165309b5e343b4b46d.svg",
        label: "INR",
        value: "INR",

    },
    {
        key: "15",
        icon: "https://dev.rake.com/static/media/zarCoin.a622e0b7898688445f486c19cc08ad64.svg",
        label: "ZAR",
        value: "ZAR",

    },
    {
        key: "16",
        icon: "https://dev.rake.com/static/media/cadCoin.f52ad5b28dc21b87136a68133b11aa5f.svg",
        label: "CHF",
        value: "CHF",

    },
    {
        key: "17",
        icon: "https://dev.rake.com/static/media/sekCoin.d333dd697c3ae8006fb2cb6165d1fdae.svg",
        label: "SEK",
        value: "SEK",

    },
    {
        key: "18",
        icon: "https://dev.rake.com/static/media/sgdCoin.72835bf814f78be6b0f585d357690991.svg",
        label: "RUB",
        value: "RUB",

    },
    {
        key: "19",
        icon: "https://dev.rake.com/static/media/krwCoin.fe027cd7d3c1b7e921deeae4def8dfa1.svg",
        label: "KRW",
        value: "KRW",

    },
    {
        key: "20",
        icon: "https://dev.rake.com/static/media/rubCoin.d45d8e69918a3809839cd601d5dadb4a.svg",
        label: "ZAR",
        value: "ZAR",

    },
];

const walletDeposit = [
    {
        key: "currency",
        label: "Currency_",
        type: "select",
        defaultValue: "",
        options: currencyOptions,
        disabled: false
    },
    {
        key: "network",
        label: "Network",
        type: "text",
        defaultValue: "",

        disabled: true
    },
    {
        key: "depositAddress",
        label: "Your_deposit_address_",
        type: "text",
        defaultValue: "",

        disabled: true
    },

]

const walletWithdraw = [
    {
        key: "currency",
        label: "Currency_",
        type: "select",
        defaultValue: "",
        options: currencyOptions,
        disabled: false
    },
    {
        key: "network",
        label: "Network",
        type: "text",
        defaultValue: "",
        disabled: true
    },
    {
        key: "coinAddress",
        label: "Address_",
        type: "text",
        defaultValue: "",
        disabled: false
    },
    {
        key: "amount",
        label: "Amount_",
        type: "string",
        defaultValue: "",
        disabled: false,
        regex: /^(?!.*\.\..*)\d*\.?\d*$/
    },
]

const walletBuyCrypto = [
    {
        key: "1",
        label: "You_Pay_",
        type: "string",
        placeholder: "0.00",
        options: rupeeOptions,
        disabled: false,
        regex: /^(?!.*\.\..*)\d*\.?\d*$/
    },
    {
        key: "2",
        label: "You_Receive_",
        type: "string",
        placeholder: "0.00",
        options: currencyOptions,
        disabled: false,
        regex: /^(?!.*\.\..*)\d*\.?\d*$/
    },
];


const paymentAccept = [
    {
        key: "1",
        icon: "https://dev.rake.com/static/media/mastercardIcon.0ad178f0b5e1a615a16dfdba5b3985c3.svg"
    },
    {
        key: "2",
        icon: "https://dev.rake.com/static/media/visaIcon.86493a436269198eae652fa51047b576.svg"
    },
    {
        key: "3",
        icon: "https://dev.rake.com/static/media/applePayIcon.a3650546c1f47e6edf39406f4fb11484.svg"
    },
    {
        key: "4",
        icon: "https://dev.rake.com/static/media/googlePayIcon.539487c6a6fa76419132de7f05b385e0.svg"
    },
    {
        key: "5",
        icon: "https://dev.rake.com/static/media/idealPayIcon.6d9c7ebf18ce03eaa4ae01d9c728b135.svg"
    },

]

export {
    loginFormData,
    initialLoginFormValues,
    registerFormData,
    initialRegisterFormValues,
    registerOptions,
    monthOptions,
    currencyOptions,
    rupeeOptions,
    walletDeposit,
    walletWithdraw,
    walletBuyCrypto,
    paymentAccept,
}