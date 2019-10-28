import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent  {

  @Input('product') product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.updateCart(this.product, +1);
  }

  removeCart() {
    this.cartService.updateCart(this.product, -1);
  }
}
