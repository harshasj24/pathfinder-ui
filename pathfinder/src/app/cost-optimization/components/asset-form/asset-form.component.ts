import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { benchmark } from 'src/app/core/constants/benchmarks';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
import { StoreService } from 'src/app/store.service';
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
    private dilog: MatDialog,
    private store: StoreService,
    private localStorage: LocalStorageService
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
      localpath: 'hardware',
      updatePath: 'updatehardware',
      payloadKey: 'hardwareCalculations',
      id: this.store.getId('hardware'),
    },
    software: {
      path: 'software',
      localpath: 'software',
      updatePath: 'updatesoftware',
      payloadKey: 'softwareCalculations',
      id: this.store.getId('software'),
    },
    managedServices: {
      path: 'managed',
      localpath: 'managed',
      updatePath: 'updatemanagedservices',
      payloadKey: 'managed_servicesCalculations',
      id: this.store.getId('managed'),
    },
    hosted: {
      path: 'hosted',
      localpath: 'hostedcbs',
      updatePath: 'updatehostedcbs',
      payloadKey: 'hosted_cbsCalculations',
      id: this.store.getId('hosted'),
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
          this.data.title === 'hosted' && this.store.setShowTotal(true);
        });
    } else if (this.data.action === 'update') {
      // update logic
      // this.api
      //   .UpadateassetClacification(
      //     this.assetDetail[this.data.title].path,
      //     payload,
      //     this.assetDetail[this.data.title].id
      //   )
      //   .subscribe((val) => {
      //     console.log(val);
      //     this.dailogServices.addDailogData({
      //       title: this.data.title,
      //       claculatedData: val,
      //     });
      //   });

      let benchmarks: any = { ...benchmark };
      benchmarks[this.assetDetail[this.data.title].localpath] = payload;
      this.api.updateProject(benchmarks).subscribe((res: any) => {
        this.localStorage.set('project', res);
        this.dailogServices.addDailogData({
          title: this.data.title,
          claculatedData: res[this.assetDetail[this.data.title].localpath],
        });
      });
    }

    this.dilog.closeAll();
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
        console.log(val);
        this.calculations.at(i).patchValue({ ...val });
      });
    } else {
      this.dailogForm.reset();
    }
  }
}
