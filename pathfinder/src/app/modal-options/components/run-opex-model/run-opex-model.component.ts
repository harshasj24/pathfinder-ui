import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
import { LineChartComponent } from 'src/app/shared/charts/line-chart.component';
import * as Highcharts from 'highcharts'
import { HighLinechartComponent } from 'src/app/shared/highcharts/high-linechart/high-linechart.component';

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
  graphData1:any[]
  graphData2:any[]
   graphData3:any[]
    graphData4:any[]
    ngOnInit(): void {
    this.getData();
    this.getdata();
    this.graphData1=[this.runopexdata.client_drives_baseyear,this.runopexdatayear[0].client_drives,this.runopexdatayear[1].client_drives,this.runopexdatayear[2].client_drives];
    this.graphData2=[this.runopexdata.with_partner_hs_baseyear,this.runopexdatayear[0].with_partner_hs,this.runopexdatayear[1].with_partner_hs,this.runopexdatayear[2].with_partner_hs];
    this.graphData3=[this.runopexdata.with_partner_personnel_baseyear,this.runopexdatayear[0].with_partner_personnel,this.runopexdatayear[1].with_partner_personnel,this.runopexdatayear[2].with_partner_personnel];
    this.graphData4=[this.runopexdata.total_partner_baseyear,this.runopexdatayear[0].total_partner,this.runopexdatayear[1].total_partner,this.runopexdatayear[2].total_partner];
    
    
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
    // console.log(this.runopexdata);
    // console.log(this.runopexdatayear[0].client_drives );
    // console.log(this.runopexdatayear[1].client_drives );
    // console.log(this.runopexdatayear[2].client_drives );

  }

  openDailog() {
    // this.dailog.open( );
  }
}

