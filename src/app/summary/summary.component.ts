import {Component, OnInit} from '@angular/core';
import {DataserviceService} from '../services/dataservice.service';
import {DialogDataExampleDialogComponent} from './summary_dialog/summary_dialog.component';
import {MatDialog} from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  grid_title: string;
  parameter_names: Array<string>;
  parameter_values: Array<number>;
}

export interface Room {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: []
})
export class SummaryComponent implements OnInit {

  mock_data = require('../../parameter_values.json');

  tiles: Tile[] = [
    {
      grid_title: 'Floor',
      parameter_names: this.dataService.getParameterSet('Suelo').parameter_names,
      parameter_values: this.dataService.getParameterSet('Suelo').parameter_values,
      cols: 1,
      rows: 7,
      color: '#ddcc92'
    },
    {
      grid_title: 'Ambient',
      parameter_names: this.dataService.getParameterSet('Ambiente').parameter_names,
      parameter_values: this.dataService.getParameterSet('Ambiente').parameter_values,
      cols: 1,
      rows: 4,
      color: '#ddcc92'
    },
  ];

  rooms: Room[] = [
    {text: 'SECTION 1', cols: 3, rows: 2, color: '#484848'},
    {text: 'SECTION 2', cols: 1, rows: 4, color: '#484848'},
    {text: 'SECTION 3', cols: 1, rows: 2, color: '#484848'},
    {text: 'SECTION 4', cols: 2, rows: 2, color: '#484848'},
  ];

  constructor(private dataService: DataserviceService, public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        grid_title: 'Floor',
        parameter_names: this.dataService.getParameterSet('Suelo').parameter_names,
        parameter_values: this.dataService.getParameterSet('Suelo').parameter_values,
        cols: 1,
        rows: 7,
        color: '#ddcc92'
      }
    });
  }

  ngOnInit() {
  }

}
