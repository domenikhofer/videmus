import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormFieldsService} from '../form-fields.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  public barChartOptions: any = {
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
  public barChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartLabels: string[] = [];
  public barChartData: any[] = [];
  FormFieldService;
  formfields;
  oe;
  myDate = new Date();


  constructor(FormFieldService: FormFieldsService, public router: Router, private route: ActivatedRoute) {
    this.FormFieldService = FormFieldService;
    this.formfields = FormFieldService.getFormFields();
  }

  ngOnInit() {
    this.barChartData = [
      {data: (this.scores.length !== 0 ? this.scores[this.tab].result : []), label: this.formfields[this.tab].topic}
    ];
    this.route.params.subscribe(params => {
      this.oe = params['id'];
    });
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

  /*
   ['Element', 'Density', { role: 'style' }],
   ['Copper', 8.94, '#b87333'],            // RGB value
   ['Silver', 10.49, 'silver'],            // English color name
   ['Gold', 19.30, 'gold'],
   ['Platinum', 21.45, 'color: #e5e4e2' ]
   * */

  saveData(form: NgForm) {

form.value.data = this.scores;
form.value.oe = this.oe;
const random = Math.floor(Math.random() * 10000).toString();
localStorage.setItem(random , JSON.stringify(form.value));

this.router.navigate([this.oe, 'menu']);
  }


}


