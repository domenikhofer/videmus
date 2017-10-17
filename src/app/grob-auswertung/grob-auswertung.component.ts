import {Component, OnInit} from '@angular/core';
import {FormFieldsService} from '../form-fields.service';

@Component({
  selector: 'app-grob-auswertung',
  templateUrl: './grob-auswertung.component.html',
  styleUrls: ['./grob-auswertung.component.css']
})
export class GrobAuswertungComponent implements OnInit {
  FormFieldService;
  userAverages;
  users;
  dataDates;
  storage;
  currentDate;


  constructor(FormFieldService: FormFieldsService) {
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
    legend: {position: 'none'}
  };


  ngOnInit() {
    this.storage = this.allStorage();
    this.dataDates = [];
    this.storage.forEach(x => (this.dataDates.indexOf(x.date) === -1 && x.date !== null ? this.dataDates.push(x.date) : ''));
    this.dataDates.sort((a, b) => (a < b ? 1 : 0));

    this.drawGraphs(this.dataDates[0]);
  }

  drawGraphs(date) {
    this.currentDate = date;
    const filtStorage = this.storage.filter(x => x.date === date);
    this.formFields = this.FormFieldService.getFormFields();


    this.userAverages = filtStorage.map(
      x => x.data.map(
        y => y.result.reduce(
          (z, a) => parseInt(a, 10) + parseInt(z, 10)
        ) / y.result.length
      )
    );
    this.users = filtStorage.map(
      x => x.name_candidate
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
    chartData.forEach((x, y) => chartDataFormatted.push([this.users[y], x]));

    this.bar_ChartData = [['Person', 'Durchschnitt'], ...chartDataFormatted];

    /*
     ['Element', 'Density', { role: 'style' }],
     ['Copper', 8.94, '#b87333'],            // RGB value
     ['Silver', 10.49, 'silver'],            // English color name
     ['Gold', 19.30, 'gold'],
     ['Platinum', 21.45, 'color: #e5e4e2' ]
     * */
  }

  grobAuswertungen() {

    const dataBracket = [];
    for (let i = 0; i < this.userAverages[0].length; i++) {
      const dataPack = [];
      dataPack.push(['Person', 'Durchschnitt']);
      this.userAverages.forEach((x, y) => {
        dataPack.push([this.users[y], x[i]]);
      })
      dataBracket.push(dataPack);
    }


    this.bar_Datas = dataBracket;


  }

  onDateChange(date) {
   this.drawGraphs(date);
  }


}
