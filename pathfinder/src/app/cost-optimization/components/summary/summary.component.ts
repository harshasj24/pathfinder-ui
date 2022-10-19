import { Component, OnInit } from '@angular/core';
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
  claculateAndSave() {
    this.api.getExistingProject().subscribe();
  }

  username: string = '';

  ngOnInit(): void {
    let project = this.localStorage.get('pathfiner');
    this.username = project.username;
  }
}
