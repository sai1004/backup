import { Injectable, Input } from '@angular/core';
import { Products } from '../../entities/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  @Input()

  products: Products[] = [

    {
      p_id: '09788767',
      p_price: '$ 299',
      p_name: 'Redtape',
      p_model: 'Men Black & Grey Round T-shirt',
      p_quantity: 1,
      p_img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2169157/2018/3/28/11522237450634-Roadster-Men-Tshirts-5781522237450479-1.jpg'
    },
    {

      p_id: '98798798',
      p_price: '$ 299',
      p_name: 'Here & Now',
      p_model: 'Men Black & Grey Striped Polo T-Shirt',
      p_quantity: 1,
      p_img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1342304/2016/9/15/11473921931756-Roadster-Men-Black-Striped-Polo-Collar-T-Shirt-8991473921931510-1.jpg'


    },
    {

      p_id: '9847767',
      p_price: '$ 2888',
      p_name: 'Roadster',
      p_model: 'Men maroon Polo T-Shirt',
      p_quantity: 1,
      p_img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2275305/2018/2/24/11519451806100-Roadster-Men-Blue-Printed-Round-Neck-T-shirt-3041519451805915-1.jpg'

    },
    {
      p_id: '9847767',
      p_price: '$ 2888',
      p_name: 'Roadster',
      p_model: 'Men Blue Polo T-Shirt',
      p_quantity: 1,
      p_img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1700830/2018/7/18/e77988e7-737a-451b-97bf-b71c4c92fd031531912886195-WROGN-Men-Rust-Red-High-Density-Print-Round-Neck-T-shirt-726-1.jpg'



    }

  ];

  cart: any = []

  constructor(

  ) { }


  getItems() {
    return this.products;

  }

  saveToCart(obj: any) {
    console.log(obj)
    this.cart.push(obj)
  }




 

    
 


}
