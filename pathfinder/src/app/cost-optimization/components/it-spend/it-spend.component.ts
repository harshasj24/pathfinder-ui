import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DailogService } from 'src/app/services/dailog.service';
import { StoreService } from 'src/app/store.service';
import { AssetFormComponent } from '../asset-form/asset-form.component';

@Component({
  selector: 'app-it-spend',
  templateUrl: './it-spend.component.html',
  styleUrls: ['./it-spend.component.scss'],
})
export class ItSpendComponent implements OnInit {
  constructor(
    private dailog: MatDialog,
    private dailogService: DailogService,
    private api: ApiService,
    public store: StoreService
  ) {}
  savingoptdata: any;
  savingoptdatayear: any;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    // this.savingoptdata = this.savingopt;
    // console.log(this.savingoptdata);

    // this.savingoptdatayear = this.savingoptdata.savingsoptimizationcalculation;
    // console.log(this.savingoptdatayear);
    this.dailogService.dailogData.subscribe((val: any) => {
      let { title, claculatedData } = val;
      let index = this.assets.findIndex((el) => el.dailogTitle == title);
      this.assets[index].claculatedData = claculatedData;
      console.log(claculatedData);
    });
  }

  assets = [
    {
      lable: 'Hardware',
      dailogTitle: 'hardware',
      assetDetail: {
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
      claculatedData: {},
    },
    {
      lable: 'Software',
      dailogTitle: 'software',
      assetDetail: {
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
      claculatedData: {},
    },
    {
      lable: 'MANAGED SERVICES',
      dailogTitle: 'managedServices',
      assetDetail: {
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
      claculatedData: {},
    },
    {
      lable: 'Hosted',
      dailogTitle: 'hosted',
      assetDetail: {
        asset: 'Hosted',
        leverh1: 'Transform',
        leverh2: '',
        leverh3: '',
        leverh4: '',
        activitiesh1: 'Cloud enablement',
        activitiesh2: '',
        activitiesh3: '',
        activitiesh4: '',
      },
      claculatedData: {},
    },
  ];
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
      spendIncreaseWithInflation_host: [],
      transform_cloud: [],
      savingSubtotal_perc_host: [],
      savingSubtotal_value_host: [],
    },
  };
  cal = {
    perc_split_hardware: 31.0,
    baseLine_hardware: 18568729,
    total_eliminateReduc: 0.25,
    total_eliminateRetire: 0.5,
    total_consolidate: 0.7,
    total_rationalize: 5.0,
    total_perc_h: 6.45,
    total_value_h: 1278799.0,
    hardwareCalculations: [
      {
        year: 1,
        spendIncreaseWithInflation_h: 19125791,
        eliminate_reducdancyElimination: 0.15,
        eliminate_retireDecommision: 0.3,
        consolidate_realignRedistribute: 0.2,
        rationalize_automateMl: 0.5,
        savingSubtotal_perc_h: 1.1500001,
        savingSubtotal_value_h: 219947.0,
      },
      {
        year: 2,
        spendIncreaseWithInflation_h: 19699565,
        eliminate_reducdancyElimination: 0.1,
        eliminate_retireDecommision: 0.2,
        consolidate_realignRedistribute: 0.5,
        rationalize_automateMl: 2.0,
        savingSubtotal_perc_h: 2.8,
        savingSubtotal_value_h: 551588.0,
      },
      {
        year: 3,
        spendIncreaseWithInflation_h: 20290552,
        eliminate_reducdancyElimination: 0.0,
        eliminate_retireDecommision: 0.0,
        consolidate_realignRedistribute: 0.0,
        rationalize_automateMl: 2.5,
        savingSubtotal_perc_h: 2.5,
        savingSubtotal_value_h: 507264.0,
      },
    ],
  };

  pathchValue: any = null;

  openDailog(type: string, action: string) {
    this.dailog.open(AssetFormComponent, {
      disableClose: true,
      data: {
        title: type,
        data: this.assetsSpend[type],
        patchValue: action === 'update' && this.pathchValue,
        action,
      },
    });
  }

  paths: any = {
    hardware: {
      path: 'hardware',
      id: this.store.getId('hardware'),
      payloadArr: 'hardwareCalculations',
    },
    software: {
      path: 'software',
      id: this.store.getId('software'),
      payloadArr: 'softwareCalculations',
    },
    managedServices: {
      path: 'managedservices',
      id: this.store.getId('managed'),
      payloadArr: 'managed_servicesCalculations',
    },
    hosted: {
      path: 'hostedcbs',
      id: this.store.getId('hosted'),
      payloadArr: 'hosted_cbsCalculations',
    },
  };

  handleGet(type: string) {
    console.log(this.paths[type].id);
    this.api
      .getOneRecord(`/asset/${this.paths[type].path}`, this.paths[type].id)
      .subscribe((res: any) => {
        let index = this.assets.findIndex((el) => el.dailogTitle == type);
        this.assets[index].claculatedData = res;
        console.log(res);
        this.pathchValue = {
          claculations: res[this.paths[type].payloadArr],
        };
        type === 'hosted' && this.store.setShowTotal(true);
      });
  }
  optimizationLevrs() {
    this.api.getOptimizationLevers().subscribe((res: any) => {
      this.savingoptdata = res;
      this.savingoptdatayear = res.savingsoptimizationcalculation;
    });
  }

  totalAssets: any;
  handleGetTotal() {
    this.api.getTotalAssets().subscribe((res: any) => {
      this.totalAssets = res;
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
  // SAVING THROUGHT OPTIMISATION TABLE CODE

  savingopt = {
    id: '6346f031e79a93735af873d2',
    total_saving_levers: 5902277,
    sum_total_savings: 2824534,
    total_run_businessit: 59889551,
    main_total_run_businessit: 2824534,
    total_cot_partner: 2776323,
    savingsoptimizationcalculation: [
      {
        year: 1,
        saving_levers: 1227753,
        cot_partner_share: 832897,
        total_savings_model: 2060650,
        run_businessit: 60653435,
      },
      {
        year: 2,
        saving_levers: 2405254,
        cot_partner_share: 1388162,
        total_savings_model: 3793416,
        run_businessit: 61450209,
      },
      {
        year: 3,
        saving_levers: 2269270,
        cot_partner_share: 555264,
        total_savings_model: 2824534,
        run_businessit: 63307514,
      },
    ],
  };
}
