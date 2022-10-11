import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, LocalStorageService],
})
export class CoreModule {}
