import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-it-functions',
  templateUrl: './it-functions.component.html',
  styleUrls: ['./it-functions.component.scss'],
})
export class ItFunctionsComponent {
  constructor(private api: ApiService, private store: StoreService) {}
  canUpdate: boolean = false;
  itFunctions = new FormGroup({
    data_center_itspend_run_perc: new FormControl('', Validators.required),
    data_center_fte_spread_perc: new FormControl('', Validators.required),
    end_user_computing_itspend_run_perc: new FormControl(
      '',
      Validators.required
    ),
    end_user_computing_fte_spread_perc: new FormControl(
      '',
      Validators.required
    ),
    it_service_desk_itspend_run_perc: new FormControl('', Validators.required),
    it_service_desk_fte_spread_perc: new FormControl('', Validators.required),
    network_itspend_run_perc: new FormControl('', Validators.required),
    network_fte_spread_perc: new FormControl('', Validators.required),
    application_enhance_itspend_run_perc: new FormControl(
      '',
      Validators.required
    ),
    application_enhance_fte_spread_perc: new FormControl(
      '',
      Validators.required
    ),
    application_support_itspend_run_perc: new FormControl(
      '',
      Validators.required
    ),
    application_support_fte_spread_perc: new FormControl(
      '',
      Validators.required
    ),
    it_management_itspend_run_perc: new FormControl('', Validators.required),
    it_management_fte_spread_perc: new FormControl('', Validators.required),
  });
  get data_center_itspend_run_perc() {
    return this.itFunctions.get('data_center_itspend_run_perc');
  }
  get data_center_fte_spread_perc() {
    return this.itFunctions.get('data_center_fte_spread_perc');
  }

  get end_user_computing_itspend_run_perc() {
    return this.itFunctions.get('end_user_computing_itspend_run_perc');
  }
  get end_user_computing_fte_spread_perc() {
    return this.itFunctions.get('end_user_computing_fte_spread_perc');
  }
  get it_service_desk_itspend_run_perc() {
    return this.itFunctions.get('it_service_desk_itspend_run_perc');
  }

  get it_service_desk_fte_spread_perc() {
    return this.itFunctions.get('it_service_desk_fte_spread_perc');
  }

  get network_itspend_run_perc() {
    return this.itFunctions.get('network_itspend_run_perc');
  }
  get network_fte_spread_perc() {
    return this.itFunctions.get('network_fte_spread_perc');
  }

  get application_enhance_itspend_run_perc() {
    return this.itFunctions.get('application_enhance_itspend_run_perc');
  }
  get application_enhance_fte_spread_perc() {
    return this.itFunctions.get('application_enhance_fte_spread_perc');
  }
  get application_support_itspend_run_perc() {
    return this.itFunctions.get('application_support_itspend_run_perc');
  }
  get application_support_fte_spread_perc() {
    return this.itFunctions.get('application_support_fte_spread_perc');
  }
  get it_management_itspend_run_perc() {
    return this.itFunctions.get('it_management_itspend_run_perc');
  }
  get it_management_fte_spread_perc() {
    return this.itFunctions.get('it_management_fte_spread_perc');
  }

  itFunctionsData: any = {};

  handleSubmit() {
    this.api.getItFunctions(this.itFunctions.value).subscribe((val) => {
      console.log(val);
      this.itFunctionsData = val;
    });
    console.log('hi');
  }

  // get one request
  handleGet() {
    this.api
      .getOneRecord(
        '/itfunctions/inputfunctions',
        this.store.getId('itFunctionId')
      )
      .subscribe((res: any) => {
        this.canUpdate = true;
        this.itFunctionsData = res;
        this.itFunctions.patchValue({ ...res });
      });
  }
  // update code
  handleUpdate() {
    this.api.updateITfunction(this.itFunctions.value).subscribe((val) => {
      console.log(val);
      this.handleGet();
    });
  }
}
