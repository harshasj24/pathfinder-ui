import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  sideNavRoutes = [
    {
      path: 'summary',
      title: 'Optimization Summary',
    },
    {
      path: 'spend',
      title: 'Spends',
    },
    {
      path: 'itpesonal',
      title: 'It Personel',
    },
    {
      path: 'itpartner',
      title: 'IT Personnel Cost',
    },
    {
      path: 'cot',
      title: 'Cost Of Transformation',
    },
    {
      path: 'itrunspend',
      title: 'IT Run Spend without IT personnel',
    },

    {
      path: 'itspend',
      title: 'IT Spend On Assets',
    },
    {
      path: 'itoutsource',
      title: 'RUN  IT Personnela with  Outsourcing',
    },
    {
      path: 'itfitshore',
      title: 'IT Personnel Fit-Shoring',
    },
    {
      path: 'itspendrun',
      title: 'IT Spend On Run Personnel',
    },

    {
      path: 'benchmark',
      title: 'Benchmarks',
    },
    {
      path: 'itfunction',
      title: 'IT  Functions',
    },
  ];

  ngOnInit(): void {}
}
