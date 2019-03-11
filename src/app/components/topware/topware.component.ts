import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-topware',
  templateUrl: './topware.component.html',
  styleUrls: ['./topware.component.css']
})
export class TopwareComponent implements OnInit {
 
  products: any = []


  constructor( private productsService: ProductsService) { 

    this.getItems();
  }
 
  getItems(){
    this.products = this.productsService.getItems();
  }

  addToCart(item) {
    this.productsService.saveToCart(item);
  }



  ngOnInit() {
  }

}
