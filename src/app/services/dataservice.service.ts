import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
//let  mock_data = require('../../parameter_values.json');


@Injectable({
  providedIn: 'root'
})

export class ParameterSet implements OnInit {
  constructor() {}

  ngOnInit() {}
}
export class DataserviceService {


  constructor() { }
  /*getParameterSet(name: string): ParameterSet {
    const required_set = new ParameterSet();
    required_set.parameter_names = mock_data[name].parameter_names;
    required_set.parameter_values = mock_data[name].parameter_values;
    return required_set;
  }*/

}
