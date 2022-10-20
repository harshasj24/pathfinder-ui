import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-savingmodal-b',
  templateUrl: './savingmodal-b.component.html',
  styleUrls: ['./savingmodal-b.component.scss'],
})
export class SavingmodalBComponent implements OnInit {
  constructor(private api:ApiService,private localStorage:LocalStorageService) {}
  isLoaded:false
  ngOnInit(): void {
    this.getData();
  }
  savingmodelbdata:any
  savingmodelbdatayear:any
getData(){
//  this.api.gettotalsavingB().subscribe((res)=>{
//   this.savingmodelbdata=res
//   this.savingmodelbdatayear=this.savingmodelbdata.model2bcalculation
//  })
let project = this.localStorage.get('project')
    if (project) {
      let {total2B } = project;
      this.savingmodelbdata = total2B;
      this.savingmodelbdatayear = this.savingmodelbdata.model2bcalculation;
    }
}
}
