import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef;
  @ViewChild('lineChart') lineChart: ElementRef;
  ngAfterViewInit(): void {
    var chart = new Chart(this.lineChart.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [
          {
            data: [
              {
                x: 2.5,
                y: 182,
              },
              {
                x: 7.5,
                y: 188,
              },
              {
                x: 12.5,
                y: 194,
              },
              {
                x: 17.5,
                y: 198,
              },
            ],
            borderColor: 'black',
            borderWidth: 1,
            // pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
            pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
            // pointRadius: 5,
            // pointHoverRadius: 5,
            lineTension: 0,
            fill: false,
            showLine: true,
          },
          {
            data: [
              {
                x: 2.5,
                y: 182,
              },
              {
                x: 7.5,
                y: 174,
              },
              {
                x: 15.5,
                y: 138,
              },
              {
                x: 17.5,
                y: 107,
              },
            ],
            pointBackgroundColor: 'orange',
            // pointBorderColor: 'darkorange',
            // pointRadius: 5,
            // pointHoverRadius: 5,
            showLine: true,
            fill: false,
            lineTension: 0,
          },
        ],
      },

      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 25,
                stepSize: 5,
                // display: false,
                callback: function (value, index, ticks) {
                  return (value = 'baseline year');
                },
              },
              gridLines: {
                color: '#e0e0e0',
                drawOnChartArea: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 100,
                max: 225,
                padding: 25,
                stepSize: 25,
              },
              gridLines: {
                color: '#f2f2f2',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
