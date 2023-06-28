import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SelfProductsService } from './self-products.service';

@Component({
    selector       : 'self-products',
    templateUrl    : './self-products.component.html',
    providers: [SelfProductsService]
})
export class SelfProductsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
