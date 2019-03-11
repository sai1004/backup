import { Injectable, Input } from '@angular/core';
import { Cart } from 'src/app/entities/cart';
import { ProductsService } from '../topware/products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cartService: CartService,
    private productsService: ProductsService

    ) { }

  @Input()

  cart: Cart[] = [

    {
      cart_id: '3424234',
      total_cost: ''
    },
    {
      cart_id: '3424234',
      total_cost: ''
    },

  ]


  totalPrice(p_price,) {

    let total =+ p_price
  console.log(total)

  }



}
