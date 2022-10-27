import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { benchmark } from 'src/app/core/constants/benchmarks';
import { CommonService } from 'src/app/core/services/common.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/store.service';
import { OptStoreService } from '../../services/opt-store.service';

@Component({
  selector: 'app-costoftransform',
  templateUrl: './costoftransform.component.html',
  styleUrls: ['./costoftransform.component.scss'],
})
export class CostoftransformComponent implements OnInit {
  constructor(
    private apiservice: ApiService,
    private store: StoreService,
    private localStorage: LocalStorageService,
    private common: CommonService,
    private optStore: OptStoreService
  ) {}
  @Input() changePreDefined: boolean;
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
  controls = Object.keys(this.costtransformation.value);
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
    // this.apiservice
    //   .getOneRecord('/inputtables/cost', this.store.getId('COT_Id'))
    //   .subscribe((res: any) => {
    //     this.costData = res;
    //     this.costDataYear = res.yearBaseCostCalculations;
    // let { yearBaseCostCalculations } = res;
    // let obj: any = {};
    // yearBaseCostCalculations.map((el: any, i: any) => {
    //   obj[`cot_spread_percy${i + 1}`] = el.cot_spread_perc;
    // });
    // this.costtransformation.patchValue({ ...res, ...obj });
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let { cost } = project;
      // console.log(cost);
      this.costData = cost;
      this.costDataYear = cost.yearBaseCostCalculations;
      let { yearBaseCostCalculations } = cost;
      // console.log(yearBaseCostCalculations);

      let obj: any = {};
      yearBaseCostCalculations.map((el: any, i: any) => {
        obj[`cot_spread_percy${i + 1}`] = el.cot_spread_perc;
      });
      // this.costtransformation.patchValue({ ...res, ...obj });
      this.costtransformation.patchValue({ ...cost, ...obj });

      //         yearBaseCostCalculations.map((el: any, i: any) => {
      //           // obj.yearLine = i;
      //           obj[`cot_spread_percy${i + 1}`] = el.cot_spread_perc;
      //            obj[`client_share_value${i + 1}`] = el.client_share_value;
      //            obj[`partner_share_value${i + 1}`] = el.partner_share_value;
      //            obj[`total_with_inflation${i + 1}`] = el.total_with_inflation;

      //           // console.log(el.cot_spread_perc);
      //           // console.log(el.client_share_value);
      //           // console.log(el.partner_share_value);
      //           // console.log(el.total_with_inflation);
      //           console.log(obj);
      //           [
      //           'client_share_value',
      //           'partner_share_value',
      //           'total_with_inflation'

      //         ].forEach((el) => {
      //           this.costDataYear[el] = cost.yearBaseCostCalculations.map(
      //             (val: any) => val[el]
      //           );
      //         });
      // console.log(obj);

      //

      //         });
    }
  }
  enableEdit() {
    this.canUpdate = true;
    this.common.disableEnable(false, this.controls, this.costtransformation);
  }
  handleUpdate() {
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

    if (this.changePreDefined) {
      this.optStore.benchMarks.cost = payload;
    } else {
      let benchmarks = { ...this.apiservice.getBenchMarks() };
      benchmarks.cost = payload;
      // this.apiservice.updateCostoftransform(payload).subscribe((val) => {
      //   console.log(val);
      //   this.handleGet();
      // });
      this.apiservice.updateProject(benchmarks).subscribe((res) => {
        this.localStorage.set('project', res);
        this.handleGet();
      });
    }
  }
  ngOnInit(): void {
    this.handleGet();
    if (!this.changePreDefined) {
      this.common.disableEnable(true, this.controls, this.costtransformation);
    }
  }
}
