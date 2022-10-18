import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MaterialModule } from '../material';
import { Routes, RouterModule } from '@angular/router';
import { DailogComponent } from './components/dailog/dailog.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
];
@NgModule({
  declarations: [LandingPageComponent, DailogComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class LandingPageModule {}
