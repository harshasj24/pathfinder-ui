import { Injectable } from '@angular/core';
import { benchmark } from 'src/app/core/constants/benchmarks';

@Injectable()
export class OptStoreService {
  benchMarks = { ...benchmark };
}
