import { ENetwork, IBase, IState } from '../types';
import { ICurrency } from '../currencies/types';
import { IFiat } from '../fiats/types';
import { IGame } from '../game/types';
import { IUser } from '../user/types';

export enum EBetStatus {
  OPEN = 'OPEN',
  WIN = 'WIN',
  LOSE = 'LOSE',
  REFUND = 'REFUND',
  ROLLBACK = 'ROLLBACK',
}

export interface IBet extends IBase {
  hash: string;
  gameId: string;
  referralId?: number;
  currencyNetwork: ENetwork;
  currencyAddress: string;
  amount: bigint;
  winAmount: bigint;
  amountUsd: number;
  winAmountUsd: number;
  fiatId?: string;
  date: string;
  status: EBetStatus;
  multiplier?: number;
  extra?: object;
  description?: string;
  game?: IGame;
  user?: IUser;
  currency?: ICurrency;
  fiat?: IFiat;
}

export enum EBetsEvents {
  BETS_CONNECTED = 'recent-bets',
  BETS_UPDATE = 'BETS_UPDATE',
  PLACE_BET = 'PLACE_BET',
  CLOSE_BET = 'CLOSE_BET',
}

export interface BetsState extends IState<IBet[]> {}
