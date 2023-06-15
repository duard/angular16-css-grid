import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FeatureFlagsService } from '../services/feature-flag.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureGuard implements CanLoad {
  constructor(
    private featureFlagsService: FeatureFlagsService,
    private router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { data } = route;
    console.log(`DATA ROUTE`, data);
    const feature = data ? data['feature'] : null;
    if (feature) {
      console.log(feature);
      const isEnabled = this.featureFlagsService.isFeatureFlagEnabled(feature);
      if (isEnabled) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
