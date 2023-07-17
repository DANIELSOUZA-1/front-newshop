import { Route } from '@angular/router';
import { ProductPageComponent } from 'src/app/modules/product-page/product-page.component';

export const ProductPageRoutes: Route[] = [
    {
        path     : '',
        component: ProductPageComponent
    },
    {
        path     : ':id',
        component: ProductPageComponent
    },
];
