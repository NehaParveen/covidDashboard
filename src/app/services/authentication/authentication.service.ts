import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', null);
    //   }
    // })
  }


  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  async loginWithGoogle(): Promise<boolean> {
    let user = await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    if (user != null || user != undefined) {
      localStorage.setItem('user', JSON.stringify(user.user));
      return true;
    } else {
      return false;
    }

  }
  isAuthenticated() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }

}
