import { ENetwork, IBase, IState, RankAlias } from '../types';
import { IGame } from '../game/types';

export interface IUserInfo {
  email: string;
  username: string;
  rankName: RankAlias;
}

export interface IUser extends IUserInfo, IBase {
  avatar?: string;

  birthday?: Date;

  kyc?: string;

  wallets?: IWallet[];

  favorites?: IGame[];

  prizeRecoveryAt?: Date;
}

export interface IWallet {
  address: string;
  network: ENetwork;
}

export enum EUserEvents {
  USER_CONNECTED = 'USER_CONNECTED',
  USER_UPDATE = 'USER_UPDATE',
}

export interface UserState extends IState<IUser | null> {}
