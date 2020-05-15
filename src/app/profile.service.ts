import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username: string;
  apiKey: 'environment.apiKey';
  apiUrl: 'environment.apiUrl';

  constructor(private http: HttpClient) {
    console.log('service is running');
    this.username = 'brayokenya';
  }

  getprofileInfo() {
    return this.http
      .get(
        environment.apiUrl +
          this.username +
          '?access_token=' +
          environment.apiKey
      )
      .map((res) => res);
  }
  getrepoInfo() {
    return this.http
      .get(
        environment.apiUrl +
          this.username +
          '/repos' +
          '?access_token=' +
          environment.apiKey
      )
      .map((res) => res);
  }
}
