import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { CoviddataService } from 'src/app/services/covidData/coviddata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService,
  ) { }

  ngOnInit() {

  }

  logout() {
    this.authService.logout()
  }


}
