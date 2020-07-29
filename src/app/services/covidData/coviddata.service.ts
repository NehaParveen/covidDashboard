import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData } from '../../Models/covidData';

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {


  constructor(private http: HttpClient) { }

  dataApi = 'https://keralastats.coronasafe.live/summary.json';

  async getCovidData(): Promise<CovidData> {
    return await this.http.get<CovidData>(this.dataApi).toPromise();
  }
}
