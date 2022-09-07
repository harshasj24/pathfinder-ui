import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js';
import { ClaculationService } from '../claculation.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-input-tabel',
  templateUrl: './input-tabel.component.html',
  styleUrls: ['./input-tabel.component.scss'],
})
export class InputTabelComponent implements OnInit {
  constructor(public cal: ClaculationService, private store: StoreService) {}
  submitted = false;
  inputTabel = new FormGroup({
    annualRevenue: new FormControl(''),
    itSpend: new FormControl(''),
    run: new FormControl(''),
    grow: new FormControl(''),
    transform: new FormControl(''),
  });
  get annualRevenue() {
    return this.inputTabel.get('annualRevenue');
  }
  get itSpend() {
    return this.inputTabel.get('itSpend');
  }
  get run() {
    return this.inputTabel.get('run');
  }
  get grow() {
    return this.inputTabel.get('grow');
  }
  get transform() {
    return this.inputTabel?.get('transform');
  }

  caluclatedItSpend: number = 0;
  ngOnInit(): void {
    this.inputTabel.valueChanges.subscribe((val) => {
      this.caluclatedItSpend = this.cal.caluclatePercentage(
        val?.annualRevenue,
        val?.itSpend
      );
      const values = {
        ...val,
        caluclatedItSpend: this.caluclatedItSpend,
      };
      this.store.setStore(values);
    });
    // this.itSpend?.valueChanges.subscribe((val) => {
    //   this.caluclatedItSpend = this.cal.caluclatePercentage(
    //     this.annualRevenue?.value,
    //     val
    //   );
    // });
    // this.transform?.valueChanges.subscribe((val) => {
    //   const values = {
    //     ...this.inputTabel.value,
    //     caluclatedItSpend: this.caluclatedItSpend,
    //     transform: val,
    //   };
    //   this.store.setStore(values);
    //   console.log(values);
    // });
    
  }
}
