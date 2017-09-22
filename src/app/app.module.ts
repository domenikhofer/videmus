import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdButtonToggleModule,
  MdCardModule, MdDatepickerModule, MdIcon, MdIconRegistry, MdInputModule, MdNativeDateModule, MdSliderModule,
  MdTabsModule,
  MdTextareaAutosize,
  MdToolbarModule
} from '@angular/material';
import { CoachingFormComponent } from './coaching-form/coaching-form.component';
import {ChartsModule} from 'ng2-charts';
import { AveragePipe } from './average.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoachingFormComponent,
    AveragePipe
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
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
