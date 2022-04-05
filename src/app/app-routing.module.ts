import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Import RouterModule & Routes
import { RouterModule, Routes } from '@angular/router';
//Import your component/pages
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';

import { ProductCategoryComponent } from './product/product-category/product-category.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminDashboardStatComponent } from './admin/admin-dashboard-stat/admin-dashboard-stat.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from './admin/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './admin/admin-category-edit/admin-category-edit.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin/admin-product-edit/admin-product-edit.component';

// Check if authenticated
import { IsAuthenticatedGuard } from './guard/is-authenticated.guard';

const routes: Routes = [
  // User 
  {path: '', component:UserHomepageComponent},
  {path: 'register', component:UserRegisterComponent},
  {path: 'login', component:UserLoginComponent},
  {path: 'dashboard', component:UserDashboardComponent, canActivate: [IsAuthenticatedGuard]},
  {path: 'cart', component:UserCartComponent, canActivate: [IsAuthenticatedGuard]},

  // Product
  {path: 'category', component:ProductCategoryComponent},
  {path: 'category/:slug' , component:ProductCategoryComponent},
  {path: 'category/:cate_slug/:prod_slug' , component:ProductDetailComponent},
  {path: 'product', component:ProductListComponent},

  // Admin
  {path: 'admin', component:AdminLoginComponent},
  {
    path: 'admin/dashboard', 
    component: AdminDashboardComponent,
    children: [
      { path: 'stats', component: AdminDashboardStatComponent },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'category-add', component: AdminCategoryAddComponent },
      { path: 'category-edit/:id', component: AdminCategoryEditComponent },
      { path: 'product', component: AdminProductComponent },
      { path: 'product-add', component: AdminProductAddComponent },
      { path: 'product-edit/:id', component: AdminProductEditComponent },
    ]
  },



]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
