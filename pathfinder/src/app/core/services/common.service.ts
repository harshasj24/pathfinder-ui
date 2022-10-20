import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  modalOptionsDrawer: any;
  costOptDrawer: any;

  toggleModalDrawer() {
    this.modalOptionsDrawer.toggle();
  }
}
