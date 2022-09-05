import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = new Subject();
  setStore(data: any) {
    this.store.next(data);
  }
  constructor() {}
}
