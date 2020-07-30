import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData } from '../../Models/covidData';
import { DistrictSummary } from '../../Models/districtSummary';
import { TestResults } from '../../Models/testResults';

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {


  constructor(private http: HttpClient) { }

  dataApi = 'https://keralastats.coronasafe.live/summary.json';
  districtApi = 'https://keralastats.coronasafe.live/latest.json';
  testApi='https://keralastats.coronasafe.live/testreports.json';

  async getCovidData(): Promise<CovidData> {
    return await this.http.get<CovidData>(this.dataApi).toPromise();
  }

  async getCovidDistrictSummary(): Promise<DistrictSummary> {
    return await this.http.get<DistrictSummary>(this.districtApi).toPromise();
  }
  async getCovidTestResults(): Promise<TestResults> {
    return await this.http.get<TestResults>(this.testApi).toPromise();
  }
}
