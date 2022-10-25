import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { ClaculationService } from 'src/app/claculation.service';
import { HttpService } from 'src/app/core/services/http.service';
import { StoreService } from 'src/app/store.service';
import { Observable } from 'rxjs';
import { inputTable } from 'src/app/core/models/tables';
import { ApiService } from 'src/app/services/api.service';
import { CoreServices } from 'src/app/core/services/core.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { benchmark } from 'src/app/core/constants/benchmarks';
@Component({
  selector: 'app-input-tabel',
  templateUrl: './input-tabel.component.html',
  styleUrls: ['./input-tabel.component.scss'],
})
export class InputTabelComponent implements OnInit {
  constructor(
    public cal: ClaculationService,
    private store: StoreService,
    private http: HttpService,
    private api: ApiService,
    public core: CoreServices,
    private localStorage: LocalStorageService
  ) {}
  inputTableData: any;
  submitted = false;
  canUpdate: boolean = false;
  max = 4;
  isLoaded: boolean = false;
  industryPercentiles: any = {
    bfs: {
      min: 4.4,
      max: 11.4,
    },
    highTech: {
      min: 2.6,
      max: 4.7,
    },
    rcg: {
      min: 1.2,
      max: 3,
    },
    hc_ls: {
      min: 3,
      max: 5.9,
    },
    manlog: {
      min: 1.4,
      max: 3.2,
    },
  };
  minMax = {
    min: 0,
    max: 0,
  };

  inputTabel = new FormGroup({
    industryBased: new FormControl('', [Validators.required]),
    annual_revenue_for_client: new FormControl('', [Validators.required]),
    it_spent_perc: new FormControl('', [Validators.required]),
    run_business_perc: new FormControl('', [Validators.required]),
    grow_business_perc: new FormControl('', [Validators.required]),
    transform_it_perc: new FormControl('', [Validators.required]),
    annual_inflation_perc: new FormControl('', [
      Validators.required,
      Validators.min(1.5),
      Validators.max(3),
    ]),
  });
  get annual_revenue_for_client() {
    return this.inputTabel.get('annual_revenue_for_client');
  }
  get it_spent_perc() {
    return this.inputTabel.get('it_spent_perc');
  }
  get run_business_perc() {
    return this.inputTabel.get('run_business_perc');
  }
  get grow_business_perc() {
    return this.inputTabel.get('grow_business_perc');
  }
  get transform_it_perc() {
    return this.inputTabel?.get('transform_it_perc');
  }
  get annual_inflation_perc() {
    return this.inputTabel?.get('annual_inflation_perc');
  }
  get industryBased() {
    return this.inputTabel?.get('industryBased');
  }

  caluclatedItSpend: number = 0;

  controls = Object.keys(this.inputTabel.value).slice(1);
  disableEnable(disable: boolean) {
    this.controls.map((control) => {
      if (disable) {
        this.inputTabel.get(control)?.disable();
      } else {
        this.inputTabel.get(control)?.enable();
      }
    });
  }

  enableEdit() {
    this.canUpdate = true;
    this.disableEnable(false);
  }

  // get one request
  handleGet() {
    // this.api
    //   .getOneRecord(
    //     '/inputtables/inputvalues',
    //     this.store.getId('inputTableID')
    //   )
    //   .subscribe((res: any) => {
    //     this.inputTableData = res;
    //     this.canUpdate = true;
    //     this.inputTabel.patchValue({ ...res });
    //     this.disableEnable(false);
    //   });
    let project = this.localStorage.get('project');
    if (project) {
      let { inputvalues } = project;
      this.inputTableData = inputvalues;
      this.inputTabel.patchValue({ ...inputvalues });
    }
  }

  handleUpdate() {
    let { industryBased, ...payload } = this.inputTabel.value;
    // this.api.updateInputTables(payload).subscribe((val) => {
    //   console.log(val);
    //   console.log(payload);
    //   this.handleGet();
    // });
    let benchmarks = { ...this.api.benchmarks };
    benchmarks.inputvalues = payload;

    this.api.updateProject(benchmarks).subscribe((res) => {
      console.log(res);
      this.localStorage.set('project', res);
      this.handleGet();
    });
  }

  handleSubmit() {
    this.isLoaded = true;
    let { industryBased, ...payload } = this.inputTabel.value;
    this.api.getInputTable(payload).subscribe((val: any) => {
      this.inputTableData = val;
      this.isLoaded = false;
    });

    console.log(this.inputTabel?.value);
  }

  ngOnInit(): void {
    this.handleGet();
    this.disableEnable(true);

    this.industryBased?.valueChanges.subscribe((val) => {
      this.it_spent_perc?.setValidators([
        Validators.max(this.industryPercentiles[val]?.max),
        Validators.min(this.industryPercentiles[val]?.min),
        Validators.required,
      ]);
      this.minMax = { ...this.minMax, ...this.industryPercentiles[val] };
      this.disableEnable(false);
    });

    this.inputTabel.valueChanges.subscribe((val) => {
      this.caluclatedItSpend = this.cal.caluclatePercentage(
        val?.annual_revenue_for_client,
        val?.it_spent_perc
      );
      const values = {
        ...val,
        caluclatedItSpend: this.caluclatedItSpend,
      };
      this.store.setStore(values);
    });

    // this.transform?.valueChanges.subscribe((val) => {
    //   const values = {
    //     ...this.inputTabel.value,
    //     caluclatedItSpend: this.caluclatedItSpend,
    //     transform: val,
    //   };
    //   this.store.setStore(values);
    //   console.log(values);
    // });
  }
}
