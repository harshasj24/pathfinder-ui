import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material';
import { BarChartComponent } from './charts/bar-chart.component';
import { LineChartComponent } from './charts/line-chart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutSideNavComponent } from './layouts/layout-side-nav/layout-side-nav.component';

@NgModule({
  declarations: [
    ChartsComponent,
    LoaderComponent,
    BarChartComponent,
    LineChartComponent,
    PagenotfoundComponent,
    LayoutSideNavComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    ChartsComponent,
    LoaderComponent,
    BarChartComponent,
    LineChartComponent,
    PagenotfoundComponent,
    LayoutSideNavComponent,
  ],
})
export class SharedModule {}
