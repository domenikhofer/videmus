import {Component, OnInit} from '@angular/core';
import {FormFieldsService} from '../form-fields.service';

@Component({
  selector: 'app-detail-auswertung',
  templateUrl: './detail-auswertung.component.html',
  styleUrls: ['./detail-auswertung.component.css']
})
export class DetailAuswertungComponent implements OnInit {
  FormFieldService;
  dataDates;
  storage;
  filtStorage;
  bar_ChartData;
  currentDate;

  constructor(FormFieldService: FormFieldsService) {
    this.FormFieldService = FormFieldService;
  }


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

    this.getDetail(this.dataDates[0]);

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

  getDetail(date) {
    this.currentDate = date;
    this.filtStorage = this.storage.filter(x => x.date === date);
    this.formFields = this.FormFieldService.getFormFields();

const dataCollection = [];
    for (let i = 0; i < this.filtStorage[0].data.length; i++) {
      const dataBracket = [];
      for (let j = 0; j < this.filtStorage[0].data[0].result.length; j++) {
        const dataPack = [];
        dataPack.push(['Person', 'Wert'])
        this.filtStorage.forEach(x => {
          dataPack.push([x.name_candidate, parseInt(x.data[i].result[j], 10)]);
        });
        dataBracket.push(dataPack);
      }
      dataCollection.push(dataBracket);
    }
    setTimeout(() => {
      this.bar_ChartData = dataCollection;
    }, 100)
  }

  onDateChange(date) {
    this.getDetail(date);
  }


}
