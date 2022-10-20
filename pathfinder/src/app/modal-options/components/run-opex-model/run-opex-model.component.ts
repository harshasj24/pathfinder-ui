import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
import { LineChartComponent } from 'src/app/shared/charts/line-chart.component';

@Component({
  selector: 'app-run-opex-model',
  templateUrl: './run-opex-model.component.html',
  styleUrls: ['./run-opex-model.component.scss'],
})
export class RunOpexModelComponent implements OnInit {
  constructor(private api: ApiService, private dailog: MatDialog,private localStorage:LocalStorageService) {}
  isLoaded: boolean = false;
  runopexonsitedata: any;
  runopexonsitedatayear: any;
  runopexdata: any;
  runopexdatayear: any;
  ngOnInit(): void {
    this.getData();
    this.getdata();
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
    let project = this.localStorage.get(`project`);
    if (project) {
      let { model2A } = project;
      this.runopexdata  = model2A;
      this.runopexdatayear = this.runopexdata.runOpex2aCalculation;
    }
  }

  openDailog() {
    this.dailog.open(LineChartComponent);
  }
}
