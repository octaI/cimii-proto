import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { AppMaterialModule } from './app.material.module';
import {SummaryComponent} from './summary/summary.component';
import {ConfigurationComponent, DialogDataEditDialog, DialogDataExampleDialog} from './configuration/configuration.component';
import {EventsComponent} from './events/events.component';
import {AlertsComponent} from './alerts/alerts.component';
import { ReportComponent } from './report/report.component';
import {ChartsModule} from 'ng2-charts';
import {DialogDataExampleDialogComponent} from './summary/summary_dialog/summary_dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    ConfigurationComponent,
    EventsComponent,
    AlertsComponent,
    DialogDataExampleDialog,
    DialogDataEditDialog,
    ReportComponent,
    DialogDataExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog, DialogDataEditDialog, DialogDataExampleDialogComponent]
})
export class AppModule { }
