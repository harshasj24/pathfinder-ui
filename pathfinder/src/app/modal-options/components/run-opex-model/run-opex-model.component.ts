import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-run-opex-model',
  templateUrl: './run-opex-model.component.html',
  styleUrls: ['./run-opex-model.component.scss']
})
export class RunOpexModelComponent implements OnInit {

  constructor(private api:ApiService) { }
  runopexonsitedata:any
  runopexonsitedatayear:any
  runopexdata:any
  runopexdatayear:any
  ngOnInit(): void {
  }
getData(){
  this.api.getrunopexonsite().subscribe((res)=>{
    this.runopexonsitedata=res;
    this.runopexonsitedatayear=this.runopexonsitedata.yearBaseCostCalculations
    console.log(res);
    }); 
}
getdata(){
   this.api.getrunopex().subscribe((res)=>{
    this.runopexdata=res
    this.runopexdatayear=this.runopexdata.yearBaseCostCalculations
    // console.log(res);
    
  });

}
}
