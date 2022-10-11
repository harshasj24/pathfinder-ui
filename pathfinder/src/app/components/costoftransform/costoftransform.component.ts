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
costtransformation= new FormGroup({
    cot_perc: new FormControl('',Validators.required),
    client_perc: new FormControl('',Validators.required),
    partner_perc: new FormControl('',Validators.required),
    cot_spread_percy1:new FormControl('',Validators.required),
    cot_spread_percy2:new FormControl('',Validators.required),
    cot_spread_percy3:new FormControl('',Validators.required),
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
  get cot_spread_percy1(){
    return this.costtransformation.get('cot_spread_percy1')
  }
  get cot_spread_percy2(){
    return this.costtransformation.get('cot_spread_percy2')
  }
  get cot_spread_percy3(){
    return this.costtransformation.get('cot_spread_percy3')
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
