import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router"
import { SelfProductsService } from '../self-products.service';


@Component({
    selector     : 'landing-home',
    templateUrl  : './self-products-list.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SelfProductsComponentList
{
    data: any;
    

    /**
     * Constructor
     */
    constructor(private _router: Router, private _SelfProductsService: SelfProductsService)
    {
    }

    ngOnInit() {
        this.getProdutos()
    }

    async getProdutos() {
        this.data = await this._SelfProductsService.getAll()
        console.log(this.data)
    }

    redirect(id = null) {
        this._router.navigate([`./self-products/edit/${id}`]);
    }

}
