import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-linechart',
  templateUrl: './high-linechart.component.html',
  styleUrls: ['./high-linechart.component.scss'],
})
export class HighLinechartComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private dailogData: any,
    private dailog: MatDialog
  ) {}
  Options: Object;
  @Input() data1: number[];
  @Input() data2: number[];
  @Input() data3: number[];
  @Input() data4: number[];

  @ViewChild('container') container1: ElementRef;
  ngOnInit(): void {
    console.log(this.data1);
    console.log(this.data2);
    console.log(this.data3);
    console.log(this.data4);
    console.log(this.dailogData);
    this.getGraphData();
  }
  getGraphData() {
    if (this.dailogData.graphData) {
      let { data1, data2, data3, data4 } = this.dailogData.graphData;
      this.data1 = data1;
      this.data2 = data2;
      this.data3 = data3;
      this.data4 = data4;
    }
  }
  ngAfterViewInit(): void {
    let element = this.container1.nativeElement;
    this.Options = {
      chart: {
        renderTo: element,
        // marginLeft: 100,
        height: 400,
        width: 1000,
        type: 'line',
      },

      title: {
        text: 'TOTAL SAVING MODEL(WITH FITSHORING) ~$170MN IN 3 YRS',
      },

      yAxis: {
        title: {
          text: '',
        },
      },

      xAxis: {
        categories: ['Baseline Year', 'Year1', 'Year2', 'Year3'],
      },

      legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 40,
        floating: true,
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,
      },

      series: [
        {
          name: 'Client Drives Run Business (NO PARTNER)',
          type: 'line',
          data: this.data1,
        },
        {
          name: 'With Partner H/W-S/W Assets (NO PERSONNEL)',
          type: 'line',
          data: this.data2,
        },
        {
          name: 'With Partner Personnel (CLIENT OWNED ASSETS)',
          type: 'line',
          data: this.data3,
        },
        {
          name: 'Total Partner Savings Model',
          type: 'line',
          data: this.data4,
        },
      ],
    };
    var chart = Highcharts.chart(element, this.Options);
  }
}
