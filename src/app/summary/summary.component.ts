import {Component, OnInit} from '@angular/core';
import {DataserviceService, ParameterItem} from '../services/dataservice.service';
import {DialogDataExampleDialogComponent} from './summary_dialog/summary_dialog.component';
import {MatDialog} from '@angular/material';
import * as faker from 'faker';

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
  update: boolean;
  parameters1: ParameterItem[];
  parameters2: ParameterItem[];
  parametersKey: 'Suelo' | 'Ambiente';
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: []
})
export class SummaryComponent implements OnInit {

  rooms: Room[] = [
    {
      parametersKey: 'Suelo',
      text: 'SECTION 1',
      cols: 3,
      rows: 2,
      color: '#484848',
      parameters1: this.dataService.getParameters('Suelo'),
      parameters2: this.dataService.getParameters('Ambiente'),
      update: false
    },
    {
      parametersKey: 'Suelo',
      text: 'SECTION 2',
      cols: 1,
      rows: 4,
      color: '#484848',
      parameters1: this.dataService.getParameters('Suelo'),
      parameters2: this.dataService.getParameters('Ambiente'),
      update: false
    },
    {
      parametersKey: 'Suelo',
      text: 'SECTION 3',
      cols: 1,
      rows: 2,
      color: '#484848',
      parameters1: this.dataService.getParameters('Suelo'),
      parameters2: this.dataService.getParameters('Ambiente'),
      update: false
    },
    {
      parametersKey: 'Suelo',
      text: 'SECTION 4',
      cols: 2,
      rows: 2,
      color: '#484848',
      parameters1: this.dataService.getParameters('Suelo'),
      parameters2: this.dataService.getParameters('Ambiente'),
      update: false
    },
  ];

  constructor(private dataService: DataserviceService, public dialog: MatDialog) {
  }

  private cleanRoomParameters(room: Room) {
    room.parameters1.forEach((parameter) => {
      parameter.updated = false;
    });
    room.parameters2.forEach((parameter) => {
      parameter.updated = false;
    });
  }

  private updateParameters(room: Room) {
    this.cleanRoomParameters(room);
    setTimeout(() => {
      room.parameters1 = this.dataService.getParameters('Suelo');
      room.parameters2 = this.dataService.getParameters('Ambiente');
      room.update = true;
      setTimeout(() => {
        room.update = false;
        this.cleanRoomParameters(room);
        this.updateParameters(room);
      }, 1500);
    }, faker.random.number({min: 5000, max: 15000}));
  }

  ngOnInit() {
    this.rooms.forEach((room) => {
      this.updateParameters(room);
    });
  }

}
