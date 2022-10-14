import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material';
import { BarChartComponent } from './charts/bar-chart.component';
import { LineChartComponent } from './charts/line-chart.component';

@NgModule({
  declarations: [
    ChartsComponent,
    LoaderComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    ChartsComponent,
    LoaderComponent,
    BarChartComponent,
    LineChartComponent,
  ],
})
export class SharedModule {}
