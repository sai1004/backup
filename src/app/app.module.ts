import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "./shared/shared.module";
import { TopwareComponent } from './components/topware/topware.component';
import { BottomWareComponent } from './components/bottom-ware/bottom-ware.component';
import { FootWareComponent } from './components/foot-ware/foot-ware.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsService } from './components/topware/products.service';
// import { CartItemService } from './components/cart-item.service';
 

@NgModule({
  declarations: [
    AppComponent,
    TopwareComponent,
    BottomWareComponent,
    FootWareComponent,
    CartComponent,
    CheckOutComponent,
    ProfileComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [
   ProductsService,
  //  CartItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
