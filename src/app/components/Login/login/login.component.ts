import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private loader: LoaderService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
  }

  snackBar() {
    this._snackBar.open('Please Login with google', 'ok', {
      duration: 2000,
    });
  }

  async googleLogin() {
    try {
      this.loader.show();
      let loggedIn = await this.authService.loginWithGoogle();
      this.loader.hide();
      if (loggedIn) {
        this.router.navigate(['home']);
      } else {
        this._snackBar.open('Login Failed', 'ok', {
          duration: 2000,
        });
      }
    }
  catch(e){
    this._snackBar.open('Login Failed', 'ok', {
      duration: 2000,
    });
  }
  finally{
      this.loader.hide();
  }
  }
}
