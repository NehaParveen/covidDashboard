import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Login/login/login.component';
import { HomeComponent } from './components/Home/home/home.component';
import { GraphComponent } from './components/Home/graph/graph.component';
import { CardComponent } from './components/Home/card/card.component';
import { TableComponent } from './components/Home/table/table.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/authentication/auth.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GraphComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
