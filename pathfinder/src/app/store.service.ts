import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = new Subject();
  maxEle = new Subject();
  setStore(data: any) {
    this.store.next(data);
  }
  setMaxEle(data: any) {
    this.maxEle.next(data);
  }
  constructor() {}
}
