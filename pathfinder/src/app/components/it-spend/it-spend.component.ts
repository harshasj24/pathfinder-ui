import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssetFormComponent } from '../asset-form/asset-form.component';

@Component({
  selector: 'app-it-spend',
  templateUrl: './it-spend.component.html',
  styleUrls: ['./it-spend.component.scss'],
})
export class ItSpendComponent implements OnInit {
  constructor(private dailog: MatDialog) {}
  currentYear = new Date().getFullYear();
  ngOnInit(): void {}

  openDailog() {
    this.dailog.open(AssetFormComponent, { disableClose: true });
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
