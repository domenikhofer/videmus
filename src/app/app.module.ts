import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdButtonToggleModule,
  MdCardModule, MdDatepickerModule, MdFormFieldModule, MdInputModule, MdNativeDateModule, MdOptionModule,
  MdSelectModule,
  MdSliderModule,
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
import { DetailAuswertungComponent } from './detail-auswertung/detail-auswertung.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'form', component: CoachingFormComponent},
  { path: 'grob', component: GrobAuswertungComponent},
  { path: 'detail', component: DetailAuswertungComponent},
  { path: '', component: MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoachingFormComponent,
    AveragePipe,
    GrobAuswertungComponent,
    GoogleChart,
    DetailAuswertungComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
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
    MdFormFieldModule,
    MdOptionModule,
    MdSelectModule,
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
