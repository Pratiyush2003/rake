export type ActiveNavType = 'My Bets' | 'All Bets' | 'High Rollers';

export interface RowPropType {
  game: string;
  user: string;
  betAmount: number;
  multiplier: number;
  payout: number;
}
