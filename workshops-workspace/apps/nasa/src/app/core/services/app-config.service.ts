import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  private appConfig: {config: {isGodModeActive: boolean}};

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/data/app-config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
