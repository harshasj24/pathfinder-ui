import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-spend-run',
  templateUrl: './it-spend-run.component.html',
  styleUrls: ['./it-spend-run.component.scss'],
})
export class ItSpendRunComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  outsourcingOnsite = {
    type:"spendOnRun",
    asset: '2.A. OUTSOURCING ONSITE ONLY',
    asset1: '85% Outsourcing - Onsite Only',
    asset2: 'Cost of Transformation Partner share',
    asset3: 'Total savings YOY',
    leverh1: 'Total IT Spend  with PARTNER take over ',
    leverh2: '',
    leverh3: '',
    leverh4: '',
    activitiesh1: '',
    activitiesh2: '',
    activitiesh3: '',
    activitiesh4: '',
  };
}
