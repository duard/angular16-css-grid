import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get, has, result } from 'lodash';
import { tap } from 'rxjs/operators';
import { FeatureFlagConfig } from '../interfaces/feature-flags.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  config: FeatureFlagConfig = {};
  // This should be changed to your config API
  configUrl = `https://gist.githubusercontent.com/duard/1e5106ad587446cee40241ec10624cf5/raw/1f769da848e0ba691d5f8135998a94c9f0ecbfdf/feature-flags.json`;

  constructor(private http: HttpClient) {}

  /**
   * We convert it to promise so that this function can
   * be called by the APP_INITIALIZER
   */
  loadConfigurationData() {
    const result = this.http
      .get<FeatureFlagConfig>(this.configUrl)
      .pipe(
        tap((data) => {
          console.log(`===>`, data);
          this.config = data;
        })
      )
      .toPromise();
    console.log(`FEATURES`, result);
    return result;
  }

  async loadConfig(): Promise<any> {
    const response = this.http.get<FeatureFlagConfig>(this.configUrl);
    const result = await firstValueFrom(response);
    this.config = result;
    console.log(`RESULT`, result);
  }

  isFeatureEnabled(key: string) {
    console.log(`FEATURE`, key);

    if (this.config && has(this.config, key)) {
      return get(this.config, key, false);
    }
    return false;
  }
}
