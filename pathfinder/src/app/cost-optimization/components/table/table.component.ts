import {
  Component,
  Input,
  OnInit,
  AfterContentChecked,
  AfterContentInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() inputData: any;
  @Input() calucatedData: any = {};
  activites: any = {
    activity1: [0, 0, 0],
    activity2: [0, 0, 0],
    activity3: [0, 0, 0],
    activity4: [0, 0, 0],
    activity5: [0, 0, 0],
    activity6: [0, 0, 0],
    activity7: [0, 0, 0],
  };
  total: any = {
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0,
    total5: 0,
    total6: 0,
  };
  calucatedDataKey: any;
  calucalations: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('called');
    this.getData();
  }

  getData() {
    this.calucatedDataKey = Object.keys(this.calucatedData);
    // extracting the array inside the responce(calucatedData)
    console.log(this.calucatedData);

    this.calucalations =
      this.calucatedData[
        this.calucatedDataKey[this.calucatedDataKey.length - 1]
      ] || [];

    console.log(this.calucalations);

    if (this.calucalations.length > 0) {
      let objKey = Object.keys(this.calucalations[0]).slice(1);
      objKey.map((val, i) => {
        this.activites['activity' + (i + 1)] = this.calucalations.map(
          (el) => el[val]
        );
      });
      console.log(this.activites);
    }

    let total = this.calucatedDataKey.filter((val: any, i: any) => {
      if (val.includes('total_')) {
        return val;
      }
    });
    total.map((val: any, i: number) => {
      this.total['total' + (i + 1)] = this.calucatedData[val];
    });
    console.log(this.total);
  }

  ngOnInit(): void {
    this.getData();
  }
}
