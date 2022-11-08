import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements AfterViewInit {
  constructor() {}
  @ViewChild('myChart') myChart: ElementRef;
  @ViewChild('myChart2') myChart2: ElementRef;
  toggle: boolean = true;
  ngAfterViewInit() {
    const myChart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: 'Bar Chart',
            data: [12, 19, 9, 1, 2, 13],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    const myChart2 = new Chart(this.myChart2.nativeElement, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: 'Line Chart',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            // tension: 0.1
          },
        ],
      },
      options: {
        responsive: false,
      },
    });
  }

  toggleChats() {
    this.toggle = !this.toggle;
  }
}
