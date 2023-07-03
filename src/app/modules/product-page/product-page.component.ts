import { Component, ViewEncapsulation } from '@angular/core';
import { SelfProductsService } from '../self-products/self-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector     : 'product-page',
    templateUrl  : './product-page.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProductPageComponent
{

    data: any;
    id: any;
    

    /**
     * Constructor
     */
    constructor(private _produtoService: SelfProductsService, private _activatedRoute: ActivatedRoute, private _router: Router, private _snackBar: MatSnackBar)
    {

    }

    ngOnInit() {
        let id = this._activatedRoute.snapshot.paramMap.get('id')
        if(id) {
            this.getProduto(id)
        } else {
            this._router.navigate(['./home']);
            this._snackBar.open('Produto inexistente', 'OK')
        }
    }

    async getProduto(id: any) {
        this.data = await this._produtoService.get(id)
        if (this.data) {
            this.id = id

        } else {
            this._router.navigate(['./home']);
            this._snackBar.open('Produto inexistente', 'OK')
        }
    }

    redirect(id = null) {

    }

}
