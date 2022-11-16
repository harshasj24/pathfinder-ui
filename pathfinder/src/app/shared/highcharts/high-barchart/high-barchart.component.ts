import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-barchart',
  templateUrl: './high-barchart.component.html',
  styleUrls: ['./high-barchart.component.scss'],
})
export class HighBarchartComponent implements OnInit, AfterViewInit {
  Options: Object;
  @Input() data: number[];
  @ViewChild('container1') container1: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    let element = this.container1.nativeElement;
    this.Options = {
      chart: {
        renderTo: element,
        height: 400,
        width: 800,
        type: 'column',
      },

      title: {
        text: '3 Years Total Saving Model Run Rate Reduction',
      },

      yAxis: {
        title: {
          text: '',
        },
      },

      xAxis: {
        categories: [
          'BASELINE YEAR',
          'Year1',
          'Year2',
          'Year3',
          'EXIT RUN RATE',
        ],
        // crosshair: true
      },

      legend: {
        enabled: true,
      },

      series: [
        {
          name: 'With partner',
          type: 'column',
          data: this.data,
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 200,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
    var chart = Highcharts.chart(element, this.Options);
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
