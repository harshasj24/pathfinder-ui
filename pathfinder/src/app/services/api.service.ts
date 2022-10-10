import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inputTable } from '../core/models/tables';
import { HttpService } from '../core/services/http.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpService) {}
  getitpersonnel(){
    return this.http.get('/itPersonnel')
  }
  getcostoftransform(){
    return this.http.get('/cost')
  }

  
}
