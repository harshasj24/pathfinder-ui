import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
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
    private dailog: MatDialog
  ) {}
  projectDetails = new FormGroup({});
  userDetails = new FormGroup({});
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

  ngOnInit(): void {}
}
