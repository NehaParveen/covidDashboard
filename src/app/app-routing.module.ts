import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Login/login/login.component';
import { ForgotPasswordComponent } from './components/Login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/Login/verify-email/verify-email.component';
import { HomeComponent } from './components/Home/home/home.component';
import { AuthGuard } from './services/authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home',canActivate:[AuthGuard], component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
