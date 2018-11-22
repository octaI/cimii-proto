import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Tile} from '../summary.component';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: 'summary_dialog.component.html',
})
export class DialogDataExampleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Tile) {
    console.log(data);
  }
}
