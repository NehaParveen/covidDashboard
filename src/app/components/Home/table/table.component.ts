import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CoviddataService } from 'src/app/services/covidData/coviddata.service';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from 'src/app/Models/testResults';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private covidDataService: CoviddataService) {

  }

  dataSource = new MatTableDataSource<Report>();
  displayedColumns: string[] = ['sno','date', 'total', 'positive', 'today_positive'];

  async ngOnInit() {
    let testData = await this.covidDataService.getCovidTestResults();
    this.dataSource = new MatTableDataSource<Report>(testData.reports);
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // console.log(testData)
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
