import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartsComponent } from 'src/app/shared/charts/charts.component';
import { benchmark } from '../constants/benchmarks';

@Injectable()
export class CoreServices {
  constructor(private dailog: MatDialog) {}
  benchmarks: any = benchmark;
  openDailog(component: any) {
    this.dailog.open(component);
  }
  setBanchmark(data: any) {}
  openChartsDailog() {
    this.openDailog(ChartsComponent);
  }
}
