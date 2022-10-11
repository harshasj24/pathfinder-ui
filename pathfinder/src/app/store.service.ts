import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from './core/services/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private localStorge: LocalStorageService) {}
  store = new Subject();
  maxEle = new Subject();
  setStore(data: any) {
    this.store.next(data);
  }
  setMaxEle(data: any) {
    this.maxEle.next(data);
  }

  storeId(key: string, id: string) {
    let storedIds = this.localStorge.get('ids') || {};
    storedIds[key] = id;
    this.localStorge.set('ids', storedIds);
  }
  getId(key: string) {
    let storedIds = this.localStorge.get('ids') || {};
    return storedIds[key];
  }
  getAllIds() {
    return this.localStorge.get('ids');
  }
}
