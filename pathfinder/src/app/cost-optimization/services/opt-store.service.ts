import { Injectable } from '@angular/core';
import { benchmark } from 'src/app/core/constants/benchmarks';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class OptStoreService {
  constructor(private api: ApiService) {}
  benchMarks = { ...this.api.getBenchMarks() };
}
