import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import { LandingApiService } from '../../services/api.service';
@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss'],
})
export class DailogComponent {
  constructor(
    private http: HttpService,
    private api: LandingApiService,
    private router: Router,
    private dailog: MatDialog,
    private localStorage: LocalStorageService,
    private apiMain: ApiService
  ) {}
  // userId: any;
  projectDetails = new FormGroup({});
  selectedProject: any = '';
  allProjects: any = [];
  userDetails = new FormGroup({
    userId: new FormControl('', [Validators.required]),
  });

  get userId() {
    return this.userDetails.get('userId');
  }
  projectName: any = '';
  projectType: any = null;
  getExtstingProject() {
    // return this.api.getExistingProject().subscribe((val) => {
    //   console.log(val);
    // });
    // this.router.navigate(['/costOptimization']);
    // this.dailog.closeAll();
    this.projectType = 'existing';
    this.getUserProject();
  }
  handleNewProject() {
    this.projectType = 'new';
  }

  getUserProject() {
    this.api.getAlluserProject(this.userId?.value).subscribe((res: any) => {
      this.allProjects = res?.listOfProjectName;
    });
  }

  handleSubmit() {
    let details = {
      ...this.userDetails.value,
      projectName: this.projectName,
    };
    console.log(details);
    if (this.projectType === 'new') {
      this.localStorage.set('user', details);
      this.router.navigate(['/costOptimization']);
      this.dailog.closeAll();
    }
    if (this.projectType === 'existing') {
      this.api.getByProjectName(this.selectedProject).subscribe((res: any) => {
        let userDetails = { ...details, projectName: res.projectName };
        this.localStorage.set('user', userDetails);
        this.localStorage.set('project', res);
        this.dailog.closeAll();
        this.router.navigate(['/costOptimization']);
      });
    }
  }
}
