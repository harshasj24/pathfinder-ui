import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-layout-side-nav',
  templateUrl: './layout-side-nav.component.html',
  styleUrls: ['./layout-side-nav.component.scss'],
})
export class LayoutSideNavComponent implements OnInit, AfterViewInit {
  constructor(public common: CommonService, private bps: BreakpointObserver) {}
  @ViewChild('sideNav') sideNav: MatSidenav;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.common.sideNav = this.sideNav;
    this.bps.observe(['(max-width:820px)']).subscribe((observer) => {
      if (observer.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
        this.common.isSmaller = true;
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
        this.common.isSmaller = false;
      }
    });
  }
}
