import {Injectable, OnInit} from '@angular/core';
import {Configuration} from '../configuration/configuration.component';

const mock_data = require('../../parameter_values.json');


@Injectable({
  providedIn: 'root'
})

export class ParameterSet implements OnInit {
  parameter_values: Array<number>;
  parameter_names: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }
}

export class DataserviceService {
  alerts: string[] = [];
  onAddAlert: any;
  constructor() {
    this.onAddAlert = (alert) => {};
  }

  static getConfigurations(): Configuration {
    const required_info = mock_data.Configurations;
    return required_info;
  }

  static getParameterSet(name: string): ParameterSet {
    const required_set = new ParameterSet();
    required_set.parameter_names = mock_data[name].parameter_names;
    required_set.parameter_values = mock_data[name].parameter_values;
    return required_set;
  }

  addAlert(message: string): void {
    this.onAddAlert(message);
  }

  onAddAlertCallBack(callBack: (alert) => void) {
    this.onAddAlert = callBack;
  }
}
