import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AppConfig {
    config: { isGodModeActive: boolean }
}

@Injectable()
export class AppConfigService {
    private appConfig: AppConfig;

    constructor(private http: HttpClient) {
    }

    loadAppConfig() {
        return this.http.get('/assets/data/app-config.json')
            .toPromise()
            .then((data: AppConfig) => {
                this.appConfig = data;
            });
    }

    getConfig() {
        return this.appConfig;
    }
}
