export interface RecentTradeType {
  key: string;
  profileURL: string;
  userName: string;
  tradeWithIcon: string;
  wager: number;
  multiplier: number;
  'p&l': number;
  roi: number;
}

export interface CryptoDataType {
  name: string;
  title: string;
  precision: number;
  max_multiplier: number;
  bust_buffer: number;
  buffer_multiplier: number;
  max_user_position: number;
  max_pnl_cut_position: number;
  interest_rate: number;
  interest_hours: number;
  interest_threshold: number;
  base_rate: number;
  rate_multiplier: number;
  rate_exponent: number;
  position_multiplier: number;
  fixed_cost: number;
  impact_cost: number;
  impact_speed: number;
  icon_id: string;
  ui_color: string;
  sort_order: number;
}

export interface popOverDataTypes {
  key: string;
  value: number | string;
}
