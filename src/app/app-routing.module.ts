import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Import RouterModule & Routes
import { RouterModule, Routes } from '@angular/router';
//Import your component/pages
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';

const routes: Routes = [
  {path: 'login', component:UserLoginComponent},
  {path: '', component:UserHomepageComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }