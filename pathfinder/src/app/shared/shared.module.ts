import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material';
import { BarChartComponent } from './charts/bar-chart.component';
import { LineChartComponent } from './charts/line-chart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutSideNavComponent } from './layouts/layout-side-nav/layout-side-nav.component';
import { HighBarchartComponent } from './highcharts/high-barchart/high-barchart.component';
import { HighLinechartComponent } from './highcharts/high-linechart/high-linechart.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ChartsComponent,
    LoaderComponent,
    BarChartComponent,
    LineChartComponent,
    PagenotfoundComponent,
    LayoutSideNavComponent,
    HighBarchartComponent,
    HighLinechartComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    ChartsComponent,
    LoaderComponent,
    BarChartComponent,
    LineChartComponent,
    PagenotfoundComponent,
    LayoutSideNavComponent,
    HighBarchartComponent,
    HighLinechartComponent,
  ],
})
export class SharedModule {}
