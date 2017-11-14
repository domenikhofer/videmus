import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
declare const google: any;
@Directive({
  selector: '[appGoogleChart]'
})
export class GoogleChartDirective implements OnInit {
  public _element: any;
  renderer;
  @Input('chartType') public chartType: string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;

  constructor(public element: ElementRef, private _renderer: Renderer2) {
    this._element = this.element.nativeElement;
    this.renderer = _renderer;
  }

  ngOnInit() {
    this.renderer.setProperty(this._element, 'innerHTML', '<div style="' +
      'margin:auto;' +
      ' width:200px;' +
      ' height:200px;' +
      ' background:url(assets/img/loading.gif);' +
      ' background-size:contain"></div>');
    setTimeout(() => {
        google.charts.load('current', {'packages': ['line']});
        setTimeout(() => {
          this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element);
        }, 100);
      }, 1000
    );
  }

  drawGraph(chartOptions, chartType, chartData, ele) {
    google.charts.setOnLoadCallback(drawChart);
    this.renderer.setProperty(this._element, 'innerHTML', '');
    function drawChart() {
      let wrapper;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData,
        options: chartOptions || {},
        containerId: ele.id
      });
      wrapper.draw();
    }
  }
}
