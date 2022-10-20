import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { LineChartComponent } from 'src/app/shared/charts/line-chart.component';

@Component({
  selector: 'opex-modal',
  templateUrl: './opex-modal.component.html',
  styleUrls: ['./opex-modal.component.scss'],
})
export class OpexModalComponent implements OnInit {
  constructor(private api: ApiService, private dailog: MatDialog,private localStorage: LocalStorageService) {}
  isLoaded: boolean = false;
  ngOnInit(): void {
    this.getData()
    this.getdata()
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
    let project = this.localStorage.get(`project`)
    if (project) {
      let { model2B} = project;
      this.runopexdata  = model2B;
      this.runopexdatayear = this.runopexdata.runOpexCalc;
    }
  }
}
