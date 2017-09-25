import {Component, OnInit} from '@angular/core';
import {ChartEvent, ChartType} from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}


@Component({
  selector: 'app-grob-auswertung',
  templateUrl: './grob-auswertung.component.html',
  styleUrls: ['./grob-auswertung.component.css']
})
export class GrobAuswertungComponent implements OnInit {

  constructor() {
  }

  chart = [
  {
    type: 'Bar',
    data: []
  }
];
  date = '2017-09-27T22:00:00.000Z';

  ngOnInit() {
    const storage = this.allStorage();
    const filtStorage = storage.filter(x => x.date === this.date);
    const userAverages = filtStorage.map(
      x => x.data.map(
        y => y.result.reduce(
          (z, a) =>  parseInt(a, 10) + parseInt(z , 10)
        ) / y.result.length
      )
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

this.chart.data = chartData;


  }

  allStorage() {

    let values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }

}
