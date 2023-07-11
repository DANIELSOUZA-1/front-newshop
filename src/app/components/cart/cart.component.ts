import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedSubjectService } from 'src/app/shared-subject/shared-subject.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  openned: boolean

  constructor(private _sharedSubject: SharedSubjectService) {
      // Pegar produtos adicionados ao carrinho
      this._sharedSubject.NavDrawerModule.subscribe(value => {
        //this.navDrawer = value;
      });

      this.openned = true
    }

  ngOnInit() {
  }

  toggleOpenned() {
    this.openned = !this.openned
  }


}
