import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormFieldsService} from '../form-fields.service';

@Component({
  selector: 'app-coaching-form',
  templateUrl: './coaching-form.component.html',
  styleUrls: ['./coaching-form.component.css']
})
export class CoachingFormComponent implements OnInit {
  @ViewChildren('group') group;
  @ViewChild('graph') graph;
  scores = [];
  tab = 0;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 6,
          stepsize: 1
        }
      }]
    }
  };
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = false;

  public barChartLabels:string[] = [];
  public barChartData:any[] = [];
  FormFieldService;
  formfields;


  constructor(FormFieldService: FormFieldsService) {
    this.FormFieldService = FormFieldService;
    this.formfields = FormFieldService.getFormFields();
  }

  ngOnInit() {
    this.barChartData = [
      {data: (this.scores.length !== 0 ? this.scores[this.tab].result : []), label: this.formfields[this.tab].topic}
    ];
  }

  showUpdates() {
    this.scores = [];
    this.group._results.forEach((element) => {
      if (this.scores.filter(el => el.id === element._name).length === 0) {
        const newObject = {id: element._name, result: []};
        this.scores.push(newObject);
      }
      const scoresIndex = this.scores.findIndex(x => x.id === element._name);
      this.scores[scoresIndex].result.push((element._value ? element._value : 0));
    });

    this.updateGraph();

  }
  setGraph(e) {
   this.tab = e.index;
   this.updateGraph();
  }

  updateGraph() {
    const data = [];
    this.formfields[this.tab].criteria.forEach(x => data.push(x.title));
    this.barChartLabels = [];
    this.barChartLabels = data;
    setTimeout(() => {
      this.barChartData = [
        {data: (this.scores.length !== 0 ? this.scores[this.tab].result : []), label: this.formfields[this.tab].topic}
        ];
    }, 0);

  }

  saveData(form: NgForm) {

form.value.data = this.scores;
const random = Math.floor(Math.random() * 10000).toString();
localStorage.setItem(random , JSON.stringify(form.value));
  }


}


