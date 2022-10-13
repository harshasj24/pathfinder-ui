import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './components/demo1/demo1.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeModalOptionsComponent } from './home-modal-options.component';

const routes: Routes = [
  {
    path: '',
    component: HomeModalOptionsComponent,
  },
];

@NgModule({
  declarations: [Demo1Component, HomeModalOptionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ModalOptionsModule {}
