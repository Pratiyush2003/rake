export interface FormField {
    label: string;
    type: string;
    require: boolean;
    key: string;
    name: string;
    placeHolder?: string;
    multipleInputs?: FormField[];
}

export interface FormData {
    [key: string]: FormField;
}

export interface InitialFormValues {
    [key: string]: string;
}

export interface Option {
    key: string;
    value: string;
    label?: string;
    icon?: string;
    minLimit?: string;
    name?: string;
}

export interface RupeeOption {
    key: string;
    label: string;
    icon: string;
    value: string;
}
  
export interface CurrencyOption {
    key: string;
    label: string;
    value?: string;
    icon: string;
}

export interface WalletDepositField {
    key: string;
    label: string;
    type: string;
    defaultValue: string;
    options?: CurrencyOption[];
    disabled: boolean;
}

export interface WalletModalProps{
    openTab?: 'Deposit_' | 'Withdraw_' | 'Buy_crypto_';
}

export type WalletDeposit = WalletDepositField[];
