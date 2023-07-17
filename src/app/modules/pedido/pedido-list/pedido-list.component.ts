import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router"
import { PedidoService } from '../pedido.service';


@Component({
    selector     : 'landing-home',
    templateUrl  : './pedido-list.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PedidoComponentList
{
    data: any;
    

    /**
     * Constructor
     */
    constructor(private _router: Router, private _pedidoService: PedidoService)
    {
    }

    ngOnInit() {
        this.getPedidos()
    }

    async getPedidos() {
        this.data = await this._pedidoService.getAll()
        console.log(this.data)
    }

    redirect(id = null) {
        this._router.navigate([`./pedido/${id}`]);
    }

}
