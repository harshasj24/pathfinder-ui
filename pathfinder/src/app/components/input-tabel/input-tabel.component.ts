import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { ClaculationService } from 'src/app/claculation.service';
import { HttpService } from 'src/app/core/services/http.service';
import { StoreService } from 'src/app/store.service';
import { Observable } from 'rxjs';
import { inputTable } from 'src/app/core/models/tables';
@Component({
  selector: 'app-input-tabel',
  templateUrl: './input-tabel.component.html',
  styleUrls: ['./input-tabel.component.scss'],
})
export class InputTabelComponent implements OnInit {
  constructor(
    public cal: ClaculationService,
    private store: StoreService,
    private http: HttpService
  ) {}
  inputTableData: any;
  submitted = false;
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
    annualRevenue: new FormControl('', [Validators.required]),
    itSpend: new FormControl('', [Validators.required]),
    run: new FormControl('', [Validators.required]),
    grow: new FormControl('', [Validators.required]),
    transform: new FormControl('', [Validators.required]),
  });
  get annualRevenue() {
    return this.inputTabel.get('annualRevenue');
  }
  get itSpend() {
    return this.inputTabel.get('itSpend');
  }
  get run() {
    return this.inputTabel.get('run');
  }
  get grow() {
    return this.inputTabel.get('grow');
  }
  get transform() {
    return this.inputTabel?.get('transform');
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

  handleSubmit() {
    this.isLoaded = true;
    this.http.get('/inputTable').subscribe((val) => {
      this.inputTableData = val;
      console.log(val);
      this.isLoaded = false;
    });
  }

  ngOnInit(): void {
    this.disableEnable(true);
    this.industryBased?.valueChanges.subscribe((val) => {
      console.log(this.industryPercentiles[val]);
      this.itSpend?.setValidators([
        Validators.max(this.industryPercentiles[val]?.max),
        Validators.min(this.industryPercentiles[val]?.min),
        Validators.required,
      ]);
      console.log(this.itSpend);

      this.minMax = { ...this.minMax, ...this.industryPercentiles[val] };
      console.log(this.minMax);
      this.disableEnable(false);
    });

    this.inputTabel.valueChanges.subscribe((val) => {
      this.caluclatedItSpend = this.cal.caluclatePercentage(
        val?.annualRevenue,
        val?.itSpend
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
