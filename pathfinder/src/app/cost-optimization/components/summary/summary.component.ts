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
    this.api.createProject(benchMarks).subscribe((val) => {
      console.log(val);
    });
  }

  username: string = '';

  ngOnInit(): void {
    let project = this.localStorage.get('pathfiner');
    this.username = project.username;
  }
}
