import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.scss'],
})
export class AssetFormComponent implements OnInit {
  constructor(
    public dailogServices: DailogService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: ApiService,
    private dilog: MatDialog
  ) {}
  formControls: any[];
  dailogForm: FormGroup;
  get calculations() {
    return this.dailogForm.get('calculations') as FormArray;
  }
  year: number = 3;

  assetDetail: any = {
    hardware: {
      path: 'hardware',
      payloadKey: 'hardwareCalculations',
    },
    software: {
      path: 'software',
      payloadKey: 'softwareCalculations',
    },
    managedServices: {
      path: 'managed',
      payloadKey: 'managed_servicesCalculations',
    },
    hosted: {
      path: 'hosted',
      payloadKey: 'hosted_cbsCalculations',
    },
  };
  handleSubmit() {
    console.log(this.dailogForm.value);
    let payload = {
      [this.assetDetail[this.data.title].payloadKey]:
        this.dailogForm.value.calculations,
    };
    if (this.data.action == 'add') {
      this.api
        .assetClacification(this.assetDetail[this.data.title].path, payload)
        .subscribe((val) => {
          this.dailogServices.addDailogData({
            title: this.data.title,
            claculatedData: val,
          });
          this.dilog.closeAll();
        });
    } else if (this.data.action === 'update') {
      // update logic
    
       this.api.UpadateassetClacification(this.assetDetail[this.data.title].path, payload).subscribe((val) => {
      console.log(val);
       });
    }
  }
  ngOnInit(): void {
    this.formControls = Object.keys(this.data.data);
    this.dailogForm = this.fb.group({
      calculations: this.fb.array([]),
    });
    for (let i = 1; i < this.year + 1; i++) {
      this.calculations.push(this.fb.group({ ...this.data.data }));
    }
    if (this.data.patchValue) {
      this.data.patchValue.claculations.map((val: any, i: any) => {
        this.calculations.at(i).patchValue({ ...val });
      });
    } else {
      this.dailogForm.reset();
    }
  }
}
