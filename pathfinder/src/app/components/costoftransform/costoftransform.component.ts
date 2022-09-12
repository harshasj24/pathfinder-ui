import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-costoftransform',
  templateUrl: './costoftransform.component.html',
  styleUrls: ['./costoftransform.component.scss']
})
export class CostoftransformComponent implements OnInit {

  constructor() { }
COT = new FormGroup({
    cot: new FormControl(''),
    clientshare: new FormControl(''),
    partnershare: new FormControl(''),
  });
  get cot() {
    return this.COT.get('cot');
  }
  get clientshare() {
    return this.COT.get('clientshare');
  }
  get partnershare() {
    return this.COT.get('partnershare');
  }
  ngOnInit(): void {
  }

}
