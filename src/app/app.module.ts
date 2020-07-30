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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GraphComponent,
    CardComponent,
    TableComponent,
    LoaderComponent,
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
    NgxChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,

  ],
  exports: [MatSortModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
