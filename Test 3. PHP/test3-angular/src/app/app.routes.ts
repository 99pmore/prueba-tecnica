import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];
