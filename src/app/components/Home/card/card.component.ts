import { Component, OnInit } from '@angular/core';
import { CoviddataService } from 'src/app/services/covidData/coviddata.service';
import { CovidData } from 'src/app/Models/covidData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  covidData: CovidData;
  constructor(private covidDataService: CoviddataService) {
    // this.covidData = {} as CovidData;
  }

  ngOnInit(): void {
    this.initialiseData();
  }

  async initialiseData() {
    //Todo Add loader
    this.covidData = await this.covidDataService.getCovidData();
  }
}
