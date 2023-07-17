import { Component, ViewEncapsulation } from '@angular/core';
import { SelfProductsService } from '../self-products/self-products.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/components/cart/cart.service';
import { CartItem } from 'src/app/components/cart/item-cart.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidoService } from '../pedido/pedido.service';

@Component({
    selector     : 'checkout-app',
    templateUrl  : './checkout.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent
{

    data: CartItem[];

    mainForm: FormGroup;
    


    /**
     * Constructor
     */
    constructor(private _produtoService: SelfProductsService, private _router: Router, private _formBuilder: FormBuilder, private _cartService: CartService, private _snackBar: MatSnackBar, private _pedidoService: PedidoService)
    {
        this.mainForm = this._formBuilder.group({
            // info produto
            nome:       [null, []],
            estoque:    [null, []],
            preco:      [null, []],
            categoria:  [null, []],
            descricao:  ["",   []],
            imagens:    ['imagem222', []],
        })

        this.data = this._cartService.cartItems
    }

    
    ngOnInit() {
    }

    async getProdutos() {
    }

    redirect(id = '') {
        this._router.navigate([`./product/${id}`]);
    }

    get totalCart() {
        let total = 0
        if (this.data) {
          this.data.forEach(item => total += (item.preco * item.quantidade))
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

    changeItemQuantity(direction: boolean, id: number) {
        debugger
        let item = this.data.find(item => item.id == id)
    
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

    /**
     * On save
    */
    async save() {
        
        try {
            let body = {
                dataHora: new Date().toISOString(),
                status: "Pedido Efetuado",
                total: this.totalCart,
                carrinho: 1,
                codigoRastreio: Math.floor(Math.random() * 9999999),
                enderecoEntrega: "N*23, Av.General Manoel Rabelo, Recife, PE, Brasil"
            }
            var response = await this._pedidoService.save(body)

        } finally {
            if (response) {
                this._router.navigate([`./pedido/${response.id}`]);
                this.data.forEach(item => this._cartService.delete(item.id))
            }
        }
    }

}
