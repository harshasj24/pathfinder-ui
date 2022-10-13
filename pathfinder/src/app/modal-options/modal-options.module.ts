import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModalOptionsComponent } from './home-modal-options.component';
import { SavingmodalBComponent } from './components/savingmodal-b/savingmodal-b.component';
import { MaterialModule } from '../material';
import { OpexModalComponent } from './components/opex-modal/opex-modal.component';
import { SharedModule } from '../shared/shared.module';
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
  declarations: [
    HomeModalOptionsComponent,
    SavingmodalBComponent,
    OpexModalComponent,
    SavingmodelAComponent,
    RunOpexModelComponent,
    WaterfallsTabelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class ModalOptionsModule {}
