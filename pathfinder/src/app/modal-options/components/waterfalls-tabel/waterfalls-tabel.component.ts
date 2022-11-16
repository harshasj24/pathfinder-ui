import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-waterfalls-tabel',
  templateUrl: './waterfalls-tabel.component.html',
  styleUrls: ['./waterfalls-tabel.component.scss']
})
export class WaterfallsTabelComponent implements OnInit {

  constructor(private api:ApiService,private localStorage:LocalStorageService) { }
waterfallsdata:any
isLoaded: boolean = false;
Options:Object
graphData:any[];
  ngOnInit(): void {
    this.getData()
   
    this.graphData=[this.waterfallsdata.baseyear_with_partner,this.waterfallsdata.year1_with_partner,this.waterfallsdata.year2_with_partner, this.waterfallsdata.year3_with_partner,this.waterfallsdata.exit_runrate_with_partner]

  }
  
  getData(){
    // this.api.getwaterfalls().subscribe((res)=>{
    //   this.waterfallsdata=res
    // })
     let project = this.localStorage.get('project');
    if (project) {
      let {waterfall} = project;
      this.waterfallsdata= waterfall;
    }  
    console.log(this.waterfallsdata);
    
    console.log(this.waterfallsdata.baseyear_with_partner);
    console.log(this.waterfallsdata.year1_with_partner);
    console.log(this.waterfallsdata.year2_with_partner);
    console.log(this.waterfallsdata.year3_with_partner);
    console.log(this.waterfallsdata.exit_runrate_with_partner);

    
 
}
}
