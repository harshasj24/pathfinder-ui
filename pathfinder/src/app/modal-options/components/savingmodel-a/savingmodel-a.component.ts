import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-savingmodel-a',
  templateUrl: './savingmodel-a.component.html',
  styleUrls: ['./savingmodel-a.component.scss'],
})
export class SavingmodelAComponent implements OnInit {
  constructor(private api: ApiService,private localStorage:LocalStorageService) {}

  ngOnInit(): void {
    this.getData()
  }
  isLoaded: boolean = false;
  savingmodeldata: any;
  savingmodeldatayear: any;
  getData() {
    // this.api.gettotalsavingA().subscribe((res) => {
    //   this.savingmodeldata = res;
    //   this.savingmodeldatayear = this.savingmodeldata.model2acalculation;
    // });
    let project = this.localStorage.get('project');
    if (project) {
      let {total2A } = project;
      this.savingmodeldata = total2A;
      this.savingmodeldatayear = this.savingmodeldata.model2acalculation;
    }
}
  }

