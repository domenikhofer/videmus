import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdButtonToggleModule,
  MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSliderModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { CoachingFormComponent } from './coaching-form/coaching-form.component';
import {ChartsModule} from 'ng2-charts';
import { AveragePipe } from './average.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GrobAuswertungComponent } from './grob-auswertung/grob-auswertung.component';
import {FormFieldsService} from './form-fields.service';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoachingFormComponent,
    AveragePipe,
    GrobAuswertungComponent,
    GoogleChart
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSliderModule,
    MdTabsModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    MdButtonToggleModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-CH'},
    FormFieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
