export interface CovidData {
  summary:      Data;
  delta:        Data;
  last_updated: string;
}

export interface Data {
  hospital_obs:   number;
  home_obs:       number;
  total_obs:      number;
  hospital_today: number;
  confirmed:      number;
  recovered:      number;
  deceased:       number;
  active:         number;
}
