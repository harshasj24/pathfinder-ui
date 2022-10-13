import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './components/demo1/demo1.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeModalOptionsComponent } from './home-modal-options.component';
import { SavingmodelAComponent } from './components/savingmodel-a/savingmodel-a.component';
import { RunOpexModelComponent } from './components/run-opex-model/run-opex-model.component';
import { WaterfallsTabelComponent } from './components/waterfalls-tabel/waterfalls-tabel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeModalOptionsComponent,
  },
];

@NgModule({
  declarations: [Demo1Component, HomeModalOptionsComponent, SavingmodelAComponent, RunOpexModelComponent, WaterfallsTabelComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ModalOptionsModule {}
