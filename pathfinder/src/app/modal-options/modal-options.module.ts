import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModalOptionsComponent } from './home-modal-options.component';
import { SavingmodalBComponent } from './components/savingmodal-b/savingmodal-b.component';
import { MaterialModule } from '../material';
import { OpexModalComponent } from './components/opex-modal/opex-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeModalOptionsComponent,
  },
  // {
  //   path: 'savingmodal-b',
  //   component: SavingmodalBComponent,
  // },
];

@NgModule({
  declarations: [
    HomeModalOptionsComponent,
    SavingmodalBComponent,
    OpexModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class ModalOptionsModule {}
