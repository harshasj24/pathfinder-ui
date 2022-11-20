import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApiService } from 'src/app/services/api.service';
import * as Highcharts from 'highcharts';
import { MatDialog } from '@angular/material/dialog';
import { HighBarchartComponent } from 'src/app/shared/highcharts/high-barchart/high-barchart.component';

@Component({
  selector: 'app-waterfalls-tabel',
  templateUrl: './waterfalls-tabel.component.html',
  styleUrls: ['./waterfalls-tabel.component.scss'],
})
export class WaterfallsTabelComponent implements OnInit {
  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService,
    private dailog: MatDialog
  ) {}

  waterfallsdata: any;
  isLoaded: boolean = false;
  Options: Object;
  graphData: any[];

  ngOnInit(): void {
    this.getData();
    this.graphData = [
      this.waterfallsdata.baseyear_with_partner,
      this.waterfallsdata.year1_with_partner,
      this.waterfallsdata.year2_with_partner,
      this.waterfallsdata.year3_with_partner,
      this.waterfallsdata.exit_runrate_with_partner,
    ];
  }

  getData() {
    let project = this.localStorage.get('project');
    if (project) {
      let { waterfall } = project;
      this.waterfallsdata = waterfall;
    }
  }
  openDailog() {
    this.dailog.open(HighBarchartComponent, {
      data: {
        graphData: this.graphData,
      },
    });
  }
}
