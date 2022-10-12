import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogService } from 'src/app/services/dailog.service';
import { AssetFormComponent } from '../asset-form/asset-form.component';

@Component({
  selector: 'app-it-spend',
  templateUrl: './it-spend.component.html',
  styleUrls: ['./it-spend.component.scss'],
})
export class ItSpendComponent implements OnInit {
  constructor(
    private dailog: MatDialog,
    private dailogService: DailogService
  ) {}
  currentYear = new Date().getFullYear();
  ngOnInit(): void {}
  assetsSpend: any = {
    hardware: {
      eliminate_reducdancyElimination: [],
      eliminate_retireDecommision: [],
      consolidate_realignRedistribute: [],
      rationalize_automateMl: [],
    },
    software: {
      rationalize_refactor: [],
      std_platform: [],
      transform_distributed_agile: [],
      eliminate_redundancy: [],
    },
    managedServices: {
      industrialize_shiftleft: [],
      industrialize_automate: [],
      industrialize_realtime: [],
      synergize_selfservice: [],
    },
    hosted: {
      industrialize_shiftleft: [],
      industrialize_automate: [],
      industrialize_realtime: [],
      synergize_selfservice: [],
    },
  };
  openDailog(type: string) {
    console.log(type);
    this.dailogService.addDailogData('harsha');
    this.dailog.open(AssetFormComponent, {
      disableClose: true,
      data: {
        title: type,
        data: this.assetsSpend[type],
      },
    });
  }
  hardware = [
    {
      asset: 'Hardware',
      leverh1: 'Eliminate',
      leverh2: 'Eliminate',
      leverh3: 'Consolidate',
      leverh4: 'Rationalise',
      actvites: [
        {
          title: 'Redundancy Elimination',
          year1: true,
          year2: true,
          year3: false,
        },
      ],
      activitiesh1: 'Redundancy Elimination',
      activitiesh2: 'Retire & Decommision ',
      activitiesh3: 'Realign & Redistribute',
      activitiesh4: 'Automate-ML Ops',
    },
  ];
  software = [
    {
      asset: 'software',
      leverh1: 'Rationalise',
      leverh2: 'Standardise',
      leverh3: 'Transform',
      leverh4: 'Eliminate',
      activitiesh1: 'Refactor & Replatform',
      activitiesh2:
        'Platform enablement (Digital factory, Policies/procedures etc)',
      activitiesh3: 'Distributed Agile, Digital Engineering, CI/CD ',
      activitiesh4: 'Redundancy Elimination',
    },
  ];
  managedServices = [
    {
      asset: 'MANAGED SERVICES',
      leverh1: 'Industrialize (Shift Left)',
      leverh2: 'Industrialize (Automate)',
      leverh3: 'Industrialize (Monitor)',
      leverh4: 'Synergize',
      activitiesh1: 'Shift-left',
      activitiesh2: 'Automate-Bot (itsm), RPA',
      activitiesh3: 'Realtime Monitor/Event driven services ',
      activitiesh4: 'Self-service',
    },
  ];
  hosted = [
    {
      asset: 'MANAGED SERVICES',
      leverh1: 'Transform',
      leverh2: '',
      leverh3: '',
      leverh4: '',
      activitiesh1: 'Cloud enablement',
      activitiesh2: '',
      activitiesh3: '',
      activitiesh4: '',
    },
  ];
}
