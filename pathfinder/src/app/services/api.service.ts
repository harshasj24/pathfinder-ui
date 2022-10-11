import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { inputTable } from '../core/models/tables';
import { HttpService } from '../core/services/http.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpService) {}
  getitpersonnel() {
    return this.http.get('/itPersonnel');
  }
  getitpersonnelcost() {
    return this.http.get('/itPersonnelCost');
  }
  getcostoftransform() {
    return this.http.get('/cost');
  }
  getItRunSpend() {
    return this.http.get('/assertRunItSpend');
  }
}
