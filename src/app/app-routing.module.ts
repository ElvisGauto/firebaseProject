import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { LoginComponent } from './core/components/login/login.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]  },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]  },
  
  { path: 'admin', 
    loadChildren: './admin/admin.module#AdminModule', 
    canActivate: [AuthGuardService, AdminAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
