import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './nav/top-nav/top-nav.component';
import { FooterComponent } from './nav/footer/footer.component';
import { UserHeroSectionComponent } from './user/user-hero-section/user-hero-section.component';
import { UserFeaturedSectionComponent } from './user/user-featured-section/user-featured-section.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { UserCategoriesSectionComponent } from './user/user-categories-section/user-categories-section.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ProductCategoryComponent } from './product/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    UserHeroSectionComponent,
    UserFeaturedSectionComponent,
    UserLoginComponent,
    UserHomepageComponent,
    UserCategoriesSectionComponent,
    UserRegisterComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
