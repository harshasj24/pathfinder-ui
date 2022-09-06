import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClaculationService {
  constructor() {}

  muttiplication(...nums: number[]) {
    return nums.reduce((a, b) => a * b);
  }
  caluclatePercentage(a: number, b: number) {
    return Math.round(this.muttiplication(a, b) / 100);
  }
  division(a: number, b: number) {
    return Math.round(a / b);
  }
}
