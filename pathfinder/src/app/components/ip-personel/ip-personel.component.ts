import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { mergeAll, concatMap, merge } from 'rxjs';
import { Chart } from 'chart.js';
import { StoreService } from 'src/app/store.service';
import { ClaculationService } from 'src/app/claculation.service';
import { ApiService } from 'src/app/services/api.service';
import { HttpService } from 'src/app/core/services/http.service';
@Component({
  selector: 'app-ip-personel',
  templateUrl: './ip-personel.component.html',
  styleUrls: ['./ip-personel.component.scss'],
})
export class IpPersonelComponent implements OnInit, AfterViewInit {
  constructor(
    public cal: ClaculationService,
    private store: StoreService,
    private apiservice: ApiService,
    private http: HttpService
  ) {}
  @ViewChild('myChart') char: ElementRef;
  @ViewChild('myChart1') char1: ElementRef;
  isLoaded: boolean = false;
  itPersonelData: any;
  itPersonel = new FormGroup({
    it_spend_on_personal_perc: new FormControl('', [Validators.required]),
    avr_ctc_per_fte: new FormControl('', [Validators.required]),
    perc_eligible_forpersonal: new FormControl('', [Validators.required]),
  });

  get it_spend_on_personal_perc() {
    return this.itPersonel.get('it_spend_on_personal_perc');
  }
  get avr_ctc_per_fte() {
    return this.itPersonel.get('avr_ctc_per_fte');
  }
  get perc_eligible_forpersonal() {
    return this.itPersonel.get('perc_eligible_forpersonal');
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

  handleSubmit() {
    this.isLoaded = true;
    this.apiservice.getitpersonnel(this.itPersonel.value).subscribe((val) => {
      this.itPersonelData = val;
      console.log(val);
      this.isLoaded = false;
    });
    console.log(this.itPersonel?.value);
  }

  ngOnInit(): void {
    this.store.store.subscribe((data: any) => {
      this.inputTabelVal = data;
    });
    this.it_spend_on_personal_perc?.valueChanges.subscribe((val) => {
      this.claculatedVal.outSourcing = this.cal.caluclatePercentage(
        this.it_spend_on_personal_perc?.value,
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
    this.avr_ctc_per_fte?.valueChanges.subscribe((val) => {
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

    this.perc_eligible_forpersonal?.valueChanges.subscribe((val) => {
      console.log(val);

      this.store.setMaxEle(
        this.cal.caluclatePercentage(val, this.dividedVals.run)
      );
    });
    // sample

    // charts code
  }
}
