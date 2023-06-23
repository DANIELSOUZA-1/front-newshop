import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router"


@Component({
    selector     : 'landing-home',
    templateUrl  : './self-products-list.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SelfProductsComponentList
{
    

    /**
     * Constructor
     */
    constructor(private _router: Router)
    {
    }

    redirect() {
        this._router.navigate(['./self-products/edit']);
    }
}
