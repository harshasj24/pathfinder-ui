import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartsComponent } from 'src/app/shared/charts/charts.component';

@Injectable()
export class CoreServices {
  constructor(private dailog: MatDialog) {}

  openDailog(component: any) {
    this.dailog.open(component);
  }
  openChartsDailog() {
    this.openDailog(ChartsComponent);
  }
}
