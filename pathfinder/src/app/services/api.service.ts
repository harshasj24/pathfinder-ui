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
  getitpersonnelcost(payload: any) {
    return this.http
      .post(
        `/inputtables/itpersonelcost/${this.store.getId('itPersonnelId')}`,
        payload
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('itpersonelcost', res.id);
        })
      );
  }
  getcostoftransform(payload: any) {
    return this.http
      .post(`/inputtables/cost/${this.store.getId('inputTableID')}`, payload)
      .pipe(
        tap((res: any) => {
          this.store.storeId('COT_Id', res.id);
        })
      );
  }
  getItRunSpend() {
    return this.http
      .get(
        `/inputtables/itrun/${this.store.getId(
          'itPersonnelId'
        )}/${this.store.getId('inputTableID')}/${this.store.getId('COT_Id')}
    `
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('itRunSpend', res.id);
        })
      );
  }

  getItFunctions(payload: any) {
    return this.http
      .post(
        `/input/${this.store.getId('inputTableID')}/${this.store.getId(
          'itPersonnelId'
        )}`,
        payload
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('itFunctionId', res.id);
        })
      );
  }

  itspendCat(payload: any) {
    return this.http.post('/inputtables/itspendcat', payload).pipe(
      tap((res: any) => {
        this.store.storeId('itSpendCatId', res.id);
      })
    );
  }

  assetClacification(assetName: string, payload: any) {
    return this.http
      .post(
        `/asset/${assetName}/${this.store.getId(
          'itRunSpend'
        )}/${this.store.getId('inputTableID')}/${this.store.getId(
          'itSpendCatId'
        )}`,
        payload
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId(assetName, res.id);
        })
      );
  }

  getRunItOutsourceFte() {
    return this.http
      .get(
        `/outsource/runpersonnel/${this.store.getId(
          'inputTableID'
        )}/${this.store.getId('itPersonnelId')}/${this.store.getId(
          'itpersonelcost'
        )}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('runItOutsourcingFte', res.id);
        })
      );
  }
}
