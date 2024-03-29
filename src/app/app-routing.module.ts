import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfilesetupComponent } from './profilesetup/profilesetup.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './Notification/notification.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { CartComponent } from './cart/cart.component';
import { CongrulationComponent } from './congrulation/congrulation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { FoodcategoryComponent } from './foodcategory/foodcategory.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {

    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'profilesetup',
    component: ProfilesetupComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'Notification',
    component: NotificationComponent
  },
  {
    path: 'trackingpage',
    component: TrackingpageComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'orderdetail',
    component: OrderdetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cartpage',
    component: CartpageComponent
  },
  {
    path: 'congrulation',
    component: CongrulationComponent
  },
  {
    path: 'foodcategory',
    component: FoodcategoryComponent
  },

  {
    path: 'orders',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    HeaderComponent,
    OrdersComponent

  ];
}
