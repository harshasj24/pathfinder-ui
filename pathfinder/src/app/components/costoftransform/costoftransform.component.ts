import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-costoftransform',
  templateUrl: './costoftransform.component.html',
  styleUrls: ['./costoftransform.component.scss']
})
export class CostoftransformComponent implements OnInit {

  constructor() { }
COT = new FormGroup({
    cot: new FormControl('',Validators.required),
    clientshare: new FormControl('',Validators.required),
    partnershare: new FormControl('',Validators.required),
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
  handleSubmit(){

  }
  ngOnInit(): void {
  }

}
