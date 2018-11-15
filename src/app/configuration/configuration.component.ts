import {Component, Inject, OnInit} from '@angular/core';

import {DataserviceService} from '../services/dataservice.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

export interface Configuration {
  name: string;
  soil_minimum_values: Array<number>;
  soil_maximum_values: Array<number>;
  environment_minimum_values: Array<number>;
  environment_maximum_values: Array<number>;
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  providers: [DataserviceService]
})
export class ConfigurationComponent implements OnInit {


  greenhouse_configs: Configuration[] = [
  ];

  constructor(private dataservice: DataserviceService, public dialog: MatDialog) {
    const  received_data = this.dataservice.getConfigurations();
    this.populateConfigs(received_data);
  }

   openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'unicorn'
      }
    });
  }


  populateConfigs(data) {
    for (const elements in data) {
      this.greenhouse_configs.push({
        name: data[elements].name,
        soil_minimum_values: data[elements].soil_minimum_values,
        soil_maximum_values: data[elements].soil_maximum_values,
        environment_minimum_values: data[elements].environment_minimum_values
        , environment_maximum_values: data[elements].environment_maximum_values
      });

    }
  }
  ngOnInit() {


  }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-overview-example.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  parameters: string[] = ['pH', 'Potasio',
    'Azufre',
    'Magnesio',
    'Calcio',
    'Fosforo',
    'Nitrogeno',
    'Luz',
    'Temperatura',
    'Oxigeno'];
}
