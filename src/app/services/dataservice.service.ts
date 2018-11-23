import {Injectable, OnInit} from '@angular/core';
import {Configuration} from '../configuration/configuration.component';
import * as faker from 'faker';
const mock_data = require('../../parameter_values.json');

export interface ParameterItem {
  name: string;
  value: number;
  updated: boolean;
  critic: boolean;
}

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

  getParameters(name: string): ParameterItem[] {
    const parameters: ParameterItem[] = [];
    const set = this.getParameterSet(name);
    set.parameter_names.forEach((parameterName, index) => {
      const diff = faker.random.number({min: -2, max: 10});
      parameters.push({
        name: parameterName,
        value: set.parameter_values[index] + diff,
        updated: diff !== 0,
        critic: diff >= 8,
      });
    });
    return parameters;
  }
}
