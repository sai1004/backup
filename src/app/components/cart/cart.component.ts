import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../topware/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartItems: any = []



  constructor(private productsService: ProductsService) { }



  ngOnInit() {
    this.cartItems = this.productsService.cart;
    console.log(this.cartItems);
  }




}
