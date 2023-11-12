import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AboutComponent } from './component/about/about.component';
import { CarsComponent } from './component/cars/cars.component';
import { ShopComponent } from './component/shop/shop.component';
import { ContactComponent } from './component/contact/contact.component';
import { PagesComponent } from './component/pages/pages.component';
import { LoginComponent } from './component/pages/login/login.component';
import { DetailproductsComponent } from './component/shop/detailproducts/detailproducts.component';
import { ShopingcartComponent } from './component/shop/shopingcart/shopingcart.component';
import { ChekoutComponent } from './component/shop/chekout/chekout.component';
import { CarsbookingComponent } from './component/cars/carsbooking/carsbooking.component';
import { CarslistingComponent } from './component/cars/carslisting/carslisting.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecherchePipe } from './pipe/recherche.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MembersComponent } from './component/members/members.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentcarComponent } from './component/cars/rentcar/rentcar.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProductComponent } from './component/shop/product/product.component';
import { ServeComponent } from './component/serve/serve.component';
import { ProfilComponent } from './component/profil/profil.component';
import { BlogComponent } from './component/blog/blog.component';
import { DetailblogComponent } from './component/detailblog/detailblog.component';
import { MailComponent } from './component/pages/mail/mail.component';
import { ChatbotComponent } from './component/chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AboutComponent,
    CarsComponent,
    ShopComponent,
    ContactComponent,
    PagesComponent,
    LoginComponent,
    DetailproductsComponent,
    ShopingcartComponent,
    ChekoutComponent,
    CarslistingComponent,
    CarsbookingComponent,
    RegisterComponent,
    RecherchePipe,
    MembersComponent,
    GalleryComponent,
    RentcarComponent,
    NotfoundComponent,
    ProductComponent,
    ServeComponent,
    ProfilComponent,
    BlogComponent,
    DetailblogComponent,
    MailComponent,
    ChatbotComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
