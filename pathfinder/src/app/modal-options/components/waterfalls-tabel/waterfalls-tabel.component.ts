import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-waterfalls-tabel',
  templateUrl: './waterfalls-tabel.component.html',
  styleUrls: ['./waterfalls-tabel.component.scss']
})
export class WaterfallsTabelComponent implements OnInit {

  constructor(private api:ApiService,private localStorage:LocalStorageService) { }
waterfallsdata:any
isLoaded: boolean = false;
  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
    // this.api.getwaterfalls().subscribe((res)=>{
    //   this.waterfallsdata=res
    // })
     let project = this.localStorage.get('pathfiner');
    if (project) {
      let {waterfalls} = project;
      this.waterfallsdata= waterfalls;
    }
    
  }
}
