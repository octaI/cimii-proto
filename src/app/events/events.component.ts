import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as faker from 'faker';

const MOCK_EVENTS = require('../../mock/events.json');

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any[] = MOCK_EVENTS['events'];
  displayedColumns: string[] = ['time', 'level', 'component', 'message'];
  dataSource = new MatTableDataSource(this.events);

  addRandomEvent(): void {
    this.events.unshift({
      date: new Date().toISOString().split('.')[0],
      level: faker.random.arrayElement(['INFO', 'WARN', 'ERROR', 'CRITICAL']),
      component: `${faker.random.arrayElement(['Sensor', 'Actuator'])}${faker.random.arrayElement([1, 2, 3, 4, 5])}`,
      message: faker.lorem.sentence()
    });
    this.dataSource = new MatTableDataSource(this.events);
  }

  ngOnInit(): void {
    setInterval(() => this.addRandomEvent(), 2000);
  }

}
