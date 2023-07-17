import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedSubjectService } from 'src/app/shared-subject/shared-subject.service';
import { CartService } from './cart.service';
import { CartItem } from './item-cart.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  openned: boolean

  cartItems: CartItem[];

  constructor(private _sharedSubject: SharedSubjectService, private _cartService: CartService, private _snackBar: MatSnackBar, private _router: Router) {
      // Pegar produtos adicionados ao carrinho
      this._sharedSubject.NavDrawerModule.subscribe(value => {
        //this.navDrawer = value;
      });

      this.openned = false

      // refresh cart items
      this.cartItems = _cartService.getCartItems

    }

  ngOnInit() {
  }

  toggleOpenned() {
    this.openned = !this.openned
  }

  changeItemQuantity(direction: boolean, id: number) {
    debugger
    let item = this.cartItems.find(item => item.id == id)

    if(item) {
      // If it is to increase item quantity
      if (direction) {
        item.quantidade += 1

      // If it is to decrease item quantity
      } else {
        if (item.quantidade == 1) {
          return
        }

        item.quantidade -= 1
      }

    } else {
      return
    }

  }

  get totalCart() {
    let total = 0
    if (this.cartItems) {
      this.cartItems.forEach(item => total += (item.preco * item.quantidade))
    }
    return total
  }

  /**
     * On delete
     */
  async delete(id: number) {
        
    var response = await this._cartService.delete(id)

    if(response) {
        this._snackBar.open('Item apagado do carrinho')
    }
  
  }
  redirectCheckout() {
    this._router.navigate([`./checkout`]);
  }

  
}
