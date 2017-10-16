import {Component, OnInit} from '@angular/core';
import {FormFieldsService} from '../form-fields.service';

@Component({
  selector: 'app-detail-auswertung',
  templateUrl: './detail-auswertung.component.html',
  styleUrls: ['./detail-auswertung.component.css']
})
export class DetailAuswertungComponent implements OnInit {
  FormFieldService;
  users;

  constructor(FormFieldService: FormFieldsService) {
    this.FormFieldService = FormFieldService;
  }

  public bar_ChartData;
  public formFields = [];

  public bar_ChartOptions = {
    hAxis: {
      minValue: 0,
      ticks: [0, 1, 2, 3, 4, 5, 6]
    },
    legend: {position: 'none'}
  };

  date = '2017-09-27T22:00:00.000Z';

  ngOnInit() {
    const storage = this.allStorage();
    const filtStorage = storage.filter(x => x.date === this.date);
    this.formFields = this.FormFieldService.getFormFields();

    this.getDetail(filtStorage);

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

  getDetail(data) {

const dataCollection = [];
    for (let i = 0; i < data[0].data.length; i++) {
      const dataBracket = [];
      for (let j = 0; j < data[0].data[0].result.length; j++) {
        const dataPack = [];
        dataPack.push(['Person', 'Wert'])
        data.forEach(x => {
          dataPack.push([x.name_candidate, parseInt(x.data[i].result[j], 10)]);
        });
        dataBracket.push(dataPack);
      }
      dataCollection.push(dataBracket);
    }
this.bar_ChartData = dataCollection;
    console.log(this.bar_ChartData);
  }

  /*const chartDataFormatted = [];
   chartData.forEach((x, y) => chartDataFormatted.push([this.users[y], x]));

   this.bar_ChartData = [['Person', 'Durchschnitt'], ...chartDataFormatted];


   ['Element', 'Density', { role: 'style' }],
   ['Copper', 8.94, '#b87333'],            // RGB value
   ['Silver', 10.49, 'silver'],            // English color name
   ['Gold', 19.30, 'gold'],
   ['Platinum', 21.45, 'color: #e5e4e2' ]
   * */
}
