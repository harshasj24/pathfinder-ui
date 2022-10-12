import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss'],
})
export class BenchmarksComponent implements OnInit {
  select: any;
  currentYear = new Date().getFullYear();

  constructor(private api: ApiService) {}

  itspendcategories = new FormGroup({
    hardware: new FormControl('', Validators.required),
    software: new FormControl('', Validators.required),
    hosted_cbs: new FormControl('', Validators.required),
    managedServices: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });
  get hardware() {
    return this.itspendcategories.get('hardware');
  }
  get software() {
    return this.itspendcategories.get('software');
  }
  get hosted_cbs() {
    return this.itspendcategories.get('hosted_cbs');
  }
  get managedServices() {
    return this.itspendcategories.get('managedServices');
  }
  get year() {
    return this.itspendcategories.get('year');
  }

  ngOnInit(): void {}

  handleClick(e: any) {
    console.log(e.target.value);
  }

  handleSubmit() {
    this.api.itspendCat(this.itspendcategories.value).subscribe((val) => {
      console.log(val);
    });
    console.log('hi');
  }
}
