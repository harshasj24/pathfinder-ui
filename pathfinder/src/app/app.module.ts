import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

import { InputTabelComponent } from './components/it-partner/input-tabel/input-tabel.component';
import { IpPersonelComponent } from './components/it-partner/ip-personel/ip-personel.component';
import { ItPartnerComponent } from './components/it-partner/it-partner/it-partner.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTabelComponent,
    IpPersonelComponent,
    HomeComponent,
    ItPartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
