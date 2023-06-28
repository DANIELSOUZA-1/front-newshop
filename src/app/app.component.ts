import { Component } from '@angular/core';
import { SharedSubjectService } from './shared-subject/shared-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-app';
  isDarkEnabled = false;
  navDrawer = false

  constructor(private _sharedSubject: SharedSubjectService) {
    this._sharedSubject.SharingData.subscribe(value => {
      debugger
      this.navDrawer = value;
      console.log(this.navDrawer)
    });
  }

  ngAfterVeiwInit() {
    // Whenever the user explicitly chooses dark mode
    if (localStorage['theme'] == 'light') {
      this.isDarkEnabled = false;
    
    // Whenever the user explicitly chooses light mode
    } else {
      this.isDarkEnabled = true;
    }
  }
  
}
