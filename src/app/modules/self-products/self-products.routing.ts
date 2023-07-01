import { Route } from '@angular/router';
import { SelfProductsComponentList } from './self-products-list/self-products-list.component';
import { SelfProductsComponentEdit } from './self-products-edit/self-products-edit.component';

export const SelfProductsRoutes: Route[] = [
    {
        path     : '',
        component: SelfProductsComponentList
    },
    {
        path     : 'edit',
        component: SelfProductsComponentEdit
    },
    {
        path     : 'edit/:id',
        component: SelfProductsComponentEdit
    },
];
