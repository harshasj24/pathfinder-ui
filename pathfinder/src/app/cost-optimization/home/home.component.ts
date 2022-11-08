import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private common: CommonService) {}
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
      title: 'IT Personnel',
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
      title: 'Run IT Personnel with  Outsourcing',
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
  handleClick() {
    if (this.common.isSmaller) {
      this.common.closeDrawer();
    }
  }
}
