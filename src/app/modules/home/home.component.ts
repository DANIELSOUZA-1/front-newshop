import { Component, ViewEncapsulation } from '@angular/core';
import { SelfProductsService } from '../self-products/self-products.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{

    data: any;
    

    /**
     * Constructor
     */
    constructor(private _produtoService: SelfProductsService, private _router: Router)
    {

    }

    ngOnInit() {
        this.getProdutos()
    }

    async getProdutos() {
        this.data = await this._produtoService.getAll()
    }

    redirect(id = '') {
        this._router.navigate([`./product/${id}`]);
    }

}
