import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
import { LineChartComponent } from 'src/app/shared/charts/line-chart.component';

@Component({
  selector: 'app-run-opex-model',
  templateUrl: './run-opex-model.component.html',
  styleUrls: ['./run-opex-model.component.scss'],
})
export class RunOpexModelComponent implements OnInit {
  constructor(private api: ApiService, private dailog: MatDialog) {}
  isLoaded: boolean = false;
  runopexonsitedata: any;
  runopexonsitedatayear: any;
  runopexdata: any;
  runopexdatayear: any;
  ngOnInit(): void {}
  getData() {
    this.api.getrunopexA().subscribe((res) => {
      this.runopexonsitedata = res;
      this.runopexonsitedatayear =
        this.runopexonsitedata.runoutsourcecalculation;
      // console.log(res);
    });
  }
  getdata() {
    this.api.getrunopexmodelA().subscribe((res) => {
      this.runopexdata = res;
      this.runopexdatayear = this.runopexdata.runOpex2aCalculation;
      // console.log(res);
    });
  }

  openDailog() {
    this.dailog.open(LineChartComponent);
  }
}
