import {Component, OnChanges, OnInit} from '@angular/core';
import {DataserviceService} from '../services/dataservice.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  providers: []
})
export class AlertsComponent implements OnInit {

  constructor(private dataService: DataserviceService) {
  }

  get alerts(): string[] {
    return this.dataService.getAlerts();
  }

  ngOnInit() {
  }
}
