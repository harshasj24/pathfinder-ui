import { Component, OnInit } from '@angular/core';
import { benchmark } from 'src/app/core/constants/benchmarks';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService
  ) {}
  annual_revenue_for_client: any = '';
  claculateAndSave() {
    // this.api.getExistingProject().subscribe();
    let userDetails = this.localStorage.get('user');
    let benchMarks = { ...benchmark, ...userDetails };
    benchMarks.inputvalues.annual_revenue_for_client =
      this.annual_revenue_for_client;
    this.api.createProject(benchMarks).subscribe((val: any) => {
      this.localStorage.set('project', val);
      this.projectName = `Your Project ${val?.projectName} is ready`;
    });
  }

  userId: string = '';
  projectName: string = 'Please provide annual revenue to continue';

  ngOnInit(): void {
    let project = this.localStorage.get('project');
    if (project) {
      this.annual_revenue_for_client =
        project.inputvalues.annual_revenue_for_client || '';
      this.projectName = `Your Project ${project?.projectName} is ready`;
      this.userId = project?.userId;
    }

    let user = this.localStorage.get('user');
    if (user.userId) {
      this.userId = user.userId;
    }
  }
}
