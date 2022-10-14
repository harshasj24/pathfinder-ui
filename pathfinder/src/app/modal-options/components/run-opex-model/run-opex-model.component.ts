import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-run-opex-model',
  templateUrl: './run-opex-model.component.html',
  styleUrls: ['./run-opex-model.component.scss']
})
export class RunOpexModelComponent implements OnInit {

  constructor(private api:ApiService) { }
   isLoaded: boolean = false;
  runopexonsitedata:any
  runopexonsitedatayear:any
  runopexdata:any
  runopexdatayear:any
  ngOnInit(): void {
  }
getData(){
  this.api.getrunopexA().subscribe((res)=>{
    this.runopexonsitedata=res;
    this.runopexonsitedatayear=this.runopexonsitedata.runoutsourcecalculation
    // console.log(res);
    }); 
}
getdata(){
   this.api.getrunopexmodelA().subscribe((res)=>{
    this.runopexdata=res
    this.runopexdatayear=this.runopexdata.runOpex2aCalculation
    // console.log(res);
    
  });

}
}
