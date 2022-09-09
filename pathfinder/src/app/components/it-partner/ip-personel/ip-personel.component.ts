import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { mergeAll, concatMap, merge } from 'rxjs';
import { Chart } from 'chart.js';
import { StoreService } from 'src/app/store.service';
import { ClaculationService } from 'src/app/claculation.service';
@Component({
  selector: 'app-ip-personel',
  templateUrl: './ip-personel.component.html',
  styleUrls: ['./ip-personel.component.scss'],
})
export class IpPersonelComponent implements OnInit, AfterViewInit {
  constructor(public cal: ClaculationService, private store: StoreService) {}
  @ViewChild('myChart') char: ElementRef;
  @ViewChild('myChart1') char1: ElementRef;
  itPersonel = new FormGroup({
    itSpend: new FormControl(''),
    ctc: new FormControl(''),
    maxOutsourcing: new FormControl(''),
  });

  get itSpend() {
    return this.itPersonel.get('itSpend');
  }
  get ctc() {
    return this.itPersonel.get('ctc');
  }
  get maxOutsourcing() {
    return this.itPersonel.get('maxOutsourcing');
  }
  claculatedVal = {
    outSourcing: 0,
    run: 0,
    grow: 0,
    transform: 0,
  };

  caluclatedItSpend: number = 0;
  inputTabelVal: any = '';
  dividedVals = {
    outSourcing: 0,
    run: 0,
    grow: 0,
    transform: 0,
  };

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.store.store.subscribe((data: any) => {
      this.inputTabelVal = data;
    });
    this.itSpend?.valueChanges.subscribe((val) => {
      this.claculatedVal.outSourcing = this.cal.caluclatePercentage(
        this.itSpend?.value,
        this.inputTabelVal?.caluclatedItSpend
      );
      this.claculatedVal.grow = this.cal.caluclatePercentage(
        this.inputTabelVal?.grow,
        this.claculatedVal.outSourcing
      );
      this.claculatedVal.run = this.cal.caluclatePercentage(
        this.inputTabelVal?.run,
        this.claculatedVal.outSourcing
      );
      this.claculatedVal.transform = this.cal.caluclatePercentage(
        this.inputTabelVal?.transform,
        this.claculatedVal.outSourcing
      );
    });
    this.ctc?.valueChanges.subscribe((val) => {
      this.dividedVals.outSourcing = this.cal.division(
        this.claculatedVal.outSourcing,
        val
      );
      this.dividedVals.run = this.cal.division(this.claculatedVal.run, val);
      this.dividedVals.grow = this.cal.division(this.claculatedVal.grow, val);
      this.dividedVals.transform = this.cal.division(
        this.claculatedVal.transform,
        val
      );
    });

    this.maxOutsourcing?.valueChanges.subscribe((val) => {
      console.log(val);

      this.store.setMaxEle(
        this.cal.caluclatePercentage(val, this.dividedVals.run)
      );
    });
    // sample

    // charts code
  }
}
