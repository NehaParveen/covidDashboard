import { Component, OnInit } from '@angular/core';
import { CoviddataService } from 'src/app/services/covidData/coviddata.service';
import { DistrictSummary } from 'src/app/Models/districtSummary';
import { Data } from '@angular/router';
import { CovidData } from 'src/app/Models/covidData';

export interface ChartData {
  name: string;
  value: string;
}
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  districtSummary: DistrictSummary;

  single: ChartData[];
  multi: any[];
  view: any[] = [700, 400];

  constructor(private covidDataService: CoviddataService) {
    // Object.assign(this, { single })
    this.view = [innerWidth / 1.3, 400];
  }

  ngOnInit(): void {
    this.initialiseData();
  }


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'District';
  showYAxisLabel = true;
  yAxisLabel = 'No of active-cases';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#DAF7A6','#581845','#190B7D']
  };


  onSelect(event) {
    console.log(event);
  }
  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
}
  async initialiseData() {
    //Todo Add loader
    this.districtSummary = await this.covidDataService.getCovidDistrictSummary();
    // (this.districtSummary.summary as
    // Array.from(, ([key,value])=>({ name :key, value: value.active})))
    // ;
    // this.districtSummary.summary.map( x => ({ name :x.key, value: x.value.active}))

    let x = await this.covidDataService.getCovidDistrictSummary();
    let d = JSON.stringify(x)
    let y: CovidData = JSON.parse(d);
    this.single = [];
    for (const i in y.summary) {
      this.single.push(
        <ChartData>{
          name: i,
          value: y.summary[i].active
        }
      );
    }
    console.log(JSON.stringify(this.single));
  }

}
