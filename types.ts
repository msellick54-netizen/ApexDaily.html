
export type TabType = 'overview' | 'demand' | 'coverage' | 'risk';

export interface FlavourData {
  name: string;
  total: number;
  readyToBuy: number;
  rate: number;
  phase: string;
  status: 'high' | 'medium' | 'low';
}

export interface CPIData {
  date: string;
  value: number;
}

export interface RiskData {
  factor: string;
  mitigation: string;
  status: 'Active Monitoring' | 'Planned' | 'Validated' | 'Planned Q2' | 'Confirmed';
  severity: 'high' | 'medium' | 'low';
}
