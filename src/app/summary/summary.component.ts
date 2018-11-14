import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../services/dataservice.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  grid_title: string;
  parameter_names: Array<string>;
  parameter_values: Array<number>;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  constructor() { }
  mock_data = require('../../parameter_values.json');

  tiles: Tile[] = [
    {grid_title: 'Suelo', parameter_names: this.mock_data['Suelo'].parameter_names, parameter_values: this.mock_data['Suelo'].parameter_values, cols: 1, rows: 7, color: '#ddcc92'},
    {grid_title: 'Ambiente', parameter_names: this.mock_data['Ambiente'].parameter_names, parameter_values: this.mock_data['Ambiente'].parameter_values, cols: 1, rows: 4, color: '#ddcc92'},
  ];

  ngOnInit() {
  }

}
