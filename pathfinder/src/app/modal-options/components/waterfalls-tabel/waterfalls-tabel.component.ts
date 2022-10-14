import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-waterfalls-tabel',
  templateUrl: './waterfalls-tabel.component.html',
  styleUrls: ['./waterfalls-tabel.component.scss']
})
export class WaterfallsTabelComponent implements OnInit {

  constructor(private api:ApiService) { }
waterfallsdata:any
isLoaded: boolean = false;
  ngOnInit(): void {
  }
  getData(){
    this.api.getwaterfalls().subscribe((res)=>{
      this.waterfallsdata=res
    })
    
  }
}
