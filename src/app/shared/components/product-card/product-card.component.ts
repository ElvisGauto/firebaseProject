import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/app-products.interface';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { CartService } from 'src/app/shared/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/shopping-cart/shopping-cartM/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product;
  @Input('showActions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.updateCart(this.product, +1);
  }
}
