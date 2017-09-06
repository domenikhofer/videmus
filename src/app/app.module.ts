import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdButtonToggleModule,
  MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSliderModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { CoachingFormComponent } from './coaching-form/coaching-form.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CoachingFormComponent
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
    ChartsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
