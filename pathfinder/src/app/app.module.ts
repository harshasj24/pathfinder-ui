import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTabelComponent } from './input-tabel/input-tabel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IpPersonelComponent } from './ip-personel/ip-personel.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, InputTabelComponent, IpPersonelComponent, ChartsComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
