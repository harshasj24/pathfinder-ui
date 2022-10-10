import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-costoftransform',
  templateUrl: './costoftransform.component.html',
  styleUrls: ['./costoftransform.component.scss']
})
export class CostoftransformComponent implements OnInit {

  constructor( private apiservice:ApiService) { }
  isLoaded: boolean = false;
  costData: any;
  costDataYear:any
COT = new FormGroup({
    cot: new FormControl('',Validators.required),
    clientshare: new FormControl('',Validators.required),
    partnershare: new FormControl('',Validators.required),
    cosy1:new FormControl('',Validators.required),
    cosy2:new FormControl('',Validators.required),
    cosy3:new FormControl('',Validators.required),
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
  get cosy1(){
    return this.COT.get('cosy1')
  }
  get cosy2(){
    return this.COT.get('cosy2')
  }
  get cosy3(){
    return this.COT.get('cosy3')
  }
  handleSubmit(){
    this.isLoaded = true;
    this.apiservice.getcostoftransform().subscribe((val)=>{
      this.costData=val;
      console.log(this.costData);
      console.log(this.costData.yearBaseCostCalculations);
      this.costDataYear=this.costData.yearBaseCostCalculations;
      console.log(this.costDataYear);
    })
  }
  ngOnInit(): void {
  }

}
