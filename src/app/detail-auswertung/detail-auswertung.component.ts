import {Component, OnInit} from '@angular/core';
import {FormFieldsService} from '../form-fields.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-detail-auswertung',
  templateUrl: './detail-auswertung.component.html',
  styleUrls: ['./detail-auswertung.component.css']
})
export class DetailAuswertungComponent implements OnInit {
  FormFieldService;
  names;
  storage;
  filtStorage;
  bar_ChartData;
  currentName;
  oe;
  activeTab = 0;

  constructor(FormFieldService: FormFieldsService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.FormFieldService = FormFieldService;
  }


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

    this.getDetail(this.names[0]);


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

  getDetail(name) {
    this.currentName = name;
    this.filtStorage = this.storage.filter(x => x.name_candidate === name);
    this.formFields = this.FormFieldService.getFormFields();

    const dataCollection = [];
    for (let i = 0; i < this.filtStorage[0].data.length; i++) {
      const dataBracket = [];
      for (let j = 0; j < this.filtStorage[0].data[0].result.length; j++) {
        const dataPack = [];
        dataPack.push(['Person', 'Wert']);
        this.filtStorage.forEach(x => {
          dataPack.push([this.datePipe.transform(x.date), parseInt(x.data[i].result[j], 10)]);
        });
        dataBracket.push(dataPack);
      }
      dataCollection.push(dataBracket);
    }

      this.bar_ChartData = dataCollection;
  }

  onDateChange(name) {
    this.getDetail(name);
  }

  onTabChange(id) {
    this.activeTab = id;
  }

}
