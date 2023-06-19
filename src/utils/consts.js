export const LANDING_ROUTE = "/landing";
export const AUTH_ROUTE = "/authentication";
export const REGISTRATION_ROUTE = "/registration";
export const EDUCATION_ROUTE = "/";
export const TRADING_ROUTE = "/trading";
export const ACCOUNT_ROUTE = "/account";
export const marketHeaderCells = [
    {
        id: 'symbol',
        numeric: false,
        label: 'Символ',
    },
    {
        id: 'price',
        numeric: true,
        label: 'Последняя цена',
    },
    {
        id: 'change',
        numeric: true,
        label: 'Изм. (24ч)',
    },
]
export const historyHeaderCells = [
    {
        id: 'symbol',
        numeric: false,
        label: 'Символ',
    },
    {
        id: 'date',
        numeric: true,
        label: 'Дата',
    },
    {
        id: 'type',
        numeric: true,
        label: 'Тип',
    },
    {
        id: 'amount',
        numeric: true,
        label: 'Количество',
    },
    {
        id: 'price',
        numeric: true,
        label: 'Цена',
    },
]
export const assetsHeaderCells = [
    {
        id: 'symbol',
        numeric: false,
        label: 'Символ',
    },
    {
        id: 'amount',
        numeric: false,
        label: 'Каптитал',
    },
    {
        id: 'amountUSD',
        numeric: false,
        label: 'Стоимость',
    },
]

export const BAD_PASSWORD = 'BAD_PASSWORD';
export const EMPTY_VALUES = 'EMPTY_VALUES';
export const BAD_PHONE = 'BAD_PHONE';
export const BAD_EMAIL = 'BAD_EMAIL';
export const PASSWORD_LENGTH = 'PASSWORD_LENGTH';
export const BAD_BIRTHDAY = 'BAD_BIRTHDAY';
