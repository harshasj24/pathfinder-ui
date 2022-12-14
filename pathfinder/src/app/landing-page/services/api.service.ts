import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LandingApiService {
  constructor(
    private http: HttpService,
    private localStorage: LocalStorageService
  ) {}

  // getExistingProject() {
  //   return this.http.get(`http://localhost:4300/harsha's_proect`).pipe(
  //     tap((res: any) => {
  //       this.localStorage.set(res.projectname, res);
  //     })
  //   );
  // }

  getAlluserProject(userId: any) {
    return this.http.get(`/user/input/projectname/${userId}`);
  }
  getByProjectName(projectName: any) {
    return this.http.get(`/user/input/project/${projectName}`);
  }
}
