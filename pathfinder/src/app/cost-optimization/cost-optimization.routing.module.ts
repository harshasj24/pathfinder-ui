import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTabelComponent } from './components/input-tabel/input-tabel.component';
import { IpPersonelComponent } from './components/ip-personel/ip-personel.component';
import { HomeComponent } from './home/home.component';
import { ItPartnerComponent } from './components/it-partner/it-partner.component';
import { CostoftransformComponent } from './components/costoftransform/costoftransform.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';
import { TableComponent } from './components/table/table.component';
import { ItSpendComponent } from './components/it-spend/it-spend.component';
import { ItFunctionsComponent } from './components/it-functions/it-functions.component';
import { ItRunSpendComponent } from './components/it-run-spend/it-run-spend.component';
import { ItpersoneelFitshoringComponent } from './components/itpersoneel-fitshoring/itpersoneel-fitshoring.component';
import { RunitspendOutsourceComponent } from './components/runitspend-outsource/runitspend-outsource.component';
import { AssetFormComponent } from './components/asset-form/asset-form.component';
import { ItspendrunComponent } from './components/itspendrun/itspendrun.component';
import { PagenotfoundComponent } from '../shared/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export const cost_routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'spend',
        component: InputTabelComponent,
      },
      {
        path: 'itpesonal',
        component: IpPersonelComponent,
      },
      {
        path: 'itpartner',
        component: ItPartnerComponent,
      },
      {
        path: 'cot',
        component: CostoftransformComponent,
      },
      {
        path: 'benchmark',
        component: BenchmarksComponent,
      },
      {
        path: 'itspend',
        component: ItSpendComponent,
      },
      {
        path: 'itfunction',
        component: ItFunctionsComponent,
      },
      {
        path: 'itrunspend',
        component: ItRunSpendComponent,
      },
      {
        path: 'itfitshore',
        component: ItpersoneelFitshoringComponent,
      },
      {
        path: 'itoutsource',
        component: RunitspendOutsourceComponent,
      },
      {
        path: 'itspendrun',
        component: ItspendrunComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cost_routes)],
  exports: [RouterModule],
})
export class CostOptimizationRoutingModule {}
