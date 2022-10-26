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
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CostOptimizationRoutingModule } from './cost-optimization.routing.module';
import { CoreModule } from '../core/core.module';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SummaryComponent } from './components/summary/summary.component';
import { EditTabComponent } from './components/edit-tab/edit-tab.component';
import { OptStoreService } from './services/opt-store.service';
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
    SummaryComponent,
    EditTabComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CostOptimizationRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [OptStoreService],
  bootstrap: [HomeComponent],
})
export class CostOptimizationModule {}
