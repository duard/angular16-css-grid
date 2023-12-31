import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureFlagsService } from '../../services/feature-flag.service';

@Directive({
  selector: '[featureFlag]',
})
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: string = '';
  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  ngOnInit() {
    const isEnabled =
      this.featureFlagService.isFeatureFlagEnabled(this.featureFlag) || false;
    if (isEnabled) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
