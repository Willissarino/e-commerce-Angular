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

const routes: Routes = [
  // User 
  {path: '', component:UserHomepageComponent},
  {path: 'register', component:UserRegisterComponent},
  {path: 'login', component:UserLoginComponent},

  // Product
  {path: 'category', component:ProductCategoryComponent},
  {path: 'category/:slug' , component:ProductCategoryComponent},
  {path: 'product', component:ProductListComponent},

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
