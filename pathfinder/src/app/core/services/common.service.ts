import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  modalOptionsDrawer: any;
  costOptDrawer: any;
  sideNav: MatSidenav;
  isSmaller: boolean = false;

  toggleModalDrawer() {
    this.sideNav.toggle();
  }
  closeDrawer() {
    this.sideNav.close();
  }
  openDrawer() {
    this.sideNav.open();
  }

  disableEnable(disable: boolean, controls: any, form: any) {
    controls.map((control: any) => {
      if (disable) {
        form?.get(control)?.disable();
      } else {
        form?.get(control)?.enable();
      }
    });
  }
}
