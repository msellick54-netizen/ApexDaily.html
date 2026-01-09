
import { FlavourData, CPIData, RiskData } from './types';

export const FLAVOUR_DATA: FlavourData[] = [
  { name: 'Unflavoured', total: 15, readyToBuy: 3, rate: 20.0, phase: 'Phase 1 (Q1)', status: 'medium' },
  { name: 'Chocolate', total: 11, readyToBuy: 3, rate: 27.3, phase: 'Phase 2 (Q2)', status: 'low' },
  { name: 'Berry', total: 5, readyToBuy: 0, rate: 0.0, phase: 'Phase 3 (Q3)', status: 'high' },
  { name: 'Vanilla', total: 3, readyToBuy: 2, rate: 66.7, phase: 'Excluded (n too small)', status: 'low' },
  { name: 'Other', total: 7, readyToBuy: 0, rate: 0, phase: '-', status: 'low' },
];

export const PREFERENCE_CHART_DATA = [
  { name: 'Unflavoured', value: 15 },
  { name: 'Chocolate', value: 11 },
  { name: 'Berry', value: 5 },
  { name: 'Vanilla', value: 3 },
  { name: 'Other', value: 7 },
];

export const INTENT_CHART_DATA = [
  { name: 'Unflavoured', total: 15, rate: 20 },
  { name: 'Chocolate', total: 11, rate: 27 },
  { name: 'Berry', total: 5, rate: 0 },
];

export const COVERAGE_CHART_DATA = [
  { name: '2 SKUs', coverage: 60, target: 65 },
  { name: '3 SKUs', coverage: 72, target: 65 },
];

export const CPI_CHART_DATA: CPIData[] = [
  { date: 'Feb 24', value: 103.8 },
  { date: 'May 24', value: 110 },
  { date: 'Aug 24', value: 123 },
  { date: 'Nov 24', value: 135 },
  { date: 'Feb 25', value: 143 },
  { date: 'May 25', value: 152 },
  { date: 'Aug 25', value: 162 },
  { date: 'Nov 25', value: 170 },
  { date: 'Jan 26', value: 176.5 },
];

export const RISK_TABLE_DATA: RiskData[] = [
  { factor: 'Commodity Cost Inflation', mitigation: 'Monitor Cocoa CPI quarterly; delay Phase 2 if CPI > 180', status: 'Active Monitoring', severity: 'medium' },
  { factor: 'Phase 1 Underperformance', mitigation: 'Pivot plan: accelerate Phase 2, test pricing, bundle strategy', status: 'Planned', severity: 'low' },
  { factor: 'Berry 0% Ready-to-Buy', mitigation: 'Phase 3 timing: Q3 (seasonal), post-market education from P1/P2', status: 'Validated', severity: 'low' },
  { factor: 'Small Sample Bias (n=43)', mitigation: 'Run broader UK survey (n≥300) before Phase 2 commit', status: 'Planned Q2', severity: 'medium' },
  { factor: 'Capital Constraint', mitigation: 'D2C-exclusive Phase 1 to maximize margin and collect 1P data', status: 'Confirmed', severity: 'low' },
];
