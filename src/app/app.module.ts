import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CoachingFormComponent} from './coaching-form/coaching-form.component';
import {AveragePipe} from './average.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GrobAuswertungComponent} from './grob-auswertung/grob-auswertung.component';
import {FormFieldsService} from './form-fields.service';


import {DetailAuswertungComponent} from './detail-auswertung/detail-auswertung.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import {DatePipe} from '@angular/common';
import {
  MatButtonModule,
  MatSliderModule,
  MatTabsModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
import {GoogleChartDirective} from './google-chart-directive.directive';

const appRoutes: Routes = [
  {path: ':id/form', component: CoachingFormComponent},
  {path: ':id/grob', component: GrobAuswertungComponent},
  {path: ':id/detail', component: DetailAuswertungComponent},
  {path: ':id/menu', component: MenuComponent},
  {path: ':id', redirectTo: ':id/menu', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CoachingFormComponent,
    AveragePipe,
    GrobAuswertungComponent,
    DetailAuswertungComponent,
    MenuComponent,
    GoogleChartDirective
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-CH'},
    FormFieldsService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
