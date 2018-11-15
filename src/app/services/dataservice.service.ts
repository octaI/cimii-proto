import {Injectable, OnInit} from '@angular/core'
import {Configuration} from '../configuration/configuration.component';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
let  mock_data = require('../../parameter_values.json');


@Injectable({
  providedIn: 'root'
})

export class ParameterSet implements OnInit {
  parameter_values: Array<number>;
  parameter_names: Array<string>;

  constructor() {}

  ngOnInit() {}
}
export class DataserviceService {


  constructor() { }
  getConfigurations(): Configuration {
    const required_info = mock_data.Configurations;
    return required_info;
  }
  getParameterSet(name: string): ParameterSet {
    const required_set = new ParameterSet();
    required_set.parameter_names = mock_data[name].parameter_names;
    required_set.parameter_values = mock_data[name].parameter_values;
    return required_set;
  }

}
