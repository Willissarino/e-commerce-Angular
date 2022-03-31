import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Import RouterModule & Routes
import { RouterModule, Routes } from '@angular/router';
//Import your component/pages
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

import { ProductCategoryComponent } from './product/product-category/product-category.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from './admin/admin-category-add/admin-category-add.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './admin/admin-product-add/admin-product-add.component';




const routes: Routes = [
  // User 
  {path: '', component:UserHomepageComponent},
  {path: 'register', component:UserRegisterComponent},
  {path: 'login', component:UserLoginComponent},

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
      { path: 'category', component: AdminCategoryComponent },
      { path: 'category-add', component: AdminCategoryAddComponent },
      { path: 'product', component: AdminProductComponent },
      { path: 'product-add', component: AdminProductAddComponent },
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
