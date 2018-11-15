import {Component, OnInit} from '@angular/core';
import {DataserviceService} from '../services/dataservice.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  providers: [DataserviceService]
})
export class AlertsComponent implements OnInit {
  alerts: string[] = ['Alert 1', 'Alert 2'];
  constructor(private dataservice: DataserviceService) {
    dataservice.onAddAlertCallBack((alert) => {
      this.alerts.push(alert);
    });
  }

  ngOnInit() {
  }
}
