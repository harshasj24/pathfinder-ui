import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-costoftransform',
  templateUrl: './costoftransform.component.html',
  styleUrls: ['./costoftransform.component.scss'],
})
export class CostoftransformComponent implements OnInit {
  constructor(private apiservice: ApiService,private store: StoreService,) {}
  isLoaded: boolean = false;
  canUpdate: boolean = false;
  costData: any;
  costDataYear: any;
  costtransformation = new FormGroup({
    cot_perc: new FormControl('', Validators.required),
    client_perc: new FormControl('', Validators.required),
    partner_perc: new FormControl('', Validators.required),
    cot_spread_percy1: new FormControl('', Validators.required),
    cot_spread_percy2: new FormControl('', Validators.required),
    cot_spread_percy3: new FormControl('', Validators.required),
  });
  get cot_perc() {
    return this.costtransformation.get('cot_perc');
  }
  get client_perc() {
    return this.costtransformation.get('client_perc');
  }
  get partner_perc() {
    return this.costtransformation.get('partner_perc');
  }
  get cot_spread_percy1() {
    return this.costtransformation.get('cot_spread_percy1');
  }
  get cot_spread_percy2() {
    return this.costtransformation.get('cot_spread_percy2');
  }
  get cot_spread_percy3() {
    return this.costtransformation.get('cot_spread_percy3');
  }
  handleSubmit() {
    this.isLoaded = true;
    let yearBaseCostCalculations: any = [];

    for (let i = 1; i < 4; i++) {
      let obj = {
        year: i,
        cot_spread_perc: this.costtransformation.value[`cot_spread_percy${i}`],
      };
      yearBaseCostCalculations.push(obj);
    }
    let payload: any = {
      cot_perc: this.costtransformation.value['cot_perc'],
      client_perc: this.costtransformation.value['client_perc'],
      partner_perc: this.costtransformation.value['partner_perc'],
      yearBaseCostCalculations,
    };
    this.apiservice.getcostoftransform(payload).subscribe((val) => {
      this.costData = val;
      console.log(this.costData);
      console.log(this.costData.yearBaseCostCalculations);
      this.costDataYear = val.yearBaseCostCalculations;
      console.log(this.costDataYear);
    });
  }
  // get one request
  handleGet() {
    this.apiservice
      .getOneRecord(
        '/inputtables/cost',
        this.store.getId('inputTableID')
      )
      .subscribe((res: any) => {
        this.costtransformation = res;
        this.canUpdate = true;
        this.costtransformation.patchValue({ ...res });
      });
  }
  ngOnInit(): void {}
}
