import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-itspendrun',
  templateUrl: './itspendrun.component.html',
  styleUrls: ['./itspendrun.component.scss'],
})
export class ItspendrunComponent implements OnInit {
  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService
  ) {}
  isLoaded: boolean = false;
  itspenddata: any;
  itspenddatayear: any;
  outsourcingdata: any;
  outsourcingdatayear: any;
  totaloutsourcingdata: any;
  totaloutsourcingyear: any;
  itspendrun = {
    id: '63455096fa84cf0075f15dca',
    itspend_baseline: 121613375,
    total_itSpendWithInflation: 387171623,
    total_cotClientShare: 6889398.0,
    total_yearlyRunRate: 394061021,
    runpersonnelcalculation: [
      {
        year: 1,
        itSpendWithInflation: 1.25261776e8,
        cotClientShare: 2066819.0,
        yearlyRunRate: 1.27328595e8,
      },
      {
        year: 2,
        itSpendWithInflation: 1.29019629e8,
        cotClientShare: 3444699.0,
        yearlyRunRate: 1.32464328e8,
      },
      {
        year: 3,
        itSpendWithInflation: 1.32890218e8,
        cotClientShare: 1377880.0,
        yearlyRunRate: 1.34268098e8,
      },
    ],
  };
  outsourceingonsite = {
    outsourceOnsiteCalc: [
      {
        year: 1,
        total_it_spend: 118506650,
        cot_partner_share: 1691033,
        outsource_onsite_only: 116815617,
        total_savings_yoy: 10512978,
      },
      {
        year: 2,
        total_it_spend: 103144200,
        cot_partner_share: 2818389,
        outsource_onsite_only: 100325811,
        total_savings_yoy: 32138517,
      },
      {
        year: 3,
        total_it_spend: 95285300,
        cot_partner_share: 1127356,
        outsource_onsite_only: 94157944,
        total_savings_yoy: 40110154,
      },
    ],
    id: '63455291fa84cf0075f15dce',
    sum_total_it_spend: 316936150,
    sum_cot_partner_share: 5636778,
    sum_outsource_onsite_only: 311299372,
    sum_total_savings_yoy: 82761649,
    main_total_savings_yoy: 21.0,
  };
  totaloutsourceing = {
    id: '63455370fa84cf0075f15dcf',
    sum_totoal_outsource_fit: 233900022,
    sum_onsite_offshore_model: 239536800,
    sum_cot_partner_share: 5636778,
    sum_total_savings_yoy: 160160999,
    main_total_savings_yoy: 41.0,
    outsourceFitCalc: [
      {
        year: 1,
        totoal_outsource_fit: 113586567,
        onsite_offshore_model: 115277600,
        cot_partner_share: 1691033,
        total_savings_yoy: 13742028,
      },
      {
        year: 2,
        totoal_outsource_fit: 76548261,
        onsite_offshore_model: 79366650,
        cot_partner_share: 2818389,
        total_savings_yoy: 55916067,
      },
      {
        year: 3,
        totoal_outsource_fit: 43765194,
        onsite_offshore_model: 44892550,
        cot_partner_share: 1127356,
        total_savings_yoy: 90502904,
      },
    ],
  };

  getSpendPersonnel() {
    // this.api.getItSpendOnRunPersonnel().subscribe((res: any) => {
    //   this.itspenddata = res;
    //   this.itspenddatayear = res.runpersonnelcalculation;
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let { itspendrun } = project;
      this.itspenddata = itspendrun;
      this.itspenddatayear = itspendrun.runpersonnelcalculation;
    }
  }
  outsourcingOnsite() {
    // this.api.getOutsourcingOnsite().subscribe((res: any) => {
    //   this.outsourcingdata = res;
    //   this.outsourcingdatayear = res.outsourceOnsiteCalc;
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let { outsourceonsite } = project;

      console.log(outsourceonsite);

      this.outsourcingdata = outsourceonsite;
      this.outsourcingdatayear = outsourceonsite.outsourceOnsiteCalc;
    }
  }
  outsourcingOffshore() {
    let project = this.localStorage.get('project');
    if (project) {
      let { totalfitshore } = project;
      console.log(totalfitshore);

      this.totaloutsourcingdata = totalfitshore;
      this.totaloutsourcingyear = totalfitshore.outsourceFitCalc;
    }
  }
  ngOnInit(): void {
    this.getSpendPersonnel();
    this.outsourcingOnsite();
    this.outsourcingOffshore();
    // this.itspenddata = this.itspendrun;
    // this.itspenddatayear = this.itspenddata.runpersonnelcalculation;
    // this.outsourcingdata = this.outsourceingonsite;
    // this.outsourcingdatayear = this.outsourcingdata.outsourceOnsiteCalc;
    // this.totaloutsourcingdata = this.totaloutsourceing;
    // this.totaloutsourcingyear = this.totaloutsourcingdata.outsourceFitCalc;
  }
}
