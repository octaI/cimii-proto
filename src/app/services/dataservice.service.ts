import {Injectable, OnInit} from '@angular/core';
import {Configuration} from '../configuration/configuration.component';

const mock_data = require('../../parameter_values.json');


export class ParameterSet implements OnInit {
  parameter_values: Array<number>;
  parameter_names: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  public alerts: string[] = [];
  constructor() {
  }

  getConfigurations(): Configuration {
    return mock_data.Configurations;
  }

  getParameterSet(name: string): ParameterSet {
    const required_set = new ParameterSet();
    required_set.parameter_names = mock_data[name].parameter_names;
    required_set.parameter_values = mock_data[name].parameter_values;
    return required_set;
  }

  addAlert(message: string): void {
    this.alerts.push(message);
  }

  getAlerts(): string[] {
    return this.alerts;
  }
}
