import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { CarsbookingComponent } from './component/cars/carsbooking/carsbooking.component';
import { CarslistingComponent } from './component/cars/carslisting/carslisting.component';
import { RentcarComponent } from './component/cars/rentcar/rentcar.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailblogComponent } from './component/detailblog/detailblog.component';

import { FooterComponent } from './component/footer/footer.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MembersComponent } from './component/members/members.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/pages/login/login.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ServeComponent } from './component/serve/serve.component';
import { ChekoutComponent } from './component/shop/chekout/chekout.component';
import { DetailproductsComponent } from './component/shop/detailproducts/detailproducts.component';
import { ProductComponent } from './component/shop/product/product.component';
import { ShopingcartComponent } from './component/shop/shopingcart/shopingcart.component';
import { MailComponent } from './component/pages/mail/mail.component';


const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "mail", component: MailComponent },
  { path: "footer", component: FooterComponent },
  {
    path: "", component: HomeComponent, children: [
      { path: "", component: LayoutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'chekout', component: ChekoutComponent },
      { path: 'detailproducts/:id', component: DetailproductsComponent },
      { path: 'shopingcart', component: ShopingcartComponent },
      { path: 'carsbooking/:id', component: CarsbookingComponent },
      { path: 'carslisting', component: CarslistingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'members', component: MembersComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'rentcar/:id', component: RentcarComponent },
      { path: 'notfound', component: NotfoundComponent },
      { path: 'product', component: ProductComponent },
      { path: 'serve', component: ServeComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'detailblog/:id', component: DetailblogComponent }


    ]
  }, { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
