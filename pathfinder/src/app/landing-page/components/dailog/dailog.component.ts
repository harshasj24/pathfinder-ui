import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss'],
})
export class DailogComponent implements OnInit {
  constructor(
    private http: HttpService,
    private api: ApiService,
    private router: Router,
    private dailog: MatDialog,
    private localStorage: LocalStorageService
  ) {}
  userId: any;
  projectDetails = new FormGroup({});
  userDetails = new FormGroup({
    userId: new FormControl('', [Validators.required]),
  });
  projectName: any = '';
  projectType: any = null;
  getExtstingProject() {
    // return this.api.getExistingProject().subscribe((val) => {
    //   console.log(val);
    // });
    // this.router.navigate(['/costOptimization']);
    // this.dailog.closeAll();
    this.projectType = 'existing';
  }
  handleNewProject() {
    this.projectType = 'new';
  }
  handleSubmit() {
    let details = { ...this.userDetails.value, projectName: this.projectName };
    console.log(details);
    this.localStorage.set('user', details);
    this.router.navigate(['/costOptimization']);
    this.dailog.closeAll();
  }

  ngOnInit(): void {}
}
