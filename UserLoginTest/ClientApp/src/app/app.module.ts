import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserLandingComponent } from './user-landing/user-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginScreenComponent,
    UpdateProfileComponent,
    UserLandingComponent,
    ProductListComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', component:LoginScreenComponent},
      {path: 'update-profile', component:UpdateProfileComponent},
      {path: 'product-list', component:ProductListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
