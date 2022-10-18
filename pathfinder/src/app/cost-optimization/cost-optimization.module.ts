import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { Routes } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    InputTabelComponent,
    IpPersonelComponent,
    ItPartnerComponent,
    CostoftransformComponent,
    BenchmarksComponent,
    TableComponent,
    ItSpendComponent,
    ItFunctionsComponent,
    ItRunSpendComponent,
    ItpersoneelFitshoringComponent,
    RunitspendOutsourceComponent,
    AssetFormComponent,
    ItspendrunComponent,
  ],
  imports: [CommonModule],
})
export class CostOptimizationModule {}
