import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-app';
  isDarkEnabled = false;
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
