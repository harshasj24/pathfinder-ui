import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { LineChartComponent } from 'src/app/shared/charts/line-chart.component';

@Component({
  selector: 'app-opex-modal',
  templateUrl: './opex-modal.component.html',
  styleUrls: ['./opex-modal.component.scss'],
})
export class OpexModalComponent implements OnInit {
  constructor(
    private api: ApiService,
    private dailog: MatDialog,
    private localStorage: LocalStorageService
  ) {}
  graphData1:any[]
  graphData2:any[]
   graphData3:any[]
    graphData4:any[]
  isLoaded: boolean = false;
  ngOnInit(): void {
    this.getData();
    this.getdata();
    this.graphData1=[this.runopexdata.client_drives_baseyear,this.runopexdatayear[0].client_drives,this.runopexdatayear[1].client_drives,this.runopexdatayear[2].client_drives];
    this.graphData2=[this.runopexdata.with_partner_hs_baseyear,this.runopexdatayear[0].with_partner_hs,this.runopexdatayear[1].with_partner_hs,this.runopexdatayear[2].with_partner_hs];
    this.graphData3=[this.runopexdata.with_partner_personnel_baseyear,this.runopexdatayear[0].with_partner_personnel,this.runopexdatayear[1].with_partner_personnel,this.runopexdatayear[2].with_partner_personnel];
    this.graphData4=[this.runopexdata.total_partner_baseyear,this.runopexdatayear[0].total_partner,this.runopexdatayear[1].total_partner,this.runopexdatayear[2].total_partner];
  }
  runopexfitdata: any;
  runopexfitdatayear: any;
  runopexdata: any;
  runopexdatayear: any;

  getData() {
    // this.api.getrunopexB().subscribe((res) => {
    //   this.runopexfitdata = res;
    //   this.runopexfitdatayear = this.runopexfitdata.runfitshorecalculation;
    // console.log(res);
    // });
    let project = this.localStorage.get(`project`);
    if (project) {
      let { runopexfit } = project;
      this.runopexfitdata = runopexfit;
      this.runopexfitdatayear = this.runopexfitdata.runfitshorecalculation;
    }
  }
  openDailog() {
    this.dailog.open(LineChartComponent);
  }
  getdata() {
    // this.api.getrunopexmodelB().subscribe((res) => {
    //   this.runopexdata = res;
    //   this.runopexdatayear = this.runopexdata.runOpexCalc;
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let { model2B } = project;
      this.runopexdata = model2B;
      this.runopexdatayear = this.runopexdata.runOpexCalc;
    }
  }
}
