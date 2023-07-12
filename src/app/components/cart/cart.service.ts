import { Injectable } from '@angular/core';
import { CartItem } from './item-cart.type';

@Injectable()
export class CartService {
  cartItems: CartItem[] = [
    
  ];

  itemAdded: Boolean = false;

  constructor() { }

  PushItemIntoCart(newItem: CartItem) {
    let itemAlreadyExists = this.cartItems.find(item => item.id == newItem.id)
    if (itemAlreadyExists) {
      return
    }
    this.cartItems.push(newItem)
    console.log(this.cartItems)
  }

  get getCartItems() { return this.cartItems }

  get getItemAdded() { return this.itemAdded }

}
