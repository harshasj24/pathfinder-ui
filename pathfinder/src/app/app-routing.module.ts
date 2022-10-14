import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'pathfinder', component: LandingPageComponent },
  {
    path: 'costOptimization',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'pathfinder',
    pathMatch: 'full',
  },
  {
    path: 'modalOptions',
    loadChildren: () =>
      import('./modal-options/modal-options.module').then(
        (m) => m.ModalOptionsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
