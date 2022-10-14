import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: Router) {}
  pathName: any = false;
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        this.pathName = val.url;
        console.log(val.url);
      }
    });
  }
  title = 'pathfinder';
}
