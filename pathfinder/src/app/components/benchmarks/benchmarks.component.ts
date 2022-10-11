import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss'],
})
export class BenchmarksComponent implements OnInit {
  select: any;
  currentYear = new Date().getFullYear();

  constructor() {}

  itspendcategories= new FormGroup({
   hardware: new FormControl('',Validators.required),
    software: new FormControl('',Validators.required),
    hosted_cbs: new FormControl('',Validators.required),
    managedServices:new FormControl('',Validators.required)
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

  ngOnInit(): void {}

  handleClick(e: any) {
    console.log(e.target.value);
  }

  handleSubmit(){
    console.log("hi");
    
  }
}
