import { IState } from '../types';

interface IGameProvider {
  id: number;
  name: 'originals' | 'softswiss';
  image: string;
  description: string;
  isEnable: boolean;
}

export interface IGame {
  id: number;
  providerId: number;
  slug: string;
  name: string;
  description?: string;
  image: string;
  type: string;
  //   type: EGameType;
  category: string;
  extra?: object;
  isEnable: boolean;
  listable: boolean;
  provider?: IGameProvider;
}

export enum EGamesEvents {
  GAMES_CONNECTED = 'GAMES_CONNECTED',
}

export interface GamesState extends IState<IGame[]> {
  isSearchBarFocused: boolean;
}
