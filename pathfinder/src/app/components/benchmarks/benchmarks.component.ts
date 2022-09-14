import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss'],
})
export class BenchmarksComponent implements OnInit {
  select: any;
  constructor() {}

  ngOnInit(): void {}

  handleClick(e: any) {
    console.log(e.target.value);
  }
}
