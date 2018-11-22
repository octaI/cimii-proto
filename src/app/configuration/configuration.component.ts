import {Component, Inject, OnInit} from '@angular/core';

import {DataserviceService} from '../services/dataservice.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig} from '@angular/material';
import {element} from 'protractor';

export interface Configuration {
  name: string;
  soil_minimum_values: Array<number>;
  soil_maximum_values: Array<number>;
  environment_minimum_values: Array<number>;
  environment_maximum_values: Array<number>;
}



@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  providers: []
})
export class ConfigurationComponent implements OnInit {

  greenhouse_configs: Configuration[] = [
  ];

  constructor(private dataService: DataserviceService, public dialog: MatDialog) {
    const received_data = dataService.getConfigurations();
    this.populateConfigs(received_data);
  }

   openAddDialog() {
    this.dialog.open(DialogDataExampleDialog
    );
  }
  editConfig(ConfToEdit) {
    const dialogConfig = new  MatDialogConfig();
    dialogConfig.data = ConfToEdit;
    this.dialog.open(DialogDataEditDialog, dialogConfig);
  }

  populateConfigs(data: Configuration) {
    Object.values(data).forEach((config) => {
      this.greenhouse_configs.push({
        name: config.name,
        soil_minimum_values: config.expected_soil_minimum_values,
        soil_maximum_values: config.expected_soil_maximum_values,
        environment_minimum_values: config.expected_environment_minimum_values
        , environment_maximum_values: config.expected_environment_maximum_values
      });
    });
  }
  ngOnInit() {
  }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-overview-example.html',
})
export class DialogDataExampleDialog {
  constructor() {}

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

@Component({
  selector: 'dialog-config-edit-dialog',
  templateUrl: 'dialog-edit-example.html',
})
export class DialogDataEditDialog  implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public Configdata: Configuration) {}
  Existing_data: Configuration;
  parameters: string[] = ['pH', 'Potasio',
    'Azufre',
    'Magnesio',
    'Calcio',
    'Fosforo',
    'Nitrogeno',
    'Luz',
    'Temperatura',
    'Oxigeno'];

  environment_parameters: string[] = [ 'Luz',
    'Temperatura',
    'Oxigeno'];

  ngOnInit() {
    this.Existing_data = this.Configdata;
  }
}
