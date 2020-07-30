import { Data } from './covidData';

export interface DistrictSummary {
  summary: { [key: string]: Data };
  data: { [key: string]: Data };
  last_updated: string;
}

