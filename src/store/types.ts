export interface IBase {
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum ENetworkEvm {
  ETHEREUM = 'ETHEREUM',
  BINANCE = 'BINANCE',
  FANTOM = 'FANTOM',
}

export enum ENetworkNoEvm {
  BITCOIN = 'BITCOIN',
  DOGECOIN = 'DOGECOIN',
  LITECOIN = 'LITECOIN',
  // SOLANO = 'SOLANO',
}

export const ENetwork = { ...ENetworkEvm, ...ENetworkNoEvm };
export type ENetwork = ENetworkEvm | ENetworkNoEvm;

export enum RankAlias {
  crusader = 'crusader',
  archon = 'archon',
  legend = 'legend',
  ancient = 'ancient',
  divine = 'divine',
  immortal = 'immortal',
}

export interface IState<T> {
  data: T;
  status: string;
  loading: boolean;
}
