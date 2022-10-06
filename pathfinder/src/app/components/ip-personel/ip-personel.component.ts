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
    itSpend: new FormControl('', [Validators.required]),
    ctc: new FormControl('', [Validators.required]),
    maxOutsourcing: new FormControl('', [Validators.required]),
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

  handleSubmit() {
    this.isLoaded = true;
    this.apiservice.getitpersonnel().subscribe((val) => {
      this.itPersonelData = val;
      console.log(val);

      this.isLoaded = false;
    });
    // this.http.get('/inputTable').subscribe((val) => {
    //   this.inputTableData = val;
    //   console.log(val);
    // this.isLoaded = false;
    // });
  }

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
