import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'pathfinder',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  // {
  //   path: 'costOptimization',
  //   component: HomeComponent,
  // },
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
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, SharedModule],
})
export class AppRoutingModule {}
