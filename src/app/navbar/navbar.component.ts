import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

interface NavbarMenuItem {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav: NavbarMenuItem[] = [
    {name: 'Summary', icon: 'assignment', route: '/summary'},
    {name: 'Configuration', icon: 'build', route: '/configuration'},
    {name: 'Events', icon: 'receipt', route: '/events'},
    {name: 'Alerts', icon: 'notification_important', route: '/alerts'},
    {name: 'Reports', icon: 'assessment', route: '/reports'}
  ];

  fillerContent = Array.from({length: 50}, () => `Content`);

  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private shouldRun = true;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
