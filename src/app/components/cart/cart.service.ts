import { Injectable } from '@angular/core';
import { Carrinho, CartItem } from './item-cart.type';
import { AppService } from 'src/app/app.service';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  cartItems: CartItem[] = [
    
  ];

  itemAdded: Boolean = false;
  
  apiURL = this._appService.getUrlAPI
  
  constructor(private _appService: AppService, private _httpClient: HttpClient) {
    this.getAll()
  }
  
  async PushItemIntoCart(newItem: CartItem) {
    debugger
    let itemAlreadyExists = this.cartItems.find(item => item.produtoId == newItem.produtoId)
    if (itemAlreadyExists) {
      return
    }

    try {
      debugger
      const path = `${this.apiURL}/item-carrinho`

      let body = {
        produtoId: newItem.id,
        nome: newItem.nome,
        carrinho: 1,
        quantidade: newItem.quantidade,
        preco: newItem.preco
      }
  
      await lastValueFrom(this._httpClient.post(path, body))
      
    } catch (error) {
      this._appService.handleError(error, 'onCreateItem')
      return
    }
    
    this.cartItems.push(newItem)
  }

  async getAll() {
    debugger

    const urlAPI = `${this.apiURL}/carrinho`

    let data: any = await lastValueFrom(this._httpClient.get(urlAPI))

    let itens: CartItem[] = data.itens
    itens.forEach(item => this.cartItems.push(item))

  }

  async delete(id: number): Promise<Boolean> {

    const urlAPI = `${this.apiURL}/item-carrinho/${id}`

    try {
      let data = await lastValueFrom(this._httpClient.delete(urlAPI))
      
    } catch (error) {
      this._appService.handleError(error, 'onDeleteItemCarrinho')
      return false
    }
    let index = this.cartItems.findIndex(item => item.id == id)
    this.cartItems.splice(index, 1)

    return true

  }

  get totalCart() {
    debugger
    let total = 0
    if (this.cartItems) {
      this.cartItems.forEach(item => total += (item.preco * item.quantidade))
    }
    return total
  }

  get getCartItems() { 

    return this.cartItems 
  }

  get getItemAdded() {
    return this.itemAdded 
  }

}
