import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DailogService {
  dailogData = new Subject<any>();
  addDailogData(data: any) {
    this.dailogData.next('data');
  }
  constructor() {}
}
