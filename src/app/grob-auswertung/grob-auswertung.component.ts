import {Component, OnInit} from '@angular/core';
import {FormFieldsService} from '../form-fields.service';

@Component({
  selector: 'app-grob-auswertung',
  templateUrl: './grob-auswertung.component.html',
  styleUrls: ['./grob-auswertung.component.css']
})
export class GrobAuswertungComponent implements OnInit {
  FormFieldService;

  constructor(FormFieldService: FormFieldsService) {
  this.FormFieldService = FormFieldService;
  }

  public bar_ChartData = [

  ];

  public bar_ChartOptions = {
    hAxis: {
      minValue: 0,
      ticks: [0, 1, 2, 3, 4, 5, 6]
    },
    legend: { position: 'none' }
  };

  date = '2017-09-27T22:00:00.000Z';

  ngOnInit() {
    const storage = this.allStorage();
    const filtStorage = storage.filter(x => x.date === this.date);
    this.gesamtAuswertung(filtStorage);

    console.log(filtStorage);

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

  gesamtAuswertung(filtStorage) {

    const userAverages = filtStorage.map(
      x => x.data.map(
        y => y.result.reduce(
          (z, a) => parseInt(a, 10) + parseInt(z, 10)
        ) / y.result.length
      )
    );
    const users = filtStorage.map(
      x => x.name_candidate
    );
    const chartData = userAverages.map(
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
    chartData.forEach((x, y) => chartDataFormatted.push([users[y], x]));

    this.bar_ChartData = [['Person', 'Durchschnitt'],...chartDataFormatted];

    /*
     ['Element', 'Density', { role: 'style' }],
     ['Copper', 8.94, '#b87333'],            // RGB value
     ['Silver', 10.49, 'silver'],            // English color name
     ['Gold', 19.30, 'gold'],
     ['Platinum', 21.45, 'color: #e5e4e2' ]
     * */
  }

}
