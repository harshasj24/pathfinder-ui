import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from './components/dailog/dailog.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private dailog: MatDialog) {}

  openDailog() {
    this.dailog.open(DailogComponent, { disableClose: true });
  }
}
