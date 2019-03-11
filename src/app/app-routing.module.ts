import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopwareComponent } from './components/topware/topware.component';
import { BottomWareComponent } from './components/bottom-ware/bottom-ware.component';
import { FootWareComponent } from './components/foot-ware/foot-ware.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: TopwareComponent
  },
  {
    path: 'topware',
    component: TopwareComponent
  },
  {
    path: 'bottomware',
    component: BottomWareComponent
  },
  {
    path: 'footware',
    component: FootWareComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
