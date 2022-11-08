import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaculationService } from 'src/app/claculation.service';
import { benchmark } from 'src/app/core/constants/benchmarks';
import { CommonService } from 'src/app/core/services/common.service';
import { CoreServices } from 'src/app/core/services/core.service';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/store.service';
import { OptStoreService } from '../../services/opt-store.service';

export interface YearBaseCaluclation {
  yearLine: number;
  takeOverPlan: number;
  ppImprovement: number;
  onsiteRatio: number;
  offshoreRatio: number;
}

@Component({
  selector: 'app-it-partner',
  templateUrl: './it-partner.component.html',
  styleUrls: ['./it-partner.component.scss'],
})
export class ItPartnerComponent implements OnInit {
  constructor(
    private store: StoreService,
    public calc: ClaculationService,
    private apiservice: ApiService,
    private http: HttpService,
    public core: CoreServices,
    private localStorage: LocalStorageService,
    private common: CommonService,
    private optStore: OptStoreService
  ) {}
  @ViewChild('myChart') char: ElementRef;
  @ViewChild('myChart1') char1: ElementRef;
  @Input() changePreDefined: boolean;
  isLoaded: boolean = false;
  itPersonelCostData: any = [];
  canUpdate: boolean = false;

  isSubmitted: boolean = false;
  itpersonelcost = new FormGroup({
    partnerCtcOnsite: new FormControl('', [Validators.required]),
    partnerCtcOffshore: new FormControl('', [Validators.required]),
    onsitRatio: new FormControl('', [Validators.required]),
    offshoreRatio: new FormControl('', [Validators.required]),
    takeOverPlany1: new FormControl('', [Validators.required]),
    takeOverPlany2: new FormControl('', [Validators.required]),
    takeOverPlany3: new FormControl('', [Validators.required]),
    ppImprovementy1: new FormControl('', [Validators.required]),
    ppImprovementy2: new FormControl('', [Validators.required]),
    ppImprovementy3: new FormControl('', [Validators.required]),
    onsiteRatioy1: new FormControl('', [Validators.required]),
    onsiteRatioy2: new FormControl('', [Validators.required]),
    onsiteRatioy3: new FormControl('', [Validators.required]),
    offshoreRatioy1: new FormControl('', [Validators.required]),
    offshoreRatioy2: new FormControl('', [Validators.required]),
    offshoreRatioy3: new FormControl('', [Validators.required]),
  });
  controls = Object.keys(this.itpersonelcost?.value);
  outsourcings: any = {};
  getFieldValue(fieldName: string) {
    return this.itpersonelcost.get(fieldName)?.value;
  }
  maxOutsourcing: any;

  clalculatedValue = {
    ...this.itpersonelcost.value,
    netFteYear1: 0,
    netFteYear2: 0,
    netFteYear3: 0,
  };
  claculateFieldPrecentage(
    fieldName: string,
    fieldValue: any,
    fieldValue2: any,
    addition: number
  ) {
    this.clalculatedValue[fieldName] =
      addition + this.calc.caluclatePercentage(fieldValue, fieldValue2);
  }
  getValue(key: string): any {
    this.itPersonelCostData?.yearBseCalculations?.map((el: any) => el[key]);
  }

  getcalucatedVal() {}
  handleSubmit() {
    let yearBseCalculations: any = [];
    for (let i = 1; i < 4; i++) {
      let obj: YearBaseCaluclation = {
        yearLine: i,
        takeOverPlan: this.itpersonelcost.value[`takeOverPlany${i}`],
        ppImprovement: this.itpersonelcost.value[`ppImprovementy${i}`],
        offshoreRatio: this.itpersonelcost.value[`offshoreRatioy${i}`],
        onsiteRatio: this.itpersonelcost.value[`onsiteRatioy${i}`],
      };
      yearBseCalculations.push(obj);
    }
    let payload = {
      offshoreRatio: this.itpersonelcost.value['offshoreRatio'],
      onsitRatio: this.itpersonelcost.value['onsitRatio'],
      partnerCtcOnsite: this.itpersonelcost.value['partnerCtcOnsite'],
      partnerCtcOffshore: this.itpersonelcost.value['partnerCtcOffshore'],
      yearBseCalculations,
    };
    console.log(payload);
    this.apiservice.getitpersonnelcost(payload).subscribe((val) => {
      console.log(val);
      this.itPersonelCostData = val;
      [
        'infteCumulative',
        'fteSavingsCumulative',
        'netPartnerFte',
        'inFteOnsite',
        'inFteOffshore',
      ].forEach((el) => {
        this.outsourcings[el] = val.yearBseCalculations.map(
          (val: any) => val[el]
        );
      });
    });
  }
  // get one request
  handleGet() {
    // this.apiservice
    //   .getOneRecord(
    //     '/inputtables/itpersonelcost',
    //     this.store.getId('itpersonelcost')
    //   )
    //   .subscribe((res: any) => {
    //     let obj: any = {};
    //     res.yearBseCalculations.map((el: any, i: any) => {
    //       obj.yearLine = i;
    //       obj[`takeOverPlany${i + 1}`] = el.takeOverPlan;
    //       obj[`ppImprovementy${i + 1}`] = el.ppImprovement;
    //       obj[`offshoreRatioy${i + 1}`] = el.offshoreRatio;
    //       obj[`onsiteRatioy${i + 1}`] = el.onsiteRatio;
    //     });
    //     this.canUpdate = true;
    //     this.itPersonelCostData = res;
    //     console.log(obj);
    //     [
    //       'infteCumulative',
    //       'fteSavingsCumulative',
    //       'netPartnerFte',
    //       'inFteOnsite',
    //       'inFteOffshore',
    //     ].forEach((el) => {
    //       this.outsourcings[el] = res.yearBseCalculations.map(
    //         (val: any) => val[el]
    //       );
    //     });

    //     this.itpersonelcost.patchValue({ ...res, ...obj });
    //     // this.disableEnable(false);
    //   });
    let project = this.localStorage.get('project');
    if (project) {
      let { itpersonalcost } = project;
      console.log(project);

      this.itPersonelCostData = itpersonalcost;
      let obj: any = {};
      itpersonalcost.yearBseCalculations.map((el: any, i: any) => {
        obj.yearLine = i;
        obj[`takeOverPlany${i + 1}`] = el.takeOverPlan;
        obj[`ppImprovementy${i + 1}`] = el.ppImprovement;
        obj[`offshoreRatioy${i + 1}`] = el.offshoreRatio;
        obj[`onsiteRatioy${i + 1}`] = el.onsiteRatio;
      });
      this.canUpdate = true;
      // this.itPersonelCostData = res;
      // console.log(obj);
      [
        'infteCumulative',
        'fteSavingsCumulative',
        'netPartnerFte',
        'inFteOnsite',
        'inFteOffshore',
      ].forEach((el) => {
        this.outsourcings[el] = itpersonalcost.yearBseCalculations.map(
          (val: any) => val[el]
        );
      });

      this.itpersonelcost.patchValue({ ...itpersonalcost, ...obj });
    }
  }
  enableEdit() {
    this.canUpdate = false;
    this.common.disableEnable(false, this.controls, this.itpersonelcost);
  }

  // handleupdate
  handleUpdate() {
    let yearBseCalculations: any = [];
    for (let i = 1; i < 4; i++) {
      let obj: YearBaseCaluclation = {
        yearLine: i,
        takeOverPlan: this.itpersonelcost.value[`takeOverPlany${i}`],
        ppImprovement: this.itpersonelcost.value[`ppImprovementy${i}`],
        offshoreRatio: this.itpersonelcost.value[`offshoreRatioy${i}`],
        onsiteRatio: this.itpersonelcost.value[`onsiteRatioy${i}`],
      };
      yearBseCalculations.push(obj);
    }
    let payload = {
      offshoreRatio: this.itpersonelcost.value['offshoreRatio'],
      onsitRatio: this.itpersonelcost.value['onsitRatio'],
      partnerCtcOnsite: this.itpersonelcost.value['partnerCtcOnsite'],
      partnerCtcOffshore: this.itpersonelcost.value['partnerCtcOffshore'],
      yearBseCalculations,
    };
    if (this.changePreDefined) {
      this.optStore.benchMarks.itpersonalcost = payload;
    } else {
      let benchmarks = { ...this.apiservice.getBenchMarks() };
      benchmarks.itpersonalcost = payload;
      // this.apiservice.updatePersonnelCost(payload).subscribe((val) => {
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
    if (!this.changePreDefined) {
      this.common.disableEnable(true, this.controls, this.itpersonelcost);
    }
    this.handleGet();
    //   this.itpersonelcost.valueChanges.subscribe((values) => {
    //     if (values?.takeoverYear1) {
    //       this.claculateFieldPrecentage(
    //         'takeoverYear1',
    //         values?.takeoverYear1,
    //         this.maxOutsourcing,
    //         0
    //       );
    //     }
    //     if (values?.takeoverYear2) {
    //       this.claculateFieldPrecentage(
    //         'takeoverYear2',
    //         values?.takeoverYear2,
    //         this.maxOutsourcing,
    //         this.clalculatedValue?.takeoverYear1
    //       );
    //     }
    //     if (values?.takeoverYear3) {
    //       this.claculateFieldPrecentage(
    //         'takeoverYear3',
    //         values?.takeoverYear3,
    //         this.maxOutsourcing,
    //         this.clalculatedValue?.takeoverYear2
    //       );
    //     }
    //     if (values?.ppiYear1) {
    //       this.claculateFieldPrecentage(
    //         'ppiYear1',
    //         values.ppiYear1,
    //         this.clalculatedValue?.takeoverYear1,
    //         0
    //       );
    //       this.clalculatedValue.netFteYear1 = this.calc.substraction(
    //         this.clalculatedValue?.takeoverYear1,
    //         this.clalculatedValue.ppiYear1
    //       );
    //     }
    //     if (values?.ppiYear2) {
    //       this.claculateFieldPrecentage(
    //         'ppiYear2',
    //         values.ppiYear2,
    //         this.clalculatedValue?.takeoverYear2,
    //         this.clalculatedValue?.ppiYear1
    //       );
    //       this.clalculatedValue.netFteYear2 = this.calc.substraction(
    //         this.clalculatedValue?.takeoverYear2,
    //         this.clalculatedValue.ppiYear2
    //       );
    //     }
    //     if (values?.ppiYear3) {
    //       this.claculateFieldPrecentage(
    //         'ppiYear3',
    //         values.ppiYear3,
    //         this.clalculatedValue?.takeoverYear3,
    //         this.clalculatedValue?.ppiYear2
    //       );
    //       this.clalculatedValue.netFteYear3 = this.calc.substraction(
    //         this.clalculatedValue?.takeoverYear3,
    //         this.clalculatedValue.ppiYear3
    //       );
    //     }
    //   });
    //   this.store.maxEle.subscribe((val) => {
    //     this.maxOutsourcing = val;
    //   });
    //   this.itpersonelcost.valueChanges.subscribe((val) => {
    //     console.log(val);
    //   });
  }
}
