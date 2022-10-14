import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-run-opex-model',
  templateUrl: './run-opex-model.component.html',
  styleUrls: ['./run-opex-model.component.scss']
})
export class RunOpexModelComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
getData(){
  this.api.getrunopexonsite().subscribe((res)=>{
    console.log(res);
    });
    this.api.getrunopex().subscribe((res)=>{
    console.log(res);
    
  });
  
}
}
