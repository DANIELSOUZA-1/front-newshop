import { Component, ViewEncapsulation } from '@angular/core';
import { SelfProductsService } from '../self-products/self-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/components/cart/cart.service';
import { PedidoService } from './pedido.service';

@Component({
    selector     : 'pedido-app',
    templateUrl  : './pedido.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PedidoComponent
{

    data: any;
    id: any;


    /**
     * Constructor
     */
    constructor(private _produtoService: SelfProductsService, private _router: Router, private _formBuilder: FormBuilder, private _pedidoService: PedidoService, private _activatedRoute: ActivatedRoute)
    {
        this.data = this.handleGetData(this._activatedRoute.snapshot.paramMap.get('id'))
    }

    ngOnInit() {
    }

    /**
     * Handle get data
    */
    async handleGetData(id: any) {
        try {
            debugger
            var data: any = await this._pedidoService.get(id)

            if (data) {
                this.id = data.id
                this.data = data
            } else {
                this.id = null
            }

        } catch (error) {
            console.error(error)
            return
        }
   }

   redirect(id = null) {
    this._router.navigate([`./pedido`]);
}

}
