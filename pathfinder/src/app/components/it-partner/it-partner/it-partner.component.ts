import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClaculationService } from 'src/app/claculation.service';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-it-partner',
  templateUrl: './it-partner.component.html',
  styleUrls: ['./it-partner.component.scss'],
})
export class ItPartnerComponent implements OnInit {
  constructor(private store: StoreService, public calc: ClaculationService) {}

  itPartner = new FormGroup({
    partnerCtcOnsite: new FormControl(''),
    partnerCtcOffshore: new FormControl(''),
    offshoreRatioTobe: new FormControl(''),
    onsiteRatioTobe: new FormControl(''),
    takeoverYear1: new FormControl(''),
    takeoverYear2: new FormControl(''),
    takeoverYear3: new FormControl(''),
    ppiYear1: new FormControl(''),
    ppiYear2: new FormControl(''),
    ppiYear3: new FormControl(''),
    onsiteYear1: new FormControl(''),
    onsiteYear2: new FormControl(''),
    onsiteYear3: new FormControl(''),
    offshoreYear1: new FormControl(''),
    offshoreYear2: new FormControl(''),
    offshoreYear3: new FormControl(''),
  });
  getFieldValue(fieldName: string) {
    return this.itPartner.get(fieldName)?.value;
  }
  maxOutsourcing: any;

  clalculatedValue = {
    ...this.itPartner.value,
  };
  claculateFieldPrecentage(
    fieldName: string,
    fieldValue: any,
    addition: number
  ) {
    this.clalculatedValue[fieldName] =
      addition + this.calc.caluclatePercentage(fieldValue, this.maxOutsourcing);
  }
  claculateValue() {}

  ngOnInit(): void {
    this.itPartner.valueChanges.subscribe((values) => {
      if (values?.takeoverYear1) {
        this.claculateFieldPrecentage(
          'takeoverYear1',
          values?.takeoverYear1,
          0
        );
      }
      if (values?.takeoverYear2) {
        this.claculateFieldPrecentage(
          'takeoverYear2',
          values?.takeoverYear2,
          this.clalculatedValue?.takeoverYear1
        );
      }
      if (values?.takeoverYear3) {
        this.claculateFieldPrecentage(
          'takeoverYear3',
          values?.takeoverYear3,
          this.clalculatedValue?.takeoverYear2
        );
      }
    });
    this.store.maxEle.subscribe((val) => {
      this.maxOutsourcing = val;
    });
    this.itPartner.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
