import { Route } from '@angular/router';
import { ProductPageComponent } from 'src/app/modules/product-page/product-page.component';

export const ProductPageRoutes: Route[] = [
    {
        path     : ':id',
        component: ProductPageComponent
    },
    {
        path     : '',
        component: ProductPageComponent
    }
];
