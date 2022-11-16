import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
import { LineChartComponent } from 'src/app/shared/charts/line-chart.component';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-run-opex-model',
  templateUrl: './run-opex-model.component.html',
  styleUrls: ['./run-opex-model.component.scss'],
})
export class RunOpexModelComponent implements OnInit {
  isLoaded: boolean = false;
  runopexonsitedata: any;
  runopexonsitedatayear: any;
  runopexdata: any;
  runopexdatayear: any;
  Options:Object
    ngOnInit(): void {
    this.getData();
    this.getdata();
     var chart = Highcharts.chart("container", this.Options );
  }
  constructor(private api: ApiService, private dailog: MatDialog,private localStorage:LocalStorageService) {

    }
  

  getData() {
    // this.api.getrunopexA().subscribe((res) => {
    //   this.runopexonsitedata = res;
    //   this.runopexonsitedatayear =
    //     this.runopexonsitedata.runoutsourcecalculation;
    //   // console.log(res);
    // });
    let project = this.localStorage.get(`project`);
    if (project) {
      let {runopexoutsource } = project;
      this.runopexonsitedata = runopexoutsource;
      this.runopexonsitedatayear = this.runopexonsitedata.runoutsourcecalculation;
    }
  }
  getdata() {
    // this.api.getrunopexmodelA().subscribe((res) => {
    //   this.runopexdata = res;
    //   this.runopexdatayear = this.runopexdata.runOpex2aCalculation;
    //   // console.log(res);
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let { model2A } = project;
      this.runopexdata  = model2A;
      this.runopexdatayear = this.runopexdata.runOpex2aCalculation;
    }
    console.log(this.runopexdata);
    console.log(this.runopexdatayear );
    
    
    this.Options = {
 
    chart: {
        renderTo:'container',
        // marginLeft: 100,
        type:'line'
    },
 
    title: {
        text: 'TOTAL SAVING MODEL(WITH FITSHORING) ~$170MN IN 3 YRS'
    },
 
    yAxis: {
        title: {
            text: ''
        }

    },
 
    xAxis: {
        categories: ['Baseline Year', 'Year1', 'Year2', 'Year3']
    },
 
    legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
 
series: [
    {
    name: 'Tokyo',
    type:'line',
    data: [49.9, 71.5, 106.4, 129.2]

  }, 
  {
    name: 'New York',
    type:'line',
    data: [83.6, 78.8, 98.5, 93.4]

  }, {
    name: 'London',
    type:'line',
    data: [48.9, 38.8, 39.3, 41.4]

  }, {
    name: 'Berlin',
    type:'line',
    data: [42.4, 33.2, 34.5, 39.7]

  }
]
}

  }

  openDailog() {
    this.dailog.open(LineChartComponent);
  }
}

