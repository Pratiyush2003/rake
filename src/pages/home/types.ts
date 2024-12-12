export interface RowPropType {
    game: string;
    user: string;
    betAmount: number;
    multiplier: number;
    payout: number;
}

export type ActiveNavType = 'Casino_' | 'Sports_';
export type PathType = 'redeem' | 'sports' | 'luckyspin' | 'bonus' | 'buyCrypto';

export interface BetModalPropType {
    data: RowPropType;
}

export interface UserModalPropType {
    data: RowPropType;
}