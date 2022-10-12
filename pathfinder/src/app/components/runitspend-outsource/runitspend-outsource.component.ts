import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'runitspend-outsource',
  templateUrl: './runitspend-outsource.component.html',
  styleUrls: ['./runitspend-outsource.component.scss'],
})
export class RunitspendOutsourceComponent implements OnInit {
  constructor() {}
  isLoaded: boolean = false;
  runitspendftedata: any;
  runitspendftedatayear:any
  runitspendcostsdata: any;
  runitspendcostsdatayear:any
  runitspendfte = {
    id: '634550f8fa84cf0075f15dcb',
    client_exist_baseyear: 811,
    partner_exist_baseyear: 0,
    net_fte_scope_baseyear: 811,
    total_savings_in_fte: 44,
    runfteCalc: [
      {
        year: 1,
        client_exit_load: 639,
        partner_exit_load: 167,
        net_fte_original: 806,
        run_it_outsource: 172,
      },
      {
        year: 2,
        client_exit_load: 295,
        partner_exit_load: 486,
        net_fte_original: 781,
        run_it_outsource: 344,
      },
      {
        year: 3,
        client_exit_load: 123,
        partner_exit_load: 644,
        net_fte_original: 767,
        run_it_outsource: 172,
      },
    ],
  };
  runitspendcosts = {
    id: '63455163fa84cf0075f15dcc',
    client_spend_baseyear: 121650000,
    partner_bill_baseyear: 0,
    total_spend_baseyear: 121650000,
    total_client_spend: 19003500,
    total_partner_bill_spend: 76281800,
    total_sum_spend: 95285300,
    net_run_rate: 0,
    runCostsCalc: [
      {
        year: 1,
        client_spend: 98725500,
        partner_bill: 19781150,
        total_spend: 118506650,
      },
      {
        year: 2,
        client_spend: 45577500,
        partner_bill: 57566700,
        total_spend: 103144200,
      },
      {
        year: 3,
        client_spend: 19003500,
        partner_bill: 76281800,
        total_spend: 95285300,
      },
    ],
  };
  ngOnInit(): void {
    this.runitspendftedata=this.runitspendfte
    this.runitspendftedatayear=this.runitspendftedata.runfteCalc
    this.runitspendcostsdata=this.runitspendcosts
    this.runitspendcostsdatayear=this.runitspendcostsdata.runCostsCalc
  }
}
