import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environments';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  get(path: string) {
    return this.http.get(`${baseUrl}${path}`);
  }
  post(path: string, data: any) {
    return this.http.post(`${baseUrl}${path}`, data);
  }
  put(path: string, data: any) {
    return this.http.put(`${baseUrl}${path}`, data);
  }
  delete(path: string) {
    return this.http.get(`${baseUrl}${path}`);
  }
}
