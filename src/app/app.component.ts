import {Component, OnInit} from '@angular/core';
import * as faker from 'faker';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AlertsComponent} from './alerts/alerts.component';
import {DataserviceService} from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataserviceService]
})
export class AppComponent implements OnInit {
  title = 'CIM II - Prototype';

  constructor(public snackBar: MatSnackBar, private _route: Router, private dataservice: DataserviceService) {
  }

  openAlertTimeout() {
    setTimeout(() => this.openAlert(), faker.random.number({min: 10000, max: 20000}));
  }

  openAlert() {
    const message = faker.lorem.paragraph(1);
    this.dataservice.addAlert(message);
    const snack = this.snackBar.open(message, 'VER');
    snack.onAction().subscribe(() => {
      this._route.navigate(['/alerts'])
        .then(() => this.openAlertTimeout());
    });
  }

  ngOnInit(): void {
    this.openAlertTimeout();
  }


}
