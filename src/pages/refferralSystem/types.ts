export interface InputsType {
  key: string;
  required: boolean;
  label: string;
  changeable: boolean;
  name: string;
}

export enum activeTabType {
  overview = 'overview',
  comission = 'comission',
  referredUsers = 'referred-users',
}

export interface CampaignModalFormDataTypes {
  campaignName: string;
  linkName: string;
  variant: 'CASINO';
}
