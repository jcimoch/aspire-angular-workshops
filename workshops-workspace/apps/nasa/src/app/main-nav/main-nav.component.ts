import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AppConfigService} from "../core/services/app-config.service";

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  title = "Nasa"
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isGodModeActive: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private appConfigService: AppConfigService) {
    this.isGodModeActive = appConfigService.getConfig().config.isGodModeActive;
  }

}
