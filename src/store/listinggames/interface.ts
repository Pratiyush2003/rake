export interface Game {
    id: string;
    name: string;
    category: string;
    providerId: string;
    thumbnail: string;
  }
  
  export interface GamesState {
    games: Game[];
    loading: boolean;
    error: string | null;
  }
  