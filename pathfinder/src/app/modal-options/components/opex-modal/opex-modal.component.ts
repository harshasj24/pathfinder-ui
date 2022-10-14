import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'opex-modal',
  templateUrl: './opex-modal.component.html',
  styleUrls: ['./opex-modal.component.scss'],
})
export class OpexModalComponent implements OnInit {
  constructor(private api: ApiService) {}
  isLoaded: boolean = false;
  ngOnInit(): void {}
  runopexfitdata: any;
  runopexfitdatayear: any;
  runopexdata: any;
  runopexdatayear: any;
  getData() {
    this.api.getrunopexB().subscribe((res) => {
      this.runopexfitdata = res;
      this.runopexfitdatayear = this.runopexfitdata.runfitshorecalculation;
      // console.log(res);
    });
  }
  getdata() {
    this.api.getrunopexmodelB().subscribe((res) => {
      this.runopexdata = res;
      this.runopexdatayear = this.runopexdata.runOpexCalc;
      // console.log(res);
    });
  }
}
