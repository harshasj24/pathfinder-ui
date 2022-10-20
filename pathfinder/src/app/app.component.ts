import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './core/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: Router, public common: CommonService) {}
  pathName: any = false;
  ngOnInit(): void {
    //-----------------------------------------------------------------------------//
    // setting the cookie-------
    // document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    // getting the cookie-------
    // console.log(document.cookie);
    //-----------------------------------------------------------------------------//

    // hiding the navbar based on the route
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        this.pathName = val.url;
        console.log(val.url);
      }
    });
  }
  title = 'pathfinder';
}
