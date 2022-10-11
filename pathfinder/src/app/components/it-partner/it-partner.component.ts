import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaculationService } from 'src/app/claculation.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/store.service';

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
    private http: HttpService
  ) {}
  @ViewChild('myChart') char: ElementRef;
  @ViewChild('myChart1') char1: ElementRef;
  isLoaded: boolean = false;
  itPersonelCostData: any;
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
  claculateValue() {}
  ngAfterViewInit() {}

  handleSubmit() {
    this.isLoaded = true;
    this.apiservice.getitpersonnel().subscribe((val) => {
      this.itPersonelCostData = val;
      console.log(val);

      this.isLoaded = false;
    });
  }
  ngOnInit(): void {
    this.itpersonelcost.valueChanges.subscribe((values) => {
      if (values?.takeoverYear1) {
        this.claculateFieldPrecentage(
          'takeoverYear1',
          values?.takeoverYear1,
          this.maxOutsourcing,
          0
        );
      }
      if (values?.takeoverYear2) {
        this.claculateFieldPrecentage(
          'takeoverYear2',
          values?.takeoverYear2,
          this.maxOutsourcing,
          this.clalculatedValue?.takeoverYear1
        );
      }
      if (values?.takeoverYear3) {
        this.claculateFieldPrecentage(
          'takeoverYear3',
          values?.takeoverYear3,
          this.maxOutsourcing,
          this.clalculatedValue?.takeoverYear2
        );
      }

      if (values?.ppiYear1) {
        this.claculateFieldPrecentage(
          'ppiYear1',
          values.ppiYear1,
          this.clalculatedValue?.takeoverYear1,
          0
        );
        this.clalculatedValue.netFteYear1 = this.calc.substraction(
          this.clalculatedValue?.takeoverYear1,
          this.clalculatedValue.ppiYear1
        );
      }
      if (values?.ppiYear2) {
        this.claculateFieldPrecentage(
          'ppiYear2',
          values.ppiYear2,
          this.clalculatedValue?.takeoverYear2,
          this.clalculatedValue?.ppiYear1
        );
        this.clalculatedValue.netFteYear2 = this.calc.substraction(
          this.clalculatedValue?.takeoverYear2,
          this.clalculatedValue.ppiYear2
        );
      }
      if (values?.ppiYear3) {
        this.claculateFieldPrecentage(
          'ppiYear3',
          values.ppiYear3,
          this.clalculatedValue?.takeoverYear3,
          this.clalculatedValue?.ppiYear2
        );
        this.clalculatedValue.netFteYear3 = this.calc.substraction(
          this.clalculatedValue?.takeoverYear3,
          this.clalculatedValue.ppiYear3
        );
      }
    });
    this.store.maxEle.subscribe((val) => {
      this.maxOutsourcing = val;
    });
    this.itpersonelcost.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
