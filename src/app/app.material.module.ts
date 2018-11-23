import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {
  MatOptionModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

@NgModule({
  exports: [
    ScrollingModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule {}
