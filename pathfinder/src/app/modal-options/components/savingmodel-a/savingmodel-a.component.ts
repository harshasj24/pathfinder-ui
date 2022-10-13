import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-savingmodel-a',
  templateUrl: './savingmodel-a.component.html',
  styleUrls: ['./savingmodel-a.component.scss']
})
export class SavingmodelAComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {

  }
  savingmodeldata:any
  savingmodeldatayear:any
getData(){
 this.api.getsavingmodel().subscribe((res)=>{
  this.savingmodeldata=res
  this.savingmodeldatayear=this.savingmodeldata.yearBaseCostCalculations
 })
  
}
}
