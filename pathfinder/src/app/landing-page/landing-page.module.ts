import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MaterialModule } from '../material';
import { Routes, RouterModule } from '@angular/router';
import { DailogComponent } from './components/dailog/dailog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
];
@NgModule({
  declarations: [LandingPageComponent, DailogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
})
export class LandingPageModule {}
