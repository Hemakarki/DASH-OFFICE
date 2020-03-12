import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HeaderComponent
  // DialogOverviewExampleDialog
} from "./header/header.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfilesetupComponent } from "./profilesetup/profilesetup.component";
import { AgmCoreModule } from "@agm/core";
import { NotificationComponent } from "./Notification/notification.component";
import { OrdersComponent } from "./orders/orders.component";
import { ContactComponent } from "./contact/contact.component";
import { HomepageComponent } from "./homepage/homepage.component";
import {
  PaymentComponent,
  DialogOverviewDialog
} from "./payment/payment.component";
import { Ng7MatBreadcrumbModule } from "ng7-mat-breadcrumb";
import { OrderdetailComponent } from "./orderdetail/orderdetail.component";
import { CartComponent } from "./cart/cart.component";
import { CongrulationComponent } from "./congrulation/congrulation.component";
import { NgOtpInputModule } from "ng-otp-input";
import {
  CartpageComponent,
  DialogOverviewsDialog
} from "./cartpage/cartpage.component";
import { TrackingpageComponent } from "./trackingpage/trackingpage.component";
import { AgmDirectionModule } from "agm-direction";
import { FoodcategoryComponent } from "./foodcategory/foodcategory.component";

import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerificationComponent } from './auth/verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // DialogOverviewExampleDialog,
    ProfilesetupComponent,
    NotificationComponent,
    OrdersComponent,
    ContactComponent,
    PaymentComponent,
    DialogOverviewDialog,
    OrderdetailComponent,
    CartComponent,
    CongrulationComponent,
    HomepageComponent,
    CartpageComponent,
    DialogOverviewsDialog,
    TrackingpageComponent,
    FoodcategoryComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    NgOtpInputModule,
    Ng7MatBreadcrumbModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot(),
    Ng7MatBreadcrumbModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAT2e_4pNXD4FS3jS1IZ_M_Y6mAOO-B2oU",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    // DialogOverviewExampleDialog,
    DialogOverviewDialog,
    DialogOverviewsDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
