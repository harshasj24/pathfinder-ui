import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
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
    private fb: FormBuilder
  ) {}
  formControls: any[];
  dailogForm: FormGroup;
  get calculations() {
    return this.dailogForm.get('calculations') as FormArray;
  }
  year: number = 3;
  handleSubmit() {
    console.log(this.dailogForm.value);
  }
  ngOnInit(): void {
    this.formControls = Object.keys(this.data.data);
    this.dailogForm = this.fb.group({
      calculations: this.fb.array([]),
    });
    for (let i = 1; i < this.year + 1; i++) {
      this.calculations.push(this.fb.group({ ...this.data.data }));
    }
  }
}
