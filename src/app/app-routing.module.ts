import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponent} from './summary/summary.component';
import {ConfigurationComponent} from './configuration/configuration.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'configuration', component: ConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
