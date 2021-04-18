import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProjectLogDirectionComponent } from './project-log-direction/project-log-direction.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LogMyPlantsComponent } from './log-my-plants/log-my-plants.component';
import { LogMachinesComponent } from './log-machines/log-machines.component';
import { LogListComponent } from './log-list/log-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    MainComponent,
    LoginComponent,
    ProjectLogDirectionComponent,
    LogMyPlantsComponent,
    LogMachinesComponent,
    LogListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
