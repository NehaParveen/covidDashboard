import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public auth: AuthenticationService,
    private router: Router
  ) {

  }
  canActivate(): boolean {
    // console.log(this.auth.isAuthenticated(),'isauth')
    if (this.auth.isAuthenticated()) {
      // this.router.navigate(['home']);
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}
