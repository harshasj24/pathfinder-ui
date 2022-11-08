import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-modal-options',
  templateUrl: './home-modal-options.component.html',
  styleUrls: ['./home-modal-options.component.scss'],
})
export class HomeModalOptionsComponent {
  constructor() {}
  sidenav = [
    {
      path: 'savingmodalB',
      title: 'TOTAL SAVINGS MODEL B',
    },
    {
      path: 'opexmodalB',
      title: 'RUN OPEX MODEL B',
    },
    {
      path: 'savingmodalA',
      title: 'TOTAL SAVINGS MODEL A',
    },
    {
      path: 'runopexA',
      title: 'RUN OPEX MODEL A',
    },
    {
      path: 'waterfall',
      title: 'WATERFALL MODAL',
    },
  ];
}
