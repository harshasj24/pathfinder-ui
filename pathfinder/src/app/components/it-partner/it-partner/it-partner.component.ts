import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.store.maxEle.subscribe((val) => {
      this.maxOutsourcing = val;
    });
    this.itPartner.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
