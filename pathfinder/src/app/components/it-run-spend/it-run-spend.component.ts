import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-it-run-spend',
  templateUrl: './it-run-spend.component.html',
  styleUrls: ['./it-run-spend.component.scss'],
})
export class ItRunSpendComponent implements OnInit {
  constructor(private apiS: ApiService) {}
  runSpendDetails: any[] = [];
  isLoaded: boolean = false;
  ngOnInit(): void {
    this.isLoaded = true;
    this.apiS.getItRunSpend().subscribe((val: any) => {
      // this.runSpendDetails = val;
      console.log(val);
      let inflation: any = {};
      let clientShare: any = {};
      let yearlyRunRate: any = {};

      val?.runCalc.map((element: any, index: number) => {
        if (element.itSpendWithInflation) {
          inflation['year' + (index + 1)] = element.itSpendWithInflation;
          inflation.baseline = val.baseLineYearSpend;
          inflation.total = val.total_itSpendWithInflation;
          inflation.title = 'IT Spend with Inflation';
        }
        if (element.cotClientShare) {
          clientShare['year' + (index + 1)] = element.cotClientShare;
          clientShare.total = val.total_cotClientShare;
          clientShare.title = 'Cost of Transformation Client Share';
        }
        if (element.yearlyRunRate) {
          yearlyRunRate['year' + (index + 1)] = element.cotClientShare;
          yearlyRunRate.total = val.total_yearlyRunRate;
          yearlyRunRate.title = 'Yearly RUN rate';
        }
      });

      this.runSpendDetails = [inflation, clientShare, yearlyRunRate];
      console.log(this.runSpendDetails);
      this.isLoaded = false;
    });
  }
}
