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
    return this.http.post('/inputtables/inputvalues', payload).pipe(
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
        `/itfunctions/input/${this.store.getId(
          'inputTableID'
        )}/${this.store.getId('itPersonnelId')}`,
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
        `/outsource/runfte/${this.store.getId(
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
  getRunItOutsourceCosts() {
    return this.http
      .get(
        `/outsource/runcosts/${this.store.getId(
          'inputTableID'
        )}/${this.store.getId('itPersonnelId')}/${this.store.getId(
          'itpersonelcost'
        )}/${this.store.getId('runItOutsourcingFte')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('runItOutsourcingCosts', res.id);
        })
      );
  }
  getRunItOutsourceFitModal() {
    return this.http
      .get(
        `/outsource/fitmodel/${this.store.getId(
          'inputTableID'
        )}/${this.store.getId('itpersonelcost')}/${this.store.getId(
          'runItOutsourcingFte'
        )}/${this.store.getId('runItOutsourcingCosts')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('runItOutsourcingFitModal', res.id);
        })
      );
  }
  getItSpendOnRunPersonnel() {
    return this.http
      .get(
        `/asset/runpersonnel/${this.store.getId(
          'itPersonnelId'
        )}/${this.store.getId('inputTableID')}/${this.store.getId('COT_Id')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('itSpendOnRunPersonnel', res.id);
        })
      );
  }
  getOutsourcingOnsite() {
    return this.http
      .get(
        `/outsource/outsourceonsite/${this.store.getId(
          'itPersonnelId'
        )}/${this.store.getId('COT_Id')}/${this.store.getId(
          'itSpendOnRunPersonnel'
        )}/${this.store.getId('runItOutsourcingCosts')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('outsourcingOnsite', res.id);
        })
      );
  }
  getOutsourcingFitShore() {
    return this.http
      .get(
        `/outsource/outsourcefit/${this.store.getId(
          'itPersonnelId'
        )}/${this.store.getId('COT_Id')}/${this.store.getId(
          'runItOutsourcingFitModal'
        )}/${this.store.getId('itSpendOnRunPersonnel')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('outsourcingFitShore', res.id);
        })
      );
  }
  getOptimizationLevers() {
    return this.http
      .get(
        `/asset/savinglevers/${this.store.getId('hardware')}/${this.store.getId(
          'software'
        )}/${this.store.getId('managed')}/${this.store.getId(
          'hosted'
        )}/${this.store.getId('itPersonnelId')}/${this.store.getId(
          'COT_Id'
        )}/${this.store.getId('itRunSpend')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('optimizationLevers', res.id);
        })
      );
  }

  // get requests
  getOneRecord(path: string, id: string) {
    return this.http.get(`${path}/${id}`);
  }
  // put requests

  updateInputTables(payload: any) {
    return this.http.put(
      `/inputtables/inputvalues/${this.store.getId('inputTableID')}`,
      payload
    );
  }
  updatePersonnel(payload: any) {
    return this.http.put(
      `/inputtables/itpersonel/${this.store.getId(
        'itPersonnelId'
      )}/${this.store.getId('inputTableID')}`,
      payload
    );
  }
  updatePersonnelCost(payload: any) {
    return this.http.put(
      `/inputtables/itpersonelcost/${this.store.getId(
        'itpersonelcost'
      )}/${this.store.getId('itPersonnelId')}`,
      payload
    );
  }
  updateCostoftransform(payload: any) {
    return this.http.put(
      `/inputtables/cost/${this.store.getId('COT_Id')}/${this.store.getId(
        'inputTableID'
      )}`,
      payload
    );
  }

  updateITspendcat(payload: any) {
    return this.http.put(
      `/inputtables/itspendcat/${this.store.getId('itSpendCatId')}`,
      payload
    );
  }
  updateITfunction(payload: any) {
    return this.http.put(
      `/itfunctions/inputfunctions/${this.store.getId(
        'itFunctionId'
      )}/${this.store.getId('inputTableID')}/${this.store.getId(
        'itPersonnelId'
      )}`,
      payload
    );
  }

  UpadateassetClacification(assetName: string, payload: any, id: any) {
    return this.http.put(
      `/asset/${assetName}/${id}/${this.store.getId(
        'itRunSpend'
      )}/${this.store.getId('inputTableID')}/${this.store.getId(
        'itSpendCatId'
      )}`,
      payload
    );
  }
  // 2nd excel sheet services
  gettotalsavingB() {
    return this.http
      .get(
        `/model/totalmodel2b/${this.store.getId(
          'itRunSpend'
        )}/${this.store.getId('optimizationLevers')}/${this.store.getId(
          'itSpendOnRunPersonnel'
        )}/${this.store.getId('outsourcingFitShore')}
    `
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('totalsavingbID', res.id);
        })
      );
  }
  getrunopexB() {
    return this.http
      .get(`/model/runfitshore/${this.store.getId('totalsavingbID')}`)
      .pipe(
        tap((res: any) => {
          this.store.storeId('runopexfitbID', res.id);
        })
      );
  }
  getrunopexmodelB() {
    return this.http
      .get(`/model/runopex/${this.store.getId('runopexfitbID')}`)
      .pipe(
        tap((res: any) => {
          this.store.storeId('runopexbID', res.id);
        })
      );
  }
  gettotalsavingA() {
    return this.http
      .get(
        `/model/totalmodel2a/${this.store.getId(
          'itRunSpend'
        )}/${this.store.getId('optimizationLevers')}/${this.store.getId(
          'itSpendOnRunPersonnel'
        )}/${this.store.getId('outsourcingOnsite')}/${this.store.getId(
          'totalsavingbID'
        )}
    `
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('totalsavingaID', res.id);
        })
      );
  }
  getrunopexA() {
    return this.http
      .get(
        `/model/runoutsource/${this.store.getId(
          'totalsavingaID'
        )}/${this.store.getId('totalsavingbID')}`
      )
      .pipe(
        tap((res: any) => {
          this.store.storeId('runopexoutsourceaID', res.id);
        })
      );
  }
  getrunopexmodelA() {
    return this.http
      .get(`/model/runopex2a/${this.store.getId('runopexoutsourceaID')}`)
      .pipe(
        tap((res: any) => {
          this.store.storeId('runopexfitaID', res.id);
        })
      );
  }
  // mock_server
  getwaterfalls() {
    return this.http.get('/waterfall');
  }
}
