import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedSubjectService } from 'src/app/shared-subject/shared-subject.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDarkEnabled = false
  navDrawer = false

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _sharedSubject: SharedSubjectService) {
      this._sharedSubject.NavDrawerModule.subscribe(value => {
        this.navDrawer = value;
      });
    }

  ngOnInit() {
    this.refreshLightMode()
  }

  toggleLightMode() {
    // Whenever the user explicitly chooses dark mode
    if (localStorage['theme'] == 'light') {
      this.isDarkEnabled = true
      localStorage['theme'] = 'dark'
      this._changeDetectorRef.markForCheck();
    
    // Whenever the user explicitly chooses light mode
    } else {
      this.isDarkEnabled = false
      localStorage['theme'] = 'light'
      this._changeDetectorRef.markForCheck();
    }
    this.refreshLightMode()
  }

  refreshLightMode() {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.isDarkEnabled = true
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkEnabled = false
    }
  }

  toggleNavDrawer() {
    this.navDrawer = !this.navDrawer
    this._sharedSubject.NavBarModule.next(this.navDrawer)
  }

}
