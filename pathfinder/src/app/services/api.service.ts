import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';
import { inputTable } from '../core/models/tables';
import { HttpService } from '../core/services/http.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpService, private store: StoreService) {}
  getInputTable(payload: any) {
    return this.http.post('/inputtables/input', payload).pipe(
      tap((res: any) => {
        this.store.storeId('inputTableID', res.id);
      })
    );
  }
  getitpersonnel(payload: any) {
    return this.http
      .post(
        `/inputtables/itpersonel/${this.store.getId('inputTableID')}`,
        payload
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('itPersonnelId', res.id);
        })
      );
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
