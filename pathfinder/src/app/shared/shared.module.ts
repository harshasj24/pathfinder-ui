import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [ChartsComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ChartsComponent, LoaderComponent],
})
export class SharedModule {}
