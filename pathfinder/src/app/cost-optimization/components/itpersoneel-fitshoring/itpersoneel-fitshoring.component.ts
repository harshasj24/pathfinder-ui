import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-itpersoneel-fitshoring',
  templateUrl: './itpersoneel-fitshoring.component.html',
  styleUrls: ['./itpersoneel-fitshoring.component.scss'],
})
export class ItpersoneelFitshoringComponent implements OnInit {
  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService
  ) {}
  isLoaded: boolean = false;
  itpersonneldata: any;
  itpersonneldatayear: any;

  itpersonnelfitshoring = {
    // id: '63455221fa84cf0075f15dcd',
    // client_baseyear: 811,
    // client_fte_baseyear: 121650000,
    // partner_fte_baseyear: 0,
    // fte_onsite_baseyear: 0,
    // fte_offshore_baseyear: 0,
    // partner_bill_baseyear: 0,
    // bill_onsite_baseyear: 0,
    // bill_offshore_baseyear: 0,
    // total_spend_baseyear: 121650000,
    // total_partner: 76230300,
    // total_sum_spend: 239536800,
    // fitcalc: [
    //   {
    //     year: 1,
    //     client_year: 639,
    //     client_fte_year: 98725500,
    //     partner_fte_total: 167,
    //     fte_onsite: 134,
    //     fte_offshore: 33,
    //     partner_bill_total: 16552100,
    //     bill_onsite: 15872300,
    //     bill_offshore: 679800,
    //     total_spend_for_original: 115277600,
    //   },
    //   {
    //     year: 2,
    //     client_year: 295,
    //     client_fte_year: 45577500,
    //     partner_fte_total: 486,
    //     fte_onsite: 243,
    //     fte_offshore: 243,
    //     partner_bill_total: 33789150,
    //     bill_onsite: 28783350,
    //     bill_offshore: 5005800,
    //     total_spend_for_original: 79366650,
    //   },
    //   {
    //     year: 3,
    //     client_year: 123,
    //     client_fte_year: 19003500,
    //     partner_fte_total: 644,
    //     fte_onsite: 129,
    //     fte_offshore: 515,
    //     partner_bill_total: 25889050,
    //     bill_onsite: 15280050,
    //     bill_offshore: 10609000,
    //     total_spend_for_original: 44892550,
    //   },
    // ],
  };

  getData() {
    // this.api.getRunItOutsourceFitModal().subscribe((val: any) => {
    //   this.itpersonneldata = val;
    //   this.itpersonneldatayear = val.fitcalc;
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let { itpersfit } = project;
      this.itpersonneldata = itpersfit;
      this.itpersonneldatayear = itpersfit.fitcalc;
    }
  }
  ngOnInit(): void {
    this.getData();
    // this.itpersonneldata = this.itpersonnelfitshoring;
    // this.itpersonneldatayear = this.itpersonneldata.fitcalc;
  }
}
