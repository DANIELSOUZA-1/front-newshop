import { Route } from '@angular/router';
// import { AuthGuard } from 'app/core/auth/guards/auth.guard';
// import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
// import { LayoutComponent } from 'app/layout/layout.component';
// import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/home'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Redirect signed-in user to the '/dashboards/project'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home' },

    // Auth routes for guests
    {
        path: '',
        data: {
            layout: 'empty'
        },
        children: [
            /*
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
            
            */
        ]
    },

    /* Auth routes for authenticated users
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
        ]
    },
    */
    {
        path: '',
        //canMatch: [AuthGuard],
        //component: LayoutComponent,
        /*resolve: {
            initialData: InitialDataResolver
        },*/
        children: [
            { path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.LandingHomeModule) },
            { path: 'self-products', loadChildren: () => import('src/app/modules/self-products/self-products.module').then(m => m.SelfProductsModule) },
            { path: 'product', loadChildren: () => import('src/app/modules/product-page/product-page.module').then(m => m.ProductPageModule) },
            { path: 'checkout', loadChildren: () => import('src/app/modules/checkout/checkout.module').then(m => m.CheckoutModule) },
            { path: 'pedido', loadChildren: () => import('src/app/modules/pedido/pedido.module').then(m => m.PedidoModule) },
        ]
    },
];
