import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  get(key: string) {
    let data: any = localStorage.getItem(key);
    return JSON.parse(data);
  }
  set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
