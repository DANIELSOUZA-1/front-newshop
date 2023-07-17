import { Route } from '@angular/router';
import { PedidoComponent } from './pedido.component';
import { PedidoComponentList } from './pedido-list/pedido-list.component';

export const PedidoRoutes: Route[] = [
    {
        path     : '',
        component: PedidoComponentList
    },
    {
        path     : ':id',
        component: PedidoComponent
    }
];
