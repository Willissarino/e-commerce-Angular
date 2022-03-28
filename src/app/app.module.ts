import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './nav/top-nav/top-nav.component';
import { FooterComponent } from './nav/footer/footer.component';
import { UserHeroSectionComponent } from './user/user-hero-section/user-hero-section.component';
import { UserFeaturedSectionComponent } from './user/user-featured-section/user-featured-section.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    UserHeroSectionComponent,
    UserFeaturedSectionComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
