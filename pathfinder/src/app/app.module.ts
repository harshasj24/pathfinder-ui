import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

import { CostoftransformComponent } from './components/costoftransform/costoftransform.component';
import { InputTabelComponent } from './components/input-tabel/input-tabel.component';
import { IpPersonelComponent } from './components/ip-personel/ip-personel.component';
import { ItPartnerComponent } from './components/it-partner/it-partner.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';
import { TableComponent } from './components/table/table.component';
import { ItSpendComponent } from './components/it-spend/it-spend.component';
import { ItFunctionsComponent } from './components/it-functions/it-functions.component';
import { ItSpendRunComponent } from './it-spend-run/it-spend-run.component';
import { CoreModule } from './core/core.module';
import { ItRunSpendComponent } from './components/it-run-spend/it-run-spend.component';
import { ItpersoneelFitshoringComponent } from './components/itpersoneel-fitshoring/itpersoneel-fitshoring.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTabelComponent,
    IpPersonelComponent,
    HomeComponent,
    ItPartnerComponent,
    CostoftransformComponent,
    BenchmarksComponent,
    TableComponent,
    ItSpendComponent,
    ItFunctionsComponent,
    ItSpendRunComponent,
    ItRunSpendComponent,
    ItpersoneelFitshoringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
