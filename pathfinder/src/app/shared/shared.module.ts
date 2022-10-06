import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ChartsComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [ChartsComponent, LoaderComponent],
})
export class SharedModule {}
