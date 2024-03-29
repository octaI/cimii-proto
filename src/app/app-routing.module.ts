import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponent} from './summary/summary.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {EventsComponent} from './events/events.component';
import {AlertsComponent} from './alerts/alerts.component';
import {ReportComponent} from './report/report.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'events', component: EventsComponent },
  { path: 'alerts', component: AlertsComponent },
  {path: 'reports', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
