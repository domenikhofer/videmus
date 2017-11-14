import {Component, OnInit} from '@angular/core';
import {FormFieldsService} from '../form-fields.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-grob-auswertung',
  templateUrl: './grob-auswertung.component.html',
  styleUrls: ['./grob-auswertung.component.css']
})
export class GrobAuswertungComponent implements OnInit {
  FormFieldService;
  userAverages;
  dates;
  names;
  storage;
  currentName;
  oe;


  constructor(FormFieldService: FormFieldsService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.FormFieldService = FormFieldService;
  }

  public bar_ChartData = [];
  public bar_Datas = [];
  public formFields = [];


  public bar_ChartOptions = {
    hAxis: {
      minValue: 0,
      ticks: [0, 1, 2, 3, 4, 5, 6]
    },
    vAxis: {
      ticks: [0, 1, 2, 3, 4, 5, 6]
    },
    theme: 'material',
    curveType: 'function',
    legend: {position: 'none'}
  };


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oe = params['id'];
    });
    this.storage = this.allStorage().filter(x => x.oe === this.oe);
    this.names = [];
    this.storage.forEach(x => {
      (this.names.indexOf(x.name_candidate) === -1 && x.name_candidate !== null ? this.names.push(x.name_candidate) : '');
    });
    this.names.sort((a, b) => (a < b ? 1 : 0));

    this.drawGraphs(this.names[0]);
  }

  drawGraphs(name) {
    this.currentName = name;
    const filtStorage = this.storage.filter(x => x.name_candidate === name);
    this.formFields = this.FormFieldService.getFormFields();


    this.userAverages = filtStorage.map(
      x => x.data.map(
        y => y.result.reduce(
          (z, a) => parseInt(a, 10) + parseInt(z, 10)
        ) / y.result.length
      )
    );
    this.dates = filtStorage.map(
      x => this.datePipe.transform(x.date)
    );

    this.gesamtAuswertung();
    this.grobAuswertungen();
  }

  allStorage() {

    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    values.sort((a, b) => (a.date > b.date ? 1 : -1));

    return values;
  }

  gesamtAuswertung() {


    const chartData = this.userAverages.map(
      x => {
        let sum = 0;
        let notZeros = 0;
        x.forEach(y => {
          sum += y;
          notZeros += (y > 0 ? 1 : 0);
        });
        return sum / notZeros;
      }
    );

    const chartDataFormatted = [];
    chartData.forEach((x, y) => chartDataFormatted.push([this.dates[y], x]));

    this.bar_ChartData = [[['Person', 'Durchschnitt'], ...chartDataFormatted]];



  }

  grobAuswertungen() {

    const dataBracket = [];
    for (let i = 0; i < this.userAverages[0].length; i++) {
      const dataPack = [];
      dataPack.push(['Person', 'Durchschnitt']);
      this.userAverages.forEach((x, y) => {
        dataPack.push([this.dates[y], x[i]]);
      })
      dataBracket.push(dataPack);
    }


    this.bar_Datas = dataBracket;


  }

  onDateChange(date) {
    this.drawGraphs(date);

  }


}
