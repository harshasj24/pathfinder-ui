import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-savingmodal-b',
  templateUrl: './savingmodal-b.component.html',
  styleUrls: ['./savingmodal-b.component.scss'],
})
export class SavingmodalBComponent implements OnInit {
  constructor(private api:ApiService) {}
  isLoaded:false
  ngOnInit(): void {}
  savingmodelbdata:any
  savingmodelbdatayear:any
getData(){
 this.api.gettotalsavingB().subscribe((res)=>{
  this.savingmodelbdata=res
  this.savingmodelbdatayear=this.savingmodelbdata.yearBaseCostCalculations
 })
}
}
